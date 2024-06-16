import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/themes.css.ts';
import { codeFont } from '../../../styles/variables.css.ts';

export const codeSnippet = style({
	fontFamily: codeFont,
	fontSize: '0.875em',
	backgroundColor: theme.background.code,
	color: theme.text.code,
	padding: '.125rem .25rem',
	borderRadius: '0.25rem',
	overflow: 'hidden',
});
