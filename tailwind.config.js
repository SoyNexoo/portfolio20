/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // puntos de interruccion tamaño de pantalla
      sm: { max: "640px" }, // móvil
      md: { min: "641px", max: "768px" }, // tablet
      smMd: { max: "768px" },
      lg: { min: "769px", max: "1024px" }, // laptop
      xl: { min: "1025px", max: "1280px" }, // desktop
      "2xl": { min: "1281px" }, // desktop
    },
    extend: {},
    colors: {
      white: "#fff",
      violet: "#885BC1",
      darkViolet: "#51126F",
      gray: "#D9D9D9",
      lightGray: "#EDEDED",
      cyan: "#6A99A9",
      black: "#202020",
      darkCyan: "#598392",
    },
  },
  plugins: [],
};
