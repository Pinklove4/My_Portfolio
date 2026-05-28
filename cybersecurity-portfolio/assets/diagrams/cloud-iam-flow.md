# Cloud IAM Review Flow

```mermaid
flowchart LR
  CT[CloudTrail / Sign-in Logs] --> Review[Identity Review]
  Review --> Findings[Excessive Permission Findings]
  Findings --> Remediate[Least Privilege Remediation]
  Remediate --> Validate[Access Validation]
  Validate --> Report[Security Review Report]
```
