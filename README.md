# Security Data Analyst Roadmap Portfolio

This project adds a beginner-friendly cybersecurity and data analysis workflow inside the existing repository. It demonstrates how to work with synthetic security data using Python, SQL, and pandas while staying recruiter-ready for SOC Analyst and Cybersecurity Analyst roles.

## Project Overview

This mini project is built around three realistic synthetic datasets:

- Login logs for authentication analysis
- Vulnerability scan results for risk tracking
- Asset inventory for join and lookup practice

The goal is to show practical entry-level skills in:

- SQL querying
- Python data cleaning and analysis
- pandas-based joins and summaries
- Security log analysis
- Simple reporting and dashboard planning

## Tools Used

- Python 3.12
- pandas
- SQL
- CSV files
- Markdown documentation

## Folder Structure

- `data/` - synthetic source data and exported analysis files
- `sql/` - cybersecurity-focused SQL practice queries
- `python/` - pandas scripts for cleaning, analysis, and joins
- `reports/` - summary outputs and written findings
- `dashboard/` - dashboard planning notes

## Files Included

### Data
- `data/sample_login_logs.csv`
- `data/sample_vulnerability_scan.csv`
- `data/sample_assets.csv`

### SQL
- `sql/50_sql_practice_queries.sql`

### Python
- `python/clean_login_logs.py`
- `python/analyze_vulnerabilities.py`
- `python/asset_lookup.py`

### Reports and Planning
- `reports/security_summary_report.md`
- `dashboard/dashboard_plan.md`

## What the Scripts Do

### 1. Clean login logs

Run:

```bash
python python/clean_login_logs.py
```

Expected output:
- `data/clean_login_logs.csv`
- `reports/failed_logins_by_user.csv`
- `reports/failed_logins_by_country.csv`

What it does:
- removes duplicates
- handles missing values
- standardizes column names
- converts timestamps to datetime
- prints failed login summaries

### 2. Analyze vulnerabilities

Run:

```bash
python python/analyze_vulnerabilities.py
```

Expected output:
- `reports/vulnerabilities_by_severity.csv`
- `reports/vulnerabilities_by_asset.csv`

What it does:
- normalizes severity labels
- converts CVSS scores to numeric values
- creates pivot-style summaries
- prints vulnerability counts and average scores

### 3. Join assets with vulnerabilities

Run:

```bash
python python/asset_lookup.py
```

Expected output:
- `data/assets_with_vulns.csv`
- `reports/avg_cvss_by_department.csv`
- `reports/top_10_riskiest_assets.csv`

What it does:
- joins assets with vulnerability findings
- mimics VLOOKUP/XLOOKUP behavior using pandas merge
- calculates department-level risk
- prints the top riskiest assets

## Skills Demonstrated

- SQL filtering, grouping, joins, CASE logic, and date filtering
- pandas cleaning, normalization, grouping, and merge operations
- Security log analysis and simple SOC-style reporting
- Vulnerability triage and remediation tracking
- Asset inventory enrichment and lookup behavior
- Clear documentation for analyst workflows

## What I Learned

- How to clean messy CSV data before analysis
- How to summarize security events for quick reporting
- How joins connect assets, vulnerabilities, and department-level risk
- How analysts turn raw logs into useful operational insights
- How to write simple repeatable scripts that support SOC workflows

## Why This Matters for SOC and Cybersecurity Analyst Roles

This project matches common analyst work such as:

- reviewing login failures and suspicious patterns
- summarizing vulnerabilities by severity
- mapping assets to risk ownership
- documenting findings clearly for escalation
- producing simple reports that support remediation and communication

## How to Use the Outputs

The CSV outputs and Markdown reports in `reports/` and `data/` can be used to:

- build a small dashboard later
- discuss analysis in interviews
- show technical storytelling in a portfolio
- demonstrate beginner-to-intermediate analyst workflow

## Notes

- All data in this project is synthetic.
- The scripts are written to be easy to read and modify.
- You can expand the datasets or add charts later if you want a more advanced version.
