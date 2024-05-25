import { style } from "@vanilla-extract/css";

export const onLoadAnimation = style({
	opacity: 0,
	animation: "300ms fade-in-up",
	animationFillMode: "forwards"
});