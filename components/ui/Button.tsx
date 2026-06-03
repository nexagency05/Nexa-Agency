import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

type ButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>
type AnchorProps = ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

const base =
  'inline-flex items-center justify-center gap-2.5 font-semibold rounded-btn transition-all duration-200 whitespace-nowrap select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-blue text-white hover:bg-blue-press active:scale-[0.97] shadow-blue/20 shadow-md',
  secondary:
    'bg-transparent text-ink border border-line hover:border-blue hover:text-blue active:scale-[0.97]',
  ghost:
    'bg-transparent text-muted hover:text-ink hover:bg-paper active:scale-[0.97]',
  outline:
    'bg-transparent text-white border border-white/20 hover:border-white/50 active:scale-[0.97]',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'text-sm px-5 py-2.5 min-h-[42px]',
  md: 'text-[15px] px-7 py-3.5 min-h-[50px]',
  lg: 'text-base md:text-[17px] px-9 py-[18px] min-h-[60px]',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  )
)
Button.displayName = 'Button'

export const ButtonLink = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  )
)
ButtonLink.displayName = 'ButtonLink'
