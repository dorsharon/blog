import React, { useRef } from "react";
import type { NavBarLink } from "../../../types/config.ts";
import {
	floatPanel,
	floatPanelClosed,
	link,
	linkText,
	menuButton,
} from "./NavMenu.css.ts";

export default function NavMenu({ links }: { links: NavBarLink[] }) {
	const panelRef = useRef<HTMLDivElement>(null);

	const handleClick = () => {
		if (panelRef.current !== null) {
			panelRef.current.classList.toggle("float-panel-closed");
		}
	};

	return (
		<>
			<button
				aria-label="Menu"
				name="Nav Menu"
				className={menuButton}
				id="nav-menu-switch"
				onClick={handleClick}
			>
				{/*<Icon name="material-symbols:menu-rounded" size={"1.25rem"}></Icon>*/}
			</button>

			<div
				id="nav-menu-panel"
				ref={panelRef}
				className={`${floatPanel} ${floatPanelClosed}`}
			>
				{links.map(({ name, url }) => (
					<a key={url} href={url} className={link}>
						<div className={linkText}>{name}</div>
					</a>
				))}
			</div>
		</>
	);
}
