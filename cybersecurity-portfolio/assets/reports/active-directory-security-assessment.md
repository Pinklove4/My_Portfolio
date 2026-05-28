# Active Directory Security Assessment (Simulated)

## Scope
Domain controller security events, account lockouts, group changes, and policy baseline checks.

## Findings
- Repeated lockouts from single workstation indicate password spray pattern
- Unauthorized privileged group modification outside approved change window
- Service account monitoring gaps identified

## Defensive Actions
- Reverted unauthorized group membership change
- Reset impacted credentials
- Added alert for privileged group change events
