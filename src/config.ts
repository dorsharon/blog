import type { ProfileConfig } from "./types/config";

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png",  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Lorem Ipsum",
	bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter",       // Visit https://icones.js.org/ for icon codes
											  // You will need to install the corresponding icon set if it's not already included
											  // `pnpm add @iconify-json/<icon-set-name>`
			url: "https://twitter.com"
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com"
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/saicaca/fuwari"
		}
	]
};

