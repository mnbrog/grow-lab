/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A2640", // Dark blue (trust)
        accent: "#3FD0C9",  // Teal
      },
    },
  },
  plugins: [],
}
