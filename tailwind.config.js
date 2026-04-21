module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a'
        },
        surface: {
          0: '#ffffff',
          1: '#f8fafc',
          2: '#f1f5f9',
          3: '#e2e8f0',
          dark0: '#0b0d17',
          dark1: '#111427',
          dark2: '#1a1d2e',
          dark3: '#252840'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 20px rgba(82, 82, 91, 0.15)',
        'glow-lg': '0 0 40px rgba(82, 82, 91, 0.25)',
        'glow-sm': '0 0 10px rgba(82, 82, 91, 0.1)',
        card: '0 4px 24px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'card-dark': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-dark-hover': '0 8px 32px rgba(0, 0, 0, 0.5)'
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem'
      },
      spacing: {
        18: '4.5rem',
        88: '22rem'
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        shimmer: 'shimmer 2s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        shimmer: {
          from: { backgroundPosition: '-200% 0' },
          to: { backgroundPosition: '200% 0' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(82, 82, 91, 0.15)' },
          '50%': { boxShadow: '0 0 30px rgba(82, 82, 91, 0.3)' }
        }
      },
      backdropBlur: {
        xs: '4px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
