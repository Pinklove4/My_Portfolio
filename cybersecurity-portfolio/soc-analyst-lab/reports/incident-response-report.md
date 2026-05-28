# Incident Response Report

## Incident Summary

- Incident ID: SOC-2026-0512-001
- Date Opened: 2026-05-12
- Analyst: Teliyah Perez
- Severity: Medium-High
- Status: Closed (Simulation)

## What Happened

SIEM correlation detected repeated failed authentication attempts followed by successful logon activity from the same external IP address against both Windows and Linux lab systems.

## Scope

- Affected Hosts: WIN-CLIENT01, ubuntu-lab
- Affected Accounts: j.smith, svc-backup
- Suspected Source IP: 203.0.113.45

## Investigation Steps

1. Confirmed alert validity and event timeline.
2. Correlated Windows 4625/4624 and 4672 with Linux auth events.
3. Reviewed post-authentication behavior for privilege abuse.
4. Assessed risk and potential blast radius.

## Findings

- Brute-force-like pattern observed across multiple accounts.
- One successful login from same source after repeated failures.
- Privileged logon artifact observed (Event ID 4672).

## Containment and Recovery

- Reset impacted test credentials.
- Blocked source IP in lab firewall.
- Enabled stricter account lockout thresholds.
- Added SIEM detection for fail-then-success behavior.

## Lessons Learned

- Authentication anomaly rules should include account context and geolocation baselines.
- Service account monitoring needs dedicated alerting thresholds.
