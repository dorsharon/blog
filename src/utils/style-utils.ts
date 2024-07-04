export const adjustBrightness = (colorHex: string, amount: number): string => {
	const num = Number.parseInt(colorHex.charAt(0) === '#' ? colorHex.slice(1) : colorHex, 16);

	const clamp = (val: number) => (val < 0 ? 0 : val > 255 ? 255 : val);

	return `#${[0, 8, 16]
		.map((shift) => clamp(((num >> shift) & 0xff) + amount) << shift)
		.reduce((a, c) => a + c, 0)
		.toString(16)
		.padStart(6, '0')}`;
};
