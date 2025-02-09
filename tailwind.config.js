/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1f3e72',
        secondary: 'rgba(255, 255, 255, 0.78)',
        blackColor: '#131110',
        blueColor: '#4066ff',
        lightBlue: '#eeeeff',
      },
      boxShadow: {
        card: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Example box shadow value
      },
      fonts: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

