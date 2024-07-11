/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#09090b',
        'custom-white': '#38c172',
        'custom-secondary': '#18181b',
      }
    },
  },
  plugins: [],
}

