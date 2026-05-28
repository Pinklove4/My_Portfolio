# Firewall Rule Review

## Goal
Review pfSense rules used in the simulated home lab to support management access, DMZ exposure, and restricted inter-VLAN traffic.

## Rule Highlights
- Allowed VPN clients to reach approved management services.
- Logged DMZ inbound traffic for review in Splunk.
- Blocked IoT access to management systems.
- Allowed Wazuh and monitoring traffic from approved server and workstation hosts.

## Observations
- Logging on deny rules improved troubleshooting visibility.
- Source and destination definitions needed careful review to avoid silent failures.
- Rule comments made later validation and documentation easier.

## Next Step
Automate periodic firewall rule export for documentation and comparison.
