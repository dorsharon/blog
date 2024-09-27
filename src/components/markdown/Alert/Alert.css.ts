import { codeBlock } from '@components/markdown/CodeBlock/CodeBlock.css.ts';
import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from '../../../styles/themes.css';
import { cardBorderRadius } from '../../../styles/variables.css';

export const wrapper = style({
	display: 'flex',
	flexDirection: 'column',
	padding: '1rem',
	borderRadius: cardBorderRadius,
	gap: '1rem',
	marginBlock: '1rem',
	marginInline: '2rem',

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
});

export const title = style({
	margin: 0,
});

export const icon = style({
	width: '1.5rem',
	height: '1.5rem',
});

export const infoWrapper = style({
	backgroundColor: theme.alert.info,
});

export const tipWrapper = style({
	backgroundColor: theme.alert.tip,
});

export const warningWrapper = style({
	backgroundColor: theme.alert.warning,
});

export const cautionWrapper = style({
	backgroundColor: theme.alert.caution,
});

export const content = style({
	color: '#ffffff',
	margin: 0,
});
