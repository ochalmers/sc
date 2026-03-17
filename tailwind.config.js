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
          50: "#f7f7f6",
          100: "#efefed",
          200: "#d9d9d5",
          300: "#b9b9b3",
          400: "#8a8a83",
          500: "#62625c",
          600: "#3f3f3a",
          700: "#2a2a26",
          800: "#161615",
          900: "#0b0b0b",
          950: "#080808",
        },
        paper: {
          50: "#fafbf8",
          100: "#f4f5f0",
          200: "#edefe8",
          300: "#e6e8e0",
        },
        accent: {
          indigo: "#2f2cff",
          teal: "#5fe7c8",
          clay: "#c78b6f",
          moss: "#6b8578",
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

