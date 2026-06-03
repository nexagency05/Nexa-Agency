'use client'

import { MessageCircle } from 'lucide-react'
import { waMessages } from '@/lib/site'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function MobileWhatsApp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(t)
  }, [])

  if (!visible) return null

  return (
    <motion.a
      href={waMessages.general}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="md:hidden fixed bottom-6 right-5 z-40 flex items-center gap-2 bg-blue text-white text-sm font-medium px-4 py-3 rounded-btn shadow-lg shadow-blue/30"
      initial={{ opacity: 0, scale: 0.8, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <MessageCircle size={16} />
      <span>Chat</span>
    </motion.a>
  )
}
