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
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Arial",
          "Noto Sans",
          "Liberation Sans",
          "sans-serif",
        ],
        montserrat: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Arial",
          "Noto Sans",
          "Liberation Sans",
          "sans-serif",
        ],
      },
    },
  },
} satisfies Config;
