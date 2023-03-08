/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      marginBatas: {
        margin: "0px 10px"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}