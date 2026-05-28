# Network Packet Analysis Lab - Case Study

## 1. Scenario
SOC monitoring flagged unusual DNS behavior and scan-like traffic from an internal workstation, requiring packet-level investigation and containment recommendations.

## 2. Lab Environment
- Wireshark packet capture station
- pfSense firewall logs
- Internal segmented test network
- Nmap-generated controlled scan traffic

## 3. What I Built
- Baseline DNS behavior profile
- Packet analysis checklist for suspicious DNS and scan activity
- Detection notes linking packet evidence to actionable alerts

## 4. Investigation / Workflow
1. Filter DNS and TCP SYN-heavy traffic in capture.
2. Identify source host, destination domains, and query patterns.
3. Compare observed behavior with baseline traffic.
4. Cross-check firewall denies and endpoint context.
5. Document confidence level and recommended actions.

## 5. Evidence
- Screenshot placeholder: ../assets/screenshots/wireshark-dns-analysis.svg
- Packet report: ../assets/reports/packet-analysis-report.md
- Firewall logs: ../assets/logs/firewall-denied-connections.log

## 6. Findings
- High-entropy DNS subdomain pattern suggested tunneling simulation.
- Sequential multi-port connection attempts matched scan behavior.
- Source host required endpoint review for process-level confirmation.

## 7. Remediation
- Blocked suspicious domains and outbound flows in simulation.
- Added DNS anomaly detection rules.
- Recommended endpoint triage for source host owner verification.

## 8. Troubleshooting
- Problem: large capture size made review inefficient.
- Fix: Applied protocol filters and narrowed time range around alert window.
- Validation: Key suspicious packets were reproducible in reduced capture.
- What I would improve next: add Zeek metadata enrichment for faster triage.

## 9. Skills Demonstrated
- Packet analysis and protocol investigation
- DNS threat hunting
- Network detection documentation
- Analyst decision communication

## 10. Resume Bullets
- Investigated suspicious DNS and scan-like traffic using Wireshark and firewall logs to produce actionable network defense recommendations.
- Built repeatable packet triage workflows for suspicious subdomain and reconnaissance behavior in a controlled lab.
- Documented evidence-backed findings and containment steps suitable for SOC handoff and incident tracking.
