import { style } from "@vanilla-extract/css";
import { theme } from "../../../styles/themes.css";

export const wrapper = style({
	display: "flex",
	flexWrap: "wrap",
	color: theme.text.secondary,
	alignItems: "center",
	gap: "1rem",
	rowGap: "0.5rem",
	marginBottom: "1rem"
});

export const icon = style({
	width: "2rem",
	height: "2rem",
	transition: "all 0.3s ease",
	borderRadius: "0.25rem",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: theme.background.button,
	color: theme.color.primary,
	marginRight: "0.5rem"
});

export const dateWrapper = style({
	display: "flex",
	alignItems: "center"
});

export const dateText = style({
	color: theme.text.secondary,
	fontSize: "0.875rem",
	fontWeight: "500"
});

export const tagContainer = style({
	display: "flex",
	alignItems: "center"
});

export const tagList = style({
	display: "flex",
	flexDirection: "row",
	flexWrap: "nowrap"
});


export const tagLink = style({
	color: theme.text.secondary,
	fontSize: "0.875rem",
	fontWeight: "500",
	transition: "color 0.3s ease",
	whiteSpace: "nowrap",
	padding: "0.375rem",
	borderRadius: "0.375rem",
	cursor: "pointer",

	":hover": {
		backgroundColor: theme.background.hover,
		color: theme.color.primary
	}
});

export const withDivider = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	"::before": {
		content: "'/'",
		marginLeft: "0.375rem",
		marginRight: "0.375rem",
		color: theme.text.secondary,
		fontSize: "0.875rem",
		fontWeight: "500",
		transition: "all 0.3s ease"
	},
	selectors: {
		"&:first-of-type::before": {
			display: "none"
		}
	}
});

export const noTagsText = style({
	color: "var(--text-50)",
	fontSize: "0.875rem",
	fontWeight: "500",
	transition: "all 0.3s ease"
});