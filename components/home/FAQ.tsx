'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { Reveal } from '@/components/motion/Reveal'
import { LightDecor } from '@/components/motion/LightDecor'
import { SectionLabel } from '@/components/ui/SectionLabel'

const FAQS = [
  {
    q: 'Bagaimana proses pembuatan website-nya?',
    a: '4 langkah: Konsultasi → Desain mockup (kamu approve dulu) → Development → Launch. DP 50% sebelum mulai, 50% sisanya dibayar setelah website siap dan kamu puas.',
  },
  {
    q: 'Berapa lama waktu pengerjaannya?',
    a: 'Landing page 3–5 hari kerja. Company profile 7–10 hari kerja. E-commerce 10–14 hari kerja. Web app (inventori, absensi, keuangan) 14–21 hari kerja. Timeline mulai dari DP diterima dan semua konten/aset sudah dikirim.',
  },
  {
    q: 'Berapa kali saya bisa revisi?',
    a: '2–3 kali revisi desain sudah termasuk di semua paket. Revisi konten (teks, gambar) tidak dibatasi selama proses pengerjaan. Revisi tambahan setelah batas akan dikenakan biaya yang disepakati sebelumnya.',
  },
  {
    q: 'Domain dan hosting sudah termasuk?',
    a: 'Kami bantu proses pembelian dan setup domain & hosting. Biaya domain/hosting ditanggung klien (di luar harga paket) karena itu tagihan tahunan yang milik kamu. Kami rekomendasikan provider terbaik dan bantu koneksinya.',
  },
  {
    q: 'Bagaimana kalau saya belum punya konten?',
    a: 'Tidak masalah. Kami bisa bantu dengan copywriting dasar dan saran konten. Namun untuk foto dan logo, idealnya kamu sediakan aset brand sendiri agar hasilnya lebih personal dan autentik.',
  },
  {
    q: 'Metode pembayaran apa yang tersedia?',
    a: 'Transfer bank (BCA, Mandiri, BRI, BNI), GoPay, OVO, DANA, dan QRIS. DP 50% dibayar sebelum pengerjaan dimulai, pelunasan 50% sebelum website diluncurkan.',
  },
  {
    q: 'Apakah website nanti bisa diupdate sendiri?',
    a: 'Untuk company profile dan e-commerce, bisa kami tambahkan CMS sederhana jika diperlukan (tersedia di paket Business & Premium). Atau kamu bisa pakai paket maintenance bulanan kami untuk update rutin.',
  },
]

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-line last:border-0">
      <button
        onClick={onToggle}
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-ink group-hover:text-blue transition-colors text-base pr-2">
          {q}
        </span>
        <span className="shrink-0 w-7 h-7 rounded-full border border-line flex items-center justify-center mt-0.5 group-hover:border-blue group-hover:bg-blue-tint transition-all">
          {isOpen ? (
            <Minus size={13} className="text-blue" />
          ) : (
            <Plus size={13} className="text-muted" />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-muted text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section-py bg-white relative overflow-hidden">
      <LightDecor />
      <div className="container-px max-w-3xl mx-auto relative z-10">
        <Reveal className="text-center mb-12">
          <SectionLabel className="mb-5">FAQ</SectionLabel>
          <h2 className="text-section-title text-ink mb-4">Pertanyaan yang sering ditanya</h2>
          <p className="text-muted">Tidak ada pertanyaan yang bodoh. Kalau belum ada di sini, tanya langsung via WhatsApp.</p>
        </Reveal>

        <Reveal>
          <div className="bg-paper rounded-card border border-line px-6">
            {FAQS.map((item, i) => (
              <FAQItem
                key={i}
                q={item.q}
                a={item.a}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
