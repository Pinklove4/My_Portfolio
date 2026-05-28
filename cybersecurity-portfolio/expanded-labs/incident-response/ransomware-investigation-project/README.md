# Ransomware Investigation Project

## Project Objective
Practice response workflow for simulated ransomware indicators.

## Tools Used
Sysmon, Wazuh, Windows logs

## What I Practiced
Investigated unusual file changes, traced timeline, and drafted recovery actions.

## Hands-On Evidence
- Diagram: ./diagram.mmd
- Log sample: ./evidence/sample.log
- CSV sample: ./evidence/sample-data.csv
- Terminal output: ./evidence/terminal-output.txt
- Mock dashboard: ../../assets/screenshots/ransomware-investigation-project-mock-dashboard.svg
- Mock screenshot (HTML): ../../assets/screenshots/ransomware-investigation-project-mock-screen.html

## Problems I Ran Into
I initially generated noisy alerts from regular lab testing traffic, which made triage harder.

## What I Learned
Small tuning changes (source allow-list and threshold adjustment) can make beginner detection logic much more useful.

## Skills Demonstrated
- Simulated SOC investigation workflow
- Log review and alert triage
- Basic detection logic and tuning
- Remediation testing and documentation

## Resume Bullet
Built a simulated ransomware investigation project in a home-lab environment to practice alert triage, evidence review, and defensive remediation documentation.

## Detection/Alert Table
| Source | Detection Idea | Notes |
|---|---|---|
| Wazuh/Splunk | Multi-event anomaly check | Beginner-to-intermediate rule logic |
| Endpoint logs | Suspicious process context | Reviewed with analyst notes |
| Firewall logs | Denied outbound pattern | Used for validation and containment checks |

## Remediation Notes
- Tested defensive fix in simulation.
- Validated expected logs after remediation.
- Documented follow-up improvements.

## Safety Statement
All activity is simulated, ethical, fictional, and performed in a home-lab environment.
