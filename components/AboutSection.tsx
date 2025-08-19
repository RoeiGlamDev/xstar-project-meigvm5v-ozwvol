import React from 'react'
import { motion } from 'framer-motion'
interface TeamMember {
  name: string
  role: string
  description: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Lee',
    role: 'Founder & CEO',
    description: 'With over a decade of experience in the cosmetics industry, Sophia brings a passion for beauty and innovation to GlamCS.',
  },
  {
    name: 'Marcus Chen',
    role: 'Head of Product Development',
    description: 'An expert in formulation science, Marcus ensures that every GlamCS product meets the highest standards of quality and effectiveness.',
  },
  {
    name: 'Emma Garcia',
    role: 'Marketing Director',
    description: 'Emma specializes in creating compelling brand narratives that resonate with our customers, helping GlamCS shine in the competitive cosmetics market.',
  },
]
const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-orange-600 py-20 px-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-10">About GlamCS</h2>/
        <p className="text-lg text-center mb-5">
          At GlamCS, we believe that beauty is a personal journey, and our mission is to empower individuals to express themselves through high-quality cosmetics. Founded in the heart of the beauty industry, GlamCS is committed to creating innovative and luxurious products that inspire confidence and creativity.
        </p>/
        <h3 className="text-2xl font-semibold text-center mb-5">Our Mission</h3>/
        <p className="text-lg text-center mb-10">
          Our mission at GlamCS is to redefine beauty standards by offering a diverse range of cosmetics that cater to all skin tones and types. We strive to provide products that not only enhance beauty but also promote self-love and acceptance.
        </p>/

        <h3 className="text-2xl font-semibold text-center mb-5">Meet Our Team</h3>/
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              whileHover={{ scale: 1.05 }}
              className="bg-orange-100 p-5 rounded-lg shadow-lg text-center transition-transform duration-300"
            >
              <h4 className="text-xl font-bold">{member.name}</h4>/
              <p className="text-md font-semibold">{member.role}</p>/
              <p className="text-sm">{member.description}</p>/
            </motion.div>/
          ))}
        </div>/

        <h3 className="text-2xl font-semibold text-center mt-10">Our Values</h3>/
        <p className="text-lg text-center">
          At GlamCS, we value innovation, inclusivity, and sustainability. We are dedicated to using ethically sourced ingredients and environmentally friendly practices to create our products. Our commitment to excellence drives us to continuously improve and adapt to the ever-changing beauty landscape.
        </p>/

        <h3 className="text-2xl font-semibold text-center mt-10">Achievements</h3>/
        <p className="text-lg text-center mb-5">
          GlamCS has been recognized for its outstanding contributions to the cosmetics industry, receiving multiple awards for product innovation and customer satisfaction. We take pride in our community and strive to make a positive impact through our initiatives.
        </p>/
      </motion.div>/
    </section>/
  )
}
export default AboutSection;