/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", ":global(.dark)"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'smPhone': '360px',
      // => @media (min-width: 369px) { ... }
      'sm': '640px',
    // => @media (min-width: 640px) { ... }
      'md': '768px',
    // => @media (min-width: 768px) { ... }
      'lg': '1024px',
    // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
    // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }},
    },
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
