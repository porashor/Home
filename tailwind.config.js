/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1f3e72',
        secondary: "rgba(255, 255, 255, 0.78)",
        blackColor: "#131110",
        blueGradient: "linear-gradient(97.05deg, #4066ff 3.76%, #2949c6 100%)",
        orangeGradient: "linear-gradient(270deg, #ffb978 0%, #ff922d 100%)",
        blueColor: "#4066ff",
        lightBlue: "#eeeeff",
      },
      boxShadow: {
        card: "0px 23px 21px -8px rgba(136, 160, 255, 0.25)",
      },
      fonts: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

