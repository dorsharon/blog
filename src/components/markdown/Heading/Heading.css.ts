import { style } from "@vanilla-extract/css";
import { markdownContent } from "../../posts/PostContent/PostContent.css.ts";

export const heading = style({
	fontWeight: "bold",
	fontSize: "2rem",
	selectors: {
		[`${markdownContent} &`]: {
			marginBlockEnd: "0.75rem",
		},
	},
});
