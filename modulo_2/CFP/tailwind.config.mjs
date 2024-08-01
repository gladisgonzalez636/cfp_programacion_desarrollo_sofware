/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			primary: colors.indigo,
			secondary: colors.yellow,
			neutral: colors.gray,
		  }
	},
	plugins: [],
}
