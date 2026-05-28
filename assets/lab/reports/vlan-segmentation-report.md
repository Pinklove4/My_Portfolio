# VLAN Segmentation Report

## Scope
Document VLAN design and basic access expectations for the simulated lab.

## Segments
- VLAN 10 Management: restricted administration network.
- VLAN 20 Servers: internal workloads and monitoring services.
- VLAN 30 DMZ: public-facing lab services.
- VLAN 40 IoT: isolated test devices.
- VLAN 50 Workstations: user endpoint simulation.

## Test Notes
- Trunk tagging was corrected after initial routing failures.
- Inter-VLAN tests confirmed intended access paths.
- IoT to Management traffic remained blocked after rule review.

## Summary
Segmentation improved control over traffic flow and made validation tasks easier to document and review.
