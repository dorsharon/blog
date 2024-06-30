import { style } from '@vanilla-extract/css';
import { theme } from '../../styles/themes.css.ts';
import { cardBorderRadius } from '../../styles/variables.css.ts';

export const wrapper = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
	backgroundColor: theme.background.card,
	borderRadius: cardBorderRadius,
	padding: '1.5rem 2.25rem',
	color: theme.text.primary,
});

export const skillsGrid = style({
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
	rowGap: '1em',
	placeItems: 'center',
});

export const title = style({
	fontSize: '2rem',
	fontWeight: 'bold',
	margin: 0,
});

export const subtitle = style({
	fontSize: '1.5rem',
	fontWeight: 'bold',
	margin: 0,
});

export const paragraph = style({
	margin: 0,
});
