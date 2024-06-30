import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/themes.css.ts';

export const themeButton = style({
	position: 'relative',
	alignItems: 'center',
	justifyContent: 'center',
	height: '2.75rem',
	width: '2.75rem',
	borderRadius: '0.5rem',
	transition: 'transform 0.2s',
	display: 'none',
	backgroundColor: 'transparent',
	border: 'none',
	cursor: 'pointer',

	':active': {
		transform: 'scale(0.9)',
	},
});

export const activeThemeButton = style({
	display: 'inline-flex',
});

export const card = style({
	padding: '0.5rem',
	borderRadius: '0.5rem',
	backgroundColor: theme.background.popover,
	color: theme.text.primary,
	boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)',
});

export const themeOptionsWrapper = style({
	display: 'flex',
	flexDirection: 'column',
});

export const themeOption = style({
	display: 'flex',
	gap: '0.5rem',
	alignItems: 'center',
	justifyContent: 'start',
	height: '2.25rem',
	borderRadius: '0.5rem',
	paddingLeft: '0.75rem',
	paddingRight: '0.75rem',
	fontSize: '1rem',
	fontWeight: '500',
	transition: 'transform 0.2s',
	marginBottom: '0.125rem',
	whiteSpace: 'nowrap',
	background: 'transparent',
	border: 'none',
	color: theme.text.primary,
	cursor: 'pointer',

	':active': {
		transform: 'scale(0.95)',
	},
});

export const activeThemeOption = style({
	backgroundColor: theme.color.primary,
	color: theme.text.primary,
});
