import { adjustBrightness } from '@utils/style-utils.ts';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { text, textWrapper } from './RotatingText.css.ts';

export default function RotatingText({
	items,
}: {
	items: { label: string; color: string }[];
}) {
	const [index, setIndex] = useState<number>(0);

	useEffect(() => {
		const id = setInterval(() => {
			setIndex((state) => {
				if (state >= items.length - 1) {
					return 0;
				}

				return state + 1;
			});
		}, 2000);

		return () => clearInterval(id);
	}, [items.length]);

	const { label, color } = items[index];

	return (
		<div className={textWrapper}>
			<AnimatePresence>
				<motion.div
					key={index}
					className={text}
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -20, opacity: 0 }}
					// transition={{ duration: 3 }}
					style={{
						backgroundImage: `linear-gradient(to bottom right, ${color}, ${adjustBrightness(color, -50)})`,
					}}
				>
					{label}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
