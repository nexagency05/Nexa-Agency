'use client'

import { AuroraGlow } from './AuroraGlow'
import { ConstellationField } from './ConstellationField'

interface DarkSectionBgProps {
  intensity?: 'hero' | 'subtle'
  density?: number
  interactive?: boolean
}

/**
 * Bundled background for any dark (ink) section: aurora depth + the
 * constellation dot motif. Drop in as the first child of a relative,
 * overflow-hidden section, then keep section content at z-10.
 */
export function DarkSectionBg({
  intensity = 'subtle',
  density = 0.85,
  interactive = true,
}: DarkSectionBgProps) {
  return (
    <>
      <AuroraGlow intensity={intensity} />
      <ConstellationField density={density} interactive={interactive} opacity={0.8} />
    </>
  )
}
