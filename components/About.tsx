'use client'

import { motion } from 'framer-motion'
import { Network, Shield, Cloud, Server, Terminal, Zap } from 'lucide-react'
import { stagger, fadeUp, slideLeft, slideRight } from '@/lib/motion'

const specializations = [
  {
    icon: Network,
    title: 'Networking',
    desc: 'LAN/WAN design, routing protocols, VLANs, subnetting, and enterprise topologies.',
    color: 'text-teal-300',
    bg: 'bg-teal-300/10',
    border: 'border-teal-300/20',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    desc: 'Firewall configuration, ACLs, IDS/IPS, zero-trust frameworks, and hardening.',
    color: 'text-sky-400',
    bg: 'bg-sky-400/10',
    border: 'border-sky-400/20',
  },
  {
    icon: Cloud,
    title: 'Cloud',
    desc: 'Hybrid cloud architecture, Azure/AWS integration, site-to-site VPNs.',
    color: 'text-teal-300',
    bg: 'bg-teal-300/10',
    border: 'border-teal-300/20',
  },
  {
    icon: Server,
    title: 'Infrastructure',
    desc: 'Hyper-V, Proxmox virtualization, clustering, and server administration.',
    color: 'text-sky-400',
    bg: 'bg-sky-400/10',
    border: 'border-sky-400/20',
  },
  {
    icon: Terminal,
    title: 'Automation',
    desc: 'Ansible, Terraform, Python, and PowerShell for infrastructure-as-code.',
    color: 'text-teal-300',
    bg: 'bg-teal-300/10',
    border: 'border-teal-300/20',
  },
  {
    icon: Zap,
    title: 'Monitoring',
    desc: 'Wireshark, Nagios, Splunk, Wazuh for traffic analysis and SIEM operations.',
    color: 'text-sky-400',
    bg: 'bg-sky-400/10',
    border: 'border-sky-400/20',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      {/* Section glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p variants={fadeUp} className="section-label">About Me</motion.p>
            <motion.h2 variants={fadeUp} className="section-title text-4xl lg:text-5xl mb-6">
              Who Am I
            </motion.h2>
            <motion.div variants={fadeUp} className="w-12 h-0.5 bg-gradient-to-r from-teal-300 to-sky-500 rounded-full mb-8" />

            <motion.p variants={fadeUp} className="text-brand-muted leading-relaxed text-base mb-5">
              I am a passionate and driven Network Engineer professional with a deep understanding
              of virtualization, system administration, and modern networking technologies. Over
              the years, I've built expertise in platforms such as Hyper-V and Proxmox, leveraging
              them to design and manage efficient, scalable virtual environments.
            </motion.p>
            <motion.p variants={fadeUp} className="text-brand-muted leading-relaxed text-base mb-5">
              My strong foundation in Linux and Ubuntu allows me to optimize systems for
              performance, security, and reliability, while ensuring seamless integration across
              diverse infrastructures. I bring a comprehensive skill set covering core networking
              principles, routing and switching, firewalls, VPNs, and cloud-based solutions.
            </motion.p>
            <motion.p variants={fadeUp} className="text-brand-muted leading-relaxed text-base mb-8">
              I thrive on solving complex technical challenges—whether it's architecting resilient
              networks, automating processes, or troubleshooting mission-critical systems. My goal
              is to build systems that are secure, scalable, and future-ready.
            </motion.p>

            {/* Quote card */}
            <motion.blockquote
              variants={fadeUp}
              className="relative pl-5 border-l-2 border-teal-300/60 text-brand-light font-sora font-semibold text-lg italic"
            >
              "Engineering the Pulse of Digital Evolution"
            </motion.blockquote>
          </motion.div>

          {/* Right — Specialization cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {specializations.map((spec) => {
              const Icon = spec.icon
              return (
                <motion.div
                  key={spec.title}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`card-glass p-5 hover:border-navy-600/80 transition-all duration-300`}
                >
                  <div className={`w-10 h-10 rounded-xl ${spec.bg} border ${spec.border} flex items-center justify-center mb-3`}>
                    <Icon className={`w-5 h-5 ${spec.color}`} />
                  </div>
                  <h3 className={`font-sora font-bold text-sm mb-1.5 ${spec.color}`}>
                    {spec.title}
                  </h3>
                  <p className="text-brand-muted text-xs leading-relaxed">{spec.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
