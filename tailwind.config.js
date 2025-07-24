/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: "#0A2640", // Dark blue 
        accent: "#3FD0C9",  // Teal
      },
      // New animation and keyframes added below
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}