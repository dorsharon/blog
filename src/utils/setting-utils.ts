import {
	DARK_THEME,
	DEFAULT_THEME,
	LIGHT_THEME,
	SYSTEM_THEME,
	THEME_STORAGE_KEY,
} from '@constants/constants.ts';
import { darkThemeClass, lightThemeClass } from '../styles/themes.css.ts';

export function setTheme(theme: string): void {
	window.localStorage.setItem(THEME_STORAGE_KEY, theme);

	switch (theme) {
		case LIGHT_THEME:
			document.documentElement.classList.remove(darkThemeClass);
			break;
		case DARK_THEME:
			document.documentElement.classList.add(darkThemeClass);
			break;
		case SYSTEM_THEME:
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.classList.add(darkThemeClass);
			} else {
				document.documentElement.classList.remove(darkThemeClass);
			}
			break;
	}
}

export function getTheme(): string {
	return window.localStorage.getItem(THEME_STORAGE_KEY) || DEFAULT_THEME;
}

export const applyLightTheme = (): void => {
	document.documentElement.classList.add(lightThemeClass);
	document.documentElement.classList.remove(darkThemeClass);
};

export const applyDarkTheme = (): void => {
	document.documentElement.classList.add(darkThemeClass);
	document.documentElement.classList.remove(lightThemeClass);
};
