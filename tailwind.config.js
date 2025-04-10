/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#2174EE',
        secondary: '#103A77',
        bg: '#FFFFFF'
      }
    },
  },
  plugins: [],
};
