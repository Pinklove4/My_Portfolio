"""Join asset inventory with vulnerability scan data.

This script mimics VLOOKUP/XLOOKUP-style behavior using pandas merge:
- load both CSV files from /data
- join on hostname = asset_id_or_name
- keep unmatched assets so missing vulnerabilities stay visible
- create a department summary and a top-risk asset list
"""
from __future__ import annotations

from pathlib import Path

import pandas as pd

ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data"
REPORTS_DIR = ROOT / "reports"
ASSETS_FILE = DATA_DIR / "sample_assets.csv"
VULNS_FILE = DATA_DIR / "sample_vulnerability_scan.csv"
JOINED_FILE = DATA_DIR / "assets_with_vulns.csv"
DEPT_SUMMARY_FILE = REPORTS_DIR / "avg_cvss_by_department.csv"
TOP_RISK_FILE = REPORTS_DIR / "top_10_riskiest_assets.csv"

SEVERITY_WEIGHT = {
    "Low": 1,
    "Medium": 2,
    "High": 3,
    "Critical": 4,
}


def standardize_column_names(frame: pd.DataFrame) -> pd.DataFrame:
    frame = frame.copy()
    frame.columns = [
        column.strip().lower().replace(" ", "_").replace("-", "_")
        for column in frame.columns
    ]
    return frame


def normalize_severity(value: pd.Series) -> pd.Series:
    return value.astype("string").str.strip().str.title()


def load_assets() -> pd.DataFrame:
    frame = pd.read_csv(ASSETS_FILE)
    frame = standardize_column_names(frame)
    frame["hostname"] = frame["hostname"].astype("string").str.strip()
    frame["department"] = frame["department"].astype("string").str.strip()
    frame["owner"] = frame["owner"].astype("string").str.strip()
    frame["operating_system"] = frame["operating_system"].astype("string").str.strip()
    return frame


def load_vulns() -> pd.DataFrame:
    frame = pd.read_csv(VULNS_FILE)
    frame = standardize_column_names(frame)
    frame["asset_id_or_name"] = frame["asset_id_or_name"].astype("string").str.strip()
    frame["cve_id"] = frame["cve_id"].astype("string").str.upper().str.strip()
    frame["cvss_score"] = pd.to_numeric(frame["cvss_score"], errors="coerce")
    frame["severity"] = normalize_severity(frame["severity"])
    frame["severity_weight"] = frame["severity"].map(SEVERITY_WEIGHT).fillna(2)
    frame["risk_score"] = frame["cvss_score"].fillna(0) * frame["severity_weight"]
    frame["remediation_notes"] = frame["remediation_notes"].astype("string").str.strip().fillna(
        "No remediation notes provided"
    )
    return frame


def join_and_summarize(assets: pd.DataFrame, vulns: pd.DataFrame) -> None:
    REPORTS_DIR.mkdir(parents=True, exist_ok=True)

    # Left join keeps the full asset inventory even when no vulnerability exists yet.
    merged = assets.merge(
        vulns,
        how="left",
        left_on="hostname",
        right_on="asset_id_or_name",
    )
    merged.to_csv(JOINED_FILE, index=False)

    vuln_rows = merged.dropna(subset=["cvss_score"]).copy()

    dept_summary = (
        vuln_rows.groupby("department")
        .agg(
            avg_cvss=("cvss_score", "mean"),
            vuln_count=("cve_id", "count"),
            max_cvss=("cvss_score", "max"),
        )
        .reset_index()
        .sort_values(["avg_cvss", "vuln_count"], ascending=[False, False])
    )
    dept_summary.to_csv(DEPT_SUMMARY_FILE, index=False)

    asset_risk = (
        vuln_rows.groupby(["hostname", "ip_address", "owner", "department", "operating_system"])
        .agg(
            vuln_count=("cve_id", "count"),
            max_cvss=("cvss_score", "max"),
            avg_cvss=("cvss_score", "mean"),
            total_risk_score=("risk_score", "sum"),
        )
        .reset_index()
        .sort_values(["total_risk_score", "max_cvss", "vuln_count"], ascending=[False, False, False])
    )
    top_10 = asset_risk.head(10)
    top_10.to_csv(TOP_RISK_FILE, index=False)

    print("Joined asset and vulnerability file saved to:", JOINED_FILE)
    print("\nAverage CVSS by department:")
    print(dept_summary.to_string(index=False))
    print("\nTop 10 riskiest assets:")
    print(top_10.to_string(index=False))


def main() -> None:
    assets = load_assets()
    vulns = load_vulns()
    join_and_summarize(assets, vulns)


if __name__ == "__main__":
    main()
