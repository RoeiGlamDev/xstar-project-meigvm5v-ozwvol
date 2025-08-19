import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface InputProps {
  label: string
  type: string
  placeholder: string
  required?: boolean
  validationMessage?: string
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, required, validationMessage }) => {
  const [value, setValue] = useState('')
  const [isValid, setIsValid] = useState(true)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (required && e.target.value.trim() === '') {
      setIsValid(false)
    } else {
      setIsValid(true)
    }
  }
  return (
    <div className="flex flex-col mb-6">
      <label className="text-lg font-semibold text-orange-500 mb-2">{label}</label>/
      <motion.input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={px-4 py-2 border rounded-md transition duration-300 ease-in-out ${
          isValid ? 'border-orange-300 focus:border-orange-500' : 'border-red-500'
        } bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        required={required}
      />/
      {!isValid && validationMessage && (
        <p className="text-red-500 text-sm mt-1">{validationMessage}</p>/
      )}
    </div>/
  )
}
export default Input;