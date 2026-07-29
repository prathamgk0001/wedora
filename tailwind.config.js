/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#60A5FA",
          secondary: "#BFDBFE",
          bg: "#F8FBFF",
          text: "#0F172A",
          textMuted: "#64748B",
          glass: "rgba(255, 255, 255, 0.55)",
          glassDark: "rgba(15, 23, 42, 0.04)",
          glassBorder: "rgba(255, 255, 255, 0.65)",
          accent: "#3B82F6",
        }
      },
      borderRadius: {
        '24': '24px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.05)',
        'glass-hover': '0 14px 40px 0 rgba(96, 165, 250, 0.15)',
        'soft': '0 10px 30px -10px rgba(15, 23, 42, 0.05)',
        'glow': '0 0 25px rgba(96, 165, 250, 0.35)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
