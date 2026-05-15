'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/motion'

const grcHighlights = [
  'Produced clear, audit-friendly documentation for configurations, troubleshooting outcomes, and change activity to support operational standards.',
  'Enforced Windows security baselines using Group Policy (GPO) and validated configurations in lab environments.',
  'Supported identity and access workflows in Active Directory (account administration concepts, least privilege support, and access issue resolution).',
  'Performed vulnerability scanning with Nessus and tracked remediation actions to closure in a structured, repeatable process.',
  'Conducted log review and alert triage in security labs (pfSense firewall/IDS-IPS and SIEM tooling) and documented findings and escalation notes.',
]

const timeline = [
  {
    id: 1,
    role: 'Cybersecurity Operations Specialist',
    company: 'Confidential Client Engagements',
    type: 'work',
    period: 'Recent',
    color: 'teal',
    summary: 'End-to-end cybersecurity operations for web applications and infrastructure with a focus on secure architecture and operational resilience.',
    tech: ['Security Operations', 'Threat Modeling', 'IAM', 'Incident Response', 'Risk Assessments', 'System Hardening'],
    achievements: [
      'Performed vulnerability assessments, application security testing, and secure system architecture reviews.',
      'Deployed security controls, monitored logs, and supported threat detection and incident response workflows.',
      'Led remediation and risk assessment activities across application and infrastructure surfaces.',
    ],
  },
  {
    id: 2,
    role: 'Full-Stack & DevSecOps Engineer',
    company: 'Independent Client Projects',
    type: 'work',
    period: 'Recent',
    color: 'sky',
    summary: 'Delivered secure web and infrastructure solutions with automation-first engineering and DevOps best practices.',
    tech: ['PowerShell', 'Python', 'Ansible', 'PowerShell DSC', 'CI/CD', 'Cloud Security'],
    achievements: [
      'Built automation scripts with PowerShell and Python to streamline operational workflows.',
      'Implemented configuration management using Ansible and PowerShell DSC.',
      'Developed CI/CD pipelines for web and infrastructure deployments in secure cloud and hybrid environments.',
    ],
  },
  {
    id: 3,
    role: 'Network Engineering Trainee',
    company: 'Technical Training Program',
    type: 'education',
    period: 'Prior Training',
    color: 'teal',
    summary: 'Hands-on enterprise training across server administration, network security, virtualization, and service operations.',
    tech: ['Windows Server', 'GPO', 'Virtualization', 'Network Segmentation', 'ITSM', 'UEM'],
    achievements: [
      'Built and administered Windows Server lab environments with Group Policy baselines.',
      'Executed network segmentation and troubleshooting scenarios in virtualized environments.',
      'Performed log review, ITSM simulation, and UEM platform administration tasks.',
    ],
  },
  {
    id: 4,
    role: 'First Line Manager / Team Leader',
    company: 'High-Accountability Operational Environment',
    type: 'work',
    period: 'Prior Service',
    color: 'sky',
    summary: 'Led teams in high-accountability environments while enforcing standards, performance, and mission execution.',
    tech: ['Leadership', 'Compliance', 'Training Management', 'Operational Planning', 'Problem Solving'],
    achievements: [
      'Led teams while maintaining compliance, accountability, and operational readiness.',
      'Managed training and performance objectives with measurable outcomes.',
      'Strengthened leadership, communication, and structured problem-solving under pressure.',
    ],
  },
]

const technicalProjects = [
  'Enterprise Active Directory Security Lab',
  'Virtualized Data Center Hardening',
  'Cloud IAM & Network Controls',
  'Network Security Lab',
  'Security Automation',
  'IT Support/Ticketing Simulation',
]

const platformsAndSystems = [
  'Windows Server',
  'Windows 10/11',
  'Linux (Ubuntu, CentOS, RHEL)',
  'Kali Linux',
  'macOS',
  'Nessus',
  'pfSense',
  'SIEM tools',
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 relative bg-navy-900/30">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-700/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-navy-700/60 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <motion.p variants={fadeUp} className="section-label">Background</motion.p>
          <motion.h2 variants={fadeUp} className="section-title text-4xl lg:text-5xl mb-4">
            Experience
          </motion.h2>
          <motion.p variants={fadeUp} className="text-brand-muted max-w-xl mx-auto">
            A track record of technical excellence spanning networking, infrastructure, and cybersecurity.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="card-glass p-6 mb-10"
        >
          <p className="section-label mb-2">Security Governance</p>
          <h3 className="font-sora font-bold text-brand-light text-xl mb-4">
            GRC Focus & Security Operations Highlights
          </h3>
          <ul className="space-y-2.5">
            {grcHighlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2 text-sm text-brand-muted leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-300 flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-2 gap-5 mb-10"
        >
          <div className="card-glass p-6">
            <p className="section-label mb-2">Technical Projects</p>
            <h3 className="font-sora font-bold text-brand-light text-xl mb-4">Project Portfolio Highlights</h3>
            <ul className="space-y-2.5">
              {technicalProjects.map((project) => (
                <li key={project} className="flex items-start gap-2 text-sm text-brand-muted leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                  {project}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-glass p-6">
            <p className="section-label mb-2">Platforms</p>
            <h3 className="font-sora font-bold text-brand-light text-xl mb-4">Platforms & Systems</h3>
            <div className="flex flex-wrap gap-1.5">
              {platformsAndSystems.map((platform) => (
                <span key={platform} className="skill-tag text-[11px]">
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-teal-300/50 via-sky-500/30 to-transparent" />

          <div className="space-y-10">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="pl-12 md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-6 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 z-10 ${
                  item.color === 'teal'
                    ? 'bg-navy-900 border-teal-300/60 shadow-lg shadow-teal-300/20'
                    : 'bg-navy-900 border-sky-400/60 shadow-lg shadow-sky-400/20'
                }`}>
                  {item.type === 'education' ? (
                    <GraduationCap className={`w-3.5 h-3.5 md:w-5 md:h-5 ${item.color === 'teal' ? 'text-teal-300' : 'text-sky-400'}`} />
                  ) : (
                    <Briefcase className={`w-3.5 h-3.5 md:w-5 md:h-5 ${item.color === 'teal' ? 'text-teal-300' : 'text-sky-400'}`} />
                  )}
                </div>

                <div className="card-glass p-6">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-sora font-bold text-brand-light text-base mb-0.5">{item.role}</h3>
                      <p className={`text-sm font-semibold ${item.color === 'teal' ? 'text-teal-300' : 'text-sky-400'}`}>
                        {item.company}
                      </p>
                    </div>
                    <span className="text-xs text-brand-muted bg-navy-800/60 border border-navy-700/50 px-3 py-1 rounded-full font-mono">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-brand-muted text-sm mb-4 leading-relaxed">{item.summary}</p>

                  {/* Achievements */}
                  <ul className="space-y-1.5 mb-4">
                    {item.achievements.map((ach) => (
                      <li key={ach} className="flex items-start gap-2 text-sm text-brand-muted">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          item.color === 'teal' ? 'bg-teal-300' : 'bg-sky-400'
                        }`} />
                        {ach}
                      </li>
                    ))}
                  </ul>

                  {/* Tech used */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-navy-700/40">
                    {item.tech.map((t) => (
                      <span key={t} className="skill-tag text-[11px]">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
