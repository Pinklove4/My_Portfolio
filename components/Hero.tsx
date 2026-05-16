'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, Github, Linkedin, Shield, Network, Cloud } from 'lucide-react'
import { stagger, fadeUp, fadeIn } from '@/lib/motion'

const stats = [
  { label: 'Technical Projects', value: '8+' },
  { label: 'Technologies Mastered', value: '20+' },
  { label: 'Cloud Platforms', value: '3' },
  { label: 'Security Tools', value: '10+' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(rgba(94,234,212,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(94,234,212,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-teal-300/8 blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-sky-500/8 blur-[120px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-navy-800/30 blur-[80px] pointer-events-none" />

      {/* Decorative floating badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-28 right-8 lg:right-24 hidden md:flex items-center gap-2 bg-navy-800/60 backdrop-blur-sm border border-navy-700/60 rounded-xl px-3 py-2 animate-float"
      >
        <Shield className="w-4 h-4 text-teal-300" />
        <span className="text-xs text-brand-muted font-medium">Zero-Trust Security</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-36 right-8 lg:right-32 hidden md:flex items-center gap-2 bg-navy-800/60 backdrop-blur-sm border border-navy-700/60 rounded-xl px-3 py-2 animate-float"
        style={{ animationDelay: '1.5s' }}
      >
        <Cloud className="w-4 h-4 text-sky-400" />
        <span className="text-xs text-brand-muted font-medium">Cloud Infrastructure</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute top-1/3 left-6 lg:left-16 hidden lg:flex items-center gap-2 bg-navy-800/60 backdrop-blur-sm border border-navy-700/60 rounded-xl px-3 py-2 animate-float"
        style={{ animationDelay: '3s' }}
      >
        <Network className="w-4 h-4 text-sky-400" />
        <span className="text-xs text-brand-muted font-medium">Enterprise Networking</span>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-300 animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-teal-300 font-sora">
                Network Engineer Portfolio
              </span>
            </div>
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-teal-300/50 to-transparent" />
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="font-sora font-extrabold text-5xl sm:text-6xl lg:text-7xl text-brand-light leading-[1.08] tracking-tight mb-4"
          >
            Teliyah{' '}
            <span className="text-gradient">Perez</span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            variants={fadeUp}
            className="font-sora font-bold text-2xl sm:text-3xl text-brand-light mb-4"
          >
            Network Engineer
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-lg text-brand-muted leading-relaxed mb-8 max-w-xl"
          >
            Specializing in{' '}
            <span className="text-teal-300 font-semibold">Secure Infrastructure</span>,{' '}
            <span className="text-sky-400 font-semibold">Cybersecurity</span>, and{' '}
            <span className="text-teal-300 font-semibold">Cloud Operations</span>.{' '}
            Building resilient, scalable, and future-ready networks.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-sm text-brand-muted/90 mb-8 max-w-2xl"
          >
            GRC-aware operations: audit-friendly documentation, Nessus remediation tracking,
            and SIEM alert triage.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
            <a href="/projects" className="btn-primary">
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/contact" className="btn-outline">
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-16">
            <span className="text-xs text-brand-muted uppercase tracking-widest font-medium">Find me on</span>
            <div className="flex gap-2">
              <a
                href="https://github.com/Pinklove4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-navy-800/60 border border-navy-700/60 flex items-center justify-center text-brand-muted hover:text-teal-300 hover:border-teal-300/50 hover:bg-teal-300/10 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/teliyah-perez-b31624365"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-navy-800/60 border border-navy-700/60 flex items-center justify-center text-brand-muted hover:text-sky-400 hover:border-sky-400/50 hover:bg-sky-400/10 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:tp787tmt@gmail.com"
                className="w-9 h-9 rounded-lg bg-navy-800/60 border border-navy-700/60 flex items-center justify-center text-brand-muted hover:text-teal-300 hover:border-teal-300/50 hover:bg-teal-300/10 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeIn}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-navy-700/40"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="font-sora font-bold text-2xl text-teal-300">{stat.value}</div>
                <div className="text-xs text-brand-muted mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-brand-muted/60 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-0.5 h-6 bg-gradient-to-b from-teal-300/60 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  )
}
