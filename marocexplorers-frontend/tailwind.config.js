/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            black:"#000000",
            blue:"#24285B",
            rouge:"#D00000",
            jaune:"#FFD200",
            gris:"#E5E5E5",
            white:"#FFFFFF",
            orange:"#F97316",
            orange1:"#ED8936",
            yellowPastel:"#FFE775",
        }
    }
  },
  plugins: [],
}

