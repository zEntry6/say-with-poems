/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'serif': ['Crimson Text', 'Georgia', 'serif'],
          'sans': ['Inter', 'system-ui', 'sans-serif'],
        },
        colors: {
          'poetry': {
            'gray': '#f8f9fa',
            'dark': '#2d3748',
            'accent': '#4a5568',
          }
        },
        animation: {
          'fade-in': 'fadeIn 0.8s ease-in-out',
          'slide-up': 'slideUp 0.6s ease-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          slideUp: {
            '0%': { opacity: '0', transform: 'translateY(30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
      },
    },
    plugins: [],
  }