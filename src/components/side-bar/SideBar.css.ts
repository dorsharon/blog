import { style } from "@vanilla-extract/css";

export const sidebar = style({
	width: "100%",
	gridRowStart: 3,
	gridRowEnd: 4,
	gridColumn: "span 2",

	"@media": {
		"(min-width: 1024px)": {
			gridRowStart: 2,
			gridRowEnd: 3,
			gridColumn: "span 1",
			maxWidth: "17.5rem"
		}
	}
});

export const profileWrapper = style({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	gap: "1rem",
	marginBottom: "1rem"
});

export const tagsWrapper = style({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	gap: "1rem",
	position: "sticky",
	top: "1rem"
});