'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send, MapPin, CheckCircle } from 'lucide-react'
import { stagger, fadeUp, slideLeft, slideRight } from '@/lib/motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a static export, open mailto as fallback
    const mailto = `mailto:teliyah@example.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `From: ${form.name} (${form.email})\n\n${form.message}`
    )}`
    window.location.href = mailto
    setSent(true)
  }

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'teliyah@example.com',
      href: 'mailto:teliyah@example.com',
      color: 'teal',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/teliyah-perez',
      href: 'https://www.linkedin.com/in/teliyah-perez-b31624365',
      color: 'sky',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/teliyah',
      href: 'https://github.com',
      color: 'teal',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Available Remotely',
      href: undefined,
      color: 'sky',
    },
  ]

  const inputClass =
    'w-full bg-navy-800/60 border border-navy-700/60 rounded-xl px-4 py-3 text-brand-light text-sm placeholder:text-brand-muted/50 focus:outline-none focus:border-teal-300/60 focus:ring-1 focus:ring-teal-300/30 transition-all duration-200'

  return (
    <section id="contact" className="py-24 lg:py-32 relative bg-navy-900/30">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-700/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-navy-700/60 to-transparent" />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-teal-300/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <motion.p variants={fadeUp} className="section-label">Get In Touch</motion.p>
          <motion.h2 variants={fadeUp} className="section-title text-4xl lg:text-5xl mb-4">
            Contact
          </motion.h2>
          <motion.p variants={fadeUp} className="text-brand-muted max-w-xl mx-auto">
            Open to new opportunities, collaborations, and technical conversations. Let's build something great together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left — Contact info */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="card-glass p-6">
              <h3 className="font-sora font-bold text-brand-light mb-5 text-sm uppercase tracking-wider">
                Contact Info
              </h3>
              <div className="space-y-4">
                {contacts.map((c) => {
                  const Icon = c.icon
                  const content = (
                    <div className="flex items-start gap-3 group">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                        c.color === 'teal'
                          ? 'bg-teal-300/10 border border-teal-300/20 group-hover:bg-teal-300/20'
                          : 'bg-sky-400/10 border border-sky-400/20 group-hover:bg-sky-400/20'
                      }`}>
                        <Icon className={`w-4 h-4 ${c.color === 'teal' ? 'text-teal-300' : 'text-sky-400'}`} />
                      </div>
                      <div>
                        <div className="text-xs text-brand-muted mb-0.5">{c.label}</div>
                        <div className={`text-sm font-medium transition-colors ${
                          c.href
                            ? c.color === 'teal'
                              ? 'text-brand-light group-hover:text-teal-300'
                              : 'text-brand-light group-hover:text-sky-400'
                            : 'text-brand-light'
                        }`}>
                          {c.value}
                        </div>
                      </div>
                    </div>
                  )
                  return c.href ? (
                    <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer">
                      {content}
                    </a>
                  ) : (
                    <div key={c.label}>{content}</div>
                  )
                })}
              </div>
            </div>

            <div className="card-glass p-6">
              <h3 className="font-sora font-bold text-brand-light mb-3 text-sm uppercase tracking-wider">
                Availability
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-emerald-400 font-semibold">Open to Opportunities</span>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                Available for full-time roles, contract work, and freelance networking or cybersecurity projects.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="card-glass p-6 lg:p-8">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-4"
                >
                  <CheckCircle className="w-12 h-12 text-teal-300" />
                  <h3 className="font-sora font-bold text-brand-light text-lg">Message Sent!</h3>
                  <p className="text-brand-muted text-sm max-w-xs">
                    Your default email client was opened. Thank you for reaching out — I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="btn-outline text-xs"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-brand-muted mb-1.5">Your Name</label>
                      <input
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-brand-muted mb-1.5">Email Address</label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-brand-muted mb-1.5">Subject</label>
                    <input
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Network Engineer Opportunity"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-brand-muted mb-1.5">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
