'use client'

import { motion } from 'framer-motion'
import { fadeUp, scaleIn, stagger } from '@/lib/motion'

const repoBase = 'https://github.com/Pinklove4/My_Portfolio/blob/main/assets/lab'

const quickStats = [
  { label: 'Segments Tested', value: '5 VLANs' },
  { label: 'Security Platforms', value: 'pfSense, Snort, Wazuh, Splunk' },
  { label: 'Virtualization', value: 'Proxmox VE + Hyper-V' },
  { label: 'Remote Access', value: 'WireGuard + OpenVPN' },
]

const environmentOverview = [
  { component: 'Firewall', technology: 'pfSense + Snort', purpose: 'Routing, firewall rules, IDS alerts' },
  { component: 'Hypervisor', technology: 'Proxmox VE / Hyper-V', purpose: 'Virtual machine hosting' },
  { component: 'SIEM', technology: 'Wazuh + Splunk', purpose: 'Log collection and alert analysis' },
  { component: 'Monitoring', technology: 'Nagios + Grafana', purpose: 'Uptime, service, and metric monitoring' },
  { component: 'DNS/DHCP', technology: 'Pi-hole + Windows DHCP', purpose: 'DNS filtering and IP management' },
  { component: 'VPN', technology: 'WireGuard + OpenVPN', purpose: 'Secure remote lab access' },
  {
    component: 'Network Segmentation',
    technology: 'VLANs',
    purpose: 'Separation of management, servers, DMZ, IoT, and workstations',
  },
]

const vlanRows = [
  {
    vlan: 'VLAN 10',
    name: 'Management',
    purpose: 'Admin access and network device management',
    systems: 'pfSense, Proxmox, switches',
    notes: 'Restricted access only',
  },
  {
    vlan: 'VLAN 20',
    name: 'Servers',
    purpose: 'Internal server workloads',
    systems: 'Windows Server, Ubuntu Server, AD lab',
    notes: 'Logged and monitored',
  },
  {
    vlan: 'VLAN 30',
    name: 'DMZ',
    purpose: 'Public-facing lab services',
    systems: 'Web server, test apps',
    notes: 'Limited internal access',
  },
  {
    vlan: 'VLAN 40',
    name: 'IoT',
    purpose: 'Isolated lab and IoT devices',
    systems: 'Test devices',
    notes: 'Blocked from management VLAN',
  },
  {
    vlan: 'VLAN 50',
    name: 'Workstations',
    purpose: 'User endpoint simulation',
    systems: 'Windows 10/11 clients, Linux desktop',
    notes: 'Used for endpoint monitoring',
  },
]

const securityControls = [
  'VLAN segmentation',
  'Firewall ACLs',
  'IDS and IPS monitoring with Snort',
  'Centralized logging',
  'SIEM alerting',
  'VPN-only management access',
  'DNS filtering',
  'Endpoint monitoring',
  'Vulnerability scanning',
  'Backup and recovery testing',
]

const practiceItems = [
  'Configuring firewall rules',
  'Reviewing IDS alerts',
  'Building VLANs',
  'Testing inter-VLAN routing',
  'Deploying virtual machines',
  'Forwarding logs to Wazuh and Splunk',
  'Monitoring uptime with Nagios and Grafana',
  'Troubleshooting VPN connectivity',
  'Documenting network changes',
]

const evidenceCards = [
  {
    title: 'pfSense Firewall Rules',
    accent: 'teal',
    status: 'Policy review complete',
    detail: 'Allow VPN management, restrict IoT to management, log DMZ ingress decisions.',
  },
  {
    title: 'VLAN Configuration',
    accent: 'sky',
    status: 'Trunk and access ports verified',
    detail: 'Tested VLAN tagging across the core switch and validated expected segmentation paths.',
  },
  {
    title: 'Proxmox VM Dashboard',
    accent: 'teal',
    status: 'Lab hosts online',
    detail: 'Windows Server, Ubuntu server, and analyst workstations deployed for simulation tasks.',
  },
  {
    title: 'Wazuh Agent Status',
    accent: 'sky',
    status: 'Agents checking in',
    detail: 'Confirmed endpoint visibility and agent registration after firewall adjustments.',
  },
  {
    title: 'Splunk Log Ingestion',
    accent: 'teal',
    status: 'Firewall logs searchable',
    detail: 'Reviewed source type mapping and validated searches against pfSense traffic events.',
  },
  {
    title: 'Nagios Service Checks',
    accent: 'sky',
    status: 'Monitoring healthy',
    detail: 'Validated ICMP and service polling across the server and workstation segments.',
  },
  {
    title: 'Grafana Lab Metrics',
    accent: 'teal',
    status: 'Dashboards populated',
    detail: 'Tracked host uptime, service state, and selected performance metrics for trend visibility.',
  },
  {
    title: 'WireGuard Tunnel Status',
    accent: 'sky',
    status: 'Remote access validated',
    detail: 'Confirmed encrypted access path into the lab before allowing management workflows.',
  },
]

const troubleshootingNotes = [
  'VLAN routing initially failed because an interface was not tagged correctly on the trunk port.',
  'Wazuh agents did not appear until firewall rules allowed agent communication.',
  'VPN connection failed during testing due to mismatched peer keys.',
  'Splunk log ingestion required source type adjustments.',
  'Nagios checks failed until ICMP and service ports were allowed between VLANs.',
]

const validationTests = [
  'Ping tests between allowed VLANs',
  'Blocked access tests from IoT to Management VLAN',
  'VPN tunnel connection test',
  'Wazuh agent check-in verification',
  'Splunk search returning firewall logs',
  'Nagios service check passing',
  'DNS filtering test through Pi-hole',
]

const lessonsLearned = [
  'Segmentation improves security by reducing unnecessary communication paths between systems.',
  'Centralized logging makes it easier to review suspicious activity across multiple devices.',
  'Firewall rules directly affect both access and security visibility, so rule review matters.',
  'Monitoring and alerting reduce response time by surfacing failures and suspicious behavior quickly.',
  'Troubleshooting infrastructure issues improves understanding of how systems interact in practice.',
]

const nextImprovements = [
  'Automate firewall rule documentation',
  'Add more realistic endpoint telemetry',
  'Expand Active Directory logging',
  'Add backup monitoring',
  'Create more SIEM detection rules',
  'Test disaster recovery scenarios',
]

const resumeBullets = [
  'Built an enterprise-style home lab using pfSense, VLAN segmentation, Proxmox, Wazuh, Splunk, and Nagios to practice security monitoring and infrastructure troubleshooting.',
  'Configured segmented lab networks for management, servers, DMZ, IoT, and workstations to practice access control, firewall rule testing, and log monitoring.',
  'Documented lab validation tests, troubleshooting steps, and security controls to demonstrate practical SOC, networking, and infrastructure support skills.',
]

const artifactGroups = [
  {
    title: 'Mock Screenshots',
    items: [
      { label: 'pfSense Firewall Rules', href: `${repoBase}/screenshots/pfsense-firewall-rules.svg` },
      { label: 'VLAN Configuration', href: `${repoBase}/screenshots/vlan-configuration.svg` },
      { label: 'Proxmox VM Dashboard', href: `${repoBase}/screenshots/proxmox-vm-dashboard.svg` },
      { label: 'Wazuh Agent Status', href: `${repoBase}/screenshots/wazuh-agent-status.svg` },
      { label: 'Splunk Firewall Logs', href: `${repoBase}/screenshots/splunk-firewall-logs.svg` },
      { label: 'Nagios Service Checks', href: `${repoBase}/screenshots/nagios-service-checks.svg` },
      { label: 'Grafana Lab Metrics', href: `${repoBase}/screenshots/grafana-lab-metrics.svg` },
      { label: 'Pi-hole DNS Filtering', href: `${repoBase}/screenshots/pihole-dns-filtering.svg` },
      { label: 'WireGuard Tunnel Status', href: `${repoBase}/screenshots/wireguard-tunnel-status.svg` },
    ],
  },
  {
    title: 'Diagrams',
    items: [
      { label: 'Home Lab Topology', href: `${repoBase}/diagrams/home-lab-topology.md` },
      { label: 'VLAN Segmentation', href: `${repoBase}/diagrams/vlan-segmentation.md` },
      { label: 'SIEM Log Flow', href: `${repoBase}/diagrams/siem-log-flow.md` },
      { label: 'VPN Access Flow', href: `${repoBase}/diagrams/vpn-access-flow.md` },
    ],
  },
  {
    title: 'Logs',
    items: [
      { label: 'pfSense Firewall Deny Log', href: `${repoBase}/logs/pfsense-firewall-deny.log` },
      { label: 'Wazuh Agent Check-In Log', href: `${repoBase}/logs/wazuh-agent-checkin.log` },
      { label: 'VPN Connection Test Log', href: `${repoBase}/logs/vpn-connection-test.log` },
      { label: 'DNS Filtering Test Log', href: `${repoBase}/logs/dns-filtering-test.log` },
    ],
  },
  {
    title: 'Reports',
    items: [
      { label: 'Lab Validation Report', href: `${repoBase}/reports/lab-validation-report.md` },
      { label: 'VLAN Segmentation Report', href: `${repoBase}/reports/vlan-segmentation-report.md` },
      { label: 'Firewall Rule Review', href: `${repoBase}/reports/firewall-rule-review.md` },
    ],
  },
]

const mermaidTopology = String.raw`flowchart TD
  Internet[Internet] --> Firewall[pfSense Firewall]
  Firewall --> Switch[Managed Core Switch]
  Firewall --> VPN[WireGuard / OpenVPN]
  Switch --> VLAN10[VLAN 10 Management]
  Switch --> VLAN20[VLAN 20 Servers]
  Switch --> VLAN30[VLAN 30 DMZ]
  Switch --> VLAN40[VLAN 40 IoT]
  Switch --> VLAN50[VLAN 50 Workstations]
  VLAN10 --> Mgmt[pfSense / Proxmox / Switch Admin]
  VLAN20 --> Servers[Windows Server / Ubuntu Server / AD Lab]
  VLAN30 --> DMZ[Web Server / Test Apps]
  VLAN40 --> IoT[Test Devices]
  VLAN50 --> Workstations[Windows 10/11 / Linux Desktop]
  Servers --> SIEM[Wazuh + Splunk]
  Servers --> Monitoring[Nagios + Grafana]
  Firewall --> SIEM
  Firewall --> Monitoring`

const logSamples = {
  firewall:
    'May 28 20:14:10 firewall filterlog: 1000000103 block in on em1.40: 10.40.0.22:51514 -> 10.10.0.5:3389 TCP S',
  wazuh: '2026-05-28T20:17:44 agent-07 connected from 10.50.0.24 and completed registration with manager',
  vpn: '2026-05-28 20:22:18 peer-laptop handshake complete, tunnel 10.8.0.2 assigned, management access allowed',
}

const downloadableReportPath = '/downloads/teliyah-perez-home-lab-report'

export default function HomeLab() {
  return (
    <section id="homelab" className="relative overflow-hidden bg-navy-900/30 py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-700/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-navy-700/60 to-transparent" />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(rgba(14,165,233,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.03) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-14 text-center"
        >
          <motion.p variants={fadeUp} className="section-label">
            Infrastructure / Home Lab
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title mb-4 text-4xl lg:text-5xl">
            Simulated Home Lab & Network Topology
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto max-w-3xl text-base leading-7 text-brand-muted md:text-lg">
            An enterprise-style home lab designed to simulate real-world infrastructure, networking, and security
            monitoring workflows. This simulated home-lab environment was built for hands-on learning across
            firewall administration, VLAN segmentation, virtualization, SIEM analysis, monitoring, VPN access, and
            technical troubleshooting.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
              Simulated home-lab environment
            </span>
            <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
              Designed for hands-on learning
            </span>
            <span className="rounded-full border border-navy-600/60 bg-navy-800/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-muted">
              Cybersecurity Analyst / SOC Analyst candidate
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {quickStats.map((stat) => (
            <motion.div key={stat.label} variants={scaleIn} className="card-glass p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-muted">{stat.label}</p>
              <p className="mt-2 font-sora text-xl font-bold text-brand-light">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="card-glass p-6 lg:p-7"
          >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-sora text-lg font-bold text-brand-light">Purpose of the Lab</h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-brand-muted">
                  This lab was built to practice enterprise-style networking, firewall administration, VLAN
                  segmentation, SIEM monitoring, infrastructure monitoring, VPN access, and security troubleshooting
                  in a safe simulated environment.
                </p>
              </div>
              <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-xs leading-6 text-amber-100">
                Built to simulate enterprise-style concepts without claiming a real production environment.
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-navy-700/60 bg-navy-950/60 p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h4 className="font-sora text-sm font-bold uppercase tracking-[0.18em] text-brand-light">
                    Network Topology Diagram
                  </h4>
                  <span className="text-xs text-brand-muted">Mermaid.js syntax</span>
                </div>
                <pre className="overflow-x-auto rounded-xl border border-teal-300/15 bg-[#08131d] p-4 text-[11px] leading-6 text-teal-200">
                  <code>{mermaidTopology}</code>
                </pre>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-sky-400/20 bg-sky-400/10 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-200">Candidate Positioning</p>
                  <p className="mt-3 text-sm leading-7 text-brand-light">
                    Hands-on infrastructure, networking, cloud, and security monitoring lab experience with a focus
                    on practical validation, reviewed logs, tested segmentation, and documented troubleshooting.
                  </p>
                </div>
                <div className="rounded-2xl border border-navy-700/60 bg-navy-950/60 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-muted">Validation Snapshot</p>
                  <div className="mt-4 space-y-3 text-xs text-brand-muted">
                    <div className="rounded-xl border border-navy-700/50 bg-navy-900/80 p-3">
                      <p className="mb-1 text-[10px] uppercase tracking-[0.18em] text-teal-300">Firewall</p>
                      <code className="block text-[11px] leading-5 text-brand-light">{logSamples.firewall}</code>
                    </div>
                    <div className="rounded-xl border border-navy-700/50 bg-navy-900/80 p-3">
                      <p className="mb-1 text-[10px] uppercase tracking-[0.18em] text-sky-300">Wazuh</p>
                      <code className="block text-[11px] leading-5 text-brand-light">{logSamples.wazuh}</code>
                    </div>
                    <div className="rounded-xl border border-navy-700/50 bg-navy-900/80 p-3">
                      <p className="mb-1 text-[10px] uppercase tracking-[0.18em] text-emerald-300">VPN</p>
                      <code className="block text-[11px] leading-5 text-brand-light">{logSamples.vpn}</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <div className="card-glass p-6">
              <h3 className="font-sora text-lg font-bold text-brand-light">What I Practiced</h3>
              <div className="mt-4 grid gap-3">
                {practiceItems.map((item) => (
                  <div key={item} className="rounded-xl border border-navy-700/50 bg-navy-900/70 px-4 py-3 text-sm text-brand-muted">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-glass p-6">
              <h3 className="font-sora text-lg font-bold text-brand-light">Security Controls Implemented</h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {securityControls.map((control) => (
                  <span key={control} className="skill-tag">
                    {control}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 card-glass p-6 lg:p-7"
        >
          <h3 className="font-sora text-lg font-bold text-brand-light">Lab Environment Overview</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full divide-y divide-navy-700/60 text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-[0.18em] text-brand-muted">
                  <th className="pb-3 pr-6">Component</th>
                  <th className="pb-3 pr-6">Technology</th>
                  <th className="pb-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-700/40">
                {environmentOverview.map((row) => (
                  <tr key={row.component}>
                    <td className="py-4 pr-6 font-medium text-brand-light">{row.component}</td>
                    <td className="py-4 pr-6 text-teal-300">{row.technology}</td>
                    <td className="py-4 text-brand-muted">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 card-glass p-6 lg:p-7"
        >
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="font-sora text-lg font-bold text-brand-light">VLAN Segmentation Table</h3>
              <p className="mt-2 text-sm leading-7 text-brand-muted">
                Segmentation was designed for hands-on learning so I could test routing, access control, monitoring,
                and troubleshooting between common infrastructure zones.
              </p>
            </div>
            <p className="max-w-sm text-sm leading-7 text-brand-muted">
              Access between segments was tested deliberately rather than assumed, especially between management,
              IoT, and public-facing services.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-navy-700/60 text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-[0.18em] text-brand-muted">
                  <th className="pb-3 pr-4">VLAN</th>
                  <th className="pb-3 pr-4">Name</th>
                  <th className="pb-3 pr-4">Purpose</th>
                  <th className="pb-3 pr-4">Example Systems</th>
                  <th className="pb-3">Security Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-700/40">
                {vlanRows.map((row) => (
                  <tr key={row.vlan}>
                    <td className="py-4 pr-4 font-sora font-bold text-sky-300">{row.vlan}</td>
                    <td className="py-4 pr-4 font-medium text-brand-light">{row.name}</td>
                    <td className="py-4 pr-4 text-brand-muted">{row.purpose}</td>
                    <td className="py-4 pr-4 text-brand-muted">{row.systems}</td>
                    <td className="py-4 text-brand-muted">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-8"
        >
          <div className="mb-5">
            <h3 className="font-sora text-lg font-bold text-brand-light">Hands-On Evidence</h3>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-brand-muted">
              These mock evidence panels are designed to represent the kinds of screenshots and dashboards reviewed
              during lab exercises when practicing infrastructure support and security monitoring workflows.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {evidenceCards.map((card) => {
              const accentClass = card.accent === 'teal' ? 'text-teal-300' : 'text-sky-300'
              const borderClass = card.accent === 'teal' ? 'border-teal-300/20 bg-teal-300/8' : 'border-sky-400/20 bg-sky-400/8'

              return (
                <motion.div key={card.title} variants={scaleIn} className="card-glass overflow-hidden p-0">
                  <div className={`border-b px-4 py-3 ${borderClass}`}>
                    <p className={`font-sora text-sm font-bold ${accentClass}`}>{card.title}</p>
                    <p className="mt-1 text-xs text-brand-muted">{card.status}</p>
                  </div>
                  <div className="space-y-3 p-4">
                    <div className="rounded-xl border border-navy-700/60 bg-[#08131d] p-3">
                      <div className="mb-3 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-rose-400" />
                        <span className="h-2 w-2 rounded-full bg-amber-300" />
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 rounded-full bg-navy-700/70" />
                        <div className="h-2 w-4/5 rounded-full bg-navy-700/70" />
                        <div className="h-16 rounded-xl border border-navy-700/40 bg-gradient-to-br from-navy-800 to-navy-950" />
                      </div>
                    </div>
                    <p className="text-sm leading-6 text-brand-muted">{card.detail}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <div className="mt-8 grid gap-8 xl:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="card-glass p-6 lg:p-7"
          >
            <h3 className="font-sora text-lg font-bold text-brand-light">Troubleshooting Notes</h3>
            <div className="mt-4 space-y-3">
              {troubleshootingNotes.map((note, index) => (
                <div key={note} className="rounded-2xl border border-navy-700/50 bg-navy-900/70 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-brand-muted">Issue {index + 1}</p>
                  <p className="mt-2 text-sm leading-7 text-brand-muted">{note}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="card-glass p-6 lg:p-7"
          >
            <h3 className="font-sora text-lg font-bold text-brand-light">How I Validated the Lab</h3>
            <div className="mt-4 space-y-3">
              {validationTests.map((test) => (
                <div key={test} className="flex items-start gap-3 rounded-2xl border border-navy-700/50 bg-navy-900/70 p-4">
                  <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-emerald-300" />
                  <p className="text-sm leading-7 text-brand-muted">{test}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1fr_1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="card-glass p-6 lg:p-7"
          >
            <h3 className="font-sora text-lg font-bold text-brand-light">Lessons Learned</h3>
            <div className="mt-4 space-y-3">
              {lessonsLearned.map((lesson) => (
                <div key={lesson} className="rounded-xl border border-navy-700/50 bg-navy-900/70 px-4 py-3 text-sm leading-7 text-brand-muted">
                  {lesson}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="card-glass p-6 lg:p-7"
          >
            <h3 className="font-sora text-lg font-bold text-brand-light">What I Would Improve Next</h3>
            <div className="mt-4 space-y-3">
              {nextImprovements.map((item) => (
                <div key={item} className="rounded-xl border border-navy-700/50 bg-navy-900/70 px-4 py-3 text-sm leading-7 text-brand-muted">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="card-glass p-6 lg:p-7"
          >
            <h3 className="font-sora text-lg font-bold text-brand-light">Resume Bullets</h3>
            <div className="mt-4 space-y-3">
              {resumeBullets.map((bullet) => (
                <div key={bullet} className="rounded-xl border border-navy-700/50 bg-navy-900/70 px-4 py-3 text-sm leading-7 text-brand-muted">
                  {bullet}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 card-glass p-6 lg:p-7"
        >
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <h3 className="font-sora text-lg font-bold text-brand-light">Recruiter Report</h3>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-brand-muted">
                This printable PDF-style summary gives recruiters and hiring managers a concise overview of the lab
                purpose, topology, security controls, validation checks, and troubleshooting evidence without making
                claims about a real production environment.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={downloadableReportPath} target="_blank" rel="noreferrer" className="btn-primary">
                  Open Report
                </a>
                <a href={downloadableReportPath} target="_blank" rel="noreferrer" className="btn-outline">
                  Printable View
                </a>
              </div>
              <p className="mt-4 text-xs leading-6 text-brand-muted">
                The report is formatted for screen reading and printing, so it can be saved as a PDF from the browser
                if needed.
              </p>
            </div>

            <div className="rounded-2xl border border-navy-700/50 bg-[#f6f8fb] p-5 text-slate-800 shadow-2xl shadow-black/20">
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Preview</p>
                <h4 className="mt-3 font-sora text-xl font-bold text-slate-900">Infrastructure / Home Lab Report</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Simulated home-lab environment built for hands-on learning in network segmentation, firewall rule
                  design, SIEM monitoring, VPN testing, virtualization, and troubleshooting.
                </p>
                <div className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">pfSense + Snort</div>
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">Wazuh + Splunk</div>
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">Proxmox VE + Hyper-V</div>
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">WireGuard + OpenVPN</div>
                </div>
                <div className="mt-5 border-t border-dashed border-slate-200 pt-4 text-xs leading-6 text-slate-500">
                  Includes validation tests, troubleshooting notes, segmentation summary, and resume-ready takeaways.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 card-glass p-6 lg:p-7"
        >
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="font-sora text-lg font-bold text-brand-light">Documentation & Artifacts</h3>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-brand-muted">
                Supporting notes, reports, and log samples are included to show documentation skills alongside the
                hands-on lab work.
              </p>
            </div>
            <p className="text-sm text-brand-muted">Built for entry-level to early mid-level cybersecurity and infrastructure roles.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {artifactGroups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-navy-700/50 bg-navy-900/70 p-5">
                <h4 className="font-sora text-sm font-bold uppercase tracking-[0.18em] text-brand-light">{group.title}</h4>
                <div className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-xl border border-navy-700/50 bg-navy-950/60 px-4 py-3 text-sm text-brand-muted transition hover:border-teal-300/40 hover:text-teal-300"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
