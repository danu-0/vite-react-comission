/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'custom-light': '0 2px 7px rgba(255, 255, 255, 0.3)',
        'custom-dark': '0 2px 4px rgba(0, 0, 0, 0.3)',
       'custom-red': '0px 0 1px rgba(255, 0, 0, 0.5)',
      },
      colors: {
        'custom-black': '#09090b',
        'custom-white': '#38c172',
        'custom-secondary': '#18181b',
      }
      
    },
  },
  plugins: [],
}

