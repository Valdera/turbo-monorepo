import sharedConfig from '@repo/tailwind-config';
import type { Config } from 'tailwindcss';
import createThemes from 'tailwindcss-themer';
import { themeManager } from './src/lib/theme';

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
        extend: themeManager.getTailwindTheme(
          themeManager.getDefaultThemeKey()
        ),
      },
      themes: themeManager.getThemeEntries().map((entry) => ({
        name: `${entry.key}-theme`,
        selectors: [`[data-theme="${entry.key}"]`],
        extend: themeManager.getTailwindTheme(entry.key),
      })),
    }),
  ],
};

export default config;
