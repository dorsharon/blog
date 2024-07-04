import Popover from '@components/common/Popover/Popover.tsx';
import { DARK_THEME, LIGHT_THEME, SYSTEM_THEME } from '@constants/constants.ts';
import { applyDarkTheme, applyLightTheme } from '@utils/setting-utils.ts';
import { type JSX, useEffect, useState } from 'react';
import { darkThemeClass } from '../../../styles/themes.css.ts';
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
	loadingIcon,
	lightThemeIcon,
	darkThemeIcon,
	systemThemeIcon,
}: {
	loadingIcon?: JSX.Element;
	lightThemeIcon?: JSX.Element;
	darkThemeIcon?: JSX.Element;
	systemThemeIcon?: JSX.Element;
}) {
	const [currentTheme, setCurrentTheme] = useState<string>('');
	const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

	useEffect(() => {
		if (!currentTheme?.length) {
			const initialTheme = document.documentElement.classList.contains(darkThemeClass)
				? DARK_THEME
				: LIGHT_THEME;
			setCurrentTheme(initialTheme);
		}
	}, [currentTheme]);

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
			default:
				return loadingIcon;
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
				being displayed at a time.
				The '' is added to load the loading spinner icon as well.*/}
			{[...themes, ''].map((theme) => (
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
