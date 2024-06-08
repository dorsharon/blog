import { style } from "@vanilla-extract/css";
import { theme } from "../../../styles/themes.css.ts";

export const wrapper = style({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
});

export const link = style({
	display: "block",
	position: "relative",
	margin: "0.75rem",
	overflow: "hidden",
	borderRadius: "0.75rem",
	transition: "transform 0.2s",

	":active": {
		transform: "scale(0.95)",
	},
});

export const overlay = style({
	position: "absolute",
	width: "100%",
	height: "100%",
	zIndex: 50,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	pointerEvents: "none",
	transition: "background-color 0.2s",
	selectors: {
		"&:hover": {
			backgroundColor: "rgba(0, 0, 0, 0.3)",
		},
		"&:active": {
			backgroundColor: "rgba(0, 0, 0, 0.5)",
		},
	},
});

export const avatar = style({
	margin: "0 auto",
	height: "100%",

	"@media": {
		"(min-width: 1024px)": {
			width: "100%",
			marginTop: "0",
		},
	},
});

export const icon = style({
	transition: "opacity 0.2s",
	opacity: 0,
	color: "white",
	fontSize: "3rem",
	selectors: {
		[`${link}:hover &`]: {
			opacity: 1,
		},
	},
});

export const name = style({
	fontWeight: "bold",
	fontSize: "1.25rem",
	textAlign: "center",
	marginBottom: "0.25rem",
	color: theme.text.primary,
	transition: "color 0.2s",
});

export const separator = style({
	height: "0.25rem",
	width: "1.25rem",
	backgroundColor: theme.color.primary,
	margin: "0 auto",
	borderRadius: "0.25rem",
	marginBottom: "0.5rem",
	transition: "background-color 0.2s",
});

export const links = style({
	display: "flex",
	gap: "0.5rem",
	margin: "0 0.5rem",
	justifyContent: "center",
	marginBottom: "1rem",
});

export const linkButton = style({
	color: theme.text.primary,
	backgroundColor: theme.background.button,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	height: "2.5rem",
	width: "2.5rem",
	borderRadius: "0.5rem",
	transition: "backgroundColor transform 0.2s",

	":hover": {
		backgroundColor: theme.background.hover,
	},

	":active": {
		transform: "scale(0.9)",
	},
});

export const linkIcon = style({
	fontSize: "1.25rem",
});

export const rotatingTextWrapper = style({
	height: "4rem",
	width: "100%",
});
