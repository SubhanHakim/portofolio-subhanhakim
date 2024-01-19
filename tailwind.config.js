/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primaryColor": '#577DE0',
      "grayColor": '#F0F3FC',
      "blackGray": '#67686A',
      'blackColor':  '#000000',
    },
    fontFamily:{
      'primary': ['"Anton"',  'Open Sans'],
      'secondary': ['"Manrope"', 'Open Sans']
    },
    extend: {},
  },
  plugins: [],
}