import { style } from "@vanilla-extract/css";
import { cardBorderRadius } from "../../../styles/variables.css";
import { theme } from "../../../styles/themes.css";

export const wrapper = style(
	{
		backgroundColor: theme.background.card,
		display: "flex",
		flexDirection: "column-reverse",
		width: "100%",
		borderRadius: cardBorderRadius,
		overflow: "hidden",
		position: "relative",
		transition: "all 0.3s ease",

		"@media": {
			"screen and (min-width: 768px)": {
				flexDirection: "column"
			}
		}
	}
);

export const contentWrapper = style({
	padding: "1.5rem",
	position: "relative",
	width: "calc(100% - 52px - 12px)",
	transition: "all 0.3s ease",
	"@media": {
		"screen and (min-width: 768px)": {
			paddingLeft: "2.25rem",
			paddingRight: "0.5rem",
			paddingTop: "1.75rem",
			paddingBottom: "1.75rem",
			width: "calc(100% - var(--coverWidth) - 12px)"
		}
	}
});

export const titleLink = style({
	display: "block",
	fontWeight: "bold",
	marginBottom: "0.75rem",
	fontSize: "1.875rem",
	color: theme.text.primary,
	transition: "all 0.3s ease",
	position: 'relative',
	cursor: 'pointer',

	":hover": {
		color: theme.color.primary
	},

	":active": {
		color: "var(--title-active)"
	},

	"::before": {
		content: "\"\"",
		width: "0.25rem",
		height: "1.5rem",
		borderRadius: "0.25rem",
		backgroundColor: theme.color.primary,
		position: "absolute",
		top: '10px',
		left: '-18px'
	}
});

export const subtitleWrapper = style({
	transition: "all 0.3s ease",
	color: theme.text.secondary,
	marginBottom: "0.875rem"
});

export const readingTime = style({
	fontSize: "0.875rem",
	color: "rgba(0, 0, 0, 0.3)",
	display: "flex",
	gap: "1rem",
	transition: "all 0.3s ease",
	"@media": {
		"screen and (min-width: 768px)": {
			color: "rgba(255, 255, 255, 0.3)"
		}
	}
});

export const coverImageWrapper = style({
	display: "block",
	maxHeight: "20vh",
	marginTop: "1rem",
	marginBottom: "-0.5rem",
	marginLeft: "1rem",
	marginRight: "1rem",
	"@media": {
		"screen and (min-width: 768px)": {
			maxHeight: "none",
			marginTop: "0",
			marginBottom: "0",
			marginLeft: "0",
			marginRight: "0",
			width: "var(--coverWidth)",
			position: "absolute",
			top: "0.75rem",
			bottom: "0.75rem",
			right: "0.75rem",
			borderRadius: "0.75rem"
		}
	}
});

export const coverImageOverlay = style({
	position: "absolute",
	zIndex: 10,
	width: "100%",
	height: "100%",
	backgroundColor: "rgba(0, 0, 0, 0.3)",
	transition: "background-color 0.3s ease",
	"@media": {
		"screen and (min-width: 768px)": {
			backgroundColor: "rgba(0, 0, 0, 0.5)"
		}
	}
});

export const coverImageIcon = style({
	transition: "opacity 0.3s ease",
	opacity: 0,
	color: "white",
	fontSize: "3rem",
	"@media": {
		"screen and (min-width: 768px)": {
			opacity: 1
		}
	}
});

export const postLinkButton = style({
	display: "none",
	"@media": {
		"screen and (min-width: 768px)": {
			display: "flex",
			position: "absolute",
			right: "0.75rem",
			top: "0.75rem",
			bottom: "0.75rem",
			width: "3.25rem",
			borderRadius: "0.75rem",
			backgroundColor: theme.background.button,
			":hover": {
				backgroundColor: theme.background.hover
			},
			":active": {
				backgroundColor: theme.background.hover,
				transform: "scale(0.95)"
			}
		}
	}
});

export const postLinkIcon = style({
	transition: "all 0.3s ease",
	color: theme.color.primary,
	fontSize: "2rem",
	margin: "auto"
});

export const divider = style({
	transition: "all 0.3s ease",
	borderTopWidth: "1px",
	borderTopStyle: "dashed",
	margin: "1.5rem",
	borderTopColor: "rgba(0, 0, 0, 0.1)",
	"@media": {
		"screen and (min-width: 768px)": {
			borderTopColor: "rgba(255, 255, 255, 0.15)"
		}
	}
});
