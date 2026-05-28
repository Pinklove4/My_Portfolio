# Active Directory Security Lab

## Project Overview

This lab demonstrates practical monitoring and investigation of identity-related security events in an Active Directory environment. The focus is on account lockouts, failed logons, privilege group membership changes, and suspicious authentication patterns.

## Scenario

A helpdesk ticket reports multiple user lockouts in a short timeframe. At the same time, security logs show repeated Kerberos pre-authentication failures and an unexpected addition to a privileged AD group. The analyst must determine whether this reflects operational noise or malicious activity.

## Lab Tools

- Windows Server with Active Directory Domain Services
- Windows Event Viewer
- PowerShell (Get-WinEvent, AD cmdlets)
- Splunk or Wazuh for centralized event review

## Environment Setup

1. Build a small AD lab:
   - 1 Domain Controller
   - 1 member workstation
   - 2 standard user accounts and 1 admin account
2. Enable Advanced Audit Policy for logon/account management events.
3. Forward Security logs to SIEM.
4. Generate safe simulated events:
   - Failed logons and lockouts
   - Password reset
   - Group membership modification
5. Export event data for reporting.

## Investigation Workflow

1. Review lockout events and identify affected users.
2. Correlate Event IDs 4625, 4740, 4728/4732, 4768, and 4769.
3. Trace source workstation and account used for group changes.
4. Validate whether change was approved and documented.
5. Evaluate blast radius:
   - Privileged groups impacted
   - Number of affected hosts/users
6. Recommend identity hardening improvements.

## Sample Findings

- Three user accounts locked out from one workstation within 15 minutes.
- 12 failed Kerberos pre-authentication attempts for one service account.
- Domain local admin-equivalent group received one unauthorized member addition.
- Recommended immediate reversal, password reset, and privileged access review.

## Deliverables in This Folder

- logs/fake_ad_security_events.csv
- logs/fake_group_membership_changes.txt
- reports/ad-security-investigation-report.md
- screenshots/README.md

## Resume Bullet Ideas

- Investigated Active Directory security events to identify account lockout causes, suspicious authentication activity, and unauthorized privileged group changes.
- Built a repeatable identity-focused triage process using Event IDs and PowerShell-based evidence collection.

## Notes

All changes and alerts are simulated in a non-production home lab.
