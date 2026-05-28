# Investigation Report

## Case Summary

- Project: Security Dashboard Visualization Project
- Analyst: Teliyah Perez
- Date: 2026-05-28
- Severity: Medium-High

## Timeline

| Time (UTC) | Event | Source |
|---|---|---|
| 14:02 | Initial suspicious event observed | sample-events.log |
| 14:03 | Detection rule triggered | sample-siem-alerts.json |
| 14:05 | Privilege anomaly identified | sample-events.log |

## Analyst Assessment

The activity pattern was consistent with simulated adversary behavior and justified incident escalation in a production-like SOC workflow.

## Actions Taken

1. Isolated impacted endpoint in simulation.
2. Collected authentication, process, and network evidence.
3. Applied MITRE ATT and CK mapping and documented confidence level.
4. Proposed detection and hardening improvements.

## Final Disposition

Closed as simulated incident with actionable remediation tasks tracked.
