'use client'

import { useEffect, type ReactNode } from 'react'

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    let lenis: import('lenis').default | undefined

    async function init() {
      const Lenis = (await import('lenis')).default
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })

      function raf(time: number) {
        lenis?.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      let rafId = requestAnimationFrame(raf)

      return () => {
        cancelAnimationFrame(rafId)
        lenis?.destroy()
      }
    }

    const cleanupPromise = init()
    return () => {
      cleanupPromise.then((cleanup) => cleanup?.())
    }
  }, [])

  return <>{children}</>
}
