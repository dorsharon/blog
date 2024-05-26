import { createTheme } from "@vanilla-extract/css";

export const [lightThemeClass, theme] = createTheme({
	color: { primary: "#6da3da" },
	text: {
		primary: "#000000bf",
		secondary: "#a3a3a3"
	},
	background: {
		page: "#eaeff5",
		card: "#ffffff",
		button: '#283747',
		hover: '#324457'
	}
});

export const darkThemeClass = createTheme(theme, {
	color: { primary: "#6da3da" },
	text: {
		primary: "#ffffffe6",
		secondary: "#ffffff80"
	},
	background: {
		page: "#090e13",
		card: "#181e24",
		button: '#283747',
		hover: '#324457'
	}
});