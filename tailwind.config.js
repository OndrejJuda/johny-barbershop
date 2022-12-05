/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': {
        50: '#fbf7ef',
        100: '#f3e6cf',
        300: '#debd80',
        500: '#d6ad60',
        600: '#c19c56',
        700: '#967943',
        900: '#2b2313'
      }
    }
  },
  plugins: [],
}