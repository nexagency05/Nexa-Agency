'use client'

import { cn } from '@/lib/utils'

interface LogoProps {
  /** 'dark' = white text (over dark bg), 'light' = ink text (over white bg) */
  tone?: 'dark' | 'light'
  className?: string
  showTagline?: boolean
}

/**
 * Nexa typographic wordmark. Replaces the square raster logo so the mark adapts
 * to any background colour. The blue dot is the brand motif — set as the tittle
 * over the "N" via the inline accent.
 */
export function Logo({ tone = 'light', className, showTagline = false }: LogoProps) {
  const text = tone === 'dark' ? 'text-white' : 'text-ink'
  const sub = tone === 'dark' ? 'text-white/45' : 'text-muted'

  return (
    <span className={cn('inline-flex flex-col leading-none select-none', className)} aria-label="Nexa Agency">
      <span className="flex items-baseline gap-[3px]">
        <span className={cn('font-display font-bold tracking-tight text-[1.55rem]', text)}>
          Nexa
        </span>
        <span className="blue-dot mb-1" style={{ width: 7, height: 7 }} />
      </span>
      <span
        className={cn(
          'font-body font-medium uppercase tracking-[0.34em] text-[9px] -mt-0.5 pl-0.5',
          sub
        )}
      >
        Agency
      </span>
      {showTagline && (
        <span className={cn('font-body text-[10px] tracking-wide mt-1', sub)}>
          Creative Website Developer
        </span>
      )}
    </span>
  )
}
