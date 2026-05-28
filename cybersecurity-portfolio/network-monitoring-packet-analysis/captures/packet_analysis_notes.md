# Packet Analysis Notes

## Case Metadata

- Case ID: NET-2026-0517-01
- Analyst: Teliyah Perez
- Time Range Reviewed: 2026-05-17 18:00-18:20 UTC
- Data Sources: Wireshark PCAP, flow logs, DNS query logs

## Observations

1. Source host 10.10.30.44 initiated rapid connections across sequential destination ports, consistent with reconnaissance behavior.
2. Multiple denied SSH and Telnet attempts were followed by allowed HTTP/HTTPS requests.
3. DNS queries targeted a low-reputation test domain not present in normal baseline traffic.

## Hypotheses

- Controlled internal scan from security testing host
- Misconfigured script repeatedly probing services
- Early-stage compromise activity requiring host validation

## Containment Recommendations

1. Confirm asset owner and approved testing schedule.
2. If unapproved, isolate source host from network segment.
3. Capture endpoint process tree and command history for host 10.10.30.44.
4. Add temporary detection rule for repeated multi-port probing patterns.
