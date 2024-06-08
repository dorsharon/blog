import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/themes.css';
import { cardBorderRadius, pageWidth } from '../../../styles/variables.css.ts';

export const grid = style({
	maxWidth: pageWidth,
	minHeight: '100vh',
	display: 'grid',
	gridTemplateColumns: '17.5rem auto',
	gridTemplateRows: 'auto 1fr auto',
	gridTemplateAreas: `
		"header header"
		"sidebar content"
		"footer footer"`,
	margin: '0 auto',
	gap: '1rem',
	position: 'relative',
	padding: '0 1rem',

	'@media': {
		'(max-width: 768px)': {
			padding: '0',
		},
		'(max-width: 1024px)': {
			gridTemplateColumns: '1fr',
			gridTemplateRows: 'auto 1fr auto',
			gridTemplateAreas: `
				"header"
				"content"
				"sidebar"
				"footer"`,
		},
	},
});

export const header = style({
	gridArea: 'header',
	zIndex: 50,
	position: 'relative',
});

export const sidebar = style({
	width: '100%',
	gridArea: 'sidebar',

	'@media': {
		'(min-width: 1024px)': {
			maxWidth: '17.5rem',
		},
	},
});

export const card = style({
	position: 'absolute',
	height: '2rem',
	left: 0,
	right: 0,
	top: '-2rem',
	backgroundColor: theme.background.card,
	transition: 'background-color 0.3s',
});

export const content = style({
	gridArea: 'content',
	overflow: 'hidden',

	'@media': {
		'(min-width: 1024px)': {
			gridColumn: 'span 1',
		},
	},
});

export const footer = style({
	gridArea: 'footer',
	marginTop: '1rem',
	color: theme.text.secondary,
	backgroundColor: theme.background.card,
	borderRadius: `${cardBorderRadius} ${cardBorderRadius} 0 0`,
	height: '3rem',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});
