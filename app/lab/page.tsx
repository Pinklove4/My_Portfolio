import type { Metadata } from 'next'
import HomeLab from '@/components/HomeLab'

export const metadata: Metadata = {
  title: 'Infrastructure / Home Lab | Teliyah Perez',
  description:
    'Home-lab environment documenting VLAN segmentation, pfSense firewall rules, Wazuh and Splunk monitoring, VPN validation, and troubleshooting notes.',
}

export default function LabPage() {
  return <HomeLab />
}
