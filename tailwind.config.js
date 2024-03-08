/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto"],
      },
      backgroundColor: {
        main: "#0F0F0F",
        white: "#FFFFFF",
        gray: "rgba(142,145,143,0.8)",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      Red: "#CC0000",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
