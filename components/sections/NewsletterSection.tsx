import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface NewsletterSectionProps {
  onSubscribe: (email: string) => void
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ onSubscribe }) => {
  const [email, setEmail] = useState('')
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      onSubscribe(email)
      setEmail('')
    }
  }
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-orange-500 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Join the GlamCS Family
        </motion.h2>/
        <motion.p
          className="text-lg text-gray-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Subscribe to our newsletter for exclusive offers, beauty tips, and the latest in luxury cosmetics.
        </motion.p>/
        <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 md:mr-2 mb-4 md:mb-0 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your email"
            required
          />/
          <motion.button
            type="submit"
            className="bg-orange-500 text-white font-semibold rounded-lg p-3 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>/
        </form>/
      </div>/
    </section>/
  )
}
export default NewsletterSection;