import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface HeaderProps {
  logo: string
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          className="text-orange-600 font-bold text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logo} alt="GlamCS Logo" className="h-10" />/
        </motion.div>/
        
        <nav className="hidden md:flex space-x-8 text-orange-600">
          <motion.a 
            href="#home" 
            className="hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Home
          </motion.a>/
          <motion.a 
            href="#products" 
            className="hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Products
          </motion.a>/
          <motion.a 
            href="#about" 
            className="hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            About Us
          </motion.a>/
          <motion.a 
            href="#contact" 
            className="hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Contact
          </motion.a>/
        </nav>/

        <button 
          className="md:hidden text-orange-600 focus:outline-none" 
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? '✖' : '☰'}
        </button>/
      </div>/

      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-md"
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.5 }}
        >
          <nav className="flex flex-col space-y-4 p-4 text-orange-600">
            <motion.a 
              href="#home" 
              className="hover:text-orange-500 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Home
            </motion.a>/
            <motion.a 
              href="#products" 
              className="hover:text-orange-500 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Products
            </motion.a>/
            <motion.a 
              href="#about" 
              className="hover:text-orange-500 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              About Us
            </motion.a>/
            <motion.a 
              href="#contact" 
              className="hover:text-orange-500 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Contact
            </motion.a>/
          </nav>/
        </motion.div>/
      )}
    </header>/
  )
}
export default Header;