import React from 'react'
import { motion } from 'framer-motion'
interface Feature {
  title: string
  description: string
}

const features: Feature[] = [
  {
    title: 'Luxurious Formulations',
    description: 'Experience the richness of our carefully crafted cosmetics, designed to enhance your natural beauty.',
  },
  {
    title: 'Innovative Packaging',
    description: 'Our sleek, modern packaging not only looks stunning but also provides an eco-friendly solution.',
  },
  {
    title: 'Vibrant Colors',
    description: 'Discover a palette that reflects the latest trends in beauty, perfect for every occasion.',
  },
]
const GlamCS: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <header className="flex flex-col items-center justify-center bg-orange-500 py-16">
        <motion.h1
          className="text-5xl font-bold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to GlamCS
        </motion.h1>/
        <motion.p
          className="mt-4 text-xl text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Elevate Your Beauty Routine
        </motion.p>/
      </header>/

      <section className="py-16 px-4">
        <h2 className="text-4xl font-semibold text-center mb-8">Why Choose GlamCS?</h2>/
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-orange-500">{feature.title}</h3>/
              <p className="mt-2 text-gray-600">{feature.description}</p>/
            </motion.div>/
          ))}
        </div>/
      </section>/

      <footer className="bg-orange-500 py-8">
        <div className="text-center text-white">
          <p className="text-lg">Join the GlamCS Revolution</p>/
          <p className="mt-2">Follow us on social media for the latest updates!</p>/
        </div>/
      </footer>/
    </div>/
  )
}
export default GlamCS;