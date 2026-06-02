'use client'
import Link from 'next/link'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { site, news } from '@/lib/data'

export function Hero() {
  const items = [...news].sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true })) //new Date(b.date).getTime() - new Date(a.date).getTime())

  const listRef = useRef<HTMLDivElement | null>(null)
  const [maxH, setMaxH] = useState<string | undefined>(undefined)

  function recalcMaxHeight() {
    const el = listRef.current
    if (!el) return
    const children = Array.from(el.children) as HTMLElement[]
    if (children.length <= 3) {
      setMaxH(undefined)
      return
    }
    const first = children[0]
    const third = children[2]
    const h = (third.offsetTop + third.offsetHeight) - first.offsetTop
    setMaxH(`${h}px`)
  }

  useLayoutEffect(() => {
    recalcMaxHeight()
  }, [items.length])

  useEffect(() => {
    const onResize = () => recalcMaxHeight()
    window.addEventListener('resize', onResize)
    const el = listRef.current
    const ro = el ? new ResizeObserver(() => recalcMaxHeight()) : null
    if (el && ro) ro.observe(el)
    return () => {
      window.removeEventListener('resize', onResize)
      if (el && ro) ro.disconnect()
    }
  }, [])

  return (
    <section className="relative w-screen mx-[calc(50%-50vw)] min-h-[100svh] flex items-center pb-4 md:pb-6">
      <div className="relative w-full">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Building{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Cognitive Technologies
            </span>{' '}
            for Sustainable Built Environments
          </h1>

          <p className="mt-5 text-neutralMid text-lg md:text-xl">
            Empowering Intelligence and Sustainability Through Data-Driven Innovation
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/about"
              aria-label="Learn more about the lab"
              className="inline-flex items-center justify-center rounded-xl2 bg-primary px-5 py-2.5 text-white shadow hover:opacity-90"
            >
              Learn More
            </Link>
            <Link
              href="/team"
              aria-label="Meet the team"
              className="inline-flex items-center justify-center rounded-xl2 border px-5 py-2.5 hover:bg-panel"
            >
              Meet the Team
            </Link>
          </div>

          <div className="mt-14">
            <div className="mx-auto rounded-xl2 border border-bordercolor/60 bg-surface/95 backdrop-blur p-5 shadow w-full sm:max-w-2xl lg:max-w-3xl">
              <div className="text-base font-semibold">Latest News</div>
              <div
                ref={listRef}
                className="mt-3 pr-1 space-y-3 overflow-y-auto"
                style={maxH ? { maxHeight: maxH } : undefined}
                role="list"
                aria-label="Latest news"
              >
                {items.map((n) => (
                  <div key={n.id} role="listitem" className="flex gap-3 text-left">
                    <div className="w-24 shrink-0 text-xs text-neutralMid">{n.date}</div>
                    {n.href ? (
                      <a href={n.href} className="underline text-primary text-sm leading-snug">
                        {n.title}
                      </a>
                    ) : (
                      <div className="text-sm leading-snug">{n.title}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
