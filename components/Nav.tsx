'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Lab', href: '/lab' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Experience', href: '/experience' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-950/90 backdrop-blur-lg border-b border-navy-700/40 shadow-xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-teal-300/15 border border-teal-300/30 flex items-center justify-center group-hover:bg-teal-300/25 transition-colors duration-300">
            <Terminal className="w-4 h-4 text-teal-300" />
          </div>
          <span className="font-sora font-bold text-brand-light text-sm tracking-wide">
            Teliyah<span className="text-teal-300">.</span>dev
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                pathname === link.href
                  ? 'text-teal-300 bg-navy-800/60'
                  : 'text-brand-muted hover:text-teal-300 hover:bg-navy-800/60'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-teal-300/40 text-teal-300 text-sm font-semibold hover:bg-teal-300/10 hover:border-teal-300/70 transition-all duration-200"
        >
          Hire Me
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-brand-muted hover:text-teal-300 transition-colors rounded-lg hover:bg-navy-800/60"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-navy-950/95 backdrop-blur-lg border-b border-navy-700/40"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-2 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    pathname === link.href
                      ? 'text-teal-300 bg-navy-800/60'
                      : 'text-brand-muted hover:text-teal-300 hover:bg-navy-800/60'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="col-span-2 mt-2 px-4 py-2.5 text-center rounded-lg border border-teal-300/40 text-teal-300 text-sm font-semibold hover:bg-teal-300/10 transition-all duration-200"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
