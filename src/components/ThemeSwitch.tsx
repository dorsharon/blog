import { Icon } from "astro-icon/components";
import { AUTO_MODE, DARK_MODE, LIGHT_MODE } from "@constants/constants.ts";
import { useTheme } from "@/hooks/useTheme.ts";
import styles from "./ThemeSwitch.module.css";
import { useRef } from "react";

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
			panelRef.current.classList.remove("float-panel-closed");
		}
	};

	const hidePanel = () => {
		if (panelRef.current) {
			panelRef.current.classList.add("float-panel-closed");
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
				className="relative btn-plain h-11 w-11 rounded-lg active:scale-90"
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
				className="hidden lg:block absolute transition float-panel-closed top-11 -right-2 pt-5"
				ref={panelRef}
			>
				<div className="card-base float-panel p-2">
					{themes.map((theme) => (
						<button
							className={`flex transition whitespace-nowrap items-center justify-start w-full btn-plain h-9 rounded-lg px-3 font-medium active:scale-95 mb-0.5 ${theme === currentTheme ? styles.currentSetting : ""}`}
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
