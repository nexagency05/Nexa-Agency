'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Mail, Instagram, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { DarkSectionBg } from '@/components/motion/DarkSectionBg'
import { site, waMessages } from '@/lib/site'
import { pricingCategories } from '@/lib/pricing'

const BUDGET_OPTIONS = [
  'Kurang dari Rp 500.000',
  'Rp 500.000 – Rp 2.000.000',
  'Rp 2.000.000 – Rp 5.000.000',
  'Rp 5.000.000 – Rp 15.000.000',
  'Di atas Rp 15.000.000',
  'Belum tahu / diskusi dulu',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    service: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSending(true)
    // Build WhatsApp pre-filled message from form
    const msg = [
      `Halo Nexa Agency, ini ${form.name}.`,
      `Kontak: ${form.contact}`,
      `Layanan yang dibutuhkan: ${form.service}`,
      `Anggaran: ${form.budget}`,
      form.message ? `Pesan: ${form.message}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
      window.open(
        `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(msg)}`,
        '_blank',
        'noopener,noreferrer'
      )
    }, 600)
  }

  const inputCls =
    'w-full px-4 py-3 bg-paper border border-line rounded-xl text-ink text-sm placeholder:text-muted focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all duration-200'

  return (
    <>
      {/* Hero */}
      <section className="bg-ink section-py pt-36 dot-grid-white relative overflow-hidden">
        <DarkSectionBg intensity="subtle" />
        <div className="container-px max-w-7xl mx-auto relative z-10">
          <Reveal className="max-w-2xl">
            <SectionLabel dark className="mb-6">Kontak</SectionLabel>
            <h1 className="text-section-title text-white mb-5">
              Mulai percakapan,<br />
              <span className="text-blue">tanpa basa-basi</span>
            </h1>
            <p className="text-white/60 text-lg">
              Ceritakan kebutuhanmu. Kami respons dalam jam kerja 08.00–17.00 WIB,
              dan konsultasi awal selalu gratis.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact options + form */}
      <section className="section-py bg-white">
        <div className="container-px max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-14">
          {/* Left: contact info */}
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-display font-bold text-2xl text-ink mb-8">
                Hubungi langsung
              </h2>

              <div className="space-y-5">
                <a
                  href={waMessages.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-card border border-line hover:border-blue hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-tint flex items-center justify-center shrink-0 group-hover:bg-blue transition-colors duration-300">
                    <MessageCircle size={18} className="text-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm">WhatsApp</p>
                    <p className="text-muted text-xs mt-0.5">{site.contact.whatsappDisplay}</p>
                    <p className="text-blue text-xs mt-1">Chat sekarang →</p>
                  </div>
                </a>

                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-start gap-4 p-4 rounded-card border border-line hover:border-blue hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-tint flex items-center justify-center shrink-0 group-hover:bg-blue transition-colors duration-300">
                    <Mail size={18} className="text-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm">Email</p>
                    <p className="text-muted text-xs mt-0.5">{site.contact.email}</p>
                    <p className="text-blue text-xs mt-1">Kirim email →</p>
                  </div>
                </a>

                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-card border border-line hover:border-blue hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-tint flex items-center justify-center shrink-0 group-hover:bg-blue transition-colors duration-300">
                    <Instagram size={18} className="text-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm">Instagram</p>
                    <p className="text-muted text-xs mt-0.5">@nexa_agency_id</p>
                    <p className="text-blue text-xs mt-1">Lihat Instagram →</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-muted text-sm">
                  <Clock size={15} className="text-blue shrink-0" />
                  <span>Jam respons: {site.contact.responseHours}</span>
                </div>
                <div className="flex items-center gap-3 text-muted text-sm">
                  <MapPin size={15} className="text-blue shrink-0" />
                  <span>{site.contact.location}</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <Reveal>
              <h2 className="font-display font-bold text-2xl text-ink mb-8">
                Atau isi formulir ini
              </h2>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-blue-tint border border-blue/15 rounded-card p-10 text-center"
                  >
                    <CheckCircle2 size={48} className="text-blue mx-auto mb-4" />
                    <h3 className="font-display font-bold text-xl text-ink mb-2">
                      WhatsApp sudah terbuka!
                    </h3>
                    <p className="text-muted">
                      Pesan sudah disiapkan. Tinggal kirim di WhatsApp dan kami akan segera merespons.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', contact: '', service: '', budget: '', message: '' }) }}
                      className="mt-6 text-blue text-sm font-medium hover:underline"
                    >
                      Isi formulir lagi
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
                          Nama <span className="text-blue">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Nama kamu atau bisnis"
                          value={form.name}
                          onChange={handleChange}
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact" className="block text-sm font-medium text-ink mb-1.5">
                          WhatsApp / Email <span className="text-blue">*</span>
                        </label>
                        <input
                          id="contact"
                          name="contact"
                          type="text"
                          required
                          placeholder="+62 8xx / email@..."
                          value={form.contact}
                          onChange={handleChange}
                          className={inputCls}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-ink mb-1.5">
                          Jenis Layanan
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={inputCls}
                        >
                          <option value="">Pilih layanan...</option>
                          {pricingCategories.map((c) => (
                            <option key={c.id} value={c.name}>{c.name}</option>
                          ))}
                          <option value="Belum tahu">Belum tahu / diskusi dulu</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-ink mb-1.5">
                          Anggaran
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className={inputCls}
                        >
                          <option value="">Pilih kisaran...</option>
                          {BUDGET_OPTIONS.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
                        Ceritakan kebutuhanmu
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Jenis bisnis, fitur yang diinginkan, referensi, atau pertanyaan lainnya..."
                        value={form.message}
                        onChange={handleChange}
                        className={`${inputCls} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full flex items-center justify-center gap-2 bg-blue text-white text-sm font-medium px-6 py-4 rounded-btn hover:bg-blue-press active:scale-[0.98] transition-all duration-200 disabled:opacity-60"
                    >
                      {sending ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Memproses...
                        </>
                      ) : (
                        <>
                          <MessageCircle size={16} />
                          Kirim via WhatsApp
                        </>
                      )}
                    </button>
                    <p className="text-xs text-muted text-center">
                      Form ini akan membuka WhatsApp dengan pesan yang sudah disiapkan.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
