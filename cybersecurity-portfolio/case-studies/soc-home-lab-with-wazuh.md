# SOC Home Lab with Wazuh - Incident Walkthrough

## 1. Scenario
A simulated internet-facing Linux server generated repeated failed SSH authentication attempts from a single external IP. SOC alerting flagged potential brute-force behavior and required triage to determine severity and containment urgency.

## 2. Lab Environment
- Wazuh manager + dashboard
- Ubuntu server VM (SSH enabled)
- Windows 11 analyst VM
- pfSense firewall
- Splunk for secondary correlation
- Isolated 10.10.30.0/24 lab network

## 3. What I Built
- Wazuh agent ingestion from Ubuntu auth logs
- Authentication anomaly alert rule for repeated failed SSH attempts
- Analyst playbook with severity rubric and containment checklist
- Basic SIEM enrichment: source IP repetition + host criticality tag

## 4. Investigation / Workflow
1. Validate Wazuh alert source, timestamp, and impacted host.
2. Review auth.log events to quantify failures and target accounts.
3. Check for successful logins from attacker IP in same window.
4. Assign severity using likelihood and host criticality.
5. Execute containment recommendation and document timeline.

## 5. Evidence
- Screenshot placeholder: ../assets/screenshots/wazuh-alert-ssh-bruteforce.svg
- Log sample: ../assets/logs/linux-auth-ssh-bruteforce.log
- SIEM alert sample: ../assets/logs/wazuh-alerts.json
- Incident report: ../assets/reports/incident-response-report.md

## 6. Findings
- 40+ failed SSH attempts in short interval from 203.0.113.45.
- No successful root login from attacker source observed.
- Detection rule worked, but baseline exceptions were needed for scheduled admin checks.

## 7. Remediation
- Block source IP at firewall.
- Disable password SSH authentication and enforce keys.
- Reduce external SSH exposure with allow-list controls.
- Add Wazuh threshold tuning for repeated offender logic.

## 8. Troubleshooting
- Problem: Initial alert noise from internal vulnerability scanner.
- Fix: Added scanner subnet to controlled exception list.
- Validation: Re-ran simulation and confirmed only malicious-pattern alerts remained.
- What I would improve next: Add geo-IP enrichment and automatic case tagging.

## 9. Skills Demonstrated
- SIEM monitoring and alert triage
- Linux log analysis
- Incident severity classification
- Containment planning and defensive hardening
- SOC documentation quality

## 10. Resume Bullets
- Investigated simulated SSH brute-force alerts in Wazuh, correlated Linux auth logs, and produced incident timelines with severity-based response actions.
- Tuned detection thresholds to reduce false positives while preserving high-confidence authentication attack detection.
- Documented containment and hardening controls including firewall blocking, SSH key-only authentication, and exposure reduction.

## Analyst Notes
- Severity: Medium-High
- Containment executed in simulation within 20 minutes from detection
- Lesson learned: tuning quality matters as much as initial detection coverage
