import { type MantineThemeOverride, createTheme, em } from '@mantine/core';
import type { CustomThemeConfig } from 'tailwindcss/types/config';
import type { ThemeConfig, ThemeEntry, ThemeMapping } from '@/libs/types';

class ThemeManager {
  private static DEFAULT_THEME_KEY = 'default';

  private defaultThemeEntry: ThemeEntry;

  private themeEntryMap: Map<string, ThemeEntry>;

  constructor(themeMaping: ThemeMapping) {
    this.defaultThemeEntry = themeMaping.defaultTheme;
    this.themeEntryMap = new Map(
      themeMaping.themes.map((entry) => [entry.key, entry])
    );
  }

  public static getDefaultThemeKey(): string {
    return this.DEFAULT_THEME_KEY;
  }

  public getTheme(theme: string): ThemeConfig {
    return this.getThemeEntry(theme).config;
  }

  public getThemeCategory(theme: string): 'dark' | 'light' {
    return this.getThemeEntry(theme).category;
  }

  public getThemeEntries(): ThemeEntry[] {
    return Array.from(this.themeEntryMap.values());
  }

  public getMantineTheme(theme: string): MantineThemeOverride {
    return this.toMantineTheme(this.getTheme(theme));
  }

  public getTailwindTheme(theme: string): Partial<CustomThemeConfig> {
    return this.toTailwindTheme(this.getTheme(theme));
  }

  private getThemeEntry(theme: string): ThemeEntry {
    if (theme === ThemeManager.DEFAULT_THEME_KEY) {
      return this.defaultThemeEntry;
    }

    const entry = this.themeEntryMap.get(theme);
    if (entry === undefined) {
      throw new Error(`Theme ${theme} not found`);
    }

    return entry;
  }

  /**
   * Convert standard theme configuration to mantine theme configuration
   *
   * @param theme - theme configuration
   * @returns mantine theme configuration
   */
  private toMantineTheme({
    colors,
    breakpoints,
    fontFamily,
  }: ThemeConfig): MantineThemeOverride {
    return createTheme({
      colors: {
        primary: [
          colors.primary[50],
          colors.primary[100],
          colors.primary[200],
          colors.primary[300],
          colors.primary[400],
          colors.primary[500],
          colors.primary[600],
          colors.primary[700],
          colors.primary[800],
          colors.primary[900],
          colors.primary[950],
        ],
        secondary: [
          colors.secondary[50],
          colors.secondary[100],
          colors.secondary[200],
          colors.secondary[300],
          colors.secondary[400],
          colors.secondary[500],
          colors.secondary[600],
          colors.secondary[700],
          colors.secondary[800],
          colors.secondary[900],
          colors.secondary[950],
        ],
      },
      primaryColor: 'primary',
      headings: {
        fontFamily: fontFamily.heading,
      },
      fontFamily: fontFamily.body,
      breakpoints: {
        xs: em(breakpoints.xs),
        sm: em(breakpoints.sm),
        md: em(breakpoints.md),
        lg: em(breakpoints.lg),
        xl: em(breakpoints.xl),
      },
      other: {
        colors: {
          background: colors.background,
          foreground: colors.foreground,
          cardBackground: colors.cardBackground,
          menuBackground: colors.menuBackground,
          menuItemBackground: colors.menuItemBackground,
          menuItemActiveBackground: colors.menuItemActiveBackground,
          inputBackground: colors.inputBackground,
        },
      },
    });
  }

  /**
   * Convert standard theme configuration to Tailwind theme configuration
   *
   * @param theme - theme configuration
   * @returns tailwind theme configuration
   */
  private toTailwindTheme({
    colors,
    breakpoints,
    fontFamily,
  }: ThemeConfig): Partial<CustomThemeConfig> {
    return {
      colors: {
        primary: {
          50: colors.primary[50],
          100: colors.primary[100],
          200: colors.primary[200],
          300: colors.primary[300],
          400: colors.primary[400],
          500: colors.primary[500],
          600: colors.primary[600],
          700: colors.primary[700],
          800: colors.primary[800],
          900: colors.primary[900],
          950: colors.primary[950],
        },
        secondary: {
          50: colors.secondary[50],
          100: colors.secondary[100],
          200: colors.secondary[200],
          300: colors.secondary[300],
          400: colors.secondary[400],
          500: colors.secondary[500],
          600: colors.secondary[600],
          700: colors.secondary[700],
          800: colors.secondary[800],
          900: colors.secondary[900],
          950: colors.secondary[950],
        },
        background: colors.background,
        foreground: colors.foreground,
        'card-background': colors.cardBackground,
        'menu-background': colors.menuBackground,
        'menu-item-background': colors.menuItemBackground,
        'menu-item-active-background': colors.menuItemActiveBackground,
        'input-background': colors.inputBackground,
      },
      screens: {
        xs: breakpoints.xs,
        sm: breakpoints.sm,
        md: breakpoints.md,
        lg: breakpoints.lg,
        xl: breakpoints.xl,
      },
      fontFamily: {
        heading: fontFamily.heading,
        body: fontFamily.body,
      },
    };
  }
}

export default ThemeManager;
