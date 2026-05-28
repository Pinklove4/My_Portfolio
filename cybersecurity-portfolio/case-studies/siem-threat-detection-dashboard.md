# SIEM Threat Detection Dashboard - Case Study

## 1. Scenario
Security operations lacked consistent visibility into high-priority alerts, false positive volume, and incident trends. A dashboard and correlation workflow was needed to improve triage speed and reporting quality.

## 2. Lab Environment
- Splunk Enterprise trial
- Windows and Linux log forwarders
- Sysmon + Windows Security logs
- Ubuntu auth logs + firewall logs
- CSV lookup tables for asset criticality

## 3. What I Built
- SOC dashboard panels for alert volume by severity, top entities, and trendlines
- Correlation searches for failed-then-success logon behavior
- Analyst triage checklist integrated with dashboard workflow

## 4. Investigation / Workflow
1. Define KPIs (MTTD proxy, open high alerts, top repeated entities).
2. Normalize fields across Windows/Linux sources.
3. Build correlation rules and test on synthetic event sets.
4. Tune false positives and document exclusion logic.
5. Validate dashboard usefulness with incident drill scenarios.

## 5. Evidence
- Screenshot placeholder: ../assets/screenshots/splunk-dashboard-threat-detection.svg
- Query examples included below
- Sample alerts: ../assets/sample-data/security-alerts.csv

## 6. Findings
- Correlation search reduced analyst noise from repetitive single-event alerts.
- Main false-positive source was maintenance windows and scanner traffic.
- Triage quality improved after adding host criticality context.

## 7. Remediation
- Added risk-based scoring to prioritized queue.
- Added service-account and scanner exceptions with audit notes.
- Implemented weekly tuning review process.

## 8. Troubleshooting
- Problem: Inconsistent field names caused missed correlations.
- Fix: Created field normalization macros and sourcetype mappings.
- Validation: Same detection fired reliably across test data sources.
- What I would improve next: Add MITRE-tagged dashboard filtering.

## 9. Skills Demonstrated
- SIEM engineering and dashboard design
- SPL query development
- Correlation logic tuning
- SOC triage process design

## 10. Resume Bullets
- Built a Splunk threat dashboard and correlation searches that improved prioritization of high-risk authentication and endpoint events.
- Reduced false-positive alert volume through field normalization, scoped exceptions, and repeatable tuning notes.
- Documented triage workflow and KPI reporting for analyst handoffs and weekly security review.

## Detection Logic (Sample SPL)
```spl
index=wineventlog EventCode=4625 OR EventCode=4624
| stats count(eval(EventCode=4625)) as failed count(eval(EventCode=4624)) as success by user, src_ip, host
| where failed >= 5 AND success >= 1
| eval risk_score=failed*5 + success*20
| sort - risk_score
```

```spl
index=sysmon (EventCode=1 OR EventCode=3)
| search CommandLine="*encodedcommand*" OR Image="*powershell.exe*"
| stats values(CommandLine) as cmd by host, user, parent_process
```
