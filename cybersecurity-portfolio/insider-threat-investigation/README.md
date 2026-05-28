# Insider Threat Investigation

## Enterprise Scenario

Privileged employee downloads abnormal volume of sensitive files before resignation notice.

## Primary Focus Areas

- Threat hunting, UBA
- Incident triage and evidence handling
- Detection and response improvement in a home-lab environment

## Tools Used

SIEM, file access logs, UEBA concepts, PowerShell

## Beginner-Friendly Lab Setup

1. Build a safe, isolated lab network or cloud sandbox.
2. Enable logging on relevant systems (endpoint, identity, network, and cloud where applicable).
3. Ingest logs into Splunk or Wazuh.
4. Simulate realistic but safe security events related to this project.
5. Validate alerts, investigate, and document findings using the report templates.

## Investigation Workflow

1. Confirm alert source and timeframe.
2. Correlate endpoint, identity, and network/cloud evidence.
3. Identify likely root cause and potential blast radius.
4. Map observed behavior to MITRE ATT and CK.
5. Document impact, containment actions, and remediation plan.

Build user timeline, compare baseline behavior, review access approvals, document legal-safe findings.

## MITRE ATT and CK References

T1005, T1567, T1078

## Sample Findings

- Multiple correlated events indicated abnormal behavior requiring analyst escalation.
- One or more detection gaps were identified and converted into tuning recommendations.
- Response steps were documented with repeatable playbooks for junior analysts.

## Remediation Recommendations

Apply need-to-know controls, monitor high-risk departures, implement dual-approval for exports.

## Repository Contents

- logs/sample-events.log
- alerts/sample-siem-alerts.json
- diagrams/lab-diagram.mmd
- reports/investigation-report.md
- reports/remediation-plan.md
- resume-bullets.md
- interview-talking-points.md
- screenshots/README.md

## Safety Note

All activity in this project is simulated for defensive learning in a legal home-lab environment.
