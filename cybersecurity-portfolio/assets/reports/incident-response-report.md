# Incident Response Report (Simulated Home Lab)

## Executive Summary
A simulated SSH brute-force campaign targeted a Linux host in the SOC lab. No successful unauthorized access was confirmed during the observed period.

## Severity
Medium-High

## Key Evidence
- Repeated failed SSH logins from a single external IP
- Wazuh alert triggered by brute-force rule
- No matching successful root login from attacker source

## Containment
- Blocked source IP at firewall
- Disabled password-based SSH authentication

## Lessons Learned
- Add geo-IP enrichment to authentication alerts
- Tune thresholds to reduce noisy low-volume auth failures
