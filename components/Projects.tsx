'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronDown, ChevronUp, Shield, Network, Cloud, Server, Monitor, Lock, BarChart3 } from 'lucide-react'
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

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null)

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
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-brand-muted hover:text-teal-300 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                    <a
                      href="#"
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
      </div>
    </section>
  )
}
