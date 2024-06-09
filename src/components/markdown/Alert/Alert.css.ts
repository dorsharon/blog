import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/themes.css';
import { cardBorderRadius } from '../../../styles/variables.css';
import { adjustBrightness } from '../../../utils/style-utils';

const infoColor: string = '#67b3ff';
const tipColor: string = '#00c9b1';
const warningColor: string = '#ee9748';
const cautionColor: string = '#f14d4c';

export const wrapper = style({
	display: 'flex',
	flexDirection: 'column',
	padding: '1rem',
	borderRadius: cardBorderRadius,
	gap: '0.25rem',
});

export const titleWrapper = style({
	display: 'flex',
	alignItems: 'center',
	gap: '0.5rem',
	textTransform: 'uppercase',
	fontSize: '1rem',
});

export const infoTitle = style({
	color: infoColor,
});

export const tipTitle = style({
	color: tipColor,
});

export const warningTitle = style({
	color: warningColor,
});

export const cautionTitle = style({
	color: cautionColor,
});

export const infoWrapper = style({
	backgroundColor: adjustBrightness(infoColor, -100),
});

export const tipWrapper = style({
	backgroundColor: adjustBrightness(tipColor, -100),
});

export const warningWrapper = style({
	backgroundColor: adjustBrightness(warningColor, -100),
});

export const cautionWrapper = style({
	backgroundColor: adjustBrightness(cautionColor, -100),
});

export const content = style({
	color: theme.text.primary,
});
