import { style } from "@vanilla-extract/css";

export const floatPanel = style({
	position: "absolute",
	top: 0,
	right: "1rem",
	padding: "0.5rem",
	borderRadius: "0.5rem",
	transition: "all 0.3s",
	boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)"
});

export const floatPanelClosed = style({
	transform: "translateY(-100%)",
	opacity: 0,
	pointerEvents: "none"
});

export const link = style({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	padding: "0.5rem 0.75rem",
	borderRadius: "0.5rem",
	textDecoration: "none",
	color: "var(--black-75)",
	backgroundColor: "var(--btn-plain-bg)",
	transition: "background-color 0.3s, color 0.3s",

	":hover": {
		backgroundColor: "var(--btn-plain-bg-hover)",
		color: "var(--primary)"
	},

	":active": {
		backgroundColor: "var(--btn-plain-bg-active)",
		color: "var(--primary)"
	}
});

export const linkText = style({
	fontWeight: "bold"
});
