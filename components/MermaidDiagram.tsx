'use client'

import { useEffect, useId, useMemo, useState } from 'react'

type MermaidDiagramProps = {
  chart: string
  title?: string
  className?: string
}

const fallbackTitle = 'Diagram preview unavailable'

export default function MermaidDiagram({ chart, title = 'Mermaid diagram', className = '' }: MermaidDiagramProps) {
  const uid = useId()
  const [svg, setSvg] = useState<string>('')
  const [isError, setIsError] = useState(false)

  const diagramId = useMemo(() => `mermaid-${uid.replace(/[:]/g, '')}`, [uid])

  useEffect(() => {
    let mounted = true

    const renderDiagram = async () => {
      try {
        const mermaid = (await import('mermaid')).default
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'loose',
          theme: 'base',
          themeVariables: {
            background: '#08131d',
            primaryColor: '#10263a',
            primaryBorderColor: '#2b556e',
            primaryTextColor: '#d7e7f7',
            lineColor: '#6fb3da',
            secondaryColor: '#12283a',
            tertiaryColor: '#0f2234',
            fontFamily: 'Source Sans 3, Segoe UI, Arial, sans-serif',
          },
          flowchart: {
            htmlLabels: false,
            curve: 'basis',
          },
        })

        const { svg } = await mermaid.render(diagramId, chart)

        if (mounted) {
          setSvg(svg)
          setIsError(false)
        }
      } catch {
        if (mounted) {
          setSvg('')
          setIsError(true)
        }
      }
    }

    renderDiagram()

    return () => {
      mounted = false
    }
  }, [chart, diagramId])

  if (isError) {
    return (
      <div className={`rounded-xl border border-navy-700/60 bg-[#08131d] p-5 ${className}`}>
        <p className="font-sora text-sm font-semibold text-brand-light">{fallbackTitle}</p>
        <p className="mt-2 text-sm leading-6 text-brand-muted">
          Mock diagram placeholder rendered because Mermaid could not initialize in this environment.
        </p>
        <div className="mt-4 grid gap-2 text-xs text-brand-muted sm:grid-cols-2">
          <div className="rounded-lg border border-navy-700/40 bg-navy-900/70 px-3 py-2">Internet - pfSense Firewall</div>
          <div className="rounded-lg border border-navy-700/40 bg-navy-900/70 px-3 py-2">Managed Core Switch</div>
          <div className="rounded-lg border border-navy-700/40 bg-navy-900/70 px-3 py-2">VLAN Segmentation</div>
          <div className="rounded-lg border border-navy-700/40 bg-navy-900/70 px-3 py-2">SIEM and Monitoring</div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`overflow-x-auto rounded-xl border border-teal-300/15 bg-[#08131d] p-3 ${className}`}
      role="img"
      aria-label={title}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
