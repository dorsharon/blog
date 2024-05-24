import { style } from "@vanilla-extract/css";

export const sidebar = style({
	width: '100%',
});

export const profileWrapper = style({
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	gap: '1rem',
	marginBottom: '1rem',
});

export const tagsWrapper = style({
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	gap: '1rem',
	position: 'sticky',
	top: '1rem', 
});

export const onloadAnimation = style({
	animationDelay: '200ms',
});