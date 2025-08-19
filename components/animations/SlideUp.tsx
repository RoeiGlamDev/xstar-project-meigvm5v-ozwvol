import React from 'react'
import { motion } from 'framer-motion'
interface SlideUpProps {
  children: React.ReactNode
}

const slideUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}
const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideUpVariants}
      transition={{ duration: 0.5 }}
      className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      {children}
    </motion.div>/
  )
}
const GlamCSSection: React.FC = () => {
  return (
    <section className="bg-orange-500 text-white py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Welcome to GlamCS</h2>/
      <SlideUp>
        <p className="text-lg text-center">
          At GlamCS, we believe that beauty is an art and every product is a masterpiece. Explore our luxurious range of cosmetics designed to enhance your natural beauty.
        </p>/
      </SlideUp>/
      <SlideUp>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-center">Our Products</h3>/
          <ul className="list-disc list-inside mt-4">
            <li>High-Quality Foundations</li>/
            <li>Vibrant Lipsticks</li>/
            <li>Elegant Eyeshadow Palettes</li>/
            <li>Luxurious Skincare</li>/
          </ul>/
        </div>/
      </SlideUp>/
    </section>/
  )
}
export default GlamCSSection;