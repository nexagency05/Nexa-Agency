'use client'

import { useEffect, useRef } from 'react'

interface ConstellationFieldProps {
  className?: string
  /** particle density factor — higher = more dots */
  density?: number
  /** whether dots react to the cursor */
  interactive?: boolean
  /** base opacity of the whole field */
  opacity?: number
}

type P = { x: number; y: number; vx: number; vy: number; r: number }

/**
 * Signature Nexa background: a slow-drifting field of blue dots connected by
 * hairlines (the brand's blue-dot motif scaled up). Reacts to the cursor on
 * desktop, fully static / hidden under prefers-reduced-motion. Canvas-based and
 * DPR-aware for crisp, jank-free rendering.
 */
export function ConstellationField({
  className,
  density = 1,
  interactive = true,
  opacity = 1,
}: ConstellationFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarse = window.matchMedia('(pointer: coarse)').matches
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let particles: P[] = []
    let raf = 0
    const mouse = { x: -9999, y: -9999, active: false }

    const BLUE = '41, 121, 255'
    const LINK_DIST = 130
    const MOUSE_DIST = 170

    function resize() {
      const parent = canvas!.parentElement
      width = parent?.clientWidth ?? window.innerWidth
      height = parent?.clientHeight ?? window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      canvas!.style.width = width + 'px'
      canvas!.style.height = height + 'px'
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      spawn()
    }

    function spawn() {
      // scale count with area, capped for perf; thinner on mobile
      const base = (width * height) / 18000
      const count = Math.min(Math.round(base * density), coarse ? 34 : 90)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.6 + 0.8,
      }))
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        // wrap around edges
        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20

        // gentle cursor attraction
        if (interactive && mouse.active) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const d = Math.hypot(dx, dy)
          if (d < MOUSE_DIST && d > 0.5) {
            const f = (1 - d / MOUSE_DIST) * 0.6
            p.x += (dx / d) * f
            p.y += (dy / d) * f
          }
        }

        // dot
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(${BLUE}, ${0.55 * opacity})`
        ctx!.fill()

        // links to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.hypot(dx, dy)
          if (dist < LINK_DIST) {
            const a = (1 - dist / LINK_DIST) * 0.32 * opacity
            ctx!.beginPath()
            ctx!.moveTo(p.x, p.y)
            ctx!.lineTo(q.x, q.y)
            ctx!.strokeStyle = `rgba(${BLUE}, ${a})`
            ctx!.lineWidth = 1
            ctx!.stroke()
          }
        }

        // brighter link from cursor to nearby dots
        if (interactive && mouse.active) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.hypot(dx, dy)
          if (dist < MOUSE_DIST) {
            const a = (1 - dist / MOUSE_DIST) * 0.5 * opacity
            ctx!.beginPath()
            ctx!.moveTo(p.x, p.y)
            ctx!.lineTo(mouse.x, mouse.y)
            ctx!.strokeStyle = `rgba(${BLUE}, ${a})`
            ctx!.lineWidth = 1
            ctx!.stroke()
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }

    function onMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.active = true
    }
    function onLeave() {
      mouse.active = false
      mouse.x = -9999
      mouse.y = -9999
    }

    resize()

    if (reduced) {
      // static single frame, no animation loop
      draw()
      cancelAnimationFrame(raf)
      ctx.clearRect(0, 0, width, height)
      // render one still frame
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${BLUE}, ${0.5 * opacity})`
        ctx.fill()
      }
      return () => {}
    }

    // Only run the animation loop while the canvas is on-screen — multiple
    // instances (hero, CTA band, footer) otherwise burn rAF cycles unseen.
    let visible = true
    const start = () => { if (!raf) raf = requestAnimationFrame(draw) }
    const stop = () => { cancelAnimationFrame(raf); raf = 0 }

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) start()
        else stop()
      },
      { rootMargin: '120px' }
    )
    io.observe(canvas)

    start()
    window.addEventListener('resize', resize)
    if (interactive && !coarse) {
      window.addEventListener('mousemove', onMove, { passive: true })
      window.addEventListener('mouseout', onLeave, { passive: true })
    }

    return () => {
      stop()
      io.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
    }
  }, [density, interactive, opacity])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className ?? ''}`}
    />
  )
}
