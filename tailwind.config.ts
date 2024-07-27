import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "rgb(var(--background))"
        },
        foreground: {
          DEFAULT: "rgb(var(--foreground))"
        },
        accent: {
          DEFAULT: "rgb(var(--accent))"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans]
      }
    },
  },
  plugins: [],
}

export default config