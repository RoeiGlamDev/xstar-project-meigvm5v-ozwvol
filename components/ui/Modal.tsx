import React from 'react'
import { motion } from 'framer-motion'
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full transform transition-all"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <h2 className="text-2xl font-bold text-center text-orange-500 mb-4">{title}</h2>/
        <p className="text-gray-700 text-center mb-6">{content}</p>/
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            Close
          </button>/
        </div>/
      </motion.div>/
    </div>/
  )
}
export default Modal;