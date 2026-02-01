/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#f0eee9',
        text: '#141414',
        muted: '#3f4140',
        surface: '#e8e4da',
        'surface-strong': '#e0dbd0',
        border: '#d2cdc2',
        accent: '#316263',
        'accent-soft': '#3d7476',
        'accent-contrast': '#f7f6f3',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'rotate': 'rotate 10s linear infinite',
        'bounce': 'bounce 2s ease-in-out infinite',
        'fill-progress': 'fillProgress 2s ease-in-out',
        'wave': 'wave 2s ease-in-out infinite',
        'pulse': 'pulse 2s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 0.8s ease forwards',
        'slide-in-up': 'slideInUp 0.8s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '1' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)', opacity: '0.8' },
        },
        glow: {
          '0%': { opacity: '0.5', transform: 'scale(1)' },
          '100%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fillProgress: {
          '0%': { width: '0' },
        },
        wave: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(1.5)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
