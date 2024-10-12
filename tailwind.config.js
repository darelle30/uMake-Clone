const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        satisfy: ["Satisfy", "cursive"],
        bebasNeue: ["Bebas Neue", "sans-serif"],
        pacifico: ["Pacifico", "system-ui"],
        anton: ["Anton", "system-ui"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        'ssm': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      keyframes: {
        scrollText: {
          '100%': { transform: 'translateX(100%)' }, 
          
        
        },
      },
      animation: {
        scroll: 'scrollText 100s linear infinite',
      },
    },
  },
  plugins: [],
});
