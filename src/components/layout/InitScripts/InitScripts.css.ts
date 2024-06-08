import { style } from "@vanilla-extract/css";

export const overlayScrollbarsTheme = style({
	padding: "4px",
	boxSizing: "content-box",
	vars: {
		["--os-handle-bg"]: "#ffffff80",
		["--os-handle-bg-hover"]: "#FFFFFFB3",
		["--os-handle-bg-active"]: "#FFFFFFB3",
		["--os-size"]: "4px",
		["--os-handle-perpendicular-size-hover"]: "8px",
		["--os-handle-perpendicular-size-active"]: "8px",
		["--os-handle-border-radius"]: "4px",
		["--os-padding-axis"]: "6px",
	},
});
