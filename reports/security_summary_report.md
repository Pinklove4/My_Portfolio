# Security Summary Report

## Overview
This project uses synthetic login, vulnerability, and asset inventory data to demonstrate beginner-friendly SOC and cybersecurity analyst workflows.

## Key Findings
- Failed login activity is concentrated around a small set of users. `apatel` has the highest failed login count with 3 events, while `dwhite`, `jdoe`, and `kpatel` each have 2.
- The United States produced the most failed logins with 7 events, followed by Brazil, Germany, and India with 2 each.
- Vulnerability findings are concentrated in the High and Critical ranges. The dataset contains 6 High findings and 3 Critical findings.
- `web01` is the highest-risk asset in the sample because it has the highest weighted risk score and the highest max CVSS value of 9.4.
- `dc01` is also high priority because directory services assets can affect multiple users if they are exposed.
- Department-level analysis shows the highest average CVSS in Security and the highest volume of issues in Engineering and IT.

## Basic Security Insights
- Repeated failed logins from the same account should be reviewed for password issues, account lockouts, or suspicious activity.
- Critical vulnerabilities on servers and directory services should be treated as high priority because they can affect many users.
- Assets with multiple high-severity findings should be validated after remediation to confirm the risk really decreased.
- Tracking vulnerabilities by asset and department makes it easier to assign ownership and follow up on fixes.

## What I Would Do Next
1. Review repeated failed logins for possible lockouts or suspicious authentication patterns.
2. Prioritize Critical and High vulnerabilities first, then verify remediation with a rescan.
3. Focus first on the highest-risk assets such as `web01`, `dc01`, `ws01`, and `app01`.
4. Create a simple dashboard for failed logins, vulnerability severity, and top risky assets.
5. Add alerting thresholds so repeated failures or new critical findings are easier to spot.
6. Document the remediation process so the workflow stays repeatable and audit-friendly.

## Portfolio Value
This report shows that I can take raw CSV data, clean it, summarize it, and write a short analyst-style report that supports SOC and cybersecurity work.
