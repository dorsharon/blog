import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/themes.css';
import { cardBorderRadius } from '../../../styles/variables.css';

export const wrapper = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
	backgroundColor: theme.background.code,
	padding: '1rem 1.5rem',
	color: theme.text.secondary,
	borderRadius: cardBorderRadius,
	cursor: 'pointer',
});

export const titleWrapper = style({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
});

export const title = style({
	fontWeight: 'bold',
	fontSize: '1.25rem',
	display: 'flex',
	alignItems: 'center',
	gap: '0.5rem',
	color: theme.text.primary,

	selectors: {
		[`${titleWrapper}:hover &`]: {
			color: theme.text.primary,
		},
	},
});

export const metadata = style({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	gap: '1.5rem',
});

export const metadataItem = style({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	gap: '0.25rem',
});

export const metadataIcon = style({
	width: '1.25rem',
	height: '1.25rem',
	fill: theme.text.secondary,
});

export const githubIcon = style({
	width: '1.25rem',
	height: '1.25rem',
	fill: theme.text.secondary,
});
