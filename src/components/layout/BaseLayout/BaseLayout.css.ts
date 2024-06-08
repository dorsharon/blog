import { globalFontFace, style } from '@vanilla-extract/css';
import { theme } from '../../../styles/themes.css.ts';
import {
	cardBorderRadius,
	codeFont,
	defaultFont,
	navbarHeight,
	pageWidth,
} from '../../../styles/variables.css.ts';

globalFontFace(defaultFont, {
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: '400',
	src: "url(https://cdn.jsdelivr.net/fontsource/fonts/poppins@latest/latin-400-normal.woff2) format('woff2')",
	unicodeRange:
		'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD',
});

globalFontFace(defaultFont, {
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: '700',
	src: "url(https://cdn.jsdelivr.net/fontsource/fonts/poppins@latest/latin-700-normal.woff2) format('woff2')",
	unicodeRange:
		'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD',
});

globalFontFace(codeFont, {
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: '100 800',
	src: "url(https://cdn.jsdelivr.net/fontsource/fonts/jetbrains-mono:vf@latest/latin-wght-normal.woff2) format('woff2-variations')",
	unicodeRange:
		'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD',
});

export const html = style({
	backgroundColor: theme.background.page,
	transitionProperty:
		'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
	transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
	transitionDuration: '150ms',
	fontSize: '14px',
	fontFamily: defaultFont,

	'@media': {
		'(min-width: 768px)': {
			fontSize: '16px',
		},
	},

	vars: {
		[pageWidth]: '75rem',
		[cardBorderRadius]: '1rem',
		[navbarHeight]: '4.5rem',
	},
});

export const body = style({
	minHeight: '100vh',
	transitionProperty: `color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter`,
	transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
	transitionDuration: '150ms',
});
