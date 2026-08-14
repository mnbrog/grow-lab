/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Satoshi', 'General Sans', 'sans-serif'],
        accent: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: "#0A2640", // Dark blue
        ink: {
          DEFAULT: "#060E17",
          900: "#060E17",
          800: "#0A1622",
          700: "#0F1F30",
          600: "#16293C",
          500: "#20374C",
          400: "#33506A",
        },
        accent: {
          DEFAULT: "#74b3bf", // Grow Labs Teal
          50: "#EFF8F9",
          100: "#DCEFF1",
          200: "#B4DEE3",
          300: "#9BCCD4",
          400: "#74b3bf",
          500: "#5A96A3",
          600: "#457885",
        },
      },
      fontSize: {
        // Fluid, viewport-scaled display sizes for kinetic headlines
        'display-sm': ['clamp(2.5rem, 6vw, 4.25rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.0', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(3.25rem, 9.5vw, 8.5rem)', { lineHeight: '0.98', letterSpacing: '-0.03em' }],
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'slide-down': 'slide-down 0.3s ease-out forwards',
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
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-10%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}