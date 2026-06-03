'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Building2, ShoppingBag, Zap, BarChart3, UserCheck, Wallet, Heart } from 'lucide-react'
import { Reveal, RevealItem } from '@/components/motion/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

const SERVICES = [
  {
    icon: Building2,
    title: 'Company Profile',
    desc: 'Website profesional yang membangun kepercayaan pelanggan dan menampilkan bisnis kamu terbaik.',
    from: 'Mulai Rp 1.500.000',
    href: '/services#company-profile',
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce',
    desc: 'Toko online lengkap dengan katalog, order WhatsApp, dan integrasi marketplace.',
    from: 'Mulai Rp 4.000.000',
    href: '/services#ecommerce',
  },
  {
    icon: Zap,
    title: 'Landing Page',
    desc: 'Halaman konversi tinggi untuk iklan dan launch produk. Cepat, fokus, dan efektif.',
    from: 'Mulai Rp 800.000',
    href: '/services#landing-page',
  },
  {
    icon: BarChart3,
    title: 'Sistem Inventori',
    desc: 'Web app manajemen stok yang mudah diakses dari mana saja, real-time.',
    from: 'Mulai Rp 4.000.000',
    href: '/services#inventory',
  },
  {
    icon: UserCheck,
    title: 'Sistem Absensi',
    desc: 'Absensi digital karyawan dengan dashboard admin dan laporan otomatis.',
    from: 'Mulai Rp 3.000.000',
    href: '/services#attendance',
  },
  {
    icon: Wallet,
    title: 'Sistem Keuangan',
    desc: 'Catat cashflow, buat laporan L/R, dan kelola keuangan bisnis dengan mudah.',
    from: 'Mulai Rp 2.000.000',
    href: '/services#finance',
  },
  {
    icon: Heart,
    title: 'Undangan Digital',
    desc: 'Undangan pernikahan online yang elegan dengan RSVP, countdown, dan galeri foto.',
    from: 'Mulai Rp 150.000',
    href: '/services#wedding',
  },
]

export function ServicesPreview() {
  return (
    <section className="section-py bg-white relative overflow-hidden">
      {/* subtle depth */}
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
      <div
        className="absolute -top-20 right-0 w-[480px] h-[480px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(41,121,255,0.07), transparent 70%)' }}
      />
      <div className="container-px max-w-7xl mx-auto relative z-10">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel className="mb-5">Layanan</SectionLabel>
            <h2 className="text-section-title text-ink">
              Semua yang kamu<br />butuhkan, satu studio
            </h2>
          </div>
          <Link
            href="/services"
            className="flex items-center gap-2 text-blue font-medium text-sm hover:gap-3 transition-all group shrink-0"
          >
            Lihat semua layanan
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>

        <Reveal stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map((s) => {
            const Icon = s.icon
            return (
              <RevealItem key={s.title}>
                <motion.a
                  href={s.href}
                  className="group relative block p-6 bg-white border border-line rounded-card hover:border-blue hover:shadow-card-hover transition-all duration-300 h-full overflow-hidden"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* hover wash */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-tint/0 to-blue-tint/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <ArrowUpRight
                    size={18}
                    className="absolute top-5 right-5 text-blue opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
                  />
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-blue-tint flex items-center justify-center mb-4 group-hover:bg-blue transition-colors duration-300">
                      <Icon size={18} className="text-blue group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-display font-bold text-ink mb-2 text-card-title">{s.title}</h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">{s.desc}</p>
                    <span className="text-xs font-semibold text-blue">{s.from}</span>
                  </div>
                </motion.a>
              </RevealItem>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
