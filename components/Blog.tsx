'use client'

import { motion } from 'framer-motion'
import { Clock, ArrowRight } from 'lucide-react'
import { stagger, fadeUp, scaleIn } from '@/lib/motion'

const posts = [
  {
    id: 1,
    title: 'Threat Hunting with Wazuh: Detecting Lateral Movement',
    excerpt: 'A deep dive into configuring Wazuh detection rules to identify lateral movement techniques including Pass-the-Hash and PTT attacks in an AD environment.',
    category: 'Cybersecurity',
    color: 'sky',
    readTime: '8 min read',
    date: 'May 2026',
    tags: ['Wazuh', 'Threat Hunting', 'Active Directory'],
  },
  {
    id: 2,
    title: 'Wireshark Packet Analysis: Identifying Network Anomalies',
    excerpt: 'Step-by-step walkthrough of using Wireshark filters to identify port scanning, ARP poisoning, and DNS exfiltration attempts on a live network.',
    category: 'Network Analysis',
    color: 'teal',
    readTime: '6 min read',
    date: 'Apr 2026',
    tags: ['Wireshark', 'Packet Analysis', 'Threat Detection'],
  },
  {
    id: 3,
    title: 'VLAN Segmentation: Designing Secure Enterprise Networks',
    excerpt: 'A comprehensive guide to designing VLAN topologies that enforce least-privilege access, prevent VLAN hopping, and isolate sensitive network segments.',
    category: 'Networking',
    color: 'teal',
    readTime: '10 min read',
    date: 'Mar 2026',
    tags: ['VLANs', 'Cisco', 'Network Security'],
  },
  {
    id: 4,
    title: 'Building a SOC Home Lab from Scratch',
    excerpt: 'Full documentation of deploying a SOC lab using Proxmox, Wazuh, and Splunk — covering architecture decisions, setup, and initial rule configuration.',
    category: 'Home Lab',
    color: 'sky',
    readTime: '15 min read',
    date: 'Feb 2026',
    tags: ['SOC', 'Wazuh', 'Splunk', 'Proxmox'],
  },
  {
    id: 5,
    title: 'Azure Networking Deep Dive: VNets, NSGs, and VPN Gateways',
    excerpt: 'Practical guide to designing secure Azure networking with Virtual Networks, Network Security Groups, and site-to-site VPN configuration.',
    category: 'Cloud',
    color: 'teal',
    readTime: '12 min read',
    date: 'Jan 2026',
    tags: ['Azure', 'Cloud Networking', 'VPN'],
  },
  {
    id: 6,
    title: 'Firewall Hardening: pfSense Best Practices',
    excerpt: 'A practical firewall hardening checklist for pfSense — from interface configuration and rule ordering to Snort IDS integration and logging.',
    category: 'Security',
    color: 'sky',
    readTime: '9 min read',
    date: 'Dec 2025',
    tags: ['pfSense', 'Firewall', 'Hardening', 'IDS'],
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24 lg:py-32 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        >
          <div>
            <motion.p variants={fadeUp} className="section-label">Knowledge Base</motion.p>
            <motion.h2 variants={fadeUp} className="section-title text-4xl lg:text-5xl">
              Technical Write-Ups
            </motion.h2>
          </div>
          <motion.a
            variants={fadeUp}
            href="#"
            className="inline-flex items-center gap-2 text-sm text-teal-300 hover:text-teal-200 font-semibold transition-colors group"
          >
            View All Posts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={scaleIn}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="card-glass flex flex-col overflow-hidden group cursor-pointer"
            >
              {/* Color bar */}
              <div className={`h-1 w-full ${
                post.color === 'teal'
                  ? 'bg-gradient-to-r from-teal-300 to-sky-400'
                  : 'bg-gradient-to-r from-sky-400 to-teal-300'
              }`} />

              <div className="p-5 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full font-sora ${
                    post.color === 'teal'
                      ? 'bg-teal-300/10 text-teal-300 border border-teal-300/20'
                      : 'bg-sky-400/10 text-sky-400 border border-sky-400/20'
                  }`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-brand-muted">{post.date}</span>
                </div>

                {/* Title */}
                <h3 className={`font-sora font-bold text-brand-light text-sm leading-snug mb-2.5 group-hover:${
                  post.color === 'teal' ? 'text-teal-300' : 'text-sky-400'
                } transition-colors`}>
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-brand-muted text-xs leading-relaxed flex-1 mb-4">{post.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="skill-tag text-[10px]">{tag}</span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-navy-700/40">
                  <div className="flex items-center gap-1.5 text-xs text-brand-muted">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                  <a
                    href="#"
                    className={`flex items-center gap-1 text-xs font-semibold transition-colors ${
                      post.color === 'teal' ? 'text-teal-300 hover:text-teal-200' : 'text-sky-400 hover:text-sky-300'
                    }`}
                  >
                    Read
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
