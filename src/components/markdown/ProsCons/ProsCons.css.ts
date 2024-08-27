import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/themes.css';
import { cardBorderRadius } from '../../../styles/variables.css';

export const wrapper = style({
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	borderRadius: cardBorderRadius,
	marginBlock: '1rem',
	marginInline: '2rem',

	'@media': {
		'screen and (max-width: 768px)': {
			marginInline: 0,
			gridTemplateColumns: '1fr',
		},
	},
});

export const prosWrapper = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
	padding: '1rem',
	backgroundColor: theme.alert.tip,
	borderStartStartRadius: cardBorderRadius,
	borderStartEndRadius: 0,
	borderEndStartRadius: cardBorderRadius,
	borderEndEndRadius: 0,

	'@media': {
		'screen and (max-width: 768px)': {
			borderStartStartRadius: cardBorderRadius,
			borderStartEndRadius: cardBorderRadius,
			borderEndStartRadius: 0,
			borderEndEndRadius: 0,
		},
	},
});

export const consWrapper = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
	padding: '1rem',
	backgroundColor: theme.alert.caution,
	borderStartStartRadius: 0,
	borderStartEndRadius: cardBorderRadius,
	borderEndStartRadius: 0,
	borderEndEndRadius: cardBorderRadius,

	'@media': {
		'screen and (max-width: 768px)': {
			borderStartStartRadius: 0,
			borderStartEndRadius: 0,
			borderEndStartRadius: cardBorderRadius,
			borderEndEndRadius: cardBorderRadius,
		},
	},
});

export const titleWrapper = style({
	display: 'flex',
	alignItems: 'center',
	gap: '0.5rem',
	textTransform: 'uppercase',
	fontSize: '1rem',
	color: '#ffffff',
});

export const title = style({
	margin: 0,
});

export const icon = style({
	width: '1.5rem',
	height: '1.5rem',
});

export const content = style({
	color: '#ffffff',
	margin: 0,
});
