# Network Incident Report

## Case Information

- Case ID: NET-2026-0517-01
- Analyst: Teliyah Perez
- Date: 2026-05-17
- Severity: Medium

## Summary

An internal host generated repeated multi-port connection attempts and unusual DNS queries. Pattern was consistent with reconnaissance-like behavior in the simulated lab.

## Evidence Sources

- Packet capture review (Wireshark)
- Flow export (fake_network_flows.csv)
- DNS query trend comparison

## Findings

- Sequential port probing observed from 10.10.30.44.
- Connections attempted on SSH, Telnet, HTTP, and HTTPS.
- DNS requests to low-reputation test domain deviated from baseline profile.

## Response Actions

1. Verified if host was part of approved test activity.
2. Proposed temporary network isolation if unapproved.
3. Recommended EDR process review on source host.
4. Added detection recommendation for rapid multi-port probing.

## Conclusion

Incident pattern is suspicious and requires ownership validation; no confirmed compromise in this simulation.
