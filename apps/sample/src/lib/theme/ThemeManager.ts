import { type MantineThemeOverride, createTheme, em } from '@mantine/core';
import type { CustomThemeConfig } from 'tailwindcss/types/config';
import type {
  BreakpointsConfig,
  ColorsConfig,
  FontFamilyConfig,
  ThemeConfig,
  ThemeEntry,
  ThemeMapping,
} from '@/lib/types';
import mapping from '../../styles/themes';

class ThemeManager {
  private defaultThemeKey: string;

  private themeConfigMapping: Map<string, ThemeConfig>;

  private themeCategoryMapping: Map<string, 'dark' | 'light'>;

  private themeEntries: ThemeEntry[];

  constructor(themeMaping: ThemeMapping) {
    this.themeConfigMapping = new Map(
      themeMaping.themes.map((entry) => [
        entry.key,
        this.withDefaultTheme(
          entry.colors,
          themeMaping.fontFamily,
          themeMaping.breakpoints
        ),
      ])
    );

    this.themeCategoryMapping = new Map(
      themeMaping.themes.map((entry) => [entry.key, entry.category])
    );

    this.themeEntries = themeMaping.themes;
    this.defaultThemeKey = themeMaping.defaultTheme;
  }

  public getDefaultThemeKey(): string {
    return this.defaultThemeKey;
  }

  public getTheme(theme: string): ThemeConfig {
    const config = this.themeConfigMapping.get(theme);
    if (config === undefined) {
      throw new Error(`Theme ${theme} not found`);
    }

    return config;
  }

  public getThemeCategory(theme: string): 'dark' | 'light' {
    const category = this.themeCategoryMapping.get(theme);
    if (category === undefined) {
      throw new Error(`Theme ${theme} not found`);
    }

    return category;
  }

  public getThemeEntries(): ThemeEntry[] {
    return this.themeEntries;
  }

  public getMantineTheme(theme: string): MantineThemeOverride {
    return this.toMantineTheme(this.getTheme(theme));
  }

  public getTailwindTheme(theme: string): Partial<CustomThemeConfig> {
    return this.toTailwindTheme(this.getTheme(theme));
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

  /**
   * Create a theme config with default font family and breakpoints
   *
   * @param colors - colors configuration
   * @returns theme configuration
   */
  private withDefaultTheme(
    colors: ColorsConfig,
    defaultFontFamily: FontFamilyConfig,
    defaultBreakpoints: BreakpointsConfig
  ): ThemeConfig {
    return {
      fontFamily: defaultFontFamily,
      breakpoints: defaultBreakpoints,
      colors,
    };
  }
}

export default new ThemeManager(mapping);
