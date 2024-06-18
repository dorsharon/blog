import { keyframes, style } from '@vanilla-extract/css';

const fadeInUp = keyframes({
	'0%': {
		transform: 'translateY(2rem)',
		opacity: 0,
	},
	'100%': {
		transform: 'translateY(0)',
		opacity: 1,
	},
});

export const onLoadAnimation = style({
	opacity: 0,
	animation: `300ms ${fadeInUp}`,
	animationFillMode: 'forwards',
});
