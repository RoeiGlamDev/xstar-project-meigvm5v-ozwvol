import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
interface FadeInProps {
  children: React.ReactNode
  className?: string
}

const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const variants = {
    hidden: { opacity: 0, translateY: 20 },
    visible: { opacity: 1, translateY: 0 },
  }
  return (
    <motion.div
      ref={ref}
      className={transition-all duration-700 ease-in-out ${className}}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>/
  )
}
const GlamCSFadeIn: React.FC = () => {
  return (
    <FadeIn className="p-4">
      <h1 className="text-4xl font-bold text-orange-500">
        Welcome to GlamCS
      </h1>/
      <p className="mt-2 text-lg text-white">
        Discover the elegance of modern cosmetics with GlamCS. Our luxurious
        products are designed to enhance your natural beauty, offering high-end
        formulations that feel as good as they look. Dive into a world of
        glamour and sophistication!
      </p>/
      <button className="mt-4 bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300 ease-in-out transform hover:-translate-y-1">
        Shop Now
      </button>/
    </FadeIn>/
  )
}
export default GlamCSFadeIn;