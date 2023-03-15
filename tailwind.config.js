module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        extend: {
            right: {
                'c100': '45rem',
                'c110': '38rem'
            },
            screens: {
                '3xl': '1800px'
            },
            spacing: {
                'space-100': '7.5rem',
                'space-110': '2.75rem',
                'space-120': '13.1rem',
                'space-130': '12.65rem',
                'space-140': '15rem',
                'space-150': '8.12rem',
                'space-160': '20rem',
                'space-170': '16.625rem',
                'space-180': '3.125rem',
                'space-190': '5.563rem',
                'space-200': '20rem',
                'space-210': '4.25rem',
                'space-220': '15.62rem',
            },
            colors: {
                white: {
                    'c000': '#ffffff',
                    'c100': '#E6E7F0'
                },
                gray: {
                    'c100': '#9AA0B0',
                    'c200': '#777E90'
                },
                black: {
                    'c000': '#000000',
                    'c100': '#18191d',
                    'c200': '#262537',
                    'c300': '#151520',
                    'c400': '#14141F',
                    'c500': '#525461',
                    'c600': '#1D1C2B',
                    'c700': '#2A2A33',
                    'c800': 'rgba(29,28,43,.7)',
                    'c900': '#35324F',
                    'c1000': '#1D1F26'
                },
                blue: {
                    'c100': '#3772FF'
                }
            },
            lineHeight: {
                'space-100': '7.5rem'
            },
            borderRadius: {},
            fontSize: {
                'font-size-100': '4.5rem',
                'font-size-110': '3rem',
                'font-size-120': '2.5rem',
                'font-size-130': '0.813rem',
            },
            inset: {
                'c100': '20rem'
            }
        },
    },
    variants: {},
    plugins: [],
};
