import { style } from "@vanilla-extract/css";
import { theme } from "../../../styles/themes.css";
import { pageWidth } from "../../../styles/variables.css.ts";

export const container = style({
	maxWidth: pageWidth,
	minHeight: "100vh",
	display: "grid",
	gridTemplateColumns: "17.5rem auto",
	gridTemplateRows: "auto auto 1fr auto",
	margin: "0 auto",
	gap: "1rem",
	position: "relative",
	padding: "0 1rem",

	"@media": {
		"(min-width: 768px)": {
			padding: "0 1rem"
		},
		"(min-width: 1024px)": {
			gridTemplateRows: "auto 1fr auto"
		}
	}
});

export const header = style({
	gridColumn: "span 2",
	gridRow: "1",
	zIndex: 50,
	position: "relative"
});

export const card = style({
	position: "absolute",
	height: "2rem",
	left: 0,
	right: 0,
	top: "-2rem",
	backgroundColor: theme.background.card,
	transition: "background-color 0.3s"
});

export const contentWrapper = style({
	gridRowStart: 2,
	gridRowEnd: 3,
	gridColumn: "span 2",
	overflow: "hidden",

	"@media": {
		"(min-width: 1024px)": {
			gridColumn: "span 1"
		}
	},
});

export const footer = style({
	gridRow: 3,
	gridColumn: "span 2",
	marginTop: "1rem"
});
