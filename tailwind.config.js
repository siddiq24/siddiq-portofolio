/** @type {import('tailwindcss').Config} */
export default {
    content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin-slow 5s linear infinite',
            },
            keyframes: {
                'spin-slow': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
            },
        },
    },
    plugins: [],
}
