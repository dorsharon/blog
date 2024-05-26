import { style } from "@vanilla-extract/css";

export const themeButtonWrapper = style({
	position: "relative",
});

export const themeButton = style({
	position: "relative",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	height: "2.75rem",
	width: "2.75rem",
	borderRadius: "0.5rem",
	transition: "transform 0.2s",

	":active": {
		transform: "scale(0.9)"
	},

	// selectors: {
	// 	"svg": {
	// 		fill: "var(--text-primary)"
	//
	// 	}
	// }
});

export const themeIcon = style({});

export const panelBase = style({
	position: "absolute",
	display: "none",
	"@media (min-width: 1024px)": {
		display: "block"
	},
	transition: "transform 0.2s, opacity 0.2s",
	top: "2.75rem",
	right: "-0.5rem",
	paddingTop: "1.25rem",
	zIndex: 50
});

export const floatPanelClosed = style({
	transform: "translateY(-0.5rem)",
	opacity: 0,
	pointerEvents: "none"
});

export const card = style({
	padding: "0.5rem",
	borderRadius: "0.5rem",
	backgroundColor: "white",
	boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)"
});

export const themeOption = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "start",
	height: "2.25rem",
	borderRadius: "0.5rem",
	paddingLeft: "0.75rem",
	paddingRight: "0.75rem",
	fontSize: "1rem",
	fontWeight: "500",
	transition: "transform 0.2s",
	marginBottom: "0.125rem",
	whiteSpace: "nowrap",
	":active": {
		transform: "scale(0.95)"
	}
});

export const currentSetting = style({
	backgroundColor: "var(--primary)",
	color: "white"
});

