import type { Config } from 'tailwindcss'


const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F0",
        navy: "#1a1a3e",
        accent: "#2D3FE0",
        "dark-card": "#0a0a1a",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 12px rgba(26,26,62,0.08)",
        "card-hover": "0 8px 32px rgba(26,26,62,0.16)",
      },
      borderRadius: {
        card: "4px",
      },
    },
  },
  plugins: [],
};
export default config;
