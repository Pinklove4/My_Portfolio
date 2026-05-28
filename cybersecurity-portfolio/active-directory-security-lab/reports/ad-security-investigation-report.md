# Active Directory Security Investigation Report

## Case Information

- Case ID: AD-2026-0514-01
- Date: 2026-05-14
- Analyst: Teliyah Perez
- Severity: High

## Trigger

Multiple account lockouts and suspicious privileged group membership changes were detected within the same investigation window.

## Key Evidence

- Event ID 4740: Account lockouts for j.adams.
- Event ID 4625: Repeated failed logons from WS-22.
- Event ID 4728: Unauthorized group member addition by helpdesk1.
- Event ID 4768: Kerberos failures for svc-print account.

## Analysis

Events indicate likely credential misuse or improper identity administration. Group change lacked a matching approved change ticket, increasing concern for unauthorized privilege assignment.

## Risk Assessment

- Confidentiality: Medium
- Integrity: High
- Availability: Medium
- Overall Risk: High

## Recommended Actions

1. Revert unauthorized privileged group change.
2. Force password resets on affected user and service accounts.
3. Enforce MFA for privileged access pathways.
4. Alert on out-of-window group membership modifications.

## Outcome

Simulated incident documented and resolved with improved AD monitoring rules.
