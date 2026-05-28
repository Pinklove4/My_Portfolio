# Lab Validation Report

## Objective
Validate that the simulated home-lab environment supports segmentation, monitoring, VPN access, and log visibility.

## Validation Checks
- Verified ping access between approved VLANs.
- Confirmed blocked access from VLAN 40 IoT to VLAN 10 Management.
- Confirmed WireGuard VPN tunnel established successfully.
- Verified Wazuh agents checked in from server and workstation segments.
- Confirmed Splunk searches returned pfSense firewall events.
- Verified Nagios service checks reported expected host availability.
- Confirmed Pi-hole filtering blocked the test domain.

## Outcome
The lab behaved as expected after minor troubleshooting around VLAN tagging, Wazuh firewall rules, and VPN peer settings.
