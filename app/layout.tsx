import type { Metadata } from 'next'
import { Sora, Source_Sans_3 } from 'next/font/google'
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
  title: 'Teliyah Perez | Network Engineer',
  description:
    'Network Engineer specializing in Secure Infrastructure, Cybersecurity, and Cloud Operations. Portfolio of projects, certifications, and technical expertise.',
  keywords: [
    'Network Engineer',
    'Cybersecurity',
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
      <body>{children}</body>
    </html>
  )
}
