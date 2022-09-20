module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '3.5rem',
      '25': '2.5rem',
    },
    extend: {
      spacing: {
        nav: '5.5rem',
        'body-p': '10rem',
        'gap-w': '3.75rem',
        'gap-w-2': '4.72rem',
        'gap-w-3': '3.125rem',
        'gap-w-4': '5.5rem'
      },
      colors: {
        logo: {
          cyan: '#fec400',
          blue: '#32587E',
        },
        primary: {
          // 'logo-red': '#E67869',
          // 'logo-blue': '#367DA2',
          100: '#E6F6FE',
          200: '#C0EAFC',
          300: '#9ADDFB',
          400: '#4FC3F7',
          500: '#03A9F4',
          600: '#0398DC',
          700: '#026592',
          800: '#014C6E',
          900: '#013349',
        },
        // primary: {
        //   'logo-red': '#E67869',
        //   'logo-blue': '#367DA2',
        //   50: '#ECFDF5',
        //   100: '#D1FAE5',
        //   200: '#A7F3D0',
        //   300: '#6EE7B7',
        //   400: '#34D399',
        //   500: '#10B981',
        //   600: '#059669',
        //   700: '#047857',
        //   800: '#065F46',
        //   900: '#064E3B',
        // },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
          1000: '#777E91',
          1100: '#E6E7F0'
        },
        black: {
          100: '#18191d'
        },
        blue: {
          100: '#3772FF'
        },
      },
      lineHeight: {
        hero: '4.5rem',
        't-line-h': '4.125rem'
      },
      borderRadius: {}
    },
  },
  variants: {},
  plugins: [],
};
