'use client'

import { useEffect, useRef } from 'react'

interface ConstellationFieldProps {
  className?: string
  density?: number
  interactive?: boolean
  opacity?: number
}

type P = { x: number; y: number; vx: number; vy: number; r: number }

/**
 * Signature Nexa background: a slow-drifting field of blue dots linked by
 * hairlines, reacting to the cursor. Heavily optimised for a smooth main
 * thread:
 *  - throttled to ~30fps (the drift is slow; imperceptible vs 60fps)
 *  - DPR capped at 1.5 (decorative — crispness not needed)
 *  - all dots drawn in ONE fill, all links in TWO strokes via Path2D
 *    (instead of thousands of per-line draw calls)
 *  - squared-distance comparisons (no per-pair sqrt)
 *  - cursor rect cached on scroll/resize (no per-mousemove reflow)
 *  - rAF only runs while the canvas is on-screen (IntersectionObserver)
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

    const DPR = Math.min(window.devicePixelRatio || 1, 1.5)
    const BLUE = '41, 121, 255'
    const LINK = 120
    const LINK2 = LINK * LINK
    const HALF2 = LINK2 * 0.4
    const MOUSE = 160
    const MOUSE2 = MOUSE * MOUSE
    const FRAME_MS = 1000 / 30 // throttle to ~30fps

    let w = 0
    let h = 0
    let particles: P[] = []
    let raf = 0
    let lastT = 0
    let rectLeft = 0
    let rectTop = 0
    const mouse = { x: -9999, y: -9999, active: false }

    function measure() {
      const r = canvas!.getBoundingClientRect()
      rectLeft = r.left
      rectTop = r.top
    }

    function resize() {
      const parent = canvas!.parentElement
      w = parent?.clientWidth ?? window.innerWidth
      h = parent?.clientHeight ?? window.innerHeight
      canvas!.width = Math.round(w * DPR)
      canvas!.height = Math.round(h * DPR)
      canvas!.style.width = w + 'px'
      canvas!.style.height = h + 'px'
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0)
      measure()
      spawn()
    }

    function spawn() {
      const base = (w * h) / 26000
      const count = Math.min(Math.round(base * density), coarse ? 20 : 52)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        r: Math.random() * 1.5 + 0.8,
      }))
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h)
      const n = particles.length

      // ── update positions ──
      for (let i = 0; i < n; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < -20) p.x = w + 20
        else if (p.x > w + 20) p.x = -20
        if (p.y < -20) p.y = h + 20
        else if (p.y > h + 20) p.y = -20

        if (interactive && mouse.active) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const d2 = dx * dx + dy * dy
          if (d2 < MOUSE2 && d2 > 1) {
            const d = Math.sqrt(d2)
            const f = (1 - d / MOUSE) * 0.5
            p.x += (dx / d) * f
            p.y += (dy / d) * f
          }
        }
      }

      // ── links: 2 buckets (near/far) → 2 stroke calls total ──
      const near = new Path2D()
      const far = new Path2D()
      for (let i = 0; i < n; i++) {
        const p = particles[i]
        for (let j = i + 1; j < n; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d2 = dx * dx + dy * dy
          if (d2 < LINK2) {
            const path = d2 < HALF2 ? near : far
            path.moveTo(p.x, p.y)
            path.lineTo(q.x, q.y)
          }
        }
      }
      ctx!.lineWidth = 1
      ctx!.strokeStyle = `rgba(${BLUE}, ${0.22 * opacity})`
      ctx!.stroke(near)
      ctx!.strokeStyle = `rgba(${BLUE}, ${0.09 * opacity})`
      ctx!.stroke(far)

      // ── cursor links → 1 stroke ──
      if (interactive && mouse.active) {
        const ml = new Path2D()
        for (let i = 0; i < n; i++) {
          const p = particles[i]
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          if (dx * dx + dy * dy < MOUSE2) {
            ml.moveTo(p.x, p.y)
            ml.lineTo(mouse.x, mouse.y)
          }
        }
        ctx!.strokeStyle = `rgba(${BLUE}, ${0.3 * opacity})`
        ctx!.stroke(ml)
      }

      // ── dots → 1 fill ──
      const dots = new Path2D()
      for (let i = 0; i < n; i++) {
        const p = particles[i]
        dots.moveTo(p.x + p.r, p.y)
        dots.arc(p.x, p.y, p.r, 0, 6.2832)
      }
      ctx!.fillStyle = `rgba(${BLUE}, ${0.6 * opacity})`
      ctx!.fill(dots)
    }

    function frame(t: number) {
      raf = requestAnimationFrame(frame)
      if (t - lastT < FRAME_MS) return
      lastT = t
      draw()
    }

    function onMove(e: MouseEvent) {
      mouse.x = e.clientX - rectLeft
      mouse.y = e.clientY - rectTop
      mouse.active = true
    }
    function onLeave() {
      mouse.active = false
    }

    resize()

    // reduced motion: one static frame, no loop
    if (reduced) {
      draw()
      return () => {}
    }

    const start = () => { if (!raf) raf = requestAnimationFrame(frame) }
    const stop = () => { cancelAnimationFrame(raf); raf = 0 }

    // only animate while visible — keeps off-screen sections idle on load
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { rootMargin: '80px' }
    )
    io.observe(canvas)

    window.addEventListener('resize', resize)
    window.addEventListener('scroll', measure, { passive: true })
    if (interactive && !coarse) {
      window.addEventListener('mousemove', onMove, { passive: true })
      window.addEventListener('mouseout', onLeave, { passive: true })
    }

    return () => {
      stop()
      io.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', measure)
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
