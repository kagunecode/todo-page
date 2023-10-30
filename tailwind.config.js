/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./dist/*.{html,js}"],
	theme: {
		extend: {
			animation: {
				blob: "blob 7s infinite",
			},
			keyframes: {
				blob: {
					"0%": {
						transform: "translate(0rem, 0rem) scale(1)",
					},
					"33%": {
						transform: "translate(3rem, 3rem) scale(1.1)",
					},
					"66%": {
						transform: "translate(-5rem, -3rem) scale(0.9)",
					},
					"100%": {
						transform: "translate(0rem, 0rem) scale(1)",
					},
				},
			},
		},
	},
	plugins: [],
};
