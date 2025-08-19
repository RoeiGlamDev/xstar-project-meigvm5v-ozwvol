import React from 'react'
import { motion } from 'framer-motion'
interface Stats {
  title: string
  value: number
  description: string
}

const statsData: Stats[] = [
  { title: 'Products Launched', value: 150, description: 'High-quality cosmetic products that enhance beauty.' },
  { title: 'Happy Customers', value: 5000, description: 'Satisfaction guaranteed with our premium line.' },
  { title: 'Awards Won', value: 10, description: 'Recognized for excellence in the cosmetics industry.' },
  { title: 'Years in Business', value: 5, description: 'A trusted name in modern cosmetics.' },
]
const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-8">GlamCS Achievements</h2>/
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.h3 className="text-3xl font-bold text-orange-600">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="counter"
                >
                  {stat.value}
                </motion.span>/
              </motion.h3>/
              <p className="text-lg text-gray-700 mt-2">{stat.title}</p>/
              <p className="text-sm text-gray-500 mt-1">{stat.description}</p>/
            </motion.div>/
          ))}
        </div>/
      </div>/
    </section>/
  )
}
export default StatsSection;