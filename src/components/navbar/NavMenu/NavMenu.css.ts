import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/themes.css.ts';
import { cardBorderRadius } from '../../../styles/variables.css.ts';

export const menuButton = style({
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: '2.75rem',
	width: '2.75rem',
	borderRadius: '0.5rem',
	transition: 'transform 0.2s',
	backgroundColor: 'transparent',
	border: 'none',

	':active': {
		transform: 'scale(0.9)',
	},

	'@media': {
		'(min-width: 768px)': {
			display: 'none',
		},
	},
});

export const card = style({
	backgroundColor: theme.background.popover,
	padding: '0.5rem',
	borderRadius: cardBorderRadius,
	boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
});

export const link = style({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '0.5rem 0.75rem',
	borderRadius: '0.5rem',
	textDecoration: 'none',
	color: theme.text.primary,
	backgroundColor: theme.background.popover,
	transition: 'background-color 0.3s, color 0.3s',

	':hover': {
		backgroundColor: theme.background.hover,
		color: theme.color.primary,
	},

	':active': {
		backgroundColor: theme.background.hover,
		color: theme.color.primary,
	},
});
