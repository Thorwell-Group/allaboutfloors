/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:         '#111111',
          gold:         '#CC0000',
          'gold-light': '#E53535',
          dark:         '#0a0a0a',
          light:        '#F5F5F5',
          slate:        '#6b7280',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(135deg, rgba(0,0,0,0.90) 0%, rgba(10,10,10,0.75) 100%)",
      },
      animation: {
        'fade-in':    'fadeIn 0.5s ease-in-out',
        'float':      'float 3.5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.2s ease-out infinite',
        'slide-in':   'slideIn 0.7s cubic-bezier(0.4,0,0.2,1) forwards',
        'shimmer':    'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%':   { boxShadow: '0 0 0 0 rgba(204,0,0,0.45)' },
          '70%':  { boxShadow: '0 0 0 14px rgba(204,0,0,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(204,0,0,0)' },
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
