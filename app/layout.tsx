import type { Metadata } from 'next'
import { Sora, Source_Sans_3 } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Teliyah Perez | Cybersecurity Analyst Portfolio',
  description:
    'Cybersecurity Analyst and SOC Analyst candidate with hands-on home-lab experience in SIEM monitoring, network segmentation, incident response, cloud IAM, and infrastructure troubleshooting.',
  keywords: [
    'Cybersecurity',
    'Cybersecurity Analyst',
    'SOC Analyst',
    'Cloud Operations',
    'Infrastructure',
    'Hyper-V',
    'Proxmox',
    'Linux',
    'VPN',
    'VLAN',
    'Firewall',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sora.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen bg-navy-950 overflow-x-hidden flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
