import Popover from '@components/common/Popover/Popover.tsx';
import { type JSX, useState } from 'react';
import type { NavBarLink } from '../../../types/config.ts';
import { card, link, menuButton } from './NavMenu.css.ts';

export default function NavMenu({
	links,
	menuIcon,
}: { links: NavBarLink[]; menuIcon?: JSX.Element }) {
	const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

	const togglePopover = () => {
		setIsPopoverOpen(!isPopoverOpen);
	};

	return (
		<Popover
			isOpen={isPopoverOpen}
			onOpenChange={setIsPopoverOpen}
			content={
				<div className={card}>
					{links.map(({ name, url }) => (
						<a key={url} href={url} className={link}>
							{name}
						</a>
					))}
				</div>
			}
		>
			<button
				aria-label='Menu'
				name='Nav Menu'
				className={menuButton}
				onClick={togglePopover}
				type={'button'}
			>
				{menuIcon}
			</button>
		</Popover>
	);
}
