import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#001E95",
        inputBorder: "#CED4DA",
      },
      borderRadius: {
        md7: "7px",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
} satisfies Config;
