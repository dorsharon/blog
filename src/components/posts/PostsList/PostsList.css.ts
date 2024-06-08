import { style } from "@vanilla-extract/css";
import { theme } from "../../../styles/themes.css";
import { cardBorderRadius } from "../../../styles/variables.css";

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
			gap: "1rem",
		},
	},
});
