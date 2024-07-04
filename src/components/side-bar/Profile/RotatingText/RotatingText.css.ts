import { keyframes, style } from '@vanilla-extract/css';

export const textWrapper = style({
	position: 'relative',
	width: '100%',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

const transitionDurationMs = 150;
const onScreenTimeMs = 3000;
const itemsCount = 5;
const totalAnimationDurationMs = 5 * (onScreenTimeMs + transitionDurationMs);

const transitionDurationPercentage = (transitionDurationMs / totalAnimationDurationMs) * 100;
const onScreenTimePercentage = (onScreenTimeMs / totalAnimationDurationMs) * 100;

export const rotatingAnimation = keyframes({
	'0%': { opacity: 0, transform: 'translateY(20px)' },
	[`${transitionDurationPercentage}%`]: { opacity: 1, transform: 'translateY(0)' },
	[`${transitionDurationPercentage + onScreenTimePercentage}%`]: {
		opacity: 1,
		transform: 'translateY(0)',
	},
	[`${transitionDurationPercentage + onScreenTimePercentage + transitionDurationPercentage}%`]: {
		opacity: 0,
		transform: 'translateY(-20px)',
	},
	'100%': { opacity: 0, transform: 'translateY(-20px)' },
});

export const text = style({
	position: 'absolute',
	fontWeight: 'bold',
	fontSize: '1.5rem',
	width: '100%',
	whiteSpace: 'pre-line',
	textAlign: 'center',
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
	animation: `${rotatingAnimation} ${totalAnimationDurationMs}ms linear infinite 0s`,
	opacity: 0,

	selectors: {
		...[...Array(itemsCount)].reduce((result, _, index) => {
			result[`${textWrapper} &:nth-child(${index + 1})`] = {
				animationDelay: `calc(${index} * (${onScreenTimeMs}ms + ${transitionDurationMs}ms))`,
			};
			return result;
		}, {}),
	},
});
