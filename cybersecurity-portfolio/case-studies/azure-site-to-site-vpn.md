# Azure Site-to-Site VPN - Case Study

## 1. Scenario
Hybrid connectivity between on-prem lab and Azure resources required encrypted, resilient routing with controlled NSG and firewall exposure.

## 2. Lab Environment
- Azure VPN Gateway
- On-prem pfSense edge firewall
- Simulated branch subnet and Azure VNet
- NSG and route table controls

## 3. What I Built
- Site-to-site tunnel with IKEv2
- Route policies for controlled hybrid connectivity
- NSG rules permitting only required inter-site flows
- Validation checklist for tunnel and failover behavior

## 4. Investigation / Workflow
1. Configure tunnel parameters and shared keys.
2. Apply route and NSG controls.
3. Validate encryption and route propagation.
4. Test cross-site host reachability and service paths.
5. Document security controls and operational constraints.

## 5. Evidence
- Screenshot placeholder: ../assets/screenshots/azure-vpn-connection.svg
- Diagram: ../assets/diagrams/vlan-network-topology.md
- Command output example:
```text
PS> Test-NetConnection 10.40.10.12 -Port 443
TcpTestSucceeded : True
```

## 6. Findings
- Tunnel remained stable under expected load in simulation.
- Initial NSG policy was too broad and required tightening.
- Route verification prevented unnecessary network exposure.

## 7. Remediation
- Narrowed NSG rules to approved subnets and ports.
- Added firewall deny rules for unauthorized outbound attempts.
- Documented rollback steps for routing change failures.

## 8. Troubleshooting
- Problem: asymmetric routing caused intermittent reachability.
- Fix: corrected route table preference and on-prem static route alignment.
- Validation: repeated connectivity tests across services were successful.
- What I would improve next: automate tunnel health checks and alerting.

## 9. Skills Demonstrated
- Cloud network security
- VPN architecture and troubleshooting
- Firewall/NSG policy design
- Connectivity validation and documentation

## 10. Resume Bullets
- Configured and validated Azure site-to-site VPN connectivity with security-focused NSG and firewall rules.
- Troubleshot routing and policy issues to restore stable encrypted hybrid connectivity.
- Produced architecture and validation documentation supporting repeatable cloud network deployments.
