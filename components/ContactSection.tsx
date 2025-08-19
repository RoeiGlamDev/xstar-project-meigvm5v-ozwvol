import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface ContactFormData {
  name: string
  email: string
  message: string
  reason: string
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: '',
  })
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    if (!formData.message) newErrors.message = 'Message is required'
    if (!formData.reason) newErrors.reason = 'Please select a contact reason'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Handle form submission (e.g., send to API)/
      console.log('Form submitted:', formData)
      setFormData({ name: '', email: '', message: '', reason: '' })
      setErrors({})
    }
  }
  return (
    <section className="bg-white p-8 rounded-lg shadow-lg">
      <motion.h2
        className="text-3xl font-bold text-orange-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact GlamCS
      </motion.h2>/
      <p className="text-gray-700 mb-4">For inquiries about our luxury cosmetics products, please fill out the form below.</p>/
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Name</label>/
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={border-2 border-gray-300 rounded-lg p-2 w-full ${
              errors.name ? 'border-red-500' : 'border-orange-500'
            }}
            placeholder="Your Name"
          />/
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}/
        </div>/
        <div>
          <label className="block text-gray-700 mb-1">Email</label>/
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={border-2 border-gray-300 rounded-lg p-2 w-full ${
              errors.email ? 'border-red-500' : 'border-orange-500'
            }}
            placeholder="Your Email"
          />/
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}/
        </div>/
        <div>
          <label className="block text-gray-700 mb-1">Contact Reason</label>/
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className={border-2 border-gray-300 rounded-lg p-2 w-full ${
              errors.reason ? 'border-red-500' : 'border-orange-500'
            }}
          >
            <option value="">Select a reason</option>/
            <option value="Product Inquiry">Product Inquiry</option>/
            <option value="Partnership Opportunity">Partnership Opportunity</option>/
            <option value="Feedback">Feedback</option>/
          </select>/
          {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}/
        </div>/
        <div>
          <label className="block text-gray-700 mb-1">Message</label>/
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={border-2 border-gray-300 rounded-lg p-2 w-full ${
              errors.message ? 'border-red-500' : 'border-orange-500'
            }}
            placeholder="Your Message"
            rows={4}
          />/
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}/
        </div>/
        <button
          type="submit"
          className="bg-orange-600 text-white rounded-lg p-2 hover:bg-orange-500 transition duration-200"
        >
          Send Message
        </button>/
      </form>/
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-orange-600">GlamCS Business Information</h3>/
        <p className="text-gray-700">Location: 123 Glam Avenue, Beauty City, BC 12345</p>/
        <p className="text-gray-700">Business Hours: Mon-Fri 9 AM - 5 PM</p>/
      </div>/
    </section>/
  )
}
export default ContactSection;