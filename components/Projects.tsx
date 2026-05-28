'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronDown, ChevronUp, Shield, Network, Cloud, Server, Monitor, Lock, BarChart3, Search, FileText, Radar, ShieldCheck, HardDrive, Activity } from 'lucide-react'
import { stagger, fadeUp, scaleIn } from '@/lib/motion'

const projects = [
  {
    id: 0,
    title: 'Security Data Analyst Roadmap Portfolio',
    category: 'Cybersecurity / Data Analysis',
    icon: BarChart3,
    color: 'teal',
    summary: 'Built a beginner-friendly SOC analytics project with SQL practice, pandas cleaning, vulnerability analysis, and asset risk lookups.',
    tech: ['Python', 'pandas', 'SQL', 'CSV Analysis', 'Security Reporting', 'Data Cleaning'],
    featured: true,
    dashboardPreview: {
      loginFailures: [
        { label: 'apatel', value: 3 },
        { label: 'dwhite', value: 2 },
        { label: 'jdoe', value: 2 },
        { label: 'kpatel', value: 2 },
      ],
      severityBreakdown: [
        { label: 'Low', value: 2 },
        { label: 'Medium', value: 4 },
        { label: 'High', value: 6 },
        { label: 'Critical', value: 3 },
      ],
      topAssets: [
        { label: 'web01', value: 9.4 },
        { label: 'dc01', value: 9.8 },
        { label: 'ws01', value: 9.1 },
      ],
    },
    problem: 'Needed a realistic portfolio project that shows how a junior analyst turns raw security data into useful findings.',
    outcome: 'Created synthetic login, asset, and vulnerability datasets plus reusable scripts that generate clean reports, risk summaries, and dashboard planning notes.',
    security: 'Focused on SOC-style workflows such as failed login analysis, vulnerability severity review, join-based asset lookup, and remediation tracking.',
    challenges: 'Keeping the project beginner-friendly while still reflecting real analyst tasks and recruiter-ready documentation.',
  },
  {
    id: 7,
    title: 'Cybersecurity Portfolio: SOC and Cloud Security Labs',
    category: 'Cybersecurity',
    icon: Shield,
    color: 'teal',
    featured: true,
    summary: 'Built a recruiter-ready cybersecurity repository with five realistic labs covering SOC operations, Active Directory security, vulnerability management, packet analysis, and cloud IAM hardening.',
    tech: ['Wazuh/Splunk', 'Windows Event Logs', 'Linux Auth Logs', 'Nessus/OpenVAS', 'Wireshark', 'Nmap', 'AWS IAM', 'PowerShell', 'Python'],
    problem: 'Needed a professional, end-to-end portfolio that demonstrates practical SOC analyst workflows using realistic evidence and formal report writing.',
    outcome: 'Created a structured project repository with lab scenarios, sample logs, incident templates, and investigation notes that mirror entry-level analyst responsibilities.',
    security: 'Demonstrates authentication monitoring, AD identity investigations, vulnerability prioritization, network traffic analysis, and IAM least-privilege remediation in safe lab environments.',
    challenges: 'Balancing beginner-friendly setup guidance with realistic analyst documentation expected by recruiters and hiring managers.',
  },
  {
    id: 1,
    title: 'Enterprise VLAN Segmentation Lab',
    category: 'Networking',
    icon: Network,
    color: 'teal',
    summary: 'Designed and implemented a full enterprise VLAN topology with inter-VLAN routing, STP, and access control.',
    tech: ['Cisco IOS', 'VLANs', 'OSPF', 'STP', 'ACLs', 'Subnetting'],
    problem: 'Needed a secure segmented network to isolate departments and reduce broadcast domains while maintaining cross-VLAN communication.',
    outcome: 'Successfully deployed 8 VLANs across multiple switches with inter-VLAN routing, reducing broadcast traffic by 60% and enforcing granular access policies.',
    security: 'Implemented ACLs between VLANs, port security on access ports, and DHCP snooping to prevent rogue DHCP servers.',
    challenges: 'Resolving STP convergence issues and configuring DHCP relay agents across routed boundaries.',
  },
  {
    id: 2,
    title: 'SOC Home Lab with Wazuh',
    category: 'Cybersecurity',
    icon: Shield,
    color: 'sky',
    summary: 'Built a Security Operations Center lab using Wazuh SIEM for log collection, threat detection, and incident response.',
    tech: ['Wazuh', 'Elasticsearch', 'Ubuntu Server', 'Windows Server', 'Docker', 'Python'],
    problem: 'Needed practical hands-on experience with SIEM operations, log correlation, and detecting common attack patterns.',
    outcome: 'Deployed a fully functional SIEM monitoring 6 endpoints, detecting simulated attacks including brute force, privilege escalation, and lateral movement.',
    security: 'Configured custom detection rules, active response scripts, and integrated threat intelligence feeds.',
    challenges: 'Tuning alert thresholds to reduce false positives while maintaining detection sensitivity.',
  },
  {
    id: 3,
    title: 'Azure Site-to-Site VPN',
    category: 'Cloud',
    icon: Cloud,
    color: 'teal',
    summary: 'Configured a secure site-to-site VPN between on-premises infrastructure and Azure, creating a hybrid cloud environment.',
    tech: ['Azure', 'VPN Gateway', 'IKEv2', 'BGP', 'Azure AD', 'NSGs', 'Route Tables'],
    problem: 'Required seamless and encrypted connectivity between on-prem data center and Azure workloads for hybrid operations.',
    outcome: 'Achieved sub-20ms latency VPN tunnel with BGP dynamic routing, enabling hybrid workload migration and centralized identity management.',
    security: 'Enforced Network Security Groups, Just-in-Time VM access, and Azure Defender for cloud workload protection.',
    challenges: 'Resolving BGP route propagation conflicts and ensuring failover resilience with redundant tunnels.',
  },
  {
    id: 4,
    title: 'SIEM Threat Detection Dashboard',
    category: 'Cybersecurity',
    icon: Monitor,
    color: 'sky',
    summary: 'Built a real-time threat detection and visualization dashboard using Splunk with custom correlation rules.',
    tech: ['Splunk', 'SPL', 'Python', 'Syslog', 'Windows Event Logs', 'Forwarders'],
    problem: 'Needed centralized visibility across heterogeneous systems with actionable alerts for common attack vectors.',
    outcome: 'Deployed dashboards tracking 15 security KPIs with automated alerting, reducing mean-time-to-detect from hours to minutes.',
    security: 'Created correlation searches for brute force, malware C2 traffic, and data exfiltration patterns.',
    challenges: 'Normalizing log formats across Linux, Windows, and network devices into a unified data model.',
  },
  {
    id: 5,
    title: 'Active Directory Attack & Defense Lab',
    category: 'Cybersecurity',
    icon: Lock,
    color: 'teal',
    summary: 'Set up a full Active Directory domain lab to practice offensive and defensive techniques in a controlled environment.',
    tech: ['Windows Server', 'Active Directory', 'Kali Linux', 'BloodHound', 'PowerShell', 'Group Policy'],
    problem: 'Required hands-on experience with AD attack paths like Kerberoasting, Pass-the-Hash, and AS-REP Roasting alongside hardening techniques.',
    outcome: 'Successfully simulated 8 common AD attack techniques and implemented corresponding defenses, improving AD security posture significantly.',
    security: 'Applied LAPS, tiered admin model, Protected Users security group, and Credential Guard.',
    challenges: 'Maintaining lab isolation to prevent accidental exposure while keeping realistic domain complexity.',
  },
  {
    id: 6,
    title: 'Capstone: Enterprise Network Simulation',
    category: 'Networking',
    icon: Server,
    color: 'sky',
    summary: 'Collaborated on a full-scale enterprise network simulation with multiple sites, redundant links, and layered security.',
    tech: ['Cisco', 'OSPF', 'BGP', 'HSRP', 'VLANs', 'Firewalls', 'VPN', 'QoS'],
    problem: 'Design and deploy a multi-site enterprise network that mirrors real-world production environments with high availability and security.',
    outcome: 'Delivered a fully functional 3-site enterprise topology with redundant WAN links, sub-second failover, and enforced security policies.',
    security: 'Zone-based firewall policies, encrypted WAN links, IDS sensors at perimeter, and centralized syslog monitoring.',
    challenges: 'Coordinating OSPF area design across teams and resolving route redistribution loops between OSPF and BGP.',
  },
]

const repoBase = 'https://github.com/Pinklove4/My_Portfolio/tree/main/cybersecurity-portfolio'

const labCategories = [
  { key: 'soc-endpoint-security', label: 'SOC & Endpoint Security', icon: Shield },
  { key: 'network-defense', label: 'Network Defense', icon: Network },
  { key: 'detection-engineering', label: 'Detection Engineering', icon: Radar },
  { key: 'system-hardening', label: 'System Hardening', icon: ShieldCheck },
  { key: 'incident-response', label: 'Incident Response', icon: Activity },
  { key: 'threat-intelligence-hunting', label: 'Threat Intelligence & Hunting', icon: Monitor },
  { key: 'soc-operations-metrics', label: 'SOC Operations & Metrics', icon: BarChart3 },
  { key: 'iam-identity-monitoring', label: 'IAM & Identity Monitoring', icon: Lock },
  { key: 'application-security', label: 'Application Security', icon: Server },
  { key: 'cloud-security-iam', label: 'Cloud Security & IAM', icon: Cloud },
  { key: 'vulnerability-management', label: 'Vulnerability Management', icon: Shield },
  { key: 'governance-risk-compliance', label: 'Governance, Risk & Compliance', icon: FileText },
] as const

type ExpandedLab = {
  title: string
  slug: string
  categoryKey: (typeof labCategories)[number]['key']
  description: string
  technologies: string[]
  skills: string[]
  difficulty: 'Beginner' | 'Beginner-Intermediate' | 'Intermediate'
  realism: string
  metrics: {
    logs: number
    alerts: number
    systems: number
    diagrams: number
  }
  featured?: boolean
  caseStudy?: string
}

const expandedLabs: ExpandedLab[] = [
  {
    title: 'Endpoint Detection and Response Lab',
    slug: 'endpoint-detection-response-lab',
    categoryKey: 'soc-endpoint-security',
    description: 'Practiced analyzing simulated endpoint alerts, suspicious process behavior, and quarantine workflow decisions.',
    technologies: ['Microsoft Defender', 'Wazuh', 'Sysmon', 'PowerShell'],
    skills: ['Alert Triage', 'Endpoint Monitoring', 'Incident Documentation'],
    difficulty: 'Beginner-Intermediate',
    realism: 'Practice Investigation',
    metrics: { logs: 4, alerts: 3, systems: 2, diagrams: 1 },
    featured: true,
  },
  {
    title: 'Firewall Administration Lab',
    slug: 'firewall-administration-lab',
    categoryKey: 'network-defense',
    description: 'Configured defensive firewall rules and reviewed deny logs for suspicious outbound traffic patterns.',
    technologies: ['pfSense', 'Suricata', 'Wireshark'],
    skills: ['Firewall Rules', 'Network Monitoring', 'Traffic Validation'],
    difficulty: 'Beginner',
    realism: 'Security Hardening Lab',
    metrics: { logs: 3, alerts: 2, systems: 2, diagrams: 1 },
    featured: true,
  },
  {
    title: 'Secure Network Architecture Project',
    slug: 'secure-network-architecture-project',
    categoryKey: 'network-defense',
    description: 'Built segmented network zones in a home lab and tested controlled trust pathways between systems.',
    technologies: ['VLANs', 'pfSense', 'Nmap', 'VPN'],
    skills: ['Segmentation', 'ACL Testing', 'Network Defense'],
    difficulty: 'Intermediate',
    realism: 'Packet Analysis Walkthrough',
    metrics: { logs: 2, alerts: 2, systems: 4, diagrams: 2 },
    featured: true,
    caseStudy: `${repoBase}/case-studies/enterprise-vlan-segmentation-lab.md`,
  },
  {
    title: 'SIEM Correlation Rule Project',
    slug: 'siem-correlation-rule-project',
    categoryKey: 'detection-engineering',
    description: 'Created sample detection logic that correlated multiple events and reduced noisy one-off alerts.',
    technologies: ['Splunk', 'Wazuh', 'Python'],
    skills: ['Detection Logic', 'False Positive Tuning', 'SIEM Queries'],
    difficulty: 'Beginner-Intermediate',
    realism: 'Detection Tuning Exercise',
    metrics: { logs: 5, alerts: 4, systems: 3, diagrams: 1 },
    featured: true,
    caseStudy: `${repoBase}/case-studies/siem-threat-detection-dashboard.md`,
  },
  {
    title: 'Linux Security Hardening Project',
    slug: 'linux-security-hardening-project',
    categoryKey: 'system-hardening',
    description: 'Hardened Linux authentication and logging settings and validated defensive controls in simulation.',
    technologies: ['Ubuntu', 'Fail2Ban', 'auditd', 'OpenSSH'],
    skills: ['Linux Hardening', 'Auth Log Review', 'Control Validation'],
    difficulty: 'Beginner-Intermediate',
    realism: 'Security Hardening Lab',
    metrics: { logs: 3, alerts: 2, systems: 1, diagrams: 1 },
  },
  {
    title: 'Windows Security Hardening Project',
    slug: 'windows-security-hardening-project',
    categoryKey: 'system-hardening',
    description: 'Applied baseline hardening policies and reviewed Windows security event behavior before and after changes.',
    technologies: ['Windows Defender', 'BitLocker', 'Event Viewer'],
    skills: ['Windows Hardening', 'Policy Review', 'Endpoint Defense'],
    difficulty: 'Beginner',
    realism: 'Security Hardening Lab',
    metrics: { logs: 3, alerts: 2, systems: 1, diagrams: 1 },
  },
  {
    title: 'Secure File Server Project',
    slug: 'secure-file-server-project',
    categoryKey: 'system-hardening',
    description: 'Practiced SMB permission design and file access logging in a simulated role-based access setup.',
    technologies: ['Windows Server', 'SMB ACLs', 'PowerShell'],
    skills: ['Access Control', 'Audit Logging', 'RBAC Basics'],
    difficulty: 'Beginner-Intermediate',
    realism: 'Simulated Home Lab',
    metrics: { logs: 2, alerts: 1, systems: 1, diagrams: 1 },
  },
  {
    title: 'Email Threat Analysis Lab',
    slug: 'email-threat-analysis-lab',
    categoryKey: 'incident-response',
    description: 'Investigated simulated phishing alerts using header review and attachment triage workflow notes.',
    technologies: ['Defender for Office Concepts', 'Splunk', 'Sandbox Notes'],
    skills: ['Phishing Analysis', 'Triage Workflow', 'Analyst Notes'],
    difficulty: 'Beginner',
    realism: 'Practice Investigation',
    metrics: { logs: 3, alerts: 3, systems: 2, diagrams: 1 },
  },
  {
    title: 'Ransomware Investigation Project',
    slug: 'ransomware-investigation-project',
    categoryKey: 'incident-response',
    description: 'Worked through a simulated ransomware-style timeline and documented containment and recovery actions.',
    technologies: ['Wazuh', 'Sysmon', 'Windows Logs'],
    skills: ['Incident Timeline', 'Containment Steps', 'Recovery Notes'],
    difficulty: 'Beginner-Intermediate',
    realism: 'Practice Investigation',
    metrics: { logs: 4, alerts: 3, systems: 2, diagrams: 1 },
  },
  {
    title: 'Malware Analysis Basics Project',
    slug: 'malware-analysis-basics-project',
    categoryKey: 'incident-response',
    description: 'Practiced beginner static triage on simulated suspicious files and extracted basic IOC notes.',
    technologies: ['PowerShell', 'Hash Tools', 'Sandbox Workflow'],
    skills: ['File Triage', 'IOC Extraction', 'Documentation'],
    difficulty: 'Beginner',
    realism: 'Simulated Home Lab',
    metrics: { logs: 2, alerts: 2, systems: 1, diagrams: 1 },
  },
  {
    title: 'Threat Intelligence Platform Project',
    slug: 'threat-intelligence-platform-project',
    categoryKey: 'threat-intelligence-hunting',
    description: 'Organized sample IOC feeds and mapped indicators to simple detection use cases.',
    technologies: ['MISP-style Workflow', 'CSV IOC Feeds', 'Splunk'],
    skills: ['IOC Management', 'ATT&CK Mapping', 'Detection Context'],
    difficulty: 'Beginner-Intermediate',
    realism: 'Detection Tuning Exercise',
    metrics: { logs: 2, alerts: 2, systems: 2, diagrams: 1 },
  },
  {
    title: 'DNS Threat Monitoring Lab',
    slug: 'dns-threat-monitoring-lab',
    categoryKey: 'threat-intelligence-hunting',
    description: 'Reviewed DNS logs for suspicious high-entropy query behavior in controlled packet captures.',
    technologies: ['Wireshark', 'DNS Logs', 'Splunk'],
    skills: ['DNS Analysis', 'Packet Review', 'Threat Hunting'],
    difficulty: 'Beginner-Intermediate',
    realism: 'Packet Analysis Walkthrough',
    metrics: { logs: 4, alerts: 2, systems: 2, diagrams: 1 },
  },
  {
    title: 'Insider Threat Investigation',
    slug: 'insider-threat-investigation',
    categoryKey: 'threat-intelligence-hunting',
    description: 'Compared simulated baseline user activity against unusual file access patterns and documented findings.',
    technologies: ['SIEM Logs', 'PowerShell', 'File Access Audits'],
    skills: ['Behavior Analysis', 'Log Correlation', 'Risk Notes'],
    difficulty: 'Intermediate',
    realism: 'Practice Investigation',
    metrics: { logs: 3, alerts: 2, systems: 2, diagrams: 1 },
  },
  {
    title: 'Security Dashboard Visualization Project',
    slug: 'security-dashboard-visualization-project',
    categoryKey: 'soc-operations-metrics',
    description: 'Built SOC metric views to track alert trends, queue health, and triage performance in a lab.',
    technologies: ['Splunk Dashboards', 'CSV Metrics'],
    skills: ['Security Metrics', 'Data Visualization', 'SOC Reporting'],
    difficulty: 'Beginner-Intermediate',
    realism: 'Simulated Home Lab',
    metrics: { logs: 3, alerts: 3, systems: 2, diagrams: 1 },
  },
  {
    title: 'SOC Ticketing Workflow Project',
    slug: 'soc-ticketing-workflow-project',
    categoryKey: 'soc-operations-metrics',
    description: 'Simulated analyst ticket lifecycle from alert triage to escalation and closure notes.',
    technologies: ['Jira/ServiceNow Workflow', 'SIEM Alerts'],
    skills: ['Ticket Handling', 'Escalation Workflow', 'Analyst Communication'],
    difficulty: 'Beginner',
    realism: 'Practice Investigation',
    metrics: { logs: 2, alerts: 3, systems: 1, diagrams: 1 },
  },
  {
    title: 'Password Attack Detection Lab',
    slug: 'password-attack-detection-lab',
    categoryKey: 'iam-identity-monitoring',
    description: 'Analyzed simulated failed login bursts and tested lockout policy tuning for practical detection.',
    technologies: ['Active Directory Logs', 'Splunk', 'PowerShell'],
    skills: ['Identity Monitoring', 'Auth Analysis', 'Policy Validation'],
    difficulty: 'Beginner-Intermediate',
    realism: 'Detection Tuning Exercise',
    metrics: { logs: 4, alerts: 3, systems: 2, diagrams: 1 },
  },
  {
    title: 'Data Loss Prevention Lab',
    slug: 'data-loss-prevention-lab',
    categoryKey: 'iam-identity-monitoring',
    description: 'Practiced monitoring simulated USB exfiltration indicators and documented policy enforcement results.',
    technologies: ['DLP Policy Simulation', 'Endpoint Logs', 'Splunk'],
    skills: ['DLP Monitoring', 'Policy Testing', 'Evidence Notes'],
    difficulty: 'Beginner-Intermediate',
    realism: 'Practice Investigation',
    metrics: { logs: 3, alerts: 2, systems: 2, diagrams: 1 },
  },
  {
    title: 'Mobile Device Security Project',
    slug: 'mobile-device-security-project',
    categoryKey: 'iam-identity-monitoring',
    description: 'Reviewed simulated BYOD compliance signals and tested basic conditional access decision logic.',
    technologies: ['MDM Concepts', 'Conditional Access Notes', 'SIEM Logs'],
    skills: ['Device Compliance', 'Identity Controls', 'Monitoring'],
    difficulty: 'Beginner',
    realism: 'Simulated Home Lab',
    metrics: { logs: 2, alerts: 2, systems: 1, diagrams: 1 },
  },
  {
    title: 'Cybersecurity Governance Project',
    slug: 'cybersecurity-governance-project',
    categoryKey: 'governance-risk-compliance',
    description: 'Created practical security policy and risk register artifacts for home-lab governance practice.',
    technologies: ['Policy Templates', 'Risk Register', 'Security Awareness Plan'],
    skills: ['Security Documentation', 'Risk Tracking', 'Control Ownership'],
    difficulty: 'Beginner',
    realism: 'Simulated Home Lab',
    metrics: { logs: 1, alerts: 1, systems: 1, diagrams: 1 },
  },
  {
    title: 'Web Application Security Testing Project',
    slug: 'web-application-security-testing-project',
    categoryKey: 'application-security',
    description: 'Tested simulated OWASP-style flaws and documented defensive recommendations for beginner appsec practice.',
    technologies: ['Burp Suite Community', 'OWASP Test Lab', 'HTTP Logs'],
    skills: ['Web Security Testing', 'Input Validation Review', 'Findings Reporting'],
    difficulty: 'Intermediate',
    realism: 'Practice Investigation',
    metrics: { logs: 2, alerts: 2, systems: 2, diagrams: 1 },
  },
  {
    title: 'Cloud Incident Response Project',
    slug: 'cloud-incident-response-project',
    categoryKey: 'cloud-security-iam',
    description: 'Investigated simulated IAM misuse indicators in cloud audit logs and tested key rotation response steps.',
    technologies: ['AWS CloudTrail', 'IAM Review', 'Splunk'],
    skills: ['Cloud Log Review', 'IAM Incident Triage', 'Remediation Validation'],
    difficulty: 'Beginner-Intermediate',
    realism: 'Practice Investigation',
    metrics: { logs: 3, alerts: 3, systems: 2, diagrams: 1 },
    caseStudy: `${repoBase}/case-studies/cloud-iam-security-lab.md`,
  },
  {
    title: 'Container Security Project',
    slug: 'container-security-project',
    categoryKey: 'cloud-security-iam',
    description: 'Scanned simulated container images and reviewed basic runtime hardening controls in lab deployments.',
    technologies: ['Docker', 'Image Scanning', 'Kubernetes Basics'],
    skills: ['Container Hardening', 'Vulnerability Review', 'Cloud Security Basics'],
    difficulty: 'Beginner-Intermediate',
    realism: 'Security Hardening Lab',
    metrics: { logs: 2, alerts: 2, systems: 2, diagrams: 1 },
  },
  {
    title: 'Identity and Access Management Review',
    slug: 'identity-access-management-review',
    categoryKey: 'cloud-security-iam',
    description: 'Performed least-privilege review of simulated IAM and RBAC setups with practical remediation notes.',
    technologies: ['AWS IAM', 'Azure RBAC Concepts', 'PowerShell'],
    skills: ['Least Privilege', 'Access Review', 'Cloud IAM'],
    difficulty: 'Beginner-Intermediate',
    realism: 'Detection Tuning Exercise',
    metrics: { logs: 2, alerts: 2, systems: 2, diagrams: 1 },
    caseStudy: `${repoBase}/case-studies/cloud-iam-security-lab.md`,
  },
  {
    title: 'Patch Management Program',
    slug: 'patch-management-program',
    categoryKey: 'vulnerability-management',
    description: 'Tracked patch gaps, tested remediation windows, and validated improved vulnerability posture in simulation.',
    technologies: ['Nessus/OpenVAS Outputs', 'Patch Tracker CSV', 'PowerShell'],
    skills: ['Patch Validation', 'Risk Prioritization', 'Vulnerability Tracking'],
    difficulty: 'Beginner-Intermediate',
    realism: 'Simulated Home Lab',
    metrics: { logs: 2, alerts: 2, systems: 3, diagrams: 1 },
    caseStudy: `${repoBase}/case-studies/vulnerability-management-lab.md`,
  },
  {
    title: 'Secure Backup and Recovery Lab',
    slug: 'secure-backup-recovery-lab',
    categoryKey: 'vulnerability-management',
    description: 'Practiced backup validation and restore testing in simulated disruption scenarios.',
    technologies: ['Backup Workflow Notes', 'Restore Drills', 'Recovery Logs'],
    skills: ['Recovery Testing', 'Resilience Planning', 'Documentation'],
    difficulty: 'Beginner',
    realism: 'Simulated Home Lab',
    metrics: { logs: 2, alerts: 1, systems: 2, diagrams: 1 },
  },
]

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null)
  const [labSearch, setLabSearch] = useState('')
  const [labCategoryFilter, setLabCategoryFilter] = useState('all')
  const [labSkillFilter, setLabSkillFilter] = useState('all')

  const skillOptions = Array.from(new Set(expandedLabs.flatMap((lab) => lab.skills))).sort()

  const filteredLabs = expandedLabs.filter((lab) => {
    const matchesCategory = labCategoryFilter === 'all' || lab.categoryKey === labCategoryFilter
    const matchesSkill = labSkillFilter === 'all' || lab.skills.some((skill) => skill === labSkillFilter)
    const query = labSearch.trim().toLowerCase()
    const matchesSearch =
      query.length === 0
      || lab.title.toLowerCase().includes(query)
      || lab.description.toLowerCase().includes(query)
      || lab.technologies.some((tech) => tech.toLowerCase().includes(query))
      || lab.skills.some((skill) => skill.toLowerCase().includes(query))

    return matchesCategory && matchesSkill && matchesSearch
  })

  const featuredLabs = expandedLabs.filter((lab) => lab.featured)

  const renderMeter = (value: number, max: number, filledClass: string) => {
    const filledSegments = Math.max(1, Math.round((value / max) * 10))
    return (
      <div className="flex-1 h-2 grid grid-cols-10 gap-0.5 rounded-full bg-navy-800/80 overflow-hidden">
        {Array.from({ length: 10 }).map((_, index) => (
          <span
            key={index}
            className={`h-full rounded-full ${index < filledSegments ? filledClass : 'bg-navy-700/70'}`}
          />
        ))}
      </div>
    )
  }

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <motion.p variants={fadeUp} className="section-label">Portfolio</motion.p>
          <motion.h2 variants={fadeUp} className="section-title text-4xl lg:text-5xl mb-4">
            Featured Projects
          </motion.h2>
          <motion.p variants={fadeUp} className="text-brand-muted max-w-xl mx-auto">
            Technical case studies demonstrating hands-on expertise across networking, cybersecurity, and cloud infrastructure.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project) => {
            const Icon = project.icon
            const isExpanded = expanded === project.id
            return (
              <motion.div
                key={project.id}
                variants={scaleIn}
                layout
                className={`card-glass overflow-hidden flex flex-col ${project.featured ? 'ring-1 ring-teal-300/25 shadow-lg shadow-teal-300/5' : ''}`}
              >
                {/* Card header */}
                <div className="p-5 border-b border-navy-700/40">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      project.color === 'teal' ? 'bg-teal-300/15 border border-teal-300/30' : 'bg-sky-400/15 border border-sky-400/30'
                    }`}>
                      <Icon className={`w-5 h-5 ${project.color === 'teal' ? 'text-teal-300' : 'text-sky-400'}`} />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full font-sora ${
                      project.color === 'teal'
                        ? 'bg-teal-300/10 text-teal-300 border border-teal-300/20'
                        : 'bg-sky-400/10 text-sky-400 border border-sky-400/20'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] font-bold text-teal-300 bg-teal-300/10 border border-teal-300/20 rounded-full px-2.5 py-1 mb-3">
                      Featured Portfolio Project
                    </div>
                  )}
                  <h3 className="font-sora font-bold text-brand-light text-base mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{project.summary}</p>
                </div>

                {project.featured && project.dashboardPreview && (
                  <div className="px-5 py-4 border-b border-navy-700/30 bg-navy-900/30">
                    <div className="text-xs font-bold uppercase tracking-wide text-brand-muted mb-3">
                      Real analysis preview from generated CSV outputs
                    </div>

                    <div className="grid gap-3">
                      <div className="rounded-xl border border-navy-700/40 bg-navy-950/35 p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] uppercase tracking-wide text-brand-muted">Failed logins by user</span>
                          <span className="text-[10px] text-brand-muted">Top contributors</span>
                        </div>
                        <div className="space-y-2">
                          {project.dashboardPreview.loginFailures.map((item) => (
                            <div key={item.label} className="flex items-center gap-2">
                              <span className="w-16 shrink-0 text-[11px] text-brand-muted">{item.label}</span>
                              {renderMeter(item.value, 3, 'bg-gradient-to-r from-teal-300 to-sky-400')}
                              <span className="w-5 text-right text-[11px] text-brand-light font-semibold">{item.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="rounded-xl border border-navy-700/40 bg-navy-950/35 p-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] uppercase tracking-wide text-brand-muted">Vulnerabilities by severity</span>
                            <span className="text-[10px] text-brand-muted">14 findings</span>
                          </div>
                          <div className="space-y-2">
                            {project.dashboardPreview.severityBreakdown.map((item) => (
                              <div key={item.label} className="flex items-center gap-2">
                                <span className="w-14 shrink-0 text-[11px] text-brand-muted">{item.label}</span>
                                {renderMeter(
                                  item.value,
                                  6,
                                  item.label === 'Critical'
                                    ? 'bg-rose-400'
                                    : item.label === 'High'
                                      ? 'bg-amber-400'
                                      : item.label === 'Medium'
                                        ? 'bg-sky-400'
                                        : 'bg-teal-300'
                                )}
                                <span className="w-5 text-right text-[11px] text-brand-light font-semibold">{item.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-xl border border-navy-700/40 bg-navy-950/35 p-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] uppercase tracking-wide text-brand-muted">Top risky assets</span>
                            <span className="text-[10px] text-brand-muted">Max CVSS</span>
                          </div>
                          <div className="space-y-2">
                            {project.dashboardPreview.topAssets.map((item) => (
                              <div key={item.label} className="flex items-center gap-2">
                                <span className="w-14 shrink-0 text-[11px] text-brand-muted">{item.label}</span>
                                {renderMeter(item.value, 10, 'bg-gradient-to-r from-sky-400 to-teal-300')}
                                <span className="w-8 text-right text-[11px] text-brand-light font-semibold">{item.value.toFixed(1)}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <p className="text-[11px] text-brand-muted leading-relaxed">
                        Derived from synthetic CSV outputs created by the Python scripts in this repo. The dashboard preview reflects actual analysis results, not placeholder data.
                      </p>
                    </div>
                  </div>
                )}

                {/* Tech stack */}
                <div className="px-5 py-3 border-b border-navy-700/30">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="skill-tag text-[11px]">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Expandable details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 py-4 space-y-3 border-b border-navy-700/30">
                        {[
                          { label: 'Problem', value: project.problem },
                          { label: 'Outcome', value: project.outcome },
                          { label: 'Security', value: project.security },
                          { label: 'Challenges', value: project.challenges },
                        ].map(({ label, value }) => (
                          <div key={label}>
                            <div className={`text-xs font-bold uppercase tracking-wide mb-1 ${
                              project.color === 'teal' ? 'text-teal-300' : 'text-sky-400'
                            }`}>{label}</div>
                            <p className="text-brand-muted text-xs leading-relaxed">{value}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer */}
                <div className="px-5 py-3 mt-auto flex items-center justify-between">
                  <div className="flex gap-2">
                    <a
                      href={project.id === 7
                        ? 'https://github.com/Pinklove4/My_Portfolio/tree/main/cybersecurity-portfolio'
                        : 'https://github.com/Pinklove4'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-brand-muted hover:text-teal-300 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                    <a
                      href={project.id === 7
                        ? 'https://my-website-portfolio-beta-five.vercel.app/projects'
                        : '#'}
                      target={project.id === 7 ? '_blank' : undefined}
                      rel={project.id === 7 ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-1.5 text-xs text-brand-muted hover:text-sky-400 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Demo
                    </a>
                  </div>
                  <button
                    onClick={() => setExpanded(isExpanded ? null : project.id)}
                    className={`flex items-center gap-1 text-xs font-semibold transition-colors ${
                      project.color === 'teal'
                        ? 'text-teal-300 hover:text-teal-200'
                        : 'text-sky-400 hover:text-sky-300'
                    }`}
                  >
                    {isExpanded ? (
                      <><ChevronUp className="w-3.5 h-3.5" />Less</>
                    ) : (
                      <><ChevronDown className="w-3.5 h-3.5" />Details</>
                    )}
                  </button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 card-glass p-6 lg:p-7"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <p className="section-label mb-2">Expanded Labs</p>
            <h3 className="font-sora text-2xl lg:text-3xl text-brand-light mb-3">
              Expanded Labs: Practical Cybersecurity Skill Building
            </h3>
            <p className="text-brand-muted text-sm lg:text-base max-w-4xl leading-relaxed">
              These expanded labs demonstrate practical hands-on learning across SOC operations, network defense, vulnerability management, cloud security, endpoint monitoring, incident response, and security documentation. All projects are simulated and built in ethical home-lab environments.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-2xl border border-navy-700/40 bg-navy-950/35 p-4 lg:p-5 mb-6">
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-4">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-brand-muted absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  value={labSearch}
                  onChange={(event) => setLabSearch(event.target.value)}
                  placeholder="Search labs by title, skill, or technology"
                  className="w-full bg-navy-900/70 border border-navy-700/50 rounded-xl pl-10 pr-3 py-2.5 text-sm text-brand-light placeholder:text-brand-muted/70 focus:outline-none focus:border-teal-300/50"
                />
              </div>
              <select
                value={labCategoryFilter}
                onChange={(event) => setLabCategoryFilter(event.target.value)}
                className="bg-navy-900/70 border border-navy-700/50 rounded-xl px-3 py-2.5 text-sm text-brand-light focus:outline-none focus:border-teal-300/50"
              >
                <option value="all">All Categories</option>
                {labCategories.map((category) => (
                  <option key={category.key} value={category.key}>{category.label}</option>
                ))}
              </select>
              <select
                value={labSkillFilter}
                onChange={(event) => setLabSkillFilter(event.target.value)}
                className="bg-navy-900/70 border border-navy-700/50 rounded-xl px-3 py-2.5 text-sm text-brand-light focus:outline-none focus:border-teal-300/50"
              >
                <option value="all">All Skills</option>
                {skillOptions.map((skill) => (
                  <option key={skill} value={skill}>{skill}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] uppercase tracking-wide text-brand-muted font-semibold">Quick Jump:</span>
              {labCategories.map((category) => (
                <a
                  key={category.key}
                  href={`#expanded-lab-${category.key}`}
                  className="text-xs px-2.5 py-1 rounded-full border border-navy-700/50 text-brand-muted hover:text-sky-300 hover:border-sky-400/40 transition-colors"
                >
                  {category.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-sora text-lg text-brand-light">Featured Labs</h4>
              <span className="text-xs text-brand-muted">Focused starter projects for recruiter review</span>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3">
              {featuredLabs.map((lab) => (
                <div key={lab.slug} className="rounded-xl border border-teal-300/20 bg-teal-300/5 p-3">
                  <div className="text-[10px] uppercase tracking-wide text-teal-300 mb-1">Simulated Home Lab</div>
                  <h5 className="text-sm font-semibold text-brand-light leading-snug mb-2">{lab.title}</h5>
                  <p className="text-xs text-brand-muted line-clamp-3">{lab.description}</p>
                  <a
                    href={`${repoBase}/expanded-labs/${lab.categoryKey}/${lab.slug}/README.md`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Open README
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            {labCategories.map((category) => {
              const CategoryIcon = category.icon
              const categoryLabs = filteredLabs.filter((lab) => lab.categoryKey === category.key)

              if (categoryLabs.length === 0) {
                return null
              }

              return (
                <motion.div
                  key={category.key}
                  variants={fadeUp}
                  id={`expanded-lab-${category.key}`}
                  className="rounded-2xl border border-navy-700/40 bg-navy-950/25 p-4 lg:p-5"
                >
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-lg bg-sky-400/10 border border-sky-400/25 flex items-center justify-center">
                        <CategoryIcon className="w-4 h-4 text-sky-400" />
                      </span>
                      <h4 className="font-sora text-lg text-brand-light">{category.label}</h4>
                    </div>
                    <span className="text-xs text-brand-muted">{categoryLabs.length} labs</span>
                  </div>

                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {categoryLabs.map((lab) => (
                      <motion.article
                        key={lab.slug}
                        variants={scaleIn}
                        className="rounded-xl border border-navy-700/45 bg-navy-900/30 p-4 hover:border-teal-300/35 hover:bg-navy-900/45 transition-all duration-200"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h5 className="text-sm font-semibold text-brand-light leading-snug">{lab.title}</h5>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-navy-800 border border-navy-700 text-brand-muted whitespace-nowrap">
                            {lab.difficulty}
                          </span>
                        </div>

                        <p className="text-xs text-brand-muted leading-relaxed mb-3">{lab.description}</p>

                        <div className="flex flex-wrap gap-1.5 mb-3">
                          <span className="text-[10px] px-2 py-0.5 rounded-full border border-teal-300/30 bg-teal-300/10 text-teal-300">
                            {lab.realism}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-400">
                            Simulated Home Lab
                          </span>
                        </div>

                        <div className="text-[11px] text-brand-muted mb-2">Technologies:</div>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {lab.technologies.map((tech) => (
                            <span key={tech} className="skill-tag text-[10px]">{tech}</span>
                          ))}
                        </div>

                        <div className="text-[11px] text-brand-muted mb-2">Skill Tags:</div>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {lab.skills.map((skill) => (
                            <span key={skill} className="text-[10px] px-2 py-0.5 rounded-full border border-navy-600 text-brand-muted">{skill}</span>
                          ))}
                        </div>

                        <div className="text-[10px] text-brand-muted border border-navy-700/45 rounded-lg p-2 mb-3 bg-navy-950/40">
                          Logs reviewed: {lab.metrics.logs} | Alerts analyzed: {lab.metrics.alerts} | Systems hardened: {lab.metrics.systems} | Diagrams created: {lab.metrics.diagrams}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <a
                            href={`${repoBase}/expanded-labs/${lab.categoryKey}/${lab.slug}/README.md`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            README
                          </a>
                          <a
                            href={`${repoBase}/expanded-labs/assets/screenshots/${lab.slug}-mock-dashboard.svg`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-brand-muted hover:text-teal-300"
                          >
                            <HardDrive className="w-3.5 h-3.5" />
                            Mock Screenshot
                          </a>
                          {lab.caseStudy && (
                            <a
                              href={lab.caseStudy}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs text-brand-muted hover:text-teal-300"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              View Case Study
                            </a>
                          )}
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div variants={fadeUp} className="mt-6 pt-4 border-t border-navy-700/40 flex flex-wrap gap-3">
            <a
              href={`${repoBase}/expanded-labs`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              View Expanded Labs Repository
            </a>
            <a
              href={`${repoBase}/expanded-labs/assets/screenshots`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              View Visual Asset Placeholders
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
