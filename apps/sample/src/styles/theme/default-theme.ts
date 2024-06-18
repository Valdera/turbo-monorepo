import type {
  BreakpointsConfig,
  ColorsConfig,
  FontFamilyConfig,
  ThemeConfig,
} from '@/lib/utils/theme';
import { darkColorsTheme } from './colors';

// Set default theme to dark theme
export const defaultColorsTheme: ColorsConfig = darkColorsTheme;

export const defaultBreakpointsTheme: BreakpointsConfig = {
  xs: '576px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1408px',
};

export const defaultFontFamilyTheme: FontFamilyConfig = {
  heading: 'Inter, sans-serif',
  body: 'Inter, sans-serif',
};

export const defaultTheme: ThemeConfig = {
  fontFamily: defaultFontFamilyTheme,
  breakpoints: defaultBreakpointsTheme,
  colors: defaultColorsTheme,
};
