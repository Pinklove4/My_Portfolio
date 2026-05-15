'use client'

import { Terminal, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Lab', href: '#homelab' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-navy-700/40 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-3 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-teal-300/15 border border-teal-300/30 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-teal-300" />
              </div>
              <span className="font-sora font-bold text-brand-light text-sm">
                Teliyah<span className="text-teal-300">.</span>dev
              </span>
            </a>
            <p className="text-brand-muted text-xs leading-relaxed max-w-[220px]">
              Network Engineer specializing in secure infrastructure, cybersecurity, and cloud operations.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-sora font-bold text-xs text-brand-muted uppercase tracking-widest mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-brand-muted hover:text-teal-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sora font-bold text-xs text-brand-muted uppercase tracking-widest mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/teliyah-perez-b31624365', color: 'hover:text-sky-400' },
                { icon: Github, label: 'GitHub', href: 'https://github.com', color: 'hover:text-teal-300' },
                { icon: Mail, label: 'Email', href: 'mailto:teliyah@example.com', color: 'hover:text-teal-300' },
              ].map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-xs text-brand-muted ${color} transition-colors`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-navy-700/40 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-brand-muted">
            &copy; 2026 Teliyah Perez · Network Engineer Portfolio
          </p>
          <a
            href="#"
            className="flex items-center gap-1.5 text-xs text-brand-muted hover:text-teal-300 transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
