/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      backdropFilter: { 'none': 'none', 'blur': 'blur(20px)' },

    },
  },
  plugins: [
    require('tailwindcss-filters'),

  ],
}

