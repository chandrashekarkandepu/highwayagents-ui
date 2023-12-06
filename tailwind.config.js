/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      screens:{
        sm:"480px",
        md:"768px",
        lg:"1024px"
      },
      extend: {
        colors:{
            primaryColor:'#010a5e',
            primaryColorLight:"#010d78",
            secondaryColor:"#FFCC00",
            paragraphColor:'#c0c0c0',
            whiteColor:"#fff",
            greenColor:"#007936",
            redColor:"#cc3433",
            blackColor:"#000",
            darkCOlorLight:"#171717",

        },
    
      },
      container:{
        center:true,
        padding:{
          DEFAULT:'1rem',
          sm:'1.5rm'
        }
      },
      fontFamily:{
        oswald:['Oswald','sans-serif'],
        dmsans:['DM Sans','sans-serif']
      }
    },
    plugins: [],
  }