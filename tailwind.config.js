/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", ":global(.dark)"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderRadius: {
      'md': '0.375rem',
      'lg': '0.5rem',
      '4xl': '2rem',
      'full': '9999px',
    },
    fontSize: {
      'sm': '.875rem',
       'md': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
      },
    extend: {
      fontFamily:{
        'Cedarville':'Cedarville',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [],
}
