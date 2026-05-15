'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stagger, fadeUp, scaleIn } from '@/lib/motion'

const categories = [
  {
    id: 'networking',
    label: 'Networking',
    color: 'teal',
    skills: [
      'Cisco IOS', 'OSPF', 'BGP', 'EIGRP', 'VLANs', 'STP',
      'Subnetting', 'TCP/IP', 'Routing & Switching', 'WAN Technologies',
      'QoS', 'IPv6', 'NAT/PAT', 'MPLS',
    ],
  },
  {
    id: 'cybersecurity',
    label: 'Cybersecurity',
    color: 'sky',
    skills: [
      'Palo Alto', 'Fortinet', 'pfSense', 'ACLs', 'IDS/IPS',
      'Zero Trust', 'Penetration Testing', 'OWASP', 'SSL/TLS',
      'VPN Tunneling', 'Network Hardening', 'PKI',
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud',
    color: 'teal',
    skills: [
      'Microsoft Azure', 'AWS', 'Google Cloud', 'Hybrid Cloud',
      'Azure VPN Gateway', 'S2S VPN', 'Cloud Networking',
      'Azure AD', 'Route Tables', 'NSGs', 'ARM Templates',
    ],
  },
  {
    id: 'sysadmin',
    label: 'Systems Admin',
    color: 'sky',
    skills: [
      'Linux / Ubuntu', 'Windows Server', 'Active Directory',
      'DNS', 'DHCP', 'FTP', 'Hyper-V', 'Proxmox',
      'VMware', 'Clustering', 'Failover', 'Group Policy',
    ],
  },
  {
    id: 'automation',
    label: 'Automation',
    color: 'teal',
    skills: [
      'Python', 'PowerShell', 'Bash', 'Ansible', 'Terraform',
      'Git', 'CI/CD', 'Docker', 'Kubernetes', 'REST APIs',
    ],
  },
  {
    id: 'monitoring',
    label: 'Monitoring & SIEM',
    color: 'sky',
    skills: [
      'Wireshark', 'Nagios', 'Splunk', 'Wazuh', 'Grafana',
      'Prometheus', 'ELK Stack', 'SNMP', 'NetFlow', 'Syslog',
    ],
  },
]

const coreTechnicalSkills = [
  {
    area: 'Security Operations (SOC)',
    details:
      'SIEM workflows, log analysis, alert triage, incident documentation, escalation communications; incident lifecycle (identify, contain, eradicate, recover); indicators of compromise (IOCs); initial triage and preliminary investigation; event correlation; evidence collection and preservation; post-incident remediation validation.',
    color: 'sky',
  },
  {
    area: 'GRC / Risk & Compliance',
    details:
      'Policy and procedure documentation, control mapping concepts, evidence collection, risk tracking, audit readiness.',
    color: 'teal',
  },
  {
    area: 'Vulnerability Management',
    details:
      'Vulnerability scanning (Nessus), remediation tracking, baseline validation, hardening concepts.',
    color: 'sky',
  },
  {
    area: 'Identity & Access',
    details:
      'Active Directory (AD DS), Group Policy (GPO), least-privilege concepts, account lifecycle support, BitLocker, WIM imaging.',
    color: 'teal',
  },
  {
    area: 'Network Security',
    details:
      'Firewall configuration, IDS/IPS, VPN, network segmentation, VLANs, routing and switching, TCP/IP, subnetting.',
    color: 'sky',
  },
  {
    area: 'Cloud & Hybrid',
    details:
      'AWS (VPC, EC2, S3, IAM), Microsoft Azure (VMs, virtual networks, hybrid connectivity).',
    color: 'teal',
  },
  {
    area: 'Scripting & Automation',
    details:
      'PowerShell, Python, Bash, Ansible, Git/GitHub.',
    color: 'sky',
  },
  {
    area: 'Endpoint Management & Ticketing',
    details:
      'UEM platforms (Intune, Jamf), ticketing systems (ServiceNow, Jira), macOS troubleshooting (Keychain, FileVault, MDM enrollment).',
    color: 'teal',
  },
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState('networking')
  const active = categories.find((c) => c.id === activeTab)!

  return (
    <section id="skills" className="py-24 lg:py-32 relative bg-navy-900/30">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-700/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-navy-700/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <motion.p variants={fadeUp} className="section-label">Expertise</motion.p>
          <motion.h2 variants={fadeUp} className="section-title text-4xl lg:text-5xl mb-4">
            Technical Skills
          </motion.h2>
          <motion.p variants={fadeUp} className="text-brand-muted max-w-xl mx-auto">
            A comprehensive toolkit built across networking, security, cloud, and automation disciplines.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="card-glass p-6 md:p-8 mb-10"
        >
          <p className="section-label mb-2">Core Capabilities</p>
          <h3 className="font-sora font-bold text-brand-light text-2xl mb-6">
            Core Technical Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {coreTechnicalSkills.map((item) => (
              <div
                key={item.area}
                className={`rounded-xl border p-4 bg-navy-900/50 transition-all duration-200 hover:-translate-y-0.5 ${
                  item.color === 'teal'
                    ? 'border-teal-300/25 hover:border-teal-300/45'
                    : 'border-sky-400/25 hover:border-sky-400/45'
                }`}
              >
                <h4
                  className={`font-sora font-bold text-sm mb-2 ${
                    item.color === 'teal' ? 'text-teal-300' : 'text-sky-400'
                  }`}
                >
                  {item.area}
                </h4>
                <p className="text-brand-muted text-sm leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold font-sora transition-all duration-200 ${
                activeTab === cat.id
                  ? cat.color === 'teal'
                    ? 'bg-teal-300/20 text-teal-300 border border-teal-300/50'
                    : 'bg-sky-500/20 text-sky-400 border border-sky-500/50'
                  : 'bg-navy-800/50 text-brand-muted border border-navy-700/50 hover:border-navy-600/80 hover:text-brand-light'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={stagger}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="card-glass p-8"
          >
            <motion.h3
              variants={fadeUp}
              className={`font-sora font-bold text-lg mb-6 ${
                active.color === 'teal' ? 'text-teal-300' : 'text-sky-400'
              }`}
            >
              {active.label}
            </motion.h3>
            <motion.div
              variants={stagger}
              className="flex flex-wrap gap-2.5"
            >
              {active.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className={`skill-tag ${
                    active.color === 'teal'
                      ? 'hover:border-teal-300/50 hover:text-teal-300'
                      : 'hover:border-sky-400/50 hover:text-sky-400'
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* All categories overview grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-6"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`card-glass p-4 text-center transition-all duration-200 hover:border-navy-600/80 ${
                activeTab === cat.id
                  ? cat.color === 'teal'
                    ? 'border-teal-300/40 bg-teal-300/5'
                    : 'border-sky-400/40 bg-sky-400/5'
                  : ''
              }`}
            >
              <div className={`font-sora font-bold text-xs ${
                activeTab === cat.id
                  ? cat.color === 'teal' ? 'text-teal-300' : 'text-sky-400'
                  : 'text-brand-muted'
              }`}>
                {cat.label}
              </div>
              <div className="text-brand-muted/60 text-xs mt-0.5">{cat.skills.length} skills</div>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
