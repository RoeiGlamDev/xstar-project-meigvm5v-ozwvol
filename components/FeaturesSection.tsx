import React from 'react'
import { motion } from 'framer-motion'
interface Feature {
  id: number
  title: string
  description: string
  icon: JSX.Element
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Premium Quality',
    description: 'Experience the luxurious feel of our high-end cosmetics, crafted with the finest ingredients for a flawless finish.',
    icon: <i className="fas fa-star text-orange-500"></i>,/
  },
  {
    id: 2,
    title: 'Cruelty-Free',
    description: 'Proudly offering a range of cosmetics that are 100% cruelty-free, ensuring beauty without compromise.',
    icon: <i className="fas fa-leaf text-orange-500"></i>,/
  },
  {
    id: 3,
    title: 'Vibrant Colors',
    description: 'Explore our extensive palette of vibrant shades designed to enhance your natural beauty and make a statement.',
    icon: <i className="fas fa-paint-brush text-orange-500"></i>,/
  },
  {
    id: 4,
    title: 'Expert Guidance',
    description: 'Our beauty experts are here to help you select the perfect products tailored to your unique style and needs.',
    icon: <i className="fas fa-user-tie text-orange-500"></i>,/
  },
]
const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-10">Discover GlamCS Features</h2>/
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-gray-50 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <div className="text-5xl">{feature.icon}</div>/
                <h3 className="text-2xl font-semibold text-orange-500 ml-4">{feature.title}</h3>/
              </div>/
              <p className="text-gray-600">{feature.description}</p>/
            </motion.div>/
          ))}
        </div>/
      </div>/
    </section>/
  )
}
export default FeaturesSection;