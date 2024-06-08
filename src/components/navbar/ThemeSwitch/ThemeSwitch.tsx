import { Icon } from "astro-icon/components";
import {
	AUTO_MODE,
	DARK_MODE,
	LIGHT_MODE,
	THEME_STORAGE_KEY,
} from "@constants/constants.ts";
import React, { useRef } from "react";
import {
	card,
	currentSetting,
	floatPanelClosed,
	panelBase,
	themeButton,
	themeButtonWrapper,
	themeOption,
} from "./ThemeSwitch.css.ts";
import { setTheme } from "@utils/setting-utils.ts";

const themes = [LIGHT_MODE, DARK_MODE, AUTO_MODE];

export default function ThemeSwitch() {
	const panelRef = useRef<HTMLDivElement>(null);

	const toggleTheme = () => {
		let i = 0;
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
			className={themeButtonWrapper}
			role="menu"
			tabIndex={-1}
			onMouseLeave={hidePanel}
		>
			<button
				aria-label="Light/Dark Mode"
				role="menuitem"
				className={themeButton}
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
							className={`${themeOption} ${theme === window.localStorage.getItem(THEME_STORAGE_KEY) ? currentSetting : ""}`}
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
