import { style } from "@vanilla-extract/css";

export const textWrapper = style({
	position: "relative",
	width: "100%",
	height: "100%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

export const text = style({
	position: "absolute",
	fontWeight: "bold",
	fontSize: "1.5rem",
	width: "100%",
	whiteSpace: "pre-line",
	textAlign: "center",
	WebkitBackgroundClip: "text",
	WebkitTextFillColor: "transparent",
});
