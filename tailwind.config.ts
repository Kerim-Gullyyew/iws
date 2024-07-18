import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        'xl': '1400px',
      },
    },
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

      fontSize: {
        'h1': '3em',
        'h2': '2em',
        'h3': '1.3em',
        'h4': '1em',
        'h5': '0.8em',  
        'h6': '0.7em',
        'p': '1em',
      },
      screens: {
        xs: '500px',
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      backgroundImage: {
        'asset-2': "url('/Asset-2.svg')",
        'asset-3': "url('/Compass-star-1.png')",

        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 4px 8px rgba(0, 0, 0, 0.5)',
        'custom-strong': '0 10px 20px rgba(0, 0, 0, 0.8)',
        'custom-color': '-1px 6px 37px -13px rgba(0, 0, 0, 0.16)',
      },

      colors: {
        primary: "#003372",
        background: "#FFF5E4",
        cardback: "#F4F5F8",
      },
    },
  },
  plugins: [],
};
export default config;
