/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        violet: "var(--color-violet)",
        orange: "var(--color-orange)",
        darkBase: "var(--color-dark)",
        lightBase: "var(--color-light)",
        textPrimary: "var(--color-text-primary)",
        textSecondary: "var(--color-text-secondary)",
      },
      backgroundImage: {
        "main-gradient": "var(--gradient-main)",
        "hero-gradient": "var(--gradient-hero)",
      }
    },
  },
  plugins: [],
}