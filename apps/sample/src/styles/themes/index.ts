import type { ThemeMapping } from '@/lib/types';
import breakpointsTheme from './breakpoints';
import { darkColorsTheme, lightColorsTheme } from './colors';
import fontFamilyTheme from './fonts';

export default {
  defaultTheme: 'light',
  fontFamily: fontFamilyTheme,
  breakpoints: breakpointsTheme,
  themes: [
    {
      name: 'Light',
      key: 'light',
      category: 'light',
      colors: lightColorsTheme,
    },
    {
      name: 'Dark',
      key: 'dark',
      category: 'dark',
      colors: darkColorsTheme,
    },
  ],
} as ThemeMapping;
