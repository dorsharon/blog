import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/themes.css.ts';
import { cardBorderRadius } from '../../../styles/variables.css.ts';

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

export const button = style({
	width: '100%',
	height: '2.25rem',
	borderRadius: '0.5rem',
	backgroundColor: theme.background.button,
});

export const tagsWrapper = style({
	display: 'flex',
	gap: '0.5rem',
	flexWrap: 'wrap',
	paddingInline: '1rem',
});

export const tagButton = style({
	height: '2rem',
	fontSize: '0.875rem',
	paddingLeft: '0.75rem',
	paddingRight: '0.75rem',
	borderRadius: '0.5rem',
	backgroundColor: theme.background.button,
	color: theme.text.primary,
	cursor: 'pointer',
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	transition: 'background-color 0.3s ease, color 0.3s ease',
	textDecoration: 'none',

	':hover': {
		backgroundColor: theme.background.hover,
	},

	':active': {
		backgroundColor: theme.background.hover,
	},
});
