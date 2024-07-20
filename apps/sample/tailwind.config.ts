import sharedConfig from '@repo/tailwind-config';
import type { ThemeEntry } from '@repo/theme';
import { ThemeManager } from '@repo/theme';
import type { Config } from 'tailwindcss';
import createThemes from 'tailwindcss-themer';
import themes from './src/styles/themes';

const themeManager = new ThemeManager(themes);

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
          ThemeManager.getDefaultThemeKey()
        ),
      },
      themes: themeManager.getThemeEntries().map((entry: ThemeEntry) => ({
        name: `${entry.key}-theme`,
        selectors: [`[data-theme="${entry.key}"]`],
        extend: themeManager.getTailwindTheme(entry.key),
      })),
    }),
  ],
};

export default config;
