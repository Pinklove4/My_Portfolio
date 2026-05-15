'use client'

import { motion } from 'framer-motion'
import { stagger, fadeUp, scaleIn } from '@/lib/motion'

const nodes = [
  { id: 'internet', label: 'Internet', type: 'cloud', x: '50%', y: '2%', icon: '🌐' },
  { id: 'firewall', label: 'pfSense\nFirewall', type: 'firewall', x: '50%', y: '14%', icon: '🛡️' },
  { id: 'core-sw', label: 'Core Switch\n(Managed)', type: 'switch', x: '50%', y: '28%', icon: '🔀' },
  { id: 'proxmox', label: 'Proxmox\nHypervisor', type: 'server', x: '15%', y: '44%', icon: '💻' },
  { id: 'hyperv', label: 'Hyper-V\nServer', type: 'server', x: '35%', y: '44%', icon: '🖥️' },
  { id: 'monitoring', label: 'Monitoring\nWazuh + Nagios', type: 'monitor', x: '65%', y: '44%', icon: '📊' },
  { id: 'vpn', label: 'VPN\nEndpoint', type: 'vpn', x: '85%', y: '44%', icon: '🔒' },
  { id: 'vlan10', label: 'VLAN 10\nManagement', type: 'vlan', x: '8%', y: '68%', icon: '🔧' },
  { id: 'vlan20', label: 'VLAN 20\nServers', type: 'vlan', x: '28%', y: '68%', icon: '🗄️' },
  { id: 'vlan30', label: 'VLAN 30\nDMZ', type: 'vlan', x: '48%', y: '68%', icon: '🌐' },
  { id: 'vlan40', label: 'VLAN 40\nIoT', type: 'vlan', x: '68%', y: '68%', icon: '📱' },
  { id: 'siem', label: 'SIEM\nSplunk', type: 'siem', x: '88%', y: '68%', icon: '🔍' },
]

const vlans = [
  { id: 'VLAN 10', name: 'Management', desc: 'Network devices, OOB access', color: 'teal' },
  { id: 'VLAN 20', name: 'Servers', desc: 'Linux/Windows production VMs', color: 'sky' },
  { id: 'VLAN 30', name: 'DMZ', desc: 'Public-facing services, web servers', color: 'teal' },
  { id: 'VLAN 40', name: 'IoT', desc: 'Isolated IoT and lab devices', color: 'sky' },
  { id: 'VLAN 50', name: 'Workstations', desc: 'User endpoints, restricted access', color: 'teal' },
]

const infra = [
  { label: 'Hypervisor', value: 'Proxmox VE + Hyper-V', color: 'teal' },
  { label: 'Firewall', value: 'pfSense with Snort IDS', color: 'sky' },
  { label: 'SIEM', value: 'Wazuh + Splunk', color: 'teal' },
  { label: 'Monitoring', value: 'Nagios + Grafana', color: 'sky' },
  { label: 'DNS/DHCP', value: 'Pi-hole + Windows DHCP', color: 'teal' },
  { label: 'VPN', value: 'WireGuard + OpenVPN', color: 'sky' },
]

export default function HomeLab() {
  return (
    <section id="homelab" className="py-24 lg:py-32 relative bg-navy-900/30">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-700/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-navy-700/60 to-transparent" />

      {/* Subtle grid bg for this section */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `linear-gradient(rgba(14,165,233,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.03) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <motion.p variants={fadeUp} className="section-label">Infrastructure</motion.p>
          <motion.h2 variants={fadeUp} className="section-title text-4xl lg:text-5xl mb-4">
            Home Lab & Network Topology
          </motion.h2>
          <motion.p variants={fadeUp} className="text-brand-muted max-w-xl mx-auto">
            A production-grade home lab simulating enterprise infrastructure for hands-on security research and networking practice.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Topology diagram */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 card-glass p-6"
          >
            <h3 className="font-sora font-bold text-brand-light mb-5 text-sm uppercase tracking-wider">
              Network Topology
            </h3>

            {/* Visual topology */}
            <div className="relative w-full" style={{ paddingBottom: '78%' }}>
              <div className="absolute inset-0">
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                  {/* Internet to Firewall */}
                  <line x1="50%" y1="6%" x2="50%" y2="14%" stroke="rgba(94,234,212,0.3)" strokeWidth="1.5" strokeDasharray="4,3" />
                  {/* Firewall to Core Switch */}
                  <line x1="50%" y1="21%" x2="50%" y2="28%" stroke="rgba(94,234,212,0.5)" strokeWidth="2" />
                  {/* Core Switch to nodes */}
                  <line x1="50%" y1="35%" x2="15%" y2="44%" stroke="rgba(14,165,233,0.4)" strokeWidth="1.5" />
                  <line x1="50%" y1="35%" x2="35%" y2="44%" stroke="rgba(14,165,233,0.4)" strokeWidth="1.5" />
                  <line x1="50%" y1="35%" x2="65%" y2="44%" stroke="rgba(14,165,233,0.4)" strokeWidth="1.5" />
                  <line x1="50%" y1="35%" x2="85%" y2="44%" stroke="rgba(14,165,233,0.4)" strokeWidth="1.5" />
                  {/* Nodes to VLANs */}
                  <line x1="15%" y1="54%" x2="8%" y2="68%" stroke="rgba(94,234,212,0.25)" strokeWidth="1" strokeDasharray="3,3" />
                  <line x1="35%" y1="54%" x2="28%" y2="68%" stroke="rgba(94,234,212,0.25)" strokeWidth="1" strokeDasharray="3,3" />
                  <line x1="50%" y1="35%" x2="48%" y2="68%" stroke="rgba(94,234,212,0.25)" strokeWidth="1" strokeDasharray="3,3" />
                  <line x1="65%" y1="54%" x2="68%" y2="68%" stroke="rgba(94,234,212,0.25)" strokeWidth="1" strokeDasharray="3,3" />
                  <line x1="85%" y1="54%" x2="88%" y2="68%" stroke="rgba(94,234,212,0.25)" strokeWidth="1" strokeDasharray="3,3" />
                </svg>

                {/* Nodes */}
                {nodes.map((node) => (
                  <div
                    key={node.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-10"
                    style={{ left: node.x, top: node.y }}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex flex-col items-center justify-center text-center border transition-all duration-300 hover:scale-110 cursor-default
                      ${node.type === 'firewall' ? 'bg-sky-400/20 border-sky-400/50 shadow-lg shadow-sky-400/20' :
                        node.type === 'cloud' ? 'bg-teal-300/10 border-teal-300/30' :
                        node.type === 'switch' ? 'bg-teal-300/20 border-teal-300/50 shadow-lg shadow-teal-300/20' :
                        node.type === 'monitor' ? 'bg-amber-400/15 border-amber-400/30' :
                        node.type === 'siem' ? 'bg-purple-400/15 border-purple-400/30' :
                        node.type === 'vpn' ? 'bg-emerald-400/15 border-emerald-400/30' :
                        node.type === 'vlan' ? 'bg-navy-800/80 border-navy-600/60' :
                        'bg-navy-800/80 border-navy-600/60'
                      }`}
                    >
                      <span className="text-base sm:text-lg leading-none">{node.icon}</span>
                    </div>
                    <span className="text-[8px] sm:text-[10px] text-brand-muted text-center leading-tight whitespace-pre-line max-w-[70px]">
                      {node.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="mt-4 flex flex-wrap gap-3 pt-4 border-t border-navy-700/40">
              {[
                { color: 'bg-sky-400/20 border-sky-400/40', label: 'Firewall' },
                { color: 'bg-teal-300/20 border-teal-300/40', label: 'Core Network' },
                { color: 'bg-amber-400/15 border-amber-400/30', label: 'Monitoring' },
                { color: 'bg-navy-800/80 border-navy-600/60', label: 'VLANs / VMs' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <div className={`w-3 h-3 rounded border ${item.color}`} />
                  <span className="text-xs text-brand-muted">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right panel */}
          <div className="flex flex-col gap-5">
            {/* VLAN list */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="card-glass p-5"
            >
              <h3 className="font-sora font-bold text-brand-light text-sm uppercase tracking-wider mb-4">VLAN Segments</h3>
              <div className="space-y-2.5">
                {vlans.map((vlan) => (
                  <div key={vlan.id} className="flex items-start gap-3">
                    <span className={`mt-0.5 w-2 h-2 rounded-full flex-shrink-0 ${
                      vlan.color === 'teal' ? 'bg-teal-300' : 'bg-sky-400'
                    }`} />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold font-sora ${vlan.color === 'teal' ? 'text-teal-300' : 'text-sky-400'}`}>
                          {vlan.id}
                        </span>
                        <span className="text-xs text-brand-light font-medium">{vlan.name}</span>
                      </div>
                      <p className="text-[11px] text-brand-muted mt-0.5">{vlan.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Infrastructure stack */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="card-glass p-5"
            >
              <h3 className="font-sora font-bold text-brand-light text-sm uppercase tracking-wider mb-4">Stack</h3>
              <div className="space-y-2.5">
                {infra.map((item) => (
                  <div key={item.label} className="flex items-start justify-between gap-2">
                    <span className="text-xs text-brand-muted">{item.label}</span>
                    <span className={`text-xs font-semibold text-right ${
                      item.color === 'teal' ? 'text-teal-300' : 'text-sky-400'
                    }`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
