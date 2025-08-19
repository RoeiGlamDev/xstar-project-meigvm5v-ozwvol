import React from 'react'
import { motion } from 'framer-motion'
interface ContactFormProps {
  name: string
  email: string
  message: string
}

const ContactPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission logic here/
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-5">
      <motion.h1 
        className="text-4xl font-bold text-orange-500 mb-6" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Contact GlamCS
      </motion.h1>/
      <p className="text-lg text-gray-700 mb-8">
        We would love to hear from you! Please fill out the form below, and our team will get back to you shortly.
      </p>/
      
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>/
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="name" 
            type="text" 
            placeholder="Your Name" 
            required 
          />/
        </div>/
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>/
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="email" 
            type="email" 
            placeholder="Your Email" 
            required 
          />/
        </div>/
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>/
          <textarea 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="message" 
            rows={4} 
            placeholder="Your Message" 
            required 
          />/
        </div>/
        <div className="flex items-center justify-between">
          <button 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300" 
            type="submit"
          >
            Send Message
          </button>/
        </div>/
      </form>/

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">Our Location</h2>/
        <p className="text-lg text-gray-700 mb-2">Visit us at our GlamCS store:</p>/
        <p className="text-lg text-gray-700">123 Glamour St, Beauty City, BC 12345</p>/
      </div>/

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">Business Hours</h2>/
        <p className="text-lg text-gray-700">Monday - Friday: 9 AM - 6 PM</p>/
        <p className="text-lg text-gray-700">Saturday: 10 AM - 4 PM</p>/
        <p className="text-lg text-gray-700">Sunday: Closed</p>/
      </div>/
    </div>/
  )
}
export default ContactPage;