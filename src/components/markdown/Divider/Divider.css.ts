import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/themes.css';

export const divider = style({
	marginBlock: '3rem',
	border: `1px solid ${theme.text.primary}`,
});
