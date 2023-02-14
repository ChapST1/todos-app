/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'unique': '0px 0px 1px 1px rgb(71, 70, 70)',
      }
    },
  },
  plugins: [],
}
