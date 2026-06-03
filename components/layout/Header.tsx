'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ButtonLink } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { MenuToggle } from '@/components/layout/MenuToggle'
import { waMessages } from '@/lib/site'
import { cn } from '@/lib/utils'

const NAV = [
  { label: 'Beranda', href: '/' },
  { label: 'Layanan', href: '/services' },
  { label: 'Harga', href: '/pricing' },
  { label: 'Karya', href: '/work' },
  { label: 'Kontak', href: '/contact' },
]

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'py-3 bg-white/90 backdrop-blur-md border-b border-line shadow-sm'
            : 'py-5 bg-transparent'
        )}
      >
        <div className="container-px max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo wordmark — adapts to header background */}
          <Link href="/" className="relative z-10 flex items-center" aria-label="Nexa Agency — Beranda">
            <Logo tone={menuOpen || !scrolled ? 'dark' : 'light'} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navigasi utama">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 link-underline',
                  pathname === item.href
                    ? 'text-blue'
                    : scrolled
                      ? 'text-ink hover:text-blue'
                      : 'text-white/75 hover:text-white'
                )}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ButtonLink href={waMessages.project} target="_blank" rel="noopener noreferrer" size="md">
              Mulai Proyek
            </ButtonLink>
          </div>

          {/* Mobile menu toggle */}
          <MenuToggle
            open={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            dark={menuOpen || !scrolled}
          />
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-ink flex flex-col dot-grid-white"
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-px pt-24 pb-12 flex-1 flex flex-col justify-center">
              <nav className="space-y-1" aria-label="Navigasi mobile">
                {NAV.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={prefersReduced ? { opacity: 1 } : { opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'block text-4xl font-display font-bold py-3 border-b border-white/10 transition-colors',
                        pathname === item.href ? 'text-blue' : 'text-white hover:text-blue'
                      )}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="mt-10"
                initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <ButtonLink
                  href={waMessages.project}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className="w-full justify-center"
                >
                  Mulai Proyek
                </ButtonLink>
              </motion.div>

              <motion.p
                className="mt-6 text-muted text-sm"
                initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Respons 08.00–17.00 WIB · Bandung, Indonesia
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
