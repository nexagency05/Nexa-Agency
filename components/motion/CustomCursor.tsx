'use client'

import { useEffect, useRef } from 'react'

/**
 * Zero-lag custom cursor — moves via direct DOM transform (no React state,
 * no Framer Motion spring, no re-renders). The dot tracks the pointer at the
 * browser's native frame rate. Scale/opacity changes use CSS transitions only.
 * Desktop + non-touch only; hidden on touch/coarse pointer devices.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Don't show on touch screens or when reduced-motion is preferred
    const coarse = window.matchMedia('(pointer: coarse)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (coarse || reduced) return

    const dot = dotRef.current
    if (!dot) return

    let x = -100, y = -100

    function move(e: MouseEvent) {
      x = e.clientX
      y = e.clientY
      // Direct style mutation — no React state, no re-render, no lag
      dot!.style.transform = `translate(${x - 6}px, ${y - 6}px)`
    }

    function over(e: MouseEvent) {
      const target = e.target as HTMLElement
      const interactive = !!target.closest(
        'a, button, [role="button"], input, select, textarea, label'
      )
      dot!.style.transform = `translate(${x - 6}px, ${y - 6}px) scale(${interactive ? 2.8 : 1})`
      dot!.style.opacity = interactive ? '0.55' : '1'
    }

    // Show only when cursor enters the window
    function enter() { dot!.style.opacity = '1' }
    function leave() { dot!.style.opacity = '0' }

    document.documentElement.classList.add('cursor-none')
    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', over, { passive: true })
    document.addEventListener('mouseenter', enter)
    document.addEventListener('mouseleave', leave)

    return () => {
      document.documentElement.classList.remove('cursor-none')
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.removeEventListener('mouseenter', enter)
      document.removeEventListener('mouseleave', leave)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        width: 12,
        height: 12,
        borderRadius: '50%',
        background: '#2979FF',
        opacity: 0,
        // CSS transition only for scale/opacity — position is instant
        transition: 'transform 0.08s cubic-bezier(0.22,1,0.36,1), opacity 0.15s ease',
        willChange: 'transform',
      }}
    />
  )
}
