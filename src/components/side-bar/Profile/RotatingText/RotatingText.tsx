import { adjustBrightness } from '@utils/style-utils.ts';
import { text, textWrapper } from './RotatingText.css.ts';

const items = [
	{ label: 'Full stack developer', color: '#fb923c' },
	{ label: 'React fanboy', color: '#5b9ee9' },
	{ label: 'Frontend tech lead', color: '#a78bfa' },
	{ label: 'Marvel geek', color: '#34d399' },
	{ label: 'CSS enthusiast', color: '#d33489' },
];

export default function RotatingText() {
	return (
		<div className={textWrapper}>
			{items.map(({ label, color }, index) => (
				<div
					key={label}
					className={text}
					style={{
						backgroundImage: `linear-gradient(to bottom right, ${color}, ${adjustBrightness(color, -50)})`,
					}}
				>
					{label}
				</div>
			))}
		</div>
	);
}
