/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#a259ff',
          dark: '#6d28d9',
          light: '#c084fc',
        },
        bg: {
          DEFAULT: '#18122B',
          dark: '#120f1e',
        },
      },
      boxShadow: {
        glow: '0 0 16px 4px #a259ff99',
      },
    },
  },
  plugins: [],
}; 