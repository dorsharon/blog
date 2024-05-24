import { style } from "@vanilla-extract/css";

export const floatPanel = style({
	position: 'absolute',
	top: 0,
	right: '1rem', // right-4
	padding: '0.5rem', // px-2 py-2
	borderRadius: '0.5rem', // rounded-lg
	transition: 'all 0.3s',
	boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)', // shadow
});

export const floatPanelClosed = style({
	transform: 'translateY(-100%)', // float-panel-closed
	opacity: 0,
	pointerEvents: 'none',
});

export const link = style({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '0.5rem 0.75rem', // py-2 pl-3 pr-1
	borderRadius: '0.5rem', // rounded-lg
	textDecoration: 'none',
	color: 'var(--black-75)', // text-black/75
	backgroundColor: 'var(--btn-plain-bg)', // bg-[var(--btn-plain-bg)]
	transition: 'background-color 0.3s, color 0.3s',
	'@hover': {
		'&:hover': {
			backgroundColor: 'var(--btn-plain-bg-hover)', // hover:bg-[var(--btn-plain-bg-hover)]
			color: 'var(--primary)', // group-hover:text-[var(--primary)]
		},
	},
	':active': {
		backgroundColor: 'var(--btn-plain-bg-active)', // active:bg-[var(--btn-plain-bg-active)]
		color: 'var(--primary)', // group-active:text-[var(--primary)]
	},
});

export const linkText = style({
	fontWeight: 'bold',
});
