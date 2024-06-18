import type { ColorsConfig, ThemeConfig } from '@/lib/utils/theme';
import { darkColorsTheme, lightColorsTheme } from './colors';
import { defaultTheme } from './default-theme';

/**
 * Create a theme config with default fallback values
 *
 * @param colors colors configuration
 * @returns theme configuration
 */
const withDefaultFallback = (
  colors: ColorsConfig,
  fallbackThemeConfig: ThemeConfig
): ThemeConfig => {
  return {
    fontFamily: fallbackThemeConfig.fontFamily,
    breakpoints: fallbackThemeConfig.breakpoints,
    colors,
  };
};

export const DEFAULT_THEME_KEY = 'default';

export type AvailableTheme = 'default' | 'light' | 'dark';

export const themeConfigMapping: Record<string, ThemeConfig> = {
  default: defaultTheme,
  light: withDefaultFallback(lightColorsTheme, defaultTheme),
  dark: withDefaultFallback(darkColorsTheme, defaultTheme),
};
