import { style } from "@vanilla-extract/css";


export const link = style({
    display: 'block',
    position: 'relative',
    margin: '1rem auto',
    '@media (min-width: 1024px)': {
        margin: '0.75rem 0.75rem 0.75rem auto',
    },
    maxWidth: '240px',
    overflow: 'hidden',
    borderRadius: '0.75rem',
    transition: 'transform 0.2s',
    ':active': {
        transform: 'scale(0.95)',
    },
});

export const overlay = style({
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    transition: 'background-color 0.2s',
    selectors: {
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
        '&:active': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
    },
});

export const icon = style({
    transition: 'opacity 0.2s',
    opacity: 0,
    color: 'white',
    fontSize: '3rem',
    selectors: {
        [`${link}:hover &`]: {
            opacity: 1,
        },
    },
});

export const avatarImage = style({
    margin: '0 auto',
    '@media (min-width: 1024px)': {
        width: '100%',
        marginTop: '0',
    },
    height: '100%',
});

export const name = style({
    fontWeight: 'bold',
    fontSize: '1.25rem',
    textAlign: 'center',
    marginBottom: '0.25rem',
    color: 'var(--neutral-900)',
    transition: 'color 0.2s',
    '@media (prefers-color-scheme: dark)': {
        color: 'var(--neutral-50)',
    },
});

export const separator = style({
    height: '0.25rem',
    width: '1.25rem',
    backgroundColor: 'var(--primary)',
    margin: '0 auto',
    borderRadius: '0.25rem',
    marginBottom: '0.5rem',
    transition: 'background-color 0.2s',
});

export const bio = style({
    textAlign: 'center',
    color: 'var(--neutral-400)',
    marginBottom: '0.625rem',
    transition: 'color 0.2s',
});

export const links = style({
    display: 'flex',
    gap: '0.5rem',
    margin: '0 0.5rem',
    justifyContent: 'center',
    marginBottom: '1rem',
});

export const linkButton = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '2.5rem',
    width: '2.5rem',
    borderRadius: '0.5rem',
    transition: 'transform 0.2s',
    ':active': {
        transform: 'scale(0.9)',  
    },
});
