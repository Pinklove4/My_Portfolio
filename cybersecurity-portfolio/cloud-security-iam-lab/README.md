# Cloud Security IAM Lab

## Project Overview

This project focuses on identity and access management hardening in cloud environments. It demonstrates how to identify over-permissive policies, reduce privilege sprawl, and improve detective controls using cloud audit logs.

## Scenario

A cloud account review identifies broad wildcard permissions, inactive users without MFA, and an IAM role trusted by more principals than required. The analyst must assess impact and propose least-privilege remediations.

## Lab Tools

- AWS IAM concepts (applicable to Azure IAM RBAC)
- CloudTrail-style audit events
- Policy review and access analyzer style checks
- Spreadsheet/Python for permissions mapping

## Environment Setup

1. Create a test cloud account or sandbox.
2. Define sample IAM users, groups, and roles.
3. Add intentional safe misconfigurations in lab only:
   - Excessive policy permissions
   - Missing MFA for test user
   - Broad trust policy on role
4. Capture IAM-related log events.
5. Document baseline and remediated policy state.

## Investigation Workflow

1. Enumerate identities and attached policies.
2. Identify wildcard or admin-equivalent permissions.
3. Review role trust relationships and external access risk.
4. Validate MFA and key rotation status.
5. Prioritize remediation by potential blast radius.
6. Re-test access after policy tightening.

## Sample Findings

- One IAM policy granted iam:* and s3:* to non-admin user group.
- Two active users had console access without MFA.
- One role trust policy allowed overly broad principal access.
- Reduced high-risk permissions by implementing scoped least-privilege policies.

## Deliverables in This Folder

- logs/cloudtrail_iam_events_sample.json
- reports/cloud-iam-misconfiguration-report.md
- reports/iam-hardening-checklist.md
- screenshots/README.md

## Resume Bullet Ideas

- Assessed and remediated cloud IAM misconfigurations, reducing over-permissive access and strengthening least-privilege controls.
- Produced cloud security findings reports with prioritized remediation actions and validation steps.

## Notes

All policies and logs are simulated for educational portfolio usage.
