/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#e4d3e9ff",
        darkHover: "#2a004a",
        darkTheme: "#1a001f",
        lightTheme: "#ffffff",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        black: "4px 4px 0px 0px #000000",
        white: "4px 4px 0px 0px #ffffff",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(220px, 1fr))", // ✅ fixed
      },
    },
  },
  darkmode: "selector", 
  plugins: [],
};

export default config;
