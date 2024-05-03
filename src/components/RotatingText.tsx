import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./RotatingText.module.css";
import { adjustBrightness } from "../utils.ts";

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
		}, 3000);

		return () => clearInterval(id);
	}, []);

	const { label, color } = items[index];

	return (
		<div style={{ position: "relative" }}>
			<AnimatePresence>
				<motion.h4
					key={index}
					className={styles.text}
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -20, opacity: 0 }}
					transition={{ ease: "easeInOut" }}
					style={{
						backgroundImage: `linear-gradient(to bottom right, ${color}, ${adjustBrightness(color, -50)})`,
					}}
				>
					{label}
				</motion.h4>
			</AnimatePresence>
		</div>
	);
}
