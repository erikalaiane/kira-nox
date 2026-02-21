export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kira-bg': '#1C223A',
        'kira-gold': '#CDA47B',
        'kira-terra': '#9F4125',
        'kira-cream': '#E5D4B6',
        'kira-dark': '#382020',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        'works-marquee': 'works-marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'works-marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}