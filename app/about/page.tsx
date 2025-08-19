import React from 'react'
import { motion } from 'framer-motion'
interface TeamMember {
  name: string
  position: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Glamour',
    position: 'Founder & CEO',
    image: '/images/team/sophia.jpg',/
  },
  {
    name: 'Liam Luxe',
    position: 'Chief Marketing Officer',
    image: '/images/team/liam.jpg',/
  },
  {
    name: 'Emma Elegance',
    position: 'Lead Product Developer',
    image: '/images/team/emma.jpg',/
  },
]
const AboutPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600">
      <header className="text-center py-12">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About GlamCS
        </motion.h1>/
        <motion.p
          className="mt-4 text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover the essence of luxury in cosmetics with GlamCS, where elegance meets innovation.
        </motion.p>/
      </header>/

      <section className="max-w-5xl mx-auto px-4 py-12">
        <motion.h2
          className="text-3xl font-semibold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our History
        </motion.h2>/
        <motion.p
          className="text-lg mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Founded in 2020, GlamCS emerged from a passion for creating high-quality, luxurious cosmetics. Our mission is to empower individuals through beauty, providing products that enhance natural features while ensuring safety and sustainability.
        </motion.p>/
      </section>/

      <section className="max-w-5xl mx-auto px-4 py-12">
        <motion.h2
          className="text-3xl font-semibold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Our Values
        </motion.h2>/
        <motion.ul
          className="list-disc pl-5 text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <li>Quality: We prioritize the highest quality ingredients.</li>/
          <li>Innovation: Constantly evolving to meet the latest trends.</li>/
          <li>Sustainability: Committed to eco-friendly practices.</li>/
          <li>Diversity: Celebrating beauty in all its forms.</li>/
        </motion.ul>/
      </section>/

      <section className="max-w-5xl mx-auto px-4 py-12">
        <motion.h2
          className="text-3xl font-semibold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          Meet Our Team
        </motion.h2>/
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-orange-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={member.image} alt={member.name} className="rounded-full mb-4 w-32 h-32 mx-auto" />/
              <h3 className="text-xl font-semibold">{member.name}</h3>/
              <p className="text-md">{member.position}</p>/
            </motion.div>/
          ))}
        </div>/
      </section>/
    </div>/
  )
}
export default AboutPage;