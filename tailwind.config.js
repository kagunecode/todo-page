/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./dist/*.{html,js}", "./src/**/*.{html,js}"],
	darkMode: "class",
	theme: {
		extend: {
			animation: {
				blob: "blob 7s infinite",
				modalf: "modalf 0.15s ease-in-out",
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
						transform: "translate(-3rem, -3rem) scale(0.9)",
					},
					"100%": {
						transform: "translate(0rem, 0rem) scale(1)",
					},
				},
				modalf: {
					"0%": { transform: "scale(0)" },
					"100%": { transform: "scale(1)" },
				},
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
	variants: {
		scrollbar: ["dark"],
	},
};
