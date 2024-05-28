import { style } from "@vanilla-extract/css";
import { theme } from "../../../../styles/themes.css.ts";

export const container = style({
	display: "flex",
	flexDirection: "row",
	gap: "0.75rem",
	justifyContent: "center",
	marginInline: "auto"
});

export const button = style({
	borderRadius: "0.5rem",
	color: "var(--primary)",
	width: "2.75rem",
	height: "2.75rem",
	overflow: "hidden",
	selectors: {
		"&.disabled": {
			cursor: "not-allowed",
			opacity: 0.5
		}
	}
});

export const pagination = style({
	backgroundColor: "var(--card-bg)",
	display: "flex",
	flexDirection: "row",
	borderRadius: "0.5rem",
	alignItems: "center",
	color: theme.text.secondary,
	fontWeight: "bold"
});

export const activePage = style({
	height: "2.75rem",
	width: "2.75rem",
	borderRadius: "0.5rem",
	backgroundColor: theme.color.primary,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontWeight: "bold",
	color: theme.text.primary
});

export const moreIcon = style({
	marginLeft: "0.25rem",
	marginRight: "0.25rem"
});

export const linkButton = style({
	borderRadius: "0.5rem",
	width: "2.75rem",
	height: "2.75rem",
	overflow: "hidden",
	":active": {
		transform: "scale(0.85)"
	}
});
