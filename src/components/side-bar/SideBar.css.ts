import { style } from "@vanilla-extract/css";
import { theme } from "../../styles/themes.css.ts";
import { cardBorderRadius } from "../../styles/variables.css.ts";

export const profileWrapper = style({
	backgroundColor: theme.background.card,
	borderRadius: cardBorderRadius,
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