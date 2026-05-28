'use client'

const overviewRows = [
  ['Firewall', 'pfSense + Snort', 'Routing, firewall rules, IDS alerts'],
  ['Hypervisor', 'Proxmox VE / Hyper-V', 'Virtual machine hosting'],
  ['SIEM', 'Wazuh + Splunk', 'Log collection and alert analysis'],
  ['Monitoring', 'Nagios + Grafana', 'Uptime, service, and metric monitoring'],
  ['DNS / DHCP', 'Pi-hole + Windows DHCP', 'DNS filtering and IP management'],
  ['VPN', 'WireGuard + OpenVPN', 'Secure remote lab access'],
]

const practiced = [
  'Configuring firewall rules and reviewing IDS alerts.',
  'Building VLANs and testing inter-VLAN routing.',
  'Deploying virtual machines in Proxmox and Hyper-V.',
  'Forwarding logs to Wazuh and Splunk for visibility.',
  'Monitoring uptime with Nagios and Grafana.',
  'Troubleshooting VPN connectivity and documenting fixes.',
]

const controls = [
  'VLAN segmentation and firewall ACLs.',
  'Snort IDS monitoring and centralized logging.',
  'SIEM alerting in Wazuh and Splunk.',
  'VPN-only management access for administration workflows.',
  'DNS filtering, endpoint monitoring, and validation testing.',
]

const validation = [
  'Ping tests between approved VLANs succeeded after interface tagging review.',
  'Blocked access testing confirmed IoT devices could not reach the management VLAN.',
  'WireGuard tunnel established successfully and allowed management access.',
  'Wazuh agents checked in after firewall rules allowed agent communication.',
  'Splunk searches returned pfSense firewall events after source type adjustments.',
  'Nagios checks passed after ICMP and service ports were permitted between expected segments.',
]

const troubleshooting = [
  'VLAN routing initially failed because a trunk port was not tagged correctly.',
  'Wazuh agents did not appear until firewall rules allowed manager communication.',
  'VPN testing failed during one iteration due to mismatched peer keys.',
  'Splunk ingestion required source type tuning for cleaner firewall searches.',
]

const lessons = [
  'Segmentation improves control over traffic flow and reduces unnecessary access paths.',
  'Centralized logging makes investigation and alert review more practical.',
  'Firewall rules affect both connectivity and visibility, not just access.',
  'Repeated troubleshooting builds stronger infrastructure understanding.',
]

const resumeBullets = [
  'Built an enterprise-style home lab using pfSense, VLAN segmentation, Proxmox, Wazuh, Splunk, and Nagios to practice security monitoring and infrastructure troubleshooting.',
  'Configured segmented lab networks for management, servers, DMZ, IoT, and workstations to practice access control, firewall rule testing, and log monitoring.',
  'Documented lab validation tests, troubleshooting steps, and security controls to demonstrate practical SOC, networking, and infrastructure support skills.',
]

export default function HomeLabReportPage() {
  return (
    <section className="min-h-screen bg-slate-100 px-4 py-24 text-slate-900 print:bg-white print:px-0 print:py-0">
      <style jsx global>{`
        @media print {
          nav, footer {
            display: none !important;
          }

          body {
            background: white !important;
          }
        }
      `}</style>

      <div className="mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)] print:max-w-none print:rounded-none print:border-0 print:shadow-none">
        <div className="sticky top-16 z-10 flex justify-end border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur print:hidden">
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-100"
          >
            Print / Save as PDF
          </button>
        </div>

        <header className="border-b border-slate-200 bg-[linear-gradient(135deg,#f8fbff_0%,#eef7f7_55%,#eef5fb_100%)] px-8 py-10 sm:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-700">Recruiter Summary</p>
          <h1 className="mt-3 font-sora text-4xl font-bold tracking-tight text-slate-950">
            Infrastructure / Home Lab Report
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Home-lab environment built for hands-on learning across networking, firewall administration,
            VLAN segmentation, SIEM monitoring, VPN access, virtualization, and troubleshooting.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Candidate</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">Teliyah Perez</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Target Roles</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">SOC Analyst, Cybersecurity Analyst, IT / Network Support</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Environment</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">Home-lab environment</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Focus</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">Monitoring, segmentation, troubleshooting, documentation</p>
            </div>
          </div>
        </header>

        <div className="space-y-10 px-8 py-10 sm:px-12">
          <section>
            <h2 className="font-sora text-2xl font-bold text-slate-950">Purpose of the Lab</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              This lab was built to practice enterprise-style networking, firewall administration, VLAN segmentation,
              SIEM monitoring, infrastructure monitoring, VPN access, and security troubleshooting in a safe simulated
              environment.
            </p>
            <div className="mt-4 rounded-2xl border-l-4 border-sky-600 bg-sky-50 px-4 py-3 text-sm leading-7 text-slate-600">
              This report documents hands-on learning and validation in a home lab. It does not represent a real
              customer or enterprise production environment.
            </div>
          </section>

          <section>
            <h2 className="font-sora text-2xl font-bold text-slate-950">Environment Overview</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-xs uppercase tracking-[0.12em] text-slate-500">Component</th>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-xs uppercase tracking-[0.12em] text-slate-500">Technology</th>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-xs uppercase tracking-[0.12em] text-slate-500">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {overviewRows.map(([component, technology, purpose]) => (
                    <tr key={component}>
                      <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">{component}</td>
                      <td className="border border-slate-200 px-3 py-2 text-slate-700">{technology}</td>
                      <td className="border border-slate-200 px-3 py-2 text-slate-600">{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="font-sora text-xl font-bold text-slate-950">What I Practiced</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                {practiced.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="font-sora text-xl font-bold text-slate-950">Security Controls</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                {controls.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-sora text-2xl font-bold text-slate-950">Validation Highlights</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
              {validation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="font-sora text-xl font-bold text-slate-950">Troubleshooting Notes</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                {troubleshooting.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="font-sora text-xl font-bold text-slate-950">Lessons Learned</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                {lessons.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-sora text-2xl font-bold text-slate-950">Resume-Ready Summary</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
              {resumeBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}
