import { style } from "@vanilla-extract/css";

export const text = style({
	position: "absolute",
	whiteSpace: "nowrap",
	fontWeight: "bold",
	WebkitBackgroundClip: "text",
	WebkitTextFillColor: "transparent"
});