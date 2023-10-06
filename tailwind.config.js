/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '995px',
        'tab' : '1025px',
        'xl': '1280px',
        'medium' : '1480px',
        '2xl': '1536px',
        'large': '1600px',
        'air': '820px',
        'small' : '376px'
      },
      boxShadow: {
        '3xl': '0 -35px 50px 0px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}