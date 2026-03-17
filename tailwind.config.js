/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Aeonik", "Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        ink: {
          50: "#fbfbfa",
          100: "#f4f4f2",
          200: "#e6e6e2",
          300: "#cfcfca",
          400: "#a8a8a2",
          500: "#7d7d78",
          600: "#565653",
          700: "#3a3a38",
          800: "#232322",
          900: "#151515",
          950: "#121212",
        },
        paper: {
          50: "#fbfbf9",
          100: "#f9f8f6",
          200: "#f7f6f3",
          300: "#f1f0ec",
        },
        accent: {
          indigo: "#3a39ff",
          teal: "#4fd6be",
          clay: "#b9856e",
          moss: "#6c857a",
          slate: "#6b7785",
        },
      },
      letterSpacing: {
        tightish: "-0.02em",
        editorial: "-0.035em",
      },
      boxShadow: {
        soft: "0 18px 55px rgba(8,8,8,.10)",
        card: "0 16px 40px rgba(8,8,8,.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

