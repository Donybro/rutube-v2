/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				primary: '#FF7652',
				purple: '#6C5ECF',
				'light-blue': '#32A8E2',
				gray: {
					400: '#9898ad',
					500: '#6b6b7b',
					600: '#5b5b6b',
					800: '#353540',
					900: '#272532'
				}
			},
			boxShadow: {
				DEFAULT: '0 3px 12px rgba(0,0,0,0.83)',
				md: '0 3px 12px rgba(0,0,0,0.1)'
			},
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 }
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)'
					},
					'60%': {
						opacity: 0.3
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)'
					}
				}
			},
			fontSize: {
				xs: '.9rem',
				sm: '1rem',
				tiny: '1.2rem',
				base: '1.4rem',
				lg: '1.5rem',
				xl: '1.6rem',
				'2xl': '1.75rem',
				'3xl': '1.9rem'
			},
			animation: {
				fade: 'fade .5s easy-in-out',
				scaleIn: 'scaleIn .35s easy-in-out'
			}
		}
	},
	plugins: [
		plugin(({ addPlugin }) => {
			addPlugin({
				'.shadow-block': {
					display: 'block',
					boxShadow:
						'0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0,0,0 /0.1)',
					animation: 'scaleIn .35s easy-in-out',
					backgroundColor: '#272532'
				}
			})
		})
	]
}
