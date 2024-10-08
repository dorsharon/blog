import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from '../../../styles/themes.css';
import { cardBorderRadius } from '../../../styles/variables.css';

export const wrapper = style({
	display: 'flex',
	width: '100%',
	borderRadius: cardBorderRadius,
	overflow: 'hidden',
	position: 'relative',
	marginBottom: '1rem',
});

export const card = style({
	backgroundColor: theme.background.card,
	zIndex: 10,
	paddingLeft: '1.5rem',
	paddingRight: '1.5rem',
	paddingTop: '1.5rem',
	paddingBottom: '1rem',
	width: '100%',
	overflow: 'auto',

	'@media': {
		'(min-width: 768px)': {
			paddingLeft: '2.25rem',
			paddingRight: '2.25rem',
			paddingTop: '1.75rem',
		},
	},
});

export const readingTimeWrapper = style({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	marginBottom: '1rem',
	color: theme.text.secondary,
	animationDelay: 'calc(var(--content-delay) + 0ms)',
});

export const readingTimeIcon = style({
	height: '1.5rem',
	width: '1.5rem',
	borderRadius: '0.375rem',
	backgroundColor: theme.background.button,
	color: theme.text.secondary,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	marginRight: '0.5rem',
	transition: 'all 0.3s ease',
});

export const titleWrapper = style({
	position: 'relative',
	animationDelay: 'calc(var(--content-delay) + 50ms)',
});

export const metadata = style({
	animationDelay: 'calc(var(--content-delay) + 100ms)',
});

export const title = style({
	color: theme.text.primary,
	marginBottom: '0.75rem',
	fontSize: '1.875rem',
	lineHeight: '2.25rem',
	position: 'relative',
	transition: 'all 0.3s ease',

	'::before': {
		content: '""',
		width: '0.25rem',
		height: '1.25rem',
		borderRadius: '0.25rem',
		backgroundColor: 'var(--primary)',
		position: 'absolute',
		top: '0.75rem',
		left: '-1.125rem',
	},

	'@media': {
		'(min-width: 768px)': {
			fontSize: '2.5rem',
			lineHeight: '2.75rem',
		},

		'screen and (max-width: 768px)': {
			'::before': {
				display: 'none',
			},
		},
	},
});

export const subtitle = style({
	color: theme.text.secondary,
	fontSize: '1.25rem',
	marginBottom: '0.75rem',
});

export const border = style({
	borderColor: 'var(--line-divider)',
	borderStyle: 'dashed',
	borderBottomWidth: '1px',
	marginBottom: '1.25rem',
});

export const coverImage = style({
	marginBottom: '1rem',
	borderRadius: '0.75rem',
	animationDelay: 'calc(var(--content-delay) + 175ms)',
	aspectRatio: '2 / 1',
	objectFit: 'cover',

	'@media': {
		'screen and (max-width: 768px)': {
			width: '100%',
			height: 'auto',
		},
	},
});

export const markdownContent = style({
	marginBottom: '1.5rem',
	animationDelay: 'calc(var(--content-delay) + 250ms)',
	color: theme.text.primary,
});

globalStyle(`${markdownContent} a`, {
	color: theme.color.primary,
	textDecoration: 'none',
});

globalStyle(`${markdownContent} a:hover`, {
	textDecoration: 'underline',
});
