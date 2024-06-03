import { style } from "@vanilla-extract/css";
import { theme } from "../../../styles/themes.css.ts";

export const codeSnippet = style({
	fontFamily: "JetBrains Mono Variable",
	fontSize: '0.875em',
	background: theme.background.hover,
	color: theme.color.primary,
	padding: ".125rem .25rem",
	borderRadius: "0.25rem",
	overflow: "hidden"
});