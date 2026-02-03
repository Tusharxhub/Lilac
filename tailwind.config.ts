import type { Config } from "tailwindcss";

const config: Config = {
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
                "lilac-cream": "#FAF7F2", // Background color
                "lilac-green": "#1A3215", // Text and dark elements
                "lilac-beige": "#E8E4D9", // Card backgrounds
                "lilac-lavender": "#C8C4D1", // Lavender background (approx from image)
                "lilac-olive": "#82824C", // Office section background
            },
            fontFamily: {
                serif: ["Outfit", "sans-serif"],
                sans: ["Outfit", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
