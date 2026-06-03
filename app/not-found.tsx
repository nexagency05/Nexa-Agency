import Link from 'next/link'
import { ButtonLink } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ink flex items-center justify-center dot-grid-white">
      <div className="text-center px-6">
        <span className="text-9xl font-display font-bold text-white/5 select-none block">404</span>
        <h1 className="text-3xl font-display font-bold text-white mt-4 mb-3">Halaman tidak ditemukan</h1>
        <p className="text-white/50 mb-8">Halaman yang kamu cari tidak ada atau sudah dipindahkan.</p>
        <ButtonLink href="/" size="lg">Kembali ke Beranda</ButtonLink>
      </div>
    </div>
  )
}
