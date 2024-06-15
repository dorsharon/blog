import Popover from '@components/common/Popover/Popover.tsx';
import { DARK_THEME, LIGHT_THEME, SYSTEM_THEME } from '@constants/constants.ts';
import { applyDarkTheme, applyLightTheme } from '@utils/setting-utils.ts';
import React, { type JSX, useEffect, useState } from 'react';
import {
	activeThemeButton,
	activeThemeOption,
	card,
	themeButton,
	themeOption,
	themeOptionsWrapper,
} from './ThemeSwitch.css.ts';

const themes = [LIGHT_THEME, DARK_THEME, SYSTEM_THEME];

export default function ThemeSwitch({
	lightThemeIcon,
	darkThemeIcon,
	systemThemeIcon,
}: {
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

	const togglePopover = () => {
		setIsPopoverOpen(!isPopoverOpen);
	};

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
			{/* In order for Astro to load all icons, we need to render all three possible buttons, with only one
				being displayed at a time.*/}
			{themes.map((theme) => (
				<button
					key={theme}
					aria-label='Switch Theme'
					role='menuitem'
					type={'button'}
					className={`${themeButton} ${theme === currentTheme ? activeThemeButton : ''}`}
					onClick={togglePopover}
				>
					{getThemeIcon(theme)}
				</button>
			))}
		</Popover>
	);
}
