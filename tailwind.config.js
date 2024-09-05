/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '8px 5px 10px -1px rgba(0,0,0),  -3px -3px 6px -3px rgba(155,155,155,155)',
      },
    },
  },
  plugins: [],
}