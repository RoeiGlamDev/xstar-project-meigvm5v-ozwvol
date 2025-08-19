import { defineConfig } from 'tailwindcss'
const colors = {
  orange: {
    DEFAULT: '#FFA500', //.*?/
    light: '#FFB84D', // Lighter shade for hover effects/
    dark: '#CC8400', // Darker shade for accents/
  },
  white: '#FFFFFF', // Primary white color/
}
export default defineConfig({
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'fade-out': 'fadeOut 0.5s ease-out',
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
});