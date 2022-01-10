module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Inter", "sans-serif"],
      cursive: ["Limelight", "cursive"],
      serif: ["B612", "serif"],
    },
    extend: {
      screens: {
        standalone: { raw: "(display-mode:standalone)" },
      },
      colors: {
        primary: {
          50: "#ECF8F8",
          100: "#DDF2F3",
          200: "#BFE6E8",
          300: "#A1DADD",
          400: "#83CFD3",
          500: "#65C3C8",
          600: "#40AFB4",
          700: "#32878B",
          800: "#235F62",
          900: "#143738",
        },
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "in-out-expo": "cubic-bezier(0.7, 0, 0.3, 1)",
      },
      boxShadow: {
        menu: "0 4px 21px 0 rgb(49 49 49 / 10%)",
        form: "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
        input: "0 2px 4px 0 rgb(0 0 0 / 6%)",
        blogCard: "0 0 0 1px rgb(0 0 0 / 10%)",
        card: "0 1px 8px 0 rgb(49 49 49 / 10%)",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      transform: ["group-hover"],
      translate: ["group-hover"],
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
