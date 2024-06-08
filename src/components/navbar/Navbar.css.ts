import { style } from '@vanilla-extract/css';
import { theme } from '../../styles/themes.css.ts';
import { navbarHeight, pageWidth } from '../../styles/variables.css.ts';

export const card = style({
	backgroundColor: theme.background.card,
	position: 'sticky',
	top: '0',
	overflow: 'visible',
	maxWidth: pageWidth,
	height: navbarHeight,
	borderRadius: '0 0 0.75rem 0.75rem',
	margin: '0 auto',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	paddingLeft: '1rem',
	paddingRight: '1rem',
});

export const button = style({
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontWeight: 'bold',
	height: '3.25rem',
	paddingLeft: '1.25rem',
	paddingRight: '1.25rem',
	borderRadius: '0.5rem',
	transition: 'transform 0.2s',
	':active': {
		transform: 'scale(0.95)',
	},
});

export const homeLink = style({
	display: 'flex',
	flexDirection: 'row',
	color: theme.color.primary,
	alignItems: 'center',
	fontSize: '1rem',
});

export const homeIcon = style({
	marginBottom: '0.25rem',
	marginRight: '0.5rem',
	fontSize: '1.75rem',
});

export const linksWrapper = style({
	display: 'none',

	'@media': {
		'(min-width: 768px)': {
			display: 'flex',
		},
	},
});

export const navLink = style({
	color: theme.text.primary,
	display: 'inline-flex',
	alignItems: 'center',
	height: '2.75rem',
	paddingLeft: '1.25rem',
	paddingRight: '1.25rem',
	borderRadius: '0.5rem',
	transition: 'transform 0.2s',

	':hover': {
		backgroundColor: theme.background.hover,
	},

	':active': {
		transform: 'scale(0.95)',
	},
});

export const endElementsWrapper = style({
	display: 'flex',
});

export const searchIcon = style({
	position: 'absolute',
	pointerEvents: 'none',
	marginLeft: '0.75rem',
	transition: 'color 0.2s',
	color: theme.text.secondary,
	fontSize: '1.25rem',
});

export const arrowIcon = style({
	transition: 'transform 0.2s',
	transform: 'translateX(0.125rem)',
	margin: 'auto 0',
	color: theme.color.primary,
	fontSize: '0.75rem',
});

export const searchButtonIcon = style({
	fontSize: '1.25rem',
	color: theme.text.primary,
});
