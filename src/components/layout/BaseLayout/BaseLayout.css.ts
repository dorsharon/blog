import { style } from "@vanilla-extract/css";
import { cardBorderRadius, pageWidth } from "../../../styles/variables.css.ts";
import { theme } from "../../../styles/themes.css.ts";

export const html = style({
	backgroundColor: theme.background.page,
	transitionProperty: `color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter`,
	transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
	transitionDuration: "150ms",
	fontSize: "14px",

	"@media": {
		"(min-width: 768px)": {
			fontSize: "16px"
		}
	},

	vars: {
		[pageWidth]: '75rem',
		[cardBorderRadius]: '1rem'
	},
});

export const body = style({
	minHeight: '100vh',
	transitionProperty: `color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter`,
	transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
	transitionDuration: "150ms",
});