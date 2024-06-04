import { style } from "@vanilla-extract/css";
import { cardBorderRadius } from "../../../styles/variables.css";
import { theme } from "../../../styles/themes.css";

const coverWidth = "28%";

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
			width: `calc(100% - ${coverWidth} - 12px)`
		}
	}
});

export const titleLink = style({
	display: "block",
	marginBottom: "0.75rem",
	fontSize: "1.875rem",
	color: theme.text.primary,
	transition: "all 0.3s ease",
	position: "relative",
	cursor: "pointer",

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
		top: "10px",
		left: "-18px"
	},

	"@media": {
		"screen and (max-width: 768px)": {
			"::before": {
				display: "none"

			}
		}
	}
});

export const subtitleWrapper = style({
	transition: "all 0.3s ease",
	color: theme.text.secondary,
	marginBottom: "0.875rem"
});

export const readingTime = style({
	fontSize: "0.875rem",
	color: theme.text.secondary,
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
	maxHeight: "20vh",
	margin: "1rem",
	marginTop: "1rem",
	marginBottom: "-0.5rem",
	position: "relative",
	borderRadius: "0.75rem",
	overflow: "hidden",
	transition: "all 0.3s ease",

	":active": {
		transform: "scale(0.95)"
	},

	":hover": {
		cursor: "pointer"
	},

	"@media": {
		"screen and (min-width: 768px)": {
			maxHeight: "none",
			margin: 0,
			width: coverWidth,
			position: "absolute",
			top: "0.75rem",
			bottom: "0.75rem",
			right: "0.75rem"
		}
	}
});

export const coverImageOverlay = style({
	position: "absolute",
	zIndex: 10,
	width: "100%",
	height: "100%",
	transition: "all 0.3s ease",

	":hover": {
		backgroundColor: "rgba(0, 0, 0, 0.3)"
	},

	":active": {
		backgroundColor: "rgba(0, 0, 0, 0.5)"
	}
});

export const coverImageIconWrapper = style({
	position: "absolute",
	zIndex: 20,
	width: "100%",
	height: "100%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	transition: "all 0.3s ease",
	opacity: 0,

	":hover": {
		opacity: 1
	}
});

export const coverImageIcon = style({
	color: "white",
	fontSize: "3rem",


});

export const coverImage = style({
	width: "100%",
	height: "100%",
	objectFit: "cover",
	objectPosition: "center"
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
