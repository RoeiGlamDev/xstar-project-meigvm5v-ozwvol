import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber';/
import { OrbitControls } from '@react-three/drei';/
import { motion } from 'framer-motion'
const Scene: React.FC = () => {
  useEffect(() => {
    // Initialize any 3D elements here/
  }, [])
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <motion.h1 
        className="text-5xl font-bold text-orange-600 mb-10"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        Welcome to GlamCS
      </motion.h1>/
      <Canvas className="w-full h-full">
        <OrbitControls />/
        {/ Add your 3D models or interactive components here /}/
        {/ Example: <Model /> /}/
      </Canvas>/
      <motion.p 
        className="text-lg text-gray-700 mt-5"
        initial={{ y: -20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Discover our luxurious range of cosmetics designed to elevate your beauty routine.
      </motion.p>/
      <motion.button 
        className="mt-5 px-6 py-3 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-500 transition duration-300"
        whileHover={{ scale: 1.05 }}
      >
        Shop Now
      </motion.button>/
    </div>/
  )
}
export default Scene;