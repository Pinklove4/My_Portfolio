# Enterprise VLAN Segmentation Lab - Case Study

## 1. Scenario
A flat network architecture created excessive lateral movement risk and poor blast-radius control. Segmentation was required to isolate business units and high-value systems.

## 2. Lab Environment
- Layer 3 switch and access switches
- pfSense firewall for north-south controls
- Multiple VLANs for department segmentation
- Simulated DMZ and server networks

## 3. What I Built
- VLAN and subnet design for business units and services
- Inter-VLAN ACL rules for least-privilege connectivity
- DMZ segmentation for exposed services
- Validation tests for allowed and blocked traffic paths

## 4. Investigation / Workflow
1. Define trust boundaries and network zones.
2. Assign VLANs and subnets by function.
3. Configure routing and ACL controls.
4. Test connectivity matrix for segmentation policy.
5. Document results and hardening recommendations.

## 5. Evidence
- Diagram: ../assets/diagrams/vlan-network-topology.md
- Firewall log sample: ../assets/logs/firewall-denied-connections.log

## 6. Findings
- Segmentation reduced unnecessary east-west access.
- Initial ACL set had one overly permissive rule.
- DMZ isolation improved exposure control for public-facing services.

## 7. Remediation
- Tightened ACLs to explicit allow-list model.
- Added logging for denied inter-VLAN attempts.
- Introduced periodic segmentation rule reviews.

## 8. Troubleshooting
- Problem: temporary routing loops after VLAN rollout.
- Fix: corrected trunk allowed-VLAN list and STP priorities.
- Validation: packet path checks matched intended segmentation matrix.
- What I would improve next: add micro-segmentation policy testing.

## 9. Skills Demonstrated
- Secure network architecture
- VLAN segmentation design
- ACL and firewall rule hardening
- Validation-driven network troubleshooting

## 10. Resume Bullets
- Designed and implemented enterprise-style VLAN segmentation with DMZ isolation and least-privilege inter-VLAN access controls.
- Validated segmentation effectiveness using connectivity tests and denied-traffic log review.
- Identified and corrected ACL/routing issues to improve network security posture and operational stability.

## VLAN and Subnet Table (Example)
| VLAN | Purpose | Subnet | Security Notes |
|---|---|---|---|
| 10 | HR | 10.10.10.0/24 | Limited access to payroll app only |
| 20 | Finance | 10.10.20.0/24 | Strict ACL to DB tier |
| 30 | IT | 10.10.30.0/24 | Admin tools + monitored access |
| 100 | DMZ | 10.10.100.0/24 | Public service isolation |
