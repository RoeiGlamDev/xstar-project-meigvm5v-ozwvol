import React from 'react'
import { motion } from 'framer-motion'
interface PricingTier {
  name: string
  price: string
  features: string[]
}

const pricingTiers: PricingTier[] = [
  {
    name: "Glam Starter",
    price: "$29",
    features: [
      "Basic Makeup Application",
      "Skin Analysis",
      "One-on-One Consultation",
      "Personalized Product Recommendations"
    ]
  },
  {
    name: "Glam Luxe",
    price: "$59",
    features: [
      "Advanced Makeup Application",
      "Skin Analysis",
      "One-on-One Consultation",
      "Personalized Product Recommendations",
      "GlamCS Exclusive Product Samples"
    ]
  },
  {
    name: "Glam Elite",
    price: "$99",
    features: [
      "Full Makeup Experience",
      "Skin Analysis",
      "One-on-One Consultation",
      "Personalized Product Recommendations",
      "GlamCS Exclusive Product Samples",
      "Follow-up Consultation"
    ]
  },
]
const PricingSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-8">GlamCS Pricing</h2>/
        <p className="text-lg text-gray-700 mb-12">Choose your perfect GlamCS experience</p>/
        <div className="flex justify-center space-x-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold text-orange-500 mb-4">{tier.name}</h3>/
              <p className="text-3xl font-semibold text-gray-800 mb-4">{tier.price}</p>/
              <ul className="text-left text-gray-600 mb-6">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="mb-2">- {feature}</li>/
                ))}
              </ul>/
              <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300">
                Choose Plan
              </button>/
            </motion.div>/
          ))}
        </div>/
      </div>/
    </section>/
  )
}
export default PricingSection;