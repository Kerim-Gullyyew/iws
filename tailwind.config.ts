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
        xl: "1400px",
      },
    },
    extend: {
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        fade: "fadeOut 0.8s ease",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },

      fontSize: {},
      screens: {
        sm: "576px",
        md: "768px",
        lg: "1025px",
      },
      backgroundImage: {
        "asset-2": "url('/Asset-2.svg')",
        "asset-3": "url('/Compass-star-1.png')",

        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "custom-light": "0 2px 4px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0 4px 8px rgba(0, 0, 0, 0.5)",
        "custom-strong": "0 10px 20px rgba(0, 0, 0, 0.8)",
        "custom-color": "-1px 6px 37px -13px rgba(0, 0, 0, 0.16)",
      },

      colors: {
        primary: "#003372",
        activeBackground: "#E5EAFF",
        disactiveBackground: "#F6F6F6",
        textGray: "#A6A6A6",
        border: "#E6E6E6",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#FFF5E4",
        cardback: "#F4F5F8",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    },
  },
  plugins: [],
};
export default config;
