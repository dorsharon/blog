import { globalStyle, style } from "@vanilla-extract/css";
import { codeFont } from "../../../styles/variables.css.ts";

export const codeBlock = style({
	fontFamily: codeFont,
	padding: "1.25rem 1rem",
	borderRadius: "0.75rem",
	counterReset: 'line'
});

globalStyle(`${codeBlock} code span.line:before`, {
	content: "counter(line)",
	counterIncrement: "line",
	direction: "rtl",
	display: "inline-block",
	marginRight: "1rem",
	width: "1rem",
	color: "#ffffff40"
});