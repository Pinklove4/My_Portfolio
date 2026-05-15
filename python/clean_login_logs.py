"""Clean synthetic login logs and produce simple SOC-style summaries.

This script is intentionally beginner-friendly:
- it loads the CSV from /data
- removes duplicates
- handles missing values
- standardizes column names
- converts timestamps to datetime
- exports a cleaned CSV and two simple summary CSVs
"""
from __future__ import annotations

from pathlib import Path

import pandas as pd

ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data"
REPORTS_DIR = ROOT / "reports"
INPUT_FILE = DATA_DIR / "sample_login_logs.csv"
CLEANED_FILE = DATA_DIR / "clean_login_logs.csv"
FAILED_BY_USER_FILE = REPORTS_DIR / "failed_logins_by_user.csv"
FAILED_BY_COUNTRY_FILE = REPORTS_DIR / "failed_logins_by_country.csv"


def standardize_column_names(frame: pd.DataFrame) -> pd.DataFrame:
    """Convert column names to lowercase snake_case for consistency."""
    frame = frame.copy()
    frame.columns = [
        column.strip().lower().replace(" ", "_").replace("-", "_")
        for column in frame.columns
    ]
    return frame


def clean_login_logs() -> pd.DataFrame:
    """Load, clean, and enrich the login log dataset."""
    frame = pd.read_csv(INPUT_FILE)
    frame = standardize_column_names(frame)

    # Remove duplicate rows so repeated log entries do not distort summaries.
    frame = frame.drop_duplicates().copy()

    # Trim text fields and handle missing values in a simple, readable way.
    for column in ["username", "ip_address", "country", "login_status"]:
        frame[column] = frame[column].astype("string").str.strip().fillna("unknown")

    # Convert timestamps and remove any rows that cannot be parsed.
    frame["timestamp"] = pd.to_datetime(frame["timestamp"], errors="coerce")
    frame = frame.dropna(subset=["timestamp"]).copy()

    # Normalize login status values to expected categories.
    frame["login_status"] = frame["login_status"].str.lower().replace({
        "successful": "success",
        "failed": "failure",
    })
    frame.loc[~frame["login_status"].isin(["success", "failure"]), "login_status"] = "unknown"

    # Make the country labels look consistent for reporting.
    frame["country"] = frame["country"].replace({"unknown": "Unknown"})
    frame["country"] = frame["country"].str.title()

    frame = frame.sort_values("timestamp").reset_index(drop=True)
    return frame


def build_summaries(frame: pd.DataFrame) -> None:
    """Create beginner-friendly SOC summaries for failed logins."""
    REPORTS_DIR.mkdir(parents=True, exist_ok=True)

    failed = frame[frame["login_status"] == "failure"].copy()

    failed_by_user = (
        failed.groupby("username")
        .size()
        .reset_index(name="failed_login_count")
        .sort_values(["failed_login_count", "username"], ascending=[False, True])
    )

    failed_by_country = (
        failed.groupby("country")
        .size()
        .reset_index(name="failed_login_count")
        .sort_values(["failed_login_count", "country"], ascending=[False, True])
    )

    failed_by_user.to_csv(FAILED_BY_USER_FILE, index=False)
    failed_by_country.to_csv(FAILED_BY_COUNTRY_FILE, index=False)

    print("Cleaned login logs saved to:", CLEANED_FILE)
    print("\nFailed logins by user:")
    print(failed_by_user.to_string(index=False))
    print("\nFailed logins by country:")
    print(failed_by_country.to_string(index=False))


def main() -> None:
    cleaned = clean_login_logs()
    cleaned.to_csv(CLEANED_FILE, index=False)
    build_summaries(cleaned)


if __name__ == "__main__":
    main()
