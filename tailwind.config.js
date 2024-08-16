/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class', // enable dark mode
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
		},
		screens: {
			'xs': '350px',
			// => @media (min-width: 350px) { ... }
			'sm': '430px',
			// => @media (min-width: 568px) { ... }

			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1920px',
			// => @media (min-width: 1920px) { ... }
		}
	},
	plugins: [],
});
