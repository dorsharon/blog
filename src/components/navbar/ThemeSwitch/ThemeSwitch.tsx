import { Icon } from "astro-icon/components";
import { AUTO_MODE, DARK_MODE, LIGHT_MODE, THEME_STORAGE_KEY } from "@constants/constants.ts";
import { useRef } from "react";
import { button, card, currentSetting, floatPanelClosed, panelBase, themeButton } from "./ThemeSwitch.css.ts";

const themes = [LIGHT_MODE, DARK_MODE, AUTO_MODE];

export default function ThemeSwitch() {
	const panelRef = useRef<HTMLDivElement>(null);

	const setTheme = (theme: string): void => {
		window.localStorage.setItem(THEME_STORAGE_KEY, theme);

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

	const toggleTheme = () => {
		let i=0;
		const currentTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

		for (; i < themes.length; i++) {
			if (themes[i] === currentTheme) {
				break;
			}
		}
		setTheme(themes[(i + 1) % themes.length]);
	};

	const showPanel = () => {
		if (panelRef.current) {
			panelRef.current.classList.remove(floatPanelClosed);
		}
	};

	const hidePanel = () => {
		if (panelRef.current) {
			panelRef.current.classList.add(floatPanelClosed);
		}
	};

	const getThemeIcon = () => {
		const currentTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

		switch (currentTheme) {
			case LIGHT_MODE:
				return "material-symbols:wb-sunny-outline-rounded";
			case DARK_MODE:
				return "material-symbols:dark-mode-outline-rounded";
			case AUTO_MODE:
				return "material-symbols:radio-button-partial-outline";
		}
	};

	return (
		<div
			className="relative z-50"
			role="menu"
			tabIndex={-1}
			onMouseLeave={hidePanel}
		>
			<button
				aria-label="Light/Dark Mode"
				role="menuitem"
				className={button}
				id="scheme-switch"
				onClick={toggleTheme}
				onMouseEnter={showPanel}
			>
					<Icon name={getThemeIcon()}></Icon>
			</button>

			<div
				id="light-dark-panel"
				className={`${panelBase} ${floatPanelClosed}`}
				ref={panelRef}
			>
				<div className={card}>
					{themes.map((theme) => (
						<button
							key={theme}
							className={`${themeButton} ${theme === window.localStorage.getItem(THEME_STORAGE_KEY) ? currentSetting : ""}`}
							onClick={() => setTheme(theme)}
						>
							<Icon name={getThemeIcon()}></Icon>
							{theme}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
