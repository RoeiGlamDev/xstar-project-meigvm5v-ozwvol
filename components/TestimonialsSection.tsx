import React from 'react'
import { motion } from 'framer-motion'
interface Testimonial {
  name: string
  photo: string
  review: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia Turner',
    photo: 'https://example.com/photos/sophia.jpg',/
    review: 'GlamCS transformed my makeup routine! The quality of the products is unparalleled. I feel glamorous every day!',
    rating: 5,
  },
  {
    name: 'Emma Johnson',
    photo: 'https://example.com/photos/emma.jpg',/
    review: 'I love the modern packaging and luxurious feel of GlamCS products. They truly elevate my beauty game!',
    rating: 4,
  },
  {
    name: 'Olivia Smith',
    photo: 'https://example.com/photos/olivia.jpg',/
    review: 'The GlamCS lipsticks are my new obsession! Rich colors and long-lasting wear make them a must-have.',
    rating: 5,
  },
]
const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <h2 className="text-center text-3xl font-bold text-orange-500 mb-8">What Our Customers Say About GlamCS</h2>/
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-orange-100 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="flex items-center mb-4">
              <img src={testimonial.photo} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />/
              <div>
                <h3 className="text-lg font-semibold text-orange-500">{testimonial.name}</h3>/
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 20 20">/
                      <path d="M10 15.27L16.18 20 14.54 13.97 20 9.24l-7.19-.61L10 2 7.19 8.63 0 9.24l5.46 4.73L3.82 20z" />/
                    </svg>/
                  ))}
                </div>/
              </div>/
            </div>/
            <p className="text-gray-700">{testimonial.review}</p>/
          </motion.div>/
        ))}
      </div>/
    </section>/
  )
}
export default TestimonialsSection;