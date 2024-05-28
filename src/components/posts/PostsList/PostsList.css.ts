import { style } from "@vanilla-extract/css";
import { cardBorderRadius } from "../../../styles/variables.css";
import { theme } from "../../../styles/themes.css";

export const wrapper = style({
	transition: "all 0.3s ease-in-out",
	display: "flex",
	flexDirection: "column",
	borderRadius: cardBorderRadius,
	backgroundColor: theme.background.card,
	paddingTop: "0.25rem",
	paddingBottom: "0.25rem",
	marginBottom: "1rem",

	"@media": {
		"screen and (min-width: 768px)": {
			paddingTop: 0,
			paddingBottom: 0,
			backgroundColor: "transparent",
			gap: "1rem"
		}
	}
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