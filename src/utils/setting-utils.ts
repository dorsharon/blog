import { AUTO_MODE, DARK_MODE, DEFAULT_THEME, LIGHT_MODE, THEME_STORAGE_KEY } from "@constants/constants.ts";
import { darkThemeClass } from "../styles/themes.css.ts";

export function getDefaultHue(): number {
	const fallback = "250";
	const configCarrier = document.getElementById("config-carrier");
	return parseInt(configCarrier?.dataset.hue || fallback);
}

export function getHue(): number {
	const stored = localStorage.getItem("hue");
	return stored ? parseInt(stored) : getDefaultHue();
}

export function setHue(hue: number): void {
	localStorage.setItem("hue", String(hue));
	const r = document.querySelector(":root");
	if (!r) {
		return;
	}
	r.style.setProperty("--hue", hue);
}

export function setTheme(theme: string): void {
	localStorage.setItem(THEME_STORAGE_KEY, theme);

	switch (theme) {
		case LIGHT_MODE:
			document.documentElement.classList.remove(darkThemeClass);
			break;
		case DARK_MODE:
			document.documentElement.classList.add(darkThemeClass);
			break;
		case AUTO_MODE:
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				document.documentElement.classList.add(darkThemeClass);
			} else {
				document.documentElement.classList.remove(darkThemeClass);
			}
			break;
	}
}

export function getTheme(): string {
	return localStorage.getItem(THEME_STORAGE_KEY) || DEFAULT_THEME;
}
