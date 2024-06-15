import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/themes.css';

export const wrapper = style({
	padding: '0.5rem',
	border: `1px solid ${theme.text.secondary}`,
	borderRadius: '5px',
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: theme.background.card,
	transition: 'all 0.3s ease-in-out',

	':hover': {
		scale: 1.1,
	},
});
