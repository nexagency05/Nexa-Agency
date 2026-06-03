import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: string
  className?: string
  dark?: boolean
}

export function SectionLabel({ children, className, dark = false }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'section-label',
        dark && 'bg-white/10 text-blue border-white/10',
        className
      )}
    >
      <span className="blue-dot" />
      {children}
    </div>
  )
}
