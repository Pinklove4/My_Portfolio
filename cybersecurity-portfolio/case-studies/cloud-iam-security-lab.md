# Cloud IAM Security Lab - Case Study

## 1. Scenario
Cloud identity review found over-permissive policy assignments and incomplete MFA enforcement, increasing risk of unauthorized privilege abuse.

## 2. Lab Environment
- AWS IAM sandbox account
- CloudTrail event logging
- IAM Access Analyzer concepts
- Optional Azure sign-in equivalent event review

## 3. What I Built
- IAM review worksheet for users, groups, roles, and trust policies
- Least-privilege remediation checklist
- Cloud audit event triage notes for high-risk IAM changes

## 4. Investigation / Workflow
1. Inventory identities and attached permissions.
2. Detect wildcard and admin-equivalent policies.
3. Review MFA and key lifecycle hygiene.
4. Analyze CloudTrail events for risky IAM actions.
5. Propose least-privilege remediations and validate access.

## 5. Evidence
- Screenshot placeholder: ../assets/screenshots/aws-iam-review.svg
- Cloud logs: ../assets/logs/cloudtrail-iam-events.json
- Report: ../assets/reports/cloud-iam-security-review.md
- Diagram: ../assets/diagrams/cloud-iam-flow.md

## 6. Findings
- Non-admin identity had AdministratorAccess.
- MFA coverage was incomplete for console users.
- Trust policy scope was broader than required.

## 7. Remediation
- Replaced broad policies with scoped role-based policies.
- Enforced MFA for all interactive users.
- Restricted trust relationships and rotated keys.

## 8. Troubleshooting
- Problem: inherited policies made effective-permission review confusing.
- Fix: documented direct vs inherited permission paths before remediation.
- Validation: access tests confirmed required functions still worked with reduced privilege.
- What I would improve next: add automated permission drift alerts.

## 9. Skills Demonstrated
- Cloud IAM auditing
- Least-privilege design
- Cloud event log analysis
- Risk-based remediation communication

## 10. Resume Bullets
- Conducted cloud IAM security review in a sandbox environment, identifying over-permissive policies and incomplete MFA controls.
- Analyzed CloudTrail IAM events and translated findings into prioritized least-privilege remediation actions.
- Validated access post-remediation to ensure security improvements without breaking required workflows.
