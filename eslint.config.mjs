import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
	{
		ignores: ['node_modules/*, dist/*'],
	},
	{
		languageOptions: { globals: globals.browser }
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	{
		files: ['src/**/*.{jsx,tsx}'],
		...pluginReactConfig,
		languageOptions: {
			...pluginReactConfig.languageOptions,
			globals: {
				...globals.serviceworker,
				...globals.browser
			}
		}
	},
	eslintConfigPrettier

];
