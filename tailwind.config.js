/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs:'450px',
      // => @media (min-width: 450px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl':'1700px'
      // => @media (min-width: 1700x) { ... }

    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '12px'

      },
    },
    extend: {
      fontFamily: {
        'roboto':['Roboto'],
        'domCasual':['DomCasual']
      },
      colors:{
        primary:"#EE3036",
        secondary:'#9999AA',
        bgCard:'#E4E4E4',
        bgColor:'#F2F3F5'
      },
      boxShadow:{
        bottomSidebarShadow:'0px -1px 5px rgba(0, 0, 0, 0.1);'
      }
    },
  },
  plugins: [],
}