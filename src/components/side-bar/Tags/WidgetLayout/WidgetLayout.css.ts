import { style } from "@vanilla-extract/css";

export const card = style({
	paddingBottom: '1rem', 
});

export const title = style({
	fontWeight: 'bold',
	fontSize: '1.25rem',
	color: 'var(--neutral-900)',
});

export const collapsedWrapper = style({
	paddingInline: '1rem',
	overflow: 'hidden',
});

export const expandButtonWrapper = style({
	paddingInline: '1rem',
	marginBottom: '-0.5rem',
});

export const expandButton = style({
	width: '100%',
	height: '2.25rem',
	borderRadius: '0.5rem',
});

export const expandButtonContent = style({
	color: 'var(--primary)',
});

export const hidden = style({
	display: 'none',
});
