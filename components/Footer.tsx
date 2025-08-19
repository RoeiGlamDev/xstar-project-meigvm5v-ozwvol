import React from 'react'
import { motion } from 'framer-motion'
interface FooterProps {
  companyName: string
  links: Array<{ name: string; url: string }>
  socialMedia: Array<{ platform: string; url: string; icon: JSX.Element }>
}

const Footer: React.FC<FooterProps> = () => {
  const companyName = "GlamCS"
  const links = [
    { name: "About Us", url: "/about" },/
    { name: "Shop", url: "/shop" },/
    { name: "Contact", url: "/contact" },/
    { name: "Privacy Policy", url: "/privacy" },/
  ]
  const socialMedia = [
    { platform: "Facebook", url: "https://facebook.com/GlamCS", icon: <i className="fab fa-facebook-f"></i> },/
    { platform: "Instagram", url: "https://instagram.com/GlamCS", icon: <i className="fab fa-instagram"></i> },/
    { platform: "Twitter", url: "https://twitter.com/GlamCS", icon: <i className="fab fa-twitter"></i> },/
  ]
  return (
    <footer className="bg-white text-orange-600 py-8">
      <div className="container mx-auto flex flex-col items-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {companyName}
        </motion.h2>/
        <nav className="mb-4">
          <ul className="flex space-x-6">
            {links.map(link => (
              <li key={link.name}>
                <motion.a
                  href={link.url}
                  className="hover:text-orange-500 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                </motion.a>/
              </li>/
            ))}
          </ul>/
        </nav>/
        <div className="text-sm mb-4">
          <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>/
        </div>/
        <div className="flex space-x-4">
          {socialMedia.map(social => (
            <motion.a
              key={social.platform}
              href={social.url}
              className="text-orange-600 hover:text-orange-500 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              {social.icon}
            </motion.a>/
          ))}
        </div>/
      </div>/
    </footer>/
  )
}
export default Footer;