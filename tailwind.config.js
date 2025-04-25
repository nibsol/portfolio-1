/** @type {import('tailwindcss').Config} */
module.exports = {
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
      maxWidth: {
        container: '1096px', // Add your custom max width here
      },
      container: {
        center: true, // Optional: center the container
        padding: {
          DEFAULT: '1rem', // Adjust default padding as needed
          sm: '1rem', 
          md: '2rem', 
          lg: '2rem', 
          xl: '2rem', 
          '2xl': '2rem', 
        },
      },
    },
  },
  plugins: [],
};
