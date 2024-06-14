import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/themes.css.ts';
import { navbarHeight } from '../../../styles/variables.css.ts';

export const searchBar = style({
	display: 'none',
	transition: 'all',
	alignItems: 'center',
	height: '2.75rem',
	marginRight: '0.5rem',
	borderRadius: '0.5rem',
	backgroundColor: theme.background.button,

	'@media': {
		'screen and (min-width: 1024px)': {
			display: 'flex',
		},
	},
});

export const searchBarInside = style({
	display: 'flex',
	transition: 'all',
	alignItems: 'center',
	height: '2.75rem',
	borderRadius: '0.75rem',
	backgroundColor: 'rgba(0, 0, 0, 0.04)',

	':hover': {
		backgroundColor: 'rgba(0, 0, 0, 0.06)',
	},

	':focus-within': {
		backgroundColor: 'rgba(0, 0, 0, 0.06)',
	},

	'@media': {
		'screen and (min-width: 1024px)': {
			display: 'none',
		},
	},
});

export const searchInput = style({
	transition: 'all 0.3s ease',
	paddingLeft: '2.5rem',
	fontSize: '0.875rem',
	backgroundColor: 'transparent',
	outline: 'none',
	height: '100%',
	width: '10rem',
	color: theme.text.secondary,

	':active': {
		width: '15rem',
	},
	':focus': {
		width: '15rem',
	},

	selectors: {
		[`${searchBarInside} &`]: {
			width: '100%',
		},
	},
});

export const searchButton = style({
	borderRadius: '0.5rem',
	width: '2.75rem',
	height: '2.75rem',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	':active': {
		transform: 'scale(0.9)',
	},

	'@media': {
		'screen and (min-width: 1024px)': {
			display: 'none',
		},
	},
});

export const searchPanel = style({
	boxShadow:
		'0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
	borderRadius: '1rem',
	padding: '0.5rem',
	backgroundColor: theme.background.button,
	width: '30rem',

	'@media': {
		'screen and (max-width: 768px)': {
			width: '95%',
			insetInlineEnd: '0',
		},
	},
});

export const resultItemsList = style({
	display: 'flex',
	flexDirection: 'column',
});

export const resultItem = style({
	transition: 'all',
	display: 'block',
	borderRadius: '0.75rem',
	padding: '0.75rem',

	':hover': {
		backgroundColor: theme.background.hover,
	},
	':active': {
		backgroundColor: theme.background.hover,
	},
});

export const resultItemTitle = style({
	fontSize: '1.125rem',
	color: theme.text.primary,
});

export const resultItemSubtitle = style({
	fontSize: '1rem',
	color: theme.text.secondary,
});

export const resultItemDivider = style({
	marginBlock: '0.5rem',
});

export const noResultsWrapper = style({
	color: theme.text.secondary,
	textAlign: 'center',
	paddingBlock: '1rem',
});
