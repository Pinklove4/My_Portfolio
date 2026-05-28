# Packet Analysis Report (Simulated)

## Summary
Packet review showed suspicious DNS query patterns with high-entropy subdomains and scan-like behavior from one internal host.

## Observations
- Sequential port probes observed in short time window
- TXT query volume higher than baseline
- Destination domains not present in allow-listed business traffic

## Recommendations
- Add DNS anomaly detection rule
- Isolate and review endpoint process activity
- Block known malicious domains at DNS resolver
