import type {
  ColorsConfig,
  ThemeConfig,
  ThemeEntry,
  ThemeMapping,
} from '@repo/theme';
import defaultBreakpointsTheme from './breakpoints/default-breakpoints';
import darkColorsTheme from './colors/dark-colors';
import lightColorsTheme from './colors/light-colors';
import defaultFontFamilyTheme from './fonts/default-fonts';

const withDefaultTheme = (colors: ColorsConfig): ThemeConfig => {
  return {
    fontFamily: defaultFontFamilyTheme,
    breakpoints: defaultBreakpointsTheme,
    colors,
  };
};

export const LIGHT_THEME_ENTRY: ThemeEntry = {
  name: 'Light',
  key: 'light',
  category: 'light',
  config: withDefaultTheme(lightColorsTheme),
};

export const DARK_THEME_ENTRY: ThemeEntry = {
  name: 'Dark',
  key: 'dark',
  category: 'dark',
  config: withDefaultTheme(darkColorsTheme),
};

export default {
  defaultTheme: LIGHT_THEME_ENTRY,
  themes: [LIGHT_THEME_ENTRY, DARK_THEME_ENTRY],
} as ThemeMapping;
