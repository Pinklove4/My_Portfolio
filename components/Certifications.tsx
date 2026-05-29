'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { stagger, fadeUp, scaleIn } from '@/lib/motion'

const certs = [
  {
    id: 1,
    name: 'CompTIA Security+ ce',
    issuer: 'CompTIA',
    code: 'Security+ ce',
    status: 'Completed',
    color: 'teal',
    abbr: 'SEC+',
    desc: 'Earned Apr 21, 2026. Valid through Apr 21, 2029.',
    year: '2026-2029',
  },
  {
    id: 2,
    name: 'CompTIA CySA+',
    issuer: 'CompTIA',
    code: 'CySA+',
    status: 'Completed',
    color: 'sky',
    abbr: 'CYSA+',
    desc: 'Earned May 29, 2026.',
    year: '2026',
  },
  {
    id: 3,
    name: 'ISC2 Candidate (CC Program)',
    issuer: 'ISC2',
    code: 'CC Program',
    status: 'Completed',
    color: 'sky',
    abbr: 'ISC2',
    desc: 'Candidate status active. Program expiration: Mar 31, 2027.',
    year: 'Expires 2027',
  },
]

const learningCredentials = [
  {
    provider: 'IBM SkillsBuild',
    courses: ['Artificial Intelligence Fundamentals', 'Cybersecurity Fundamentals', 'Data Literacy'],
    color: 'teal',
  },
  {
    provider: 'Cisco Networking Academy',
    courses: [
      'Computer Hardware Basics',
      'Introduction to Cybersecurity',
      'Introduction to IoT',
      'Introduction to Modern AI',
      'Operating Systems Basics',
      'Python Essentials 1',
      'Using Computer and Mobile Devices',
    ],
    color: 'sky',
  },
  {
    provider: 'LinkedIn Learning',
    courses: ['Strategic Business Analysis Essentials', 'Succeeding as a First-Time Tech Manager'],
    color: 'teal',
  },
  {
    provider: 'Google Cybersecurity Certificate',
    courses: [
      'Foundations of Cybersecurity',
      'Play It Safe: Manage Security Risks',
      'Assets, Threats, and Vulnerabilities',
      'Connect and Protect: Networks and Network Security',
      'Tools of the Trade: Linux and SQL',
      'Sound the Alarm: Detection and Response',
    ],
    color: 'sky',
  },
]

const inProgressCerts = [
  'CompTIA Network+',
  'AWS Certified Cloud Practitioner',
  'CompTIA Linux+',
  'CompTIA Server+',
  'CompTIA A+',
]

const statusStyle: Record<string, string> = {
  Completed: 'bg-emerald-400/15 text-emerald-400 border-emerald-400/30',
  'In Progress': 'bg-amber-400/15 text-amber-400 border-amber-400/30',
  Planned: 'bg-navy-800/80 text-brand-muted border-navy-700/50',
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 lg:py-32 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <motion.p variants={fadeUp} className="section-label">Credentials</motion.p>
          <motion.h2 variants={fadeUp} className="section-title text-4xl lg:text-5xl mb-4">
            Certifications
          </motion.h2>
          <motion.p variants={fadeUp} className="text-brand-muted max-w-xl mx-auto">
            Industry-recognized credentials validating expertise in networking, security, and cloud operations.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="card-glass p-6 mb-8"
        >
          <p className="section-label mb-2">Education</p>
          <h3 className="font-sora font-bold text-brand-light text-xl mb-2">Network Engineer Program</h3>
          <p className="text-sm text-teal-300 font-semibold">Confidential Technical Training Program</p>
          <p className="text-sm text-brand-muted mt-1">Prior Training</p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {certs.map((cert) => (
            <motion.div
              key={cert.id}
              variants={scaleIn}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="card-glass p-6 flex flex-col group"
            >
              {/* Badge header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-sora font-extrabold text-sm transition-all duration-300 ${
                  cert.color === 'teal'
                    ? 'bg-teal-300/15 border border-teal-300/30 text-teal-300 group-hover:bg-teal-300/25'
                    : 'bg-sky-400/15 border border-sky-400/30 text-sky-400 group-hover:bg-sky-400/25'
                }`}>
                  {cert.abbr}
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${statusStyle[cert.status]}`}>
                  {cert.status}
                </span>
              </div>

              <h3 className="font-sora font-bold text-brand-light text-base mb-1 leading-snug">{cert.name}</h3>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-brand-muted">{cert.issuer}</span>
                <span className="text-navy-700">·</span>
                <span className={`text-xs font-mono ${cert.color === 'teal' ? 'text-teal-300/70' : 'text-sky-400/70'}`}>
                  {cert.code}
                </span>
              </div>

              <p className="text-brand-muted text-xs leading-relaxed flex-1 mb-4">{cert.desc}</p>

              <div className="flex items-center justify-between pt-3 border-t border-navy-700/40">
                <span className="text-xs text-brand-muted">Target: {cert.year}</span>
                {cert.status === 'Completed' ? (
                  <span
                    className={`flex items-center gap-1 text-xs font-semibold ${
                      cert.color === 'teal' ? 'text-teal-300' : 'text-sky-400'
                    }`}
                  >
                    <Award className="w-3.5 h-3.5" />
                    Verified
                  </span>
                ) : (
                  <span className="text-xs text-brand-muted/60">Upcoming</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-8"
        >
          <motion.p variants={fadeUp} className="section-label mb-2">Professional Learning</motion.p>
          <motion.h3 variants={fadeUp} className="font-sora font-bold text-brand-light text-2xl mb-5">
            Additional Credentials
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-5">
            {learningCredentials.map((credential) => (
              <motion.div key={credential.provider} variants={scaleIn} className="card-glass p-5">
                <h4 className={`font-sora font-bold text-sm mb-3 ${credential.color === 'teal' ? 'text-teal-300' : 'text-sky-400'}`}>
                  {credential.provider}
                </h4>
                <ul className="space-y-1.5">
                  {credential.courses.map((course) => (
                    <li key={course} className="flex items-start gap-2 text-sm text-brand-muted leading-relaxed">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${credential.color === 'teal' ? 'bg-teal-300' : 'bg-sky-400'}`} />
                      {course}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="card-glass p-6 mt-8"
        >
          <p className="section-label mb-2">Roadmap</p>
          <h3 className="font-sora font-bold text-brand-light text-2xl mb-4">In Progress Certifications</h3>
          <div className="flex flex-wrap gap-2">
            {inProgressCerts.map((cert) => (
              <span key={cert} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-400/10 border border-amber-400/35 text-amber-300">
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
