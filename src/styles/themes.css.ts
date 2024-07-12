import { createTheme } from '@vanilla-extract/css';

export const [lightThemeClass, theme] = createTheme({
	color: { primary: '#4aa3ff' },
	text: {
		primary: '#000000bf',
		secondary: '#a3a3a3',
		code: '#3275b4',
	},
	background: {
		page: '#eaeff5',
		card: '#ffffff',
		button: '#e3f0ff',
		hover: '#d8d8d8',
		code: '#e3f0ff',
		input: '#f0f0f0',
		popover: '#ffffff',
	},
	alert: {
		info: '#228be6',
		tip: '#12b886',
		warning: '#fab005',
		caution: '#fa5252',
	},
});

export const darkThemeClass = createTheme(theme, {
	color: { primary: '#67b3ff' },
	text: {
		primary: '#ffffffe6',
		secondary: '#ffffff80',
		code: '#7cb3eb',
	},
	background: {
		page: '#090e13',
		card: '#181e24',
		button: '#283747',
		hover: '#324457',
		code: '#283747',
		input: '#080808',
		popover: '#0f141a',
	},
	alert: {
		info: '#1971c2',
		tip: '#099268',
		warning: '#f08c00',
		caution: '#e03131',
	},
});
