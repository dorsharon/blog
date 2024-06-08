/** @type {import("prettier").Config} */
export default {
	tabWidth: 4,
	useTabs: true,
	plugins: ["prettier-plugin-astro"],
	singleQuote: true,
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro"
			}
		}
	]
};
