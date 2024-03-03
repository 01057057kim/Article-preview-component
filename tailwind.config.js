/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'v-d-g-blue' : 'hsl(217, 19%, 35%)',
        'd-d-blue' : 'hsl(214, 17%, 51%)',
        'g-blue' : 'hsl(212, 23%, 69%)',
        'l-g-blue' : 'hsl(210, 46%, 95%)',
      },
      fontFamily :{
        'manrope' : 'Manrope , sans-serif',
      },
    },
  },
  plugins: [],
}

