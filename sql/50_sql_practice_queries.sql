-- 1. View all login log records.
SELECT * FROM login_logs;

-- 2. View only failed login attempts.
SELECT * FROM login_logs
WHERE login_status = 'failure';

-- 3. Show failed logins for one specific user.
SELECT * FROM login_logs
WHERE username = 'apatel' AND login_status = 'failure';

-- 4. Count all login attempts.
SELECT COUNT(*) AS total_login_attempts
FROM login_logs;

-- 5. Count failed login attempts.
SELECT COUNT(*) AS failed_login_attempts
FROM login_logs
WHERE login_status = 'failure';

-- 6. Count successful login attempts.
SELECT COUNT(*) AS successful_login_attempts
FROM login_logs
WHERE login_status = 'success';

-- 7. Count failed logins by user.
SELECT username, COUNT(*) AS failed_login_count
FROM login_logs
WHERE login_status = 'failure'
GROUP BY username
ORDER BY failed_login_count DESC;

-- 8. Count failed logins by country.
SELECT country, COUNT(*) AS failed_login_count
FROM login_logs
WHERE login_status = 'failure'
GROUP BY country
ORDER BY failed_login_count DESC;

-- 9. Show login activity ordered by newest first.
SELECT *
FROM login_logs
ORDER BY timestamp DESC;

-- 10. Show login activity for February 1, 2026.
SELECT *
FROM login_logs
WHERE timestamp >= '2026-02-01' AND timestamp < '2026-02-02';

-- 11. Show login activity for February 2, 2026.
SELECT *
FROM login_logs
WHERE timestamp >= '2026-02-02' AND timestamp < '2026-02-03';

-- 12. Show login activity for February 3, 2026.
SELECT *
FROM login_logs
WHERE timestamp >= '2026-02-03' AND timestamp < '2026-02-04';

-- 13. Group login attempts by day.
SELECT CAST(timestamp AS DATE) AS login_date, COUNT(*) AS attempts
FROM login_logs
GROUP BY CAST(timestamp AS DATE)
ORDER BY login_date;

-- 14. Calculate daily failed logins.
SELECT CAST(timestamp AS DATE) AS login_date, COUNT(*) AS failed_logins
FROM login_logs
WHERE login_status = 'failure'
GROUP BY CAST(timestamp AS DATE)
ORDER BY login_date;

-- 15. Calculate daily success rate.
SELECT CAST(timestamp AS DATE) AS login_date,
       COUNT(*) AS total_attempts,
       SUM(CASE WHEN login_status = 'success' THEN 1 ELSE 0 END) AS successes,
       SUM(CASE WHEN login_status = 'failure' THEN 1 ELSE 0 END) AS failures
FROM login_logs
GROUP BY CAST(timestamp AS DATE)
ORDER BY login_date;

-- 16. Use CASE to label login status as safe or suspicious.
SELECT username,
       timestamp,
       CASE
         WHEN login_status = 'failure' THEN 'suspicious'
         ELSE 'normal'
       END AS status_label
FROM login_logs;

-- 17. Show usernames with more than one failed login.
SELECT username, COUNT(*) AS failed_login_count
FROM login_logs
WHERE login_status = 'failure'
GROUP BY username
HAVING COUNT(*) > 1
ORDER BY failed_login_count DESC;

-- 18. Show countries with at least two failed logins.
SELECT country, COUNT(*) AS failed_login_count
FROM login_logs
WHERE login_status = 'failure'
GROUP BY country
HAVING COUNT(*) >= 2
ORDER BY failed_login_count DESC;

-- 19. List logins from the United States.
SELECT *
FROM login_logs
WHERE country = 'United States';

-- 20. List logins from outside the United States.
SELECT *
FROM login_logs
WHERE country <> 'United States';

-- 21. View all vulnerability records.
SELECT * FROM vulnerability_scan;

-- 22. View only critical vulnerabilities.
SELECT * FROM vulnerability_scan
WHERE severity = 'Critical';

-- 23. Count vulnerabilities by severity.
SELECT severity, COUNT(*) AS vuln_count
FROM vulnerability_scan
GROUP BY severity
ORDER BY vuln_count DESC;

-- 24. Show the average CVSS score by severity.
SELECT severity, AVG(cvss_score) AS avg_cvss
FROM vulnerability_scan
GROUP BY severity
ORDER BY avg_cvss DESC;

-- 25. Show the highest CVSS score per asset.
SELECT asset_id_or_name, MAX(cvss_score) AS max_cvss
FROM vulnerability_scan
GROUP BY asset_id_or_name
ORDER BY max_cvss DESC;

-- 26. Show the total number of vulnerabilities for each asset.
SELECT asset_id_or_name, COUNT(*) AS vuln_count
FROM vulnerability_scan
GROUP BY asset_id_or_name
ORDER BY vuln_count DESC;

-- 27. Filter vulnerabilities with CVSS 7.0 and above.
SELECT *
FROM vulnerability_scan
WHERE cvss_score >= 7.0
ORDER BY cvss_score DESC;

-- 28. Filter vulnerabilities with CVSS below 4.0.
SELECT *
FROM vulnerability_scan
WHERE cvss_score < 4.0
ORDER BY cvss_score ASC;

-- 29. Use CASE to bucket vulnerabilities by risk level.
SELECT asset_id_or_name,
       cve_id,
       cvss_score,
       CASE
         WHEN cvss_score >= 9.0 THEN 'Critical'
         WHEN cvss_score >= 7.0 THEN 'High'
         WHEN cvss_score >= 4.0 THEN 'Medium'
         ELSE 'Low'
       END AS risk_bucket
FROM vulnerability_scan;

-- 30. List vulnerabilities ordered by severity and score.
SELECT *
FROM vulnerability_scan
ORDER BY severity, cvss_score DESC;

-- 31. View all assets.
SELECT * FROM assets;

-- 32. Find all Windows hosts.
SELECT * FROM assets
WHERE operating_system LIKE 'Windows%';

-- 33. Find all Linux hosts.
SELECT * FROM assets
WHERE operating_system LIKE '%Ubuntu%' OR operating_system LIKE '%RHEL%' OR operating_system LIKE '%CentOS%';

-- 34. Count assets by department.
SELECT department, COUNT(*) AS asset_count
FROM assets
GROUP BY department
ORDER BY asset_count DESC;

-- 35. Count assets by operating system.
SELECT operating_system, COUNT(*) AS asset_count
FROM assets
GROUP BY operating_system
ORDER BY asset_count DESC;

-- 36. Join assets with vulnerabilities to see risk details.
SELECT a.hostname, a.department, v.cve_id, v.cvss_score, v.severity
FROM assets a
LEFT JOIN vulnerability_scan v
  ON a.hostname = v.asset_id_or_name;

-- 37. Show department risk using joined asset and vulnerability data.
SELECT a.department, AVG(v.cvss_score) AS avg_cvss
FROM assets a
LEFT JOIN vulnerability_scan v
  ON a.hostname = v.asset_id_or_name
GROUP BY a.department
ORDER BY avg_cvss DESC;

-- 38. Show the number of vulnerabilities by department.
SELECT a.department, COUNT(v.cve_id) AS vuln_count
FROM assets a
LEFT JOIN vulnerability_scan v
  ON a.hostname = v.asset_id_or_name
GROUP BY a.department
ORDER BY vuln_count DESC;

-- 39. Find assets with at least one critical vulnerability.
SELECT a.hostname, a.owner, a.department
FROM assets a
JOIN vulnerability_scan v
  ON a.hostname = v.asset_id_or_name
WHERE v.severity = 'Critical';

-- 40. Find assets with no matching vulnerability records.
SELECT a.hostname, a.owner, a.department
FROM assets a
LEFT JOIN vulnerability_scan v
  ON a.hostname = v.asset_id_or_name
WHERE v.asset_id_or_name IS NULL;

-- 41. Combine login failures with a status summary.
SELECT username,
       COUNT(*) AS total_events,
       SUM(CASE WHEN login_status = 'failure' THEN 1 ELSE 0 END) AS failures,
       SUM(CASE WHEN login_status = 'success' THEN 1 ELSE 0 END) AS successes
FROM login_logs
GROUP BY username
ORDER BY failures DESC;

-- 42. Show usernames with a failure rate over 50 percent.
SELECT username,
       COUNT(*) AS total_events,
       SUM(CASE WHEN login_status = 'failure' THEN 1 ELSE 0 END) AS failures
FROM login_logs
GROUP BY username
HAVING SUM(CASE WHEN login_status = 'failure' THEN 1 ELSE 0 END) > COUNT(*) / 2.0;

-- 43. Show the first login attempt for each user.
SELECT username, MIN(timestamp) AS first_seen
FROM login_logs
GROUP BY username
ORDER BY first_seen;

-- 44. Show the last login attempt for each user.
SELECT username, MAX(timestamp) AS last_seen
FROM login_logs
GROUP BY username
ORDER BY last_seen DESC;

-- 45. Summarize failed logins by country and date.
SELECT CAST(timestamp AS DATE) AS login_date, country, COUNT(*) AS failed_logins
FROM login_logs
WHERE login_status = 'failure'
GROUP BY CAST(timestamp AS DATE), country
ORDER BY login_date, failed_logins DESC;

-- 46. Join assets and vulnerabilities and show only assets in Engineering.
SELECT a.hostname, a.department, v.cve_id, v.severity, v.cvss_score
FROM assets a
JOIN vulnerability_scan v
  ON a.hostname = v.asset_id_or_name
WHERE a.department = 'Engineering';

-- 47. Show the average CVSS score by owner.
SELECT a.owner, AVG(v.cvss_score) AS avg_cvss
FROM assets a
LEFT JOIN vulnerability_scan v
  ON a.hostname = v.asset_id_or_name
GROUP BY a.owner
ORDER BY avg_cvss DESC;

-- 48. Find assets with an average CVSS score of 7.0 or higher.
SELECT a.hostname, AVG(v.cvss_score) AS avg_cvss
FROM assets a
JOIN vulnerability_scan v
  ON a.hostname = v.asset_id_or_name
GROUP BY a.hostname
HAVING AVG(v.cvss_score) >= 7.0
ORDER BY avg_cvss DESC;

-- 49. Count vulnerabilities by severity for assets that are in Security.
SELECT v.severity, COUNT(*) AS vuln_count
FROM assets a
JOIN vulnerability_scan v
  ON a.hostname = v.asset_id_or_name
WHERE a.department = 'Security'
GROUP BY v.severity
ORDER BY vuln_count DESC;

-- 50. Build a simple risk summary using CASE and a weighted score.
SELECT a.hostname,
       a.department,
       MAX(v.cvss_score) AS max_cvss,
       SUM(CASE
             WHEN v.severity = 'Critical' THEN v.cvss_score * 4
             WHEN v.severity = 'High' THEN v.cvss_score * 3
             WHEN v.severity = 'Medium' THEN v.cvss_score * 2
             ELSE v.cvss_score
           END) AS weighted_risk_score
FROM assets a
JOIN vulnerability_scan v
  ON a.hostname = v.asset_id_or_name
GROUP BY a.hostname, a.department
ORDER BY weighted_risk_score DESC;
