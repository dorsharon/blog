import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/themes.css.ts';

export const tooltip = style({
	padding: '0.5em',
	backgroundColor: theme.background.button,
	color: theme.text.primary,
	borderRadius: '5px',
	fontSize: '0.8em',
});
