import { keyframes, style } from '@vanilla-extract/css';
import { theme } from '../../../styles/themes.css';
import { cardBorderRadius } from '../../../styles/variables.css';

const pulseGlow = keyframes({
	'0%, 100%': {
		boxShadow: '0 8px 32px rgba(74, 163, 255, 0.25), 0 0 0 2px rgba(74, 163, 255, 0.3)',
	},
	'50%': {
		boxShadow: '0 12px 48px rgba(74, 163, 255, 0.35), 0 0 0 2px rgba(103, 179, 255, 0.5)',
	},
});

const shimmer = keyframes({
	'0%': {
		backgroundPosition: '-200% 0',
	},
	'100%': {
		backgroundPosition: '200% 0',
	},
});

export const wrapper = style({
	backgroundColor: theme.background.card,
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	borderRadius: cardBorderRadius,
	overflow: 'hidden',
	position: 'relative',
	transition: 'all 0.3s ease',
	animation: `${pulseGlow} 3s ease-in-out infinite`,

	'::before': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		borderRadius: cardBorderRadius,
		padding: '2px',
		background: 'linear-gradient(135deg, #4aa3ff, #67b3ff, #4aa3ff)',
		backgroundSize: '200% 100%',
		WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
		WebkitMaskComposite: 'xor',
		maskComposite: 'exclude',
		animation: `${shimmer} 3s linear infinite`,
		pointerEvents: 'none',
		zIndex: 1,
	},

	':hover': {
		boxShadow: '0 16px 64px rgba(74, 163, 255, 0.4), 0 0 0 2px rgba(103, 179, 255, 0.6)',
	},

	'@media': {
		'screen and (min-width: 768px)': {
			flexDirection: 'row',
			minHeight: '400px',
		},
	},
});

export const badge = style({
	position: 'absolute',
	top: '1rem',
	right: '1rem',
	zIndex: 100,
	background: 'linear-gradient(135deg, #4aa3ff, #67b3ff)',
	color: 'white',
	padding: '0.5rem 1rem',
	borderRadius: '2rem',
	fontSize: '0.875rem',
	fontWeight: 600,
	boxShadow: '0 4px 12px rgba(74, 163, 255, 0.3)',
	display: 'flex',
	alignItems: 'center',
	gap: '0.5rem',
	animation: `${keyframes({
		'0%, 100%': { transform: 'translateY(0)' },
		'50%': { transform: 'translateY(-4px)' },
	})} 2s ease-in-out infinite`,
});

export const badgeIcon = style({
	fontSize: '1.25rem',
});

export const contentWrapper = style({
	padding: '2rem',
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	zIndex: 2,

	'@media': {
		'screen and (min-width: 768px)': {
			padding: '3rem',
			width: '55%',
		},
	},
});

export const titleLink = style({
	display: 'block',
	marginBottom: '1rem',
	fontSize: '2rem',
	fontWeight: 700,
	color: theme.text.primary,
	transition: 'all 0.3s ease',
	position: 'relative',
	cursor: 'pointer',
	textDecoration: 'none',
	lineHeight: 1.2,

	':hover': {
		color: theme.color.primary,
		transform: 'translateX(8px)',
	},

	':active': {
		transform: 'translateX(4px) scale(0.98)',
	},

	'::before': {
		content: '""',
		width: '0.375rem',
		height: '100%',
		borderRadius: '0.375rem',
		background: 'linear-gradient(180deg, #4aa3ff, #67b3ff)',
		position: 'absolute',
		top: 0,
		left: '-24px',
		transition: 'all 0.3s ease',
	},

	'@media': {
		'screen and (max-width: 768px)': {
			fontSize: '2.5rem',

			'::before': {
				left: '-16px',
			},
		},
	},

	selectors: {
		'&:hover::before': {
			boxShadow: '0 0 12px rgba(74, 163, 255, 0.6)',
		},
	},
});

export const subtitleWrapper = style({
	transition: 'all 0.3s ease',
	color: theme.text.secondary,
	marginBottom: '1.5rem',
	fontSize: '1.125rem',
	lineHeight: 1.6,
});

export const readingTime = style({
	fontSize: '0.875rem',
	color: theme.text.secondary,
	display: 'flex',
	gap: '1rem',
	transition: 'all 0.3s ease',
	fontWeight: 500,
});

export const coverImageWrapper = style({
	width: '100%',
	height: '300px',
	position: 'relative',
	overflow: 'hidden',
	transition: 'all 0.3s ease',

	':hover': {
		cursor: 'pointer',
	},

	'@media': {
		'screen and (min-width: 768px)': {
			width: '45%',
			height: 'auto',
			minHeight: '400px',
		},
	},
});

export const coverImageOverlay = style({
	position: 'absolute',
	zIndex: 10,
	width: '100%',
	height: '100%',
	background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)',
	transition: 'all 0.3s ease',

	':hover': {
		background: 'linear-gradient(180deg, rgba(74, 163, 255, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%)',
	},

	':active': {
		background: 'linear-gradient(180deg, rgba(74, 163, 255, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%)',
	},
});

export const coverImageIconWrapper = style({
	position: 'absolute',
	zIndex: 20,
	width: '100%',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	transition: 'all 0.3s ease',
	opacity: 0,

	':hover': {
		opacity: 1,
	},
});

export const coverImageIcon = style({
	color: 'white',
	fontSize: '4rem',
	filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
});

export const coverImage = style({
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	objectPosition: 'center',
	transition: 'transform 0.3s ease',

	':hover': {
		transform: 'scale(1.05)',
	},
});
