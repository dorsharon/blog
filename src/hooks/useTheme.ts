import {
	AUTO_MODE,
	DARK_MODE,
	DEFAULT_THEME,
	LIGHT_MODE,
} from "@constants/constants.ts";

export const useTheme = (): [string, (value: string) => void] => {
	const theme = localStorage.getItem("theme") || DEFAULT_THEME;

	const setTheme = (theme: string): void => {
		localStorage.setItem("theme", theme);

		switch (theme) {
			case LIGHT_MODE:
				document.documentElement.classList.remove("dark");
				break;
			case DARK_MODE:
				document.documentElement.classList.add("dark");
				break;
			case AUTO_MODE:
				if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
					document.documentElement.classList.add("dark");
				} else {
					document.documentElement.classList.remove("dark");
				}
				break;
		}
	};

	return [theme, setTheme];
};
