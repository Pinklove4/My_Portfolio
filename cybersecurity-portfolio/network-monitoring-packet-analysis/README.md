# Network Monitoring and Packet Analysis Lab

## Project Overview

This project demonstrates network-focused detection and investigation using packet captures and flow summaries. It emphasizes identifying suspicious scanning activity, unusual protocol behavior, and potential command-and-control indicators in safe simulated traffic.

## Scenario

Network monitoring flags an internal host communicating with multiple uncommon destinations and generating repeated connection attempts across many ports. The analyst must determine if this is benign scanning, misconfiguration, or malicious reconnaissance behavior.

## Lab Tools

- Wireshark for packet analysis
- Nmap for controlled scan simulation
- Optional Zeek/Suricata outputs for enrichment
- PowerShell or Python for parsing and summarization

## Environment Setup

1. Build a small isolated lab network with at least 2-3 hosts.
2. Capture normal baseline traffic for comparison.
3. Generate safe simulated events:
   - Controlled Nmap scan from one host
   - DNS requests to known test domains
   - Repeated failed TCP connection attempts
4. Save packet captures and flow summaries.

## Investigation Workflow

1. Establish timeline of suspicious activity.
2. Identify source and destination pairs with highest connection volume.
3. Review protocols, ports, and failed handshakes.
4. Inspect DNS behavior and HTTP headers for anomalies.
5. Compare against expected baseline behavior.
6. Produce conclusion, confidence level, and recommended actions.

## Sample Findings

- One internal source performed SYN scan pattern against 120 ports.
- Elevated DNS lookups to low-reputation test domain set.
- Repeated failed outbound connections from non-standard service account host.
- Recommended host isolation and endpoint triage pending ownership validation.

## Deliverables in This Folder

- captures/fake_network_flows.csv
- captures/packet_analysis_notes.md
- reports/network-incident-report.md
- screenshots/README.md

## Resume Bullet Ideas

- Analyzed packet captures and network flow data to investigate suspicious scanning and anomalous traffic patterns in a controlled lab environment.
- Documented packet-level evidence and created actionable containment recommendations for network-focused incident response.

## Notes

Traffic artifacts are synthetic and generated in a safe home lab.
