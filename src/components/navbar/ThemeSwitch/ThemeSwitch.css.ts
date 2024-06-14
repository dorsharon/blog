import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/themes.css.ts';
import { navbarHeight } from '../../../styles/variables.css.ts';

export const themeButtonWrapper = style({
	position: 'relative',
});

export const themeButton = style({
	position: 'relative',
	alignItems: 'center',
	justifyContent: 'center',
	height: '2.75rem',
	width: '2.75rem',
	borderRadius: '0.5rem',
	transition: 'transform 0.2s',
	display: 'none',

	':active': {
		transform: 'scale(0.9)',
	},

	// selectors: {
	// 	"svg": {
	// 		fill: "var(--text-primary)"
	//
	// 	}
	// }
});

export const activeThemeButton = style({
	display: 'inline-flex',
});

export const themeIcon = style({});

export const panelBase = style({
	position: 'absolute',
	display: 'none',
	transition: 'transform 0.2s, opacity 0.2s',
	top: '2.75rem',
	right: '-0.5rem',
	paddingTop: '1.25rem',
	zIndex: 50,

	'@media': {
		'(min-width: 1024px)': {
			display: 'block',
		},
	},
});

export const floatPanelClosed = style({
	transform: 'translateY(-0.5rem)',
	opacity: 0,
	pointerEvents: 'none',
});

export const card = style({
	padding: '0.5rem',
	borderRadius: '0.5rem',
	backgroundColor: theme.background.button,
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
	':active': {
		transform: 'scale(0.95)',
	},
});

export const activeThemeOption = style({
	backgroundColor: theme.color.primary,
	color: theme.text.primary,
});
