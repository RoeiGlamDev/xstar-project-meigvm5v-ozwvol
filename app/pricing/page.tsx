import React from 'react'
import { motion } from 'framer-motion'
interface PricingOption {
  name: string
  price: string
  features: string[]
}

const pricingOptions: PricingOption[] = [
  {
    name: 'Essential Glam',
    price: '$29.99',
    features: [
      '2x Lipsticks',
      '1x Foundation',
      '1x Makeup Brush',
      'Free Shipping',
    ],
  },
  {
    name: 'Deluxe Glam',
    price: '$49.99',
    features: [
      '4x Lipsticks',
      '2x Foundation',
      '2x Makeup Brushes',
      'Luxury Pouch',
      'Free Shipping',
    ],
  },
  {
    name: 'Ultimate Glam',
    price: '$79.99',
    features: [
      '6x Lipsticks',
      '3x Foundation',
      '3x Makeup Brushes',
      'Luxury Pouch',
      'Exclusive Access to New Products',
      'Free Shipping',
    ],
  },
]
const FAQs = [
  {
    question: 'What is the return policy?',
    answer: 'You can return any unused products within 30 days for a full refund.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship worldwide! Shipping fees may vary based on location.',
  },
  {
    question: 'Are your products cruelty-free?',
    answer: 'Absolutely! GlamCS is committed to cruelty-free cosmetics.',
  },
]
const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        GlamCS Pricing Plans
      </motion.h1>/
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {pricingOptions.map((option) => (
          <div
            key={option.name}
            className="bg-orange-200 border border-orange-400 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4">{option.name}</h2>/
            <p className="text-xl font-bold mb-4">{option.price}</p>/
            <ul className="list-disc list-inside mb-4">
              {option.features.map((feature) => (
                <li key={feature}>{feature}</li>/
              ))}
            </ul>/
            <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition-colors duration-300">
              Choose Plan
            </button>/
          </div>/
        ))}
      </motion.div>/

      <motion.h2
        className="text-3xl font-bold text-center mt-10 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>/
      <div className="mt-4">
        {FAQs.map((faq) => (
          <div key={faq.question} className="mb-4">
            <h3 className="font-semibold text-xl">{faq.question}</h3>/
            <p className="ml-4">{faq.answer}</p>/
          </div>/
        ))}
      </div>/
    </div>/
  )
}
export default PricingPage;