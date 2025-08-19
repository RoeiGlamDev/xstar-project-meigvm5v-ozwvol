import React from 'react'
import { motion } from 'framer-motion'
interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-white text-center p-6">
            <motion.h1 
                className="text-6xl font-bold text-orange-600 mb-4"
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}>
                Welcome to GlamCS
            </motion.h1>/
            <motion.p 
                className="text-xl text-gray-700 mb-8 max-w-lg"
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}>
                Discover a world of luxurious cosmetics designed to enhance your natural beauty. At GlamCS, we believe in empowering individuals with high-quality products that speak elegance.
            </motion.p>/
            <div className="flex space-x-4">
                <motion.button 
                    className="bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 transition duration-200 ease-in-out"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    Shop Now
                </motion.button>/
                <motion.button 
                    className="border border-orange-500 text-orange-500 font-semibold py-2 px-4 rounded hover:bg-orange-500 hover:text-white transition duration-200 ease-in-out"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    Explore Collections
                </motion.button>/
            </div>/
            <div className="mt-10">
                <motion.p 
                    className="text-sm text-gray-500"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.7 }}>
                    Trusted by beauty enthusiasts worldwide.
                </motion.p>/
            </div>/
        </section>/
    )
}
export default HeroSection;