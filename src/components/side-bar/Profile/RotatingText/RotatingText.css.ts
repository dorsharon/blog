import { keyframes, style } from '@vanilla-extract/css';

export const textWrapper = style({
	position: 'relative',
	width: '100%',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

export const rotatingAnimation = keyframes({
	'0%': { opacity: 0, translate: '0 20px' }, // 0s
	'1%': { opacity: 1, translate: '0 0' }, // 0.15s
	'21%': { opacity: 1, translate: '0 0' }, // 3.15s
	'22%': { opacity: 0, translate: '0 -20px' }, // 3.3s
	'100%': { opacity: 0, translate: '0 -20px' }, // 15s
});

const animationDuration = '150ms';
const timeOnScreen = '3s';
const itemsCount = 5;

export const text = style({
	position: 'absolute',
	fontWeight: 'bold',
	fontSize: '1.5rem',
	width: '100%',
	whiteSpace: 'pre-line',
	textAlign: 'center',
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
	animation: `${rotatingAnimation} calc((${timeOnScreen} - (${animationDuration})) * ${itemsCount}) linear infinite 0s`,
	opacity: 0,

	selectors: {
		...[...Array(itemsCount)].map((_, index) => ({
			[`${textWrapper} &:nth-child(${index + 1})`]: {
				animationDelay: `calc(${(index + 1) * timeOnScreen})`,
			},
		})),
		// [`${textWrapper} &:nth-child(2)`]: {
		// 	animationDelay: '3s',
		// },
		// [`${textWrapper} &:nth-child(3)`]: {
		// 	animationDelay: '6s',
		// },
		// [`${textWrapper} &:nth-child(4)`]: {
		// 	animationDelay: '9s',
		// },
		// [`${textWrapper} &:nth-child(5)`]: {
		// 	animationDelay: '12s',
		// },
	},
});
