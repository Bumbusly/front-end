/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="light"]'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: []
}