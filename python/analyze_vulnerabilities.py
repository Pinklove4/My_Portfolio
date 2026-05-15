"""Analyze synthetic vulnerability scan data.

This script keeps the workflow simple for a beginner portfolio:
- load the scan CSV
- clean and normalize severity/CVSS values
- produce pivot-style summaries
- save outputs for the report and dashboard planning
"""
from __future__ import annotations

from pathlib import Path

import pandas as pd

ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data"
REPORTS_DIR = ROOT / "reports"
INPUT_FILE = DATA_DIR / "sample_vulnerability_scan.csv"
SEVERITY_SUMMARY_FILE = REPORTS_DIR / "vulnerabilities_by_severity.csv"
ASSET_SUMMARY_FILE = REPORTS_DIR / "vulnerabilities_by_asset.csv"

SEVERITY_ORDER = ["Low", "Medium", "High", "Critical"]


def standardize_column_names(frame: pd.DataFrame) -> pd.DataFrame:
    frame = frame.copy()
    frame.columns = [
        column.strip().lower().replace(" ", "_").replace("-", "_")
        for column in frame.columns
    ]
    return frame


def normalize_severity(severity: pd.Series, cvss_score: pd.Series) -> pd.Series:
    """Normalize severity labels and infer missing values from the CVSS score."""
    labels = severity.astype("string").str.strip().str.title()

    inferred = pd.Series(index=labels.index, dtype="string")
    inferred[cvss_score >= 9.0] = "Critical"
    inferred[(cvss_score >= 7.0) & (cvss_score < 9.0)] = "High"
    inferred[(cvss_score >= 4.0) & (cvss_score < 7.0)] = "Medium"
    inferred[cvss_score < 4.0] = "Low"

    labels = labels.fillna(inferred)
    labels = labels.where(labels.isin(SEVERITY_ORDER), inferred)
    labels = labels.fillna("Medium")
    return labels


def load_and_clean_vulns() -> pd.DataFrame:
    frame = pd.read_csv(INPUT_FILE)
    frame = standardize_column_names(frame)

    frame["asset_id_or_name"] = frame["asset_id_or_name"].astype("string").str.strip()
    frame["cve_id"] = frame["cve_id"].astype("string").str.upper().str.strip()
    frame["cvss_score"] = pd.to_numeric(frame["cvss_score"], errors="coerce")
    frame["remediation_notes"] = frame["remediation_notes"].astype("string").str.strip().fillna(
        "No remediation notes provided"
    )
    frame["severity"] = normalize_severity(frame["severity"], frame["cvss_score"])

    # Fill any missing severity gaps with a simple CVSS-based inference.
    frame["severity"] = frame["severity"].fillna("Medium")

    return frame


def build_summaries(frame: pd.DataFrame) -> None:
    REPORTS_DIR.mkdir(parents=True, exist_ok=True)

    severity_summary = (
        frame.groupby("severity")
        .agg(
            vuln_count=("cve_id", "count"),
            avg_cvss=("cvss_score", "mean"),
            max_cvss=("cvss_score", "max"),
        )
        .reset_index()
    )
    severity_summary["severity"] = pd.Categorical(
        severity_summary["severity"], categories=SEVERITY_ORDER, ordered=True
    )
    severity_summary = severity_summary.sort_values("severity")
    severity_summary.to_csv(SEVERITY_SUMMARY_FILE, index=False)

    asset_summary = (
        frame.groupby("asset_id_or_name")
        .agg(
            vuln_count=("cve_id", "count"),
            avg_cvss=("cvss_score", "mean"),
            max_cvss=("cvss_score", "max"),
        )
        .reset_index()
        .sort_values(["max_cvss", "vuln_count", "asset_id_or_name"], ascending=[False, False, True])
    )
    asset_summary.to_csv(ASSET_SUMMARY_FILE, index=False)

    print("Vulnerability summary by severity:")
    print(severity_summary.to_string(index=False))
    print("\nVulnerability summary by asset:")
    print(asset_summary.to_string(index=False))


def main() -> None:
    cleaned = load_and_clean_vulns()
    build_summaries(cleaned)


if __name__ == "__main__":
    main()
