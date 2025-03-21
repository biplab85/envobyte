import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'laptop': { 'min': '768px', 'max': '1024px' },
        'laptopMax': { 'min': '768px', 'max': '1370px' },
        'laptopMob': { 'min': '320px', 'max': '1024px' },
        'ipad': { 'min': '767.88px', 'max': '1300px' },
        'ipadMOb': { 'min': '320px', 'max': '1300px' },
        'mob': { 'min': '320px', 'max': '767px' },
        'custom': { 'min': '320px', 'max': '980px' },
        'smwide': { 'min': '320px', 'max': '1250px' },
      },
    },
  },
  plugins: [],
} satisfies Config;
