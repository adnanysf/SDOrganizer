module.exports = {
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Arimo', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height:{
        "1/10": "10%",
        "1/20": "5%",
        "1/15": "6.6666667%",
        "80vh": "80vh",
        "90vh": "90vh",
        "100dvh": "100dvh",
      },
      colors: {
'gradient-light': '#0A151B', // Darker than #0F2027
'gradient-dark': '#1A2A30', // Darker than #203A43
'gradient-darker': '#1B2B33', // Lighter than #2C5364
      }
    },
  },
  plugins: [],
};