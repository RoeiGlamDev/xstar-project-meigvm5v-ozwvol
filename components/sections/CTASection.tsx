import React from 'react'
import { motion } from 'framer-motion'
interface CTASectionProps {
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink 
}) => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-lg text-center">
      <motion.h2 
        className="text-4xl font-bold text-orange-600 mb-4"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>/
      <motion.p 
        className="text-lg text-gray-700 mb-6" 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>/
      <motion.a 
        href={buttonLink} 
        className="inline-block px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50"
        initial={{ scale: 1 }} 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </motion.a>/
    </section>/
  )
}
export default CTASection
// Usage example/
// <CTASection /
//   title="Elevate Your Beauty with GlamCS" /
//   subtitle="Discover our luxurious range of cosmetics designed to enhance your natural beauty." /
//   buttonText="Shop Now" /
//   buttonLink="/shop" /
// />/