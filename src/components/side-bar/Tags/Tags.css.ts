import { style } from "@vanilla-extract/css";
import { theme } from "../../../styles/themes.css.ts";
import { cardBorderRadius } from "../../../styles/variables.css.ts";

export const tagsCard = style({
	paddingBottom: '1rem', 
	animationDelay: '200ms',
	backgroundColor: theme.background.card,
	borderRadius: cardBorderRadius,
});

export const title = style({
	fontWeight: 'bold',
	transition: 'all 0.2s',
	fontSize: '1.125rem',
	color: theme.text.primary,
	position: 'relative',
	marginLeft: '2rem',
	marginTop: '1rem',
	marginBottom: '0.5rem',

	'::before': {
		content: '""',
		width: '0.25rem',
		height: '1rem',
		borderRadius: '0.25rem',
		backgroundColor: theme.color.primary,
		position: 'absolute',
		left: '-1rem',
		top: '0.344rem',
	},
});

export const collapseWrapper = style({
	paddingLeft: '1rem',
	paddingRight: '1rem',
	overflow: 'hidden',
});

export const collapsed = style({
	maxHeight: '7.5rem',
});

export const expandButton = style({
	paddingLeft: '1rem',
	paddingRight: '1rem',
	marginBottom: '-0.5rem',
});

export const button = style({
	width: '100%',
	height: '2.25rem',
	borderRadius: '0.5rem',
});

export const buttonContent = style({
	color: 'var(--primary)',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '0.5rem',
	transform: 'translateX(-0.5rem)',
});

export const tagsWrapper = style({
	display: 'flex',
	gap: '0.5rem',
	flexWrap: 'wrap',
	paddingInline: '1rem',
});
