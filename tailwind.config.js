/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        wedding: {
          red: "#8E1822",
          vermilion: "#A91D2A",
          ivory: "#F8F0DF",
          cream: "#F3E5C8",
          gold: "#B88A3B",
          maroon: "#5D1219",
          ink: "#2B211D",
          green: "#334D3B"
        }
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        script: ["Great Vibes", "cursive"],
        body: ["Lora", "serif"],
        sans: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};