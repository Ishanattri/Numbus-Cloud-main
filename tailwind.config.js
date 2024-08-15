const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'per': "#575757",
        "blue1": "#3D52A0",
        "blue2": "#ADBBDA",
        "blue3": "#EDE8F5",
        "fb": "#1877F2",
        "Li": "#0a66c2",
        "Gi": "#2b3137",
        "Insta":"#e1306c"
      }
    },
    screens:{
      'sm': {'max': '639px'},
    }
    // screens: {
    //   'sm': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'md': '768px',
    //   // => @media (min-width: 768px) { ... }

    //   'lg': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'xl': '1280px',
    //   // => @media (min-width: 1280px) { ... }

    //   '2xl': '1536px',
    //   // => @media (min-width: 1536px) { ... }
    // },
    
  },
  plugins: [],
});

