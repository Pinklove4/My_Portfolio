# Cloud IAM Security Review (Simulated)

## Scope
AWS IAM users, groups, roles, and CloudTrail events in sandbox account.

## Findings
- Over-permissive AdministratorAccess attached to non-admin test user
- Incomplete MFA coverage for console users
- Broad role trust policy for deployment role

## Recommendations
- Replace wildcard permissions with least-privilege policies
- Enforce MFA for all interactive identities
- Restrict role trust to approved principals only
