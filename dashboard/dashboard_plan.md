# Security Data Analyst Roadmap Dashboard Plan

## Purpose
Build a simple SOC-style dashboard that helps a beginner analyst monitor login activity, vulnerability trends, and risk by asset or department.

## What the dashboard should show
- Failed logins over time
- Success vs. failure rate
- Top attacking countries
- Failed logins by user
- Vulnerability counts by severity
- Average CVSS by department
- Top riskiest assets
- Assets with no matched vulnerabilities yet

## Suggested metrics
- Total login attempts
- Total failed logins
- Failed login rate
- Total vulnerabilities discovered
- Critical and High vulnerability counts
- Average CVSS score
- Number of assets at highest risk
- Number of assets still unscanned or unmatched

## Suggested charts
- Bar chart for failed logins by user
- Bar chart for failed logins by country
- Column chart for vulnerabilities by severity
- Line chart for login failures over time
- Heatmap-style table for department vs. average CVSS
- KPI cards for total attempts, failures, critical vulns, and riskiest assets

## Layout idea
1. Top row of KPI cards.
2. Left side for login trends.
3. Middle section for vulnerability severity breakdown.
4. Right side for department and asset risk summaries.
5. Bottom table for latest alerts or top risky assets.

## Beginner-friendly notes
- Keep the dashboard readable and uncluttered.
- Use clear labels and color severity consistently.
- Separate authentication data from vulnerability data.
- Save charts as PNGs or use a simple local dashboard tool later if needed.
