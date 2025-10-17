/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'food-orange': '#FF6B35',
        'food-red': '#DC2626',
        'food-yellow': '#F59E0B',
        'food-brown': '#78350F',
        'food-cream': '#FEF3C7',
      },
    },
  },
  plugins: [],
}