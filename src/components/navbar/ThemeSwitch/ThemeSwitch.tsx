import Popover from '@components/common/Popover/Popover.tsx';
import {
	DARK_THEME,
	LIGHT_THEME,
	SYSTEM_THEME,
	THEME_STORAGE_KEY,
} from '@constants/constants.ts';
import { applyDarkTheme, applyLightTheme } from '@utils/setting-utils.ts';
import React, { type JSX, useEffect, useRef, useState } from 'react';
import { darkThemeClass, lightThemeClass } from '../../../styles/themes.css.ts';
import {
	activeThemeButton,
	activeThemeOption,
	card,
	themeButton,
	themeButtonWrapper,
	themeOption,
	themeOptionsWrapper,
} from './ThemeSwitch.css.ts';

const themes = [LIGHT_THEME, DARK_THEME, SYSTEM_THEME];

export default function ThemeSwitch({
	themeButtonId,
	lightThemeIcon,
	darkThemeIcon,
	systemThemeIcon,
}: {
	themeButtonId: string;
	lightThemeIcon?: JSX.Element;
	darkThemeIcon?: JSX.Element;
	systemThemeIcon?: JSX.Element;
}) {
	const [currentTheme, setCurrentTheme] = useState<string>(SYSTEM_THEME);
	const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

	// useEffect(() => {
	// 	const isDarkTheme =
	// 		document.documentElement.classList.contains(darkThemeClass);
	// 	setCurrentTheme(isDarkTheme ? DARK_THEME : LIGHT_THEME);
	// }, []);

	// useEffect(() => {
	// 	const isDark =
	// 		currentTheme === 'dark' ||
	// 		(currentTheme === 'system' &&
	// 			window.matchMedia('(prefers-color-scheme: dark)').matches);
	// 	document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
	// }, [currentTheme]);

	useEffect(() => {
		switch (currentTheme) {
			case LIGHT_THEME:
				applyLightTheme();
				break;
			case DARK_THEME:
				applyDarkTheme();
				break;
			case SYSTEM_THEME:
				if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
					applyDarkTheme();
				} else {
					applyLightTheme();
				}
				break;
		}
	}, [currentTheme]);

	const toggleTheme = () => {
		let i = 0;

		for (; i < themes.length; i++) {
			if (themes[i] === currentTheme) {
				break;
			}
		}
		setCurrentTheme(themes[(i + 1) % themes.length]);
	};
	//
	// const showPanel = () => {
	// 	if (popoverRef.current) {
	// 		popoverRef.current.showPopover();
	// 	}
	// };
	//
	// const hidePanel = () => {
	// 	if (popoverRef.current) {
	// 		popoverRef.current.hidePopover();
	// 	}
	// };

	const getThemeIcon = (theme: string) => {
		switch (theme) {
			case LIGHT_THEME:
				return lightThemeIcon;
			case DARK_THEME:
				return darkThemeIcon;
			case SYSTEM_THEME:
				return systemThemeIcon;
		}
	};

	return (
		<Popover
			isOpen={isPopoverOpen}
			onOpenChange={setIsPopoverOpen}
			content={
				<div className={card}>
					<div className={themeOptionsWrapper}>
						{themes.map((theme) => (
							<button
								key={theme}
								className={`${themeOption} ${theme === currentTheme ? activeThemeOption : ''}`}
								onClick={() => setCurrentTheme(theme)}
								type={'button'}
							>
								{getThemeIcon(theme)}

								{theme}
							</button>
						))}
					</div>
				</div>
			}
		>
			<div
				className={themeButtonWrapper}
				role='menu'
				tabIndex={-1}
				// onMouseLeave={hidePanel}
			>
				{themes.map((theme) => (
					<button
						key={theme}
						aria-label='Switch Theme'
						role='menuitem'
						type={'button'}
						className={`${themeButton} ${theme === currentTheme ? activeThemeButton : ''}`}
						onClick={toggleTheme}
						// onMouseEnter={showPanel}
					>
						{getThemeIcon(theme)}
					</button>
				))}
			</div>
		</Popover>
	);
}
