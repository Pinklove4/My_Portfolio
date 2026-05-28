# Active Directory Attack and Defense Lab - Defensive Case Study

## 1. Scenario
Domain security monitoring identified repeated account lockouts and suspicious privileged group modifications. The objective was to validate whether this reflected operational error or malicious identity abuse.

## 2. Lab Environment
- Windows Server 2022 Domain Controller (DC01)
- Two domain-joined workstations
- Active Directory Users and Computers
- Group Policy Management Console
- PowerShell + Event Viewer
- SIEM ingestion for AD security events

## 3. What I Built
- AD lab with standard users, service accounts, and privileged groups
- Group Policy baseline hardening for logon and account lockout controls
- Event-based monitoring for 4625, 4740, 4728, and 4672

## 4. Investigation / Workflow
1. Review account lockout timeline and affected users.
2. Correlate failed logons with source workstations.
3. Check privileged group changes against approved change records.
4. Review service account activity and logon patterns.
5. Apply defensive controls and validate reduced risky behavior.

## 5. Evidence
- Diagram: ../assets/diagrams/ad-lab-topology.md
- Screenshot placeholder: ../assets/screenshots/active-directory-users-groups.svg
- Failed logon screenshot placeholder: ../assets/screenshots/windows-event-viewer-failed-logons.svg
- AD report: ../assets/reports/active-directory-security-assessment.md

## 6. Findings
- Lockout events were concentrated from one workstation and tied to stale credentials.
- Privileged group change occurred outside approved maintenance process.
- Service account review exposed unnecessary interactive logon rights.

## 7. Remediation
- Reverted unauthorized group changes and reset impacted credentials.
- Restricted service account privileges and logon scope.
- Hardened lockout and audit policies via Group Policy.

## 8. Troubleshooting
- Problem: Event collection gaps due to missing forwarding subscription.
- Fix: Corrected Windows Event Forwarding collector configuration.
- Validation: Verified complete event stream in SIEM for key AD event IDs.
- What I would improve next: Add continuous privileged group integrity checks.

## 9. Skills Demonstrated
- Active Directory monitoring
- Identity-focused incident triage
- Group Policy defensive hardening
- PowerShell evidence collection

## 10. Resume Bullets
- Investigated AD lockouts and privileged group changes using event correlation and defensive identity workflows in a simulated domain.
- Hardened Group Policy settings for account lockout, auditing, and privilege control to reduce identity abuse risk.
- Used PowerShell and SIEM data to document repeatable AD incident investigation procedures.

## PowerShell Evidence Examples
```powershell
Get-WinEvent -FilterHashtable @{LogName='Security'; Id=4740} -MaxEvents 20 | Format-Table TimeCreated, Message -Auto
Get-ADGroupMember -Identity "Backup Operators"
Get-WinEvent -FilterHashtable @{LogName='Security'; Id=4728} -MaxEvents 20
```
