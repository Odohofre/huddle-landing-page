/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-desktop": "url('./images/bg-hero-desktop.svg')",
        "hero-mobile": "url('./images/bg-hero-mobile.svg')",
      },
      boxShadow: {
        card: "0 0 15px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        attribute: "#3e52a3",
        primary: "#ff52bf",
        pacy: "#ebfbff", // pale cyan
        dacy: "#00252e", // dark cyan
        glue: "#808d99", // grey blue
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"], //font-weight 600 for headings
        Opensans: ['"Open Sans"', "sans-serif"], //font-weight 400, 700
      },
    },
  },
  plugins: [],
};
