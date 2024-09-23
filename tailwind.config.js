/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      poppins:["Poppins", "Sans-serif"],
      bangers: ["Bangers", "system-ui"],
      nunito:["Nunito", "sans-serif"]
    }
  },
  plugins: [],
}