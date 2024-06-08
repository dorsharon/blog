import { globalStyle, style } from "@vanilla-extract/css";
import { theme } from "../../../styles/themes.css.ts";
import { cardBorderRadius } from "../../../styles/variables.css.ts";

export const card = style({
	paddingLeft: "2rem",
	paddingRight: "2rem",
	paddingTop: "1.5rem",
	paddingBottom: "1.5rem",
	backgroundColor: theme.background.card,
	borderRadius: cardBorderRadius,
});

export const yearContainer = style({
	display: "flex",
	flexDirection: "row",
	width: "100%",
	alignItems: "center",
	height: "3.75rem",
});

export const yearText = style({
	width: "15%",
	transition: "text 0.3s",
	fontSize: "1.5rem",
	fontWeight: "bold",
	textAlign: "right",
	color: theme.text.primary,

	"@media": {
		"screen and (min-width: 768px)": {
			width: "10%",
		},
	},
});

export const yearDotContainer = style({
	width: "15%",
	"@media": {
		"screen and (min-width: 768px)": {
			width: "10%",
		},
	},
});

export const yearDot = style({
	height: "0.75rem",
	width: "0.75rem",
	backgroundColor: "none",
	borderRadius: "50%",
	outline: `3px solid ${theme.color.primary}`,
	margin: "auto",
	position: "relative",
	zIndex: "50",
	outlineOffset: "-2px",
});

export const postCount = style({
	width: "70%",
	transition: "text 0.3s",
	textAlign: "left",
	color: theme.text.secondary,

	"@media": {
		"screen and (min-width: 768px)": {
			width: "80%",
		},
	},
});

export const postLink = style({
	display: "block",
	height: "2.5rem",
	width: "100%",
	borderRadius: "0.5rem",
	transition: "color 0.3s",

	":hover": {
		backgroundColor: theme.background.hover,
	},
});

export const postContainer = style({
	display: "flex",
	flexDirection: "row",
	justifyContent: "start",
	alignItems: "center",
	height: "100%",
});

export const postDate = style({
	width: "15%",
	transition: "text 0.3s",
	fontSize: "0.875rem",
	textAlign: "right",
	color: theme.text.secondary,

	"@media": {
		"screen and (min-width: 768px)": {
			width: "10%",
		},
	},
});

export const postDotLineContainer = style({
	width: "15%",
	position: "relative",
	height: "100%",
	display: "flex",
	alignItems: "center",

	"@media": {
		"screen and (min-width: 768px)": {
			width: "10%",
		},
	},
});

export const postDot = style({
	transition: "all 0.3s",
	margin: "auto",
	width: "0.25rem",
	height: "0.25rem",
	borderRadius: "0.25rem",
	backgroundColor: theme.text.secondary,
	outline: "4px solid transparent",
	zIndex: "50",

	selectors: {
		[`${postLink}:hover &`]: {
			height: "1.25rem",
			backgroundColor: theme.color.primary,
		},
	},
});

export const postTitle = style({
	width: "70%",
	fontWeight: "bold",
	textAlign: "left",
	transition: "all 0.3s",
	color: theme.text.primary,
	paddingRight: "2rem",
	whiteSpace: "nowrap",
	overflow: "hidden",
	textOverflow: "ellipsis",

	":hover": {
		transform: "translateX(0.25rem)",
		color: theme.color.primary,
	},

	"@media": {
		"screen and (min-width: 768px)": {
			maxWidth: "65%",
			width: "65%",
		},
	},
});

export const postTags = style({
	display: "none",
	fontSize: "0.875rem",
	textAlign: "left",
	transition: "text 0.3s",
	whiteSpace: "nowrap",
	overflow: "hidden",
	textOverflow: "ellipsis",
	color: theme.text.secondary,

	"@media": {
		"screen and (min-width: 768px)": {
			display: "block",
			width: "15%",
		},
	},
});

globalStyle(`.${postDotLineContainer}::before`, {
	content: '""',
	width: "10%",
	height: "100%",
	position: "absolute",
	top: "-50%",
	left: "calc(50% - 1px)",
	borderLeft: `2px dashed ${theme.background.button}`,
	pointerEvents: "none",
	transition: "border-color 0.3s",
});
