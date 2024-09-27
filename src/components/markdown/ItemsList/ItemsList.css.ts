import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/themes.css';
import { cardBorderRadius } from '../../../styles/variables.css';

export const wrapper = style({
	display: 'flex',
	flexDirection: 'column',
	borderRadius: cardBorderRadius,
	gap: '0.5rem',
	marginBlock: '1rem',
	marginInline: '2rem',
	backgroundColor: theme.alert.info,
	padding: '1.5rem 0',

	'@media': {
		'screen and (max-width: 768px)': {
			marginInline: 0,
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
	padding: '0 2rem',
});

export const title = style({
	margin: 0,
});

export const list = style({
	margin: 0,
	padding: 0,
});
