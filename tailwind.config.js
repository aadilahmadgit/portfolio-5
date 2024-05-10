/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      screens:{
        'sm': '480px',
        'md':'768px',
        'lg':'1024px',
        'xl':'1280px'
      },
      spacing:{
        "big":"38rem"
      }
    },
   
    fontFamily:{
      'nunito':['Nunito', 'sans-serif']
    },

  },
  plugins: [],
}

