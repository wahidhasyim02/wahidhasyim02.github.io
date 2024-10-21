/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Menyertakan semua file HTML dan JS dalam folder src
    "./*.html", // Menyertakan semua file HTML di root
    "./*.js", // Menyertakan semua file JS di root jika ada
  ],

  important: true,
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        "fade-in": "fadeIn 2s ease-in-out forwards",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(120px, 100px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 200px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        poppins: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        noto: [
          "Noto Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        dosis: ["Dosis"],
        serif: ["Noto Serif", "ui-serif", "serif"],
      },
      backgroundImage: {
        heroLight: "url('/images/bg.png')",
        heroDark: "url('/images/bg.png')",
      },
      spacing: {
        "custom-width": "calc(100% - 48px)",
        1.5: "7px",
        15: "60px",
        17: "68px",
        17.5: "72px",
        18: "74px",
        "2%": "2%",
        "8%": "8%",
        22.5: "5.625rem",
        175: "43.75rem",
        "30%": "30%",
        "50%": "50%",
        "65%": "65%",
        "75%": "75%",
        "85%": "85%",
        "95%": "95%",
        "96%": "96%",
        "98%": "98%",
      },
      zIndex: {
        1000: "1000",
        1100: "1100",
        1200: "1200",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],

  darkMode: "class",
};
