import React from 'react'
import { motion } from 'framer-motion'
interface CardProps {
    title: string
    description: string
    imageUrl: string
    price: string
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price }) => {
    return (
        <motion.div
            className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover rounded-t-lg"
            />/
            <div className="p-4">
                <h2 className="text-2xl font-bold text-orange-500">{title}</h2>/
                <p className="text-gray-700 mt-2">{description}</p>/
                <p className="text-lg font-semibold text-orange-600 mt-4">{price}</p>/
                <button className="mt-4 w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-200">
                    Add to Cart
                </button>/
            </div>/
        </motion.div>/
    )
}
export default Card;