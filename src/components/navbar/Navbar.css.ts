// styles.css.ts
import { style } from "@vanilla-extract/css";

export const card = style({
    position: 'sticky',
    top: '0',
    overflow: 'visible',
    maxWidth: 'var(--page-width)',
    height: '4.5rem',
    borderRadius: '0 0 0.75rem 0.75rem',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '1rem',
    paddingRight: '1rem',
});

export const button = style({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    height: '3.25rem', // h-[3.25rem]
    paddingLeft: '1.25rem', // px-5
    paddingRight: '1.25rem', // px-5
    borderRadius: '0.5rem', // rounded-lg
    transition: 'transform 0.2s',
    ':active': {
        transform: 'scale(0.95)', // active:scale-95
    },
});

export const homeLink = style({
    display: 'flex',
    flexDirection: 'row',
    color: 'var(--primary)',
    alignItems: 'center',
    fontSize: '1rem', // text-md
});

export const homeIcon = style({
    marginBottom: '0.25rem', // mb-1
    marginRight: '0.5rem', // mr-2
});

export const linksWrapper = style({
    display: 'none',
    '@media (min-width: 768px)': {
        display: 'flex', // md:flex
    },
});

export const navLink = style({
    display: 'inline-flex',
    alignItems: 'center',
    fontWeight: 'bold',
    height: '2.75rem', // h-11
    paddingLeft: '1.25rem', // px-5
    paddingRight: '1.25rem', // px-5
    borderRadius: '0.5rem', // rounded-lg
    transition: 'transform 0.2s',
    ':active': {
        transform: 'scale(0.95)', // active:scale-95
    },
});

export const searchWrapper = style({
    display: 'flex',
});

export const searchIcon = style({
    position: 'absolute',
    pointerEvents: 'none',
    marginLeft: '0.75rem', // ml-3
    transition: 'color 0.2s',
    color: 'rgba(0, 0, 0, 0.3)', // text-black/30
    '@media (prefers-color-scheme: dark)': {
        color: 'rgba(255, 255, 255, 0.3)', // dark:text-white/30
    },
});

export const arrowIcon = style({
    transition: 'transform 0.2s',
    transform: 'translateX(0.125rem)', // translate-x-0.5
    margin: 'auto 0',
    color: 'var(--primary)',
});

export const settingsButton = style({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '2.75rem', // h-11
    width: '2.75rem', // w-11
    borderRadius: '0.5rem', // rounded-lg
    transition: 'transform 0.2s',
    ':active': {
        transform: 'scale(0.9)', // active:scale-90
    },
});

export const menuButton = style({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '2.75rem', // h-11
    width: '2.75rem', // w-11
    borderRadius: '0.5rem', // rounded-lg
    transition: 'transform 0.2s',
    ':active': {
        transform: 'scale(0.9)', // active:scale-90
    },
    '@media (min-width: 768px)': {
        display: 'none', // md:hidden
    },
});
