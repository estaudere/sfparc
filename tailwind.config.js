/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte}'],

	theme: {
		extend: {
			fontFamily: {
				bluescreen: ['"Blue Screen"', 'serif'],
				dosvga: ['"Perfect DOS VGA 437"', 'serif'],
				sans: ['Inter', 'sans-serif']
			},
			colors: {
				primary: 'rgb(65, 107, 65)',
				background: '#e2e1dc'
			}
		}
	},

	plugins: []
};
