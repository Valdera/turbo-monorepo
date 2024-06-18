import sharedConfig from '@repo/tailwind-config';
import type { Config } from 'tailwindcss';
import createThemes from 'tailwindcss-themer';
import { toTailwindTheme } from './src/lib/utils/theme';
import { DEFAULT_THEME_KEY, themeConfigMapping } from './src/styles/theme';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  presets: [sharedConfig],
  theme: {},
  plugins: [
    createThemes({
      defaultTheme: {
        extend: toTailwindTheme(themeConfigMapping[DEFAULT_THEME_KEY]),
      },
      themes: Object.entries(themeConfigMapping).map(([key, config]) => ({
        name: key,
        extend: toTailwindTheme(config),
      })),
    }),
  ],
};

export default config;
