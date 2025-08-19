import React from 'react'
import { motion } from 'framer-motion'
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
  onClick?: () => void
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: { type: 'spring', stiffness: 300 },
  },
  tap: {
    scale: 0.95,
    transition: { type: 'spring', stiffness: 300 },
  },
}
const sizeClasses = {
  small: 'px-3 py-2 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-5 py-3 text-lg',
}
const variantClasses = {
  primary: 'bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300',
  secondary: 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-300',
}
const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'medium', children, onClick }) => {
  const classes = ${sizeClasses[size]} ${variantClasses[variant]} rounded-lg shadow-lg transition duration-300 ease-in-out
  return (
    <motion.button
      className={classes}
      onClick={onClick}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      aria-label={typeof children === 'string' ? children : 'Button'}
    >
      {children}
    </motion.button>/
  )
}
export default Button;