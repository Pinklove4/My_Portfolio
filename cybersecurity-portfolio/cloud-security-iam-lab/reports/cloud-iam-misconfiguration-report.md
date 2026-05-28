# Cloud IAM Misconfiguration Report

## Assessment Details

- Assessment ID: IAM-2026-0519-01
- Date: 2026-05-19
- Analyst: Teliyah Perez
- Environment: Cloud Sandbox

## Executive Summary

The IAM review identified over-permissive policies, weak authentication controls, and broad trust policy configurations that increase privilege escalation risk.

## Key Findings

1. AdministratorAccess attached to non-admin test user.
2. Two users with console access had no MFA enforced.
3. Role trust relationship allowed broader principals than required.
4. New access key creation activity required tighter monitoring.

## Risk Impact

- Excessive privileges increase potential blast radius.
- Missing MFA raises account takeover exposure.
- Broad trust policies increase cross-role abuse potential.

## Remediation Recommendations

1. Replace wildcard permissions with scoped least-privilege policies.
2. Enforce MFA for all interactive users.
3. Restrict role trust policy to approved principals only.
4. Enable alerting for AttachUserPolicy and CreateAccessKey events.
5. Implement quarterly IAM access review.

## Validation

Post-remediation testing confirmed reduced access scope for previously over-permissive identities.
