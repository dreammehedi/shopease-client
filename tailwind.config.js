/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      "fira-sans": ["Fira Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#2B6CB0",
        secondary: "#319795",
        background: "#F7FAFC",
        dark: "#2D3748",
        accent: "#E53E3E",
        success: "#38A169",
        warning: "#DD6B20",
      },
    },
  },
  plugins: [],
};
