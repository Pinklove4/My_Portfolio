# SOC Analyst Home Lab

## Project Overview

This project simulates a Tier 1 SOC Analyst workflow in a home-lab environment where suspicious authentication activity is detected across Windows and Linux systems. The objective is to practice alert triage, log correlation, incident documentation, and response recommendations.

## Scenario

A SIEM alert indicates repeated failed login attempts against a Windows endpoint and a Linux server over a 30-minute period. Shortly after, one successful login appears from an unusual source IP. The analyst must determine whether this was a benign user issue or a potential brute-force attempt followed by account compromise.

## Lab Tools

- Splunk (or Wazuh) for alerting and search
- Windows Event Viewer logs (Security channel)
- Linux auth logs (/var/log/auth.log)
- PowerShell for basic log extraction
- Python for quick parsing and enrichment

## Environment Setup

1. Create two virtual machines: one Windows 10/11 endpoint and one Ubuntu server.
2. Enable Windows Security auditing for logon events.
3. Configure SSH on Ubuntu and forward auth logs.
4. Install Splunk Free (or Wazuh manager) and onboard both endpoints.
5. Create a dashboard for failed and successful authentication events.
6. Generate safe simulated activity:
   - Several failed login attempts
   - One successful login from a test account
   - Normal baseline traffic from expected internal hosts

## Investigation Workflow

1. Validate alert source and timeframe in SIEM.
2. Pivot from alert IP to all related events in the same window.
3. Correlate Windows Event IDs 4625 and 4624 with Linux failed SSH events.
4. Identify target accounts, source IP, and hostnames involved.
5. Check for follow-on behavior after successful logon:
   - New process launches
   - Privilege use
   - Additional lateral access attempts
6. Assign severity and document confidence level.
7. Recommend containment and hardening actions.

## Sample Findings

- 47 failed authentication attempts from 203.0.113.45 in 22 minutes.
- 1 successful login to service account from same IP after failure burst.
- No malware execution observed, but account misuse risk is high.
- Incident classified as Medium-High pending credential reset verification.

## Deliverables in This Folder

- logs/fake_windows_security_events.csv
- logs/fake_linux_auth.log
- logs/fake_siem_alerts.json
- reports/incident-response-report.md
- screenshots/README.md

## Resume Bullet Ideas

- Triaged simulated SIEM authentication alerts across Windows and Linux endpoints and correlated multi-source logs to identify high-risk account compromise indicators.
- Documented incident response actions, containment recommendations, and lessons learned in a SOC-style incident report.

## Notes

All events are simulated for training and portfolio purposes only.
