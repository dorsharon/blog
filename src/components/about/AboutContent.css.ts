import { style } from '@vanilla-extract/css';
import { theme } from '../../styles/themes.css.ts';
import { cardBorderRadius } from '../../styles/variables.css.ts';

export const wrapper = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '0.5rem',
	backgroundColor: theme.background.card,
	borderRadius: cardBorderRadius,
	padding: '1.5rem 2.25rem',
	color: theme.text.primary,
});
