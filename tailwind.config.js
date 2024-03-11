/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto"],
        Teko: ["Teko"],
      },
      backgroundColor: {
        main: "#0F0F0F",
        white: "#FFFFFF",
        gray: "rgba(142,145,143,0.2)",
        gray2: "rgba(142,145,143,0.4)",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      Red: "#CC0000",
      white: "#FFFFFF",
      gray: "rgba(142,145,143,0.8)",
    },
  },
  plugins: [],
};
