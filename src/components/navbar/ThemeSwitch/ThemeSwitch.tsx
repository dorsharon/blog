import { Icon } from "astro-icon/components";
import { AUTO_MODE, DARK_MODE, LIGHT_MODE } from "@constants/constants.ts";
import { useTheme } from "@/hooks/useTheme.ts";
import { useRef } from "react";
import { button, card, currentSetting, floatPanelClosed, panelBase, themeButton } from "./ThemeSwitch.css.ts";

const themes = [LIGHT_MODE, DARK_MODE, AUTO_MODE];

export default function ThemeSwitch() {
	const [currentTheme, setCurrentTheme] = useTheme();

	const panelRef = useRef<HTMLDivElement>(null);

	function switchTheme(newTheme: string) {
		setCurrentTheme(newTheme);
	}

	function toggleTheme() {
		let i = 0;
		for (; i < themes.length; i++) {
			if (themes[i] === currentTheme) {
				break;
			}
		}
		switchTheme(themes[(i + 1) % themes.length]);
	}

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

	const getThemeIcon = (theme: string) => {
		switch (theme) {
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
				<div className="absolute">
					<Icon name={getThemeIcon(currentTheme)}></Icon>
				</div>
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
							className={`${themeButton} ${theme === currentTheme ? currentSetting : ""}`}
							onClick={() => switchTheme(theme)}
						>
							<Icon name={getThemeIcon(theme)}></Icon>
							{theme}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
