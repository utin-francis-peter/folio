/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FD853A",
        dark: "#171717",
        glass: "rgba(255, 255, 255, 0.1)",
      },

      fontFamily: {
        lufga: ["lufga", "sans-serif"],
        unlock: ["unlock", "san-serif"],
        urbanist: ["urbanist", "san-serif"],
      },
    },
  },
  plugins: [],
};
