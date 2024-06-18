import type { MantineThemeOverride } from '@mantine/core';
import { createTheme } from '@mantine/core';
import type { CustomThemeConfig } from 'tailwindcss/types/config';

export interface ThemeConfig {
  fontFamily: FontFamilyConfig;
  breakpoints: BreakpointsConfig;
  colors: ColorsConfig;
}

export interface BreakpointsConfig {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface ColorsConfig {
  primary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  secondary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  background: string;
  foreground: string;
}

export interface FontFamilyConfig {
  heading: string;
  body: string;
}

/**
 * Convert standard theme configuration to mantine theme configuration
 *
 * @param theme theme configuration
 * @returns mantine theme configuration
 */
export const toMantineTheme = ({
  colors,
  breakpoints,
  fontFamily,
}: ThemeConfig): MantineThemeOverride => {
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
      xs: pxToEm(breakpoints.xs),
      sm: pxToEm(breakpoints.sm),
      md: pxToEm(breakpoints.md),
      lg: pxToEm(breakpoints.lg),
      xl: pxToEm(breakpoints.xl),
    },
    other: {
      colors: {
        background: colors.background,
        foreground: colors.foreground,
      },
    },
  });
};

/**
 * Convert standard theme configuration to Tailwind theme configuration
 *
 * @param theme
 * @returns tailwind theme configuration
 */
export const toTailwindTheme = ({
  colors,
  breakpoints,
  fontFamily,
}: ThemeConfig): Partial<CustomThemeConfig> => {
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
};

const pxToEm = (px: string, base = 16): string => {
  // Extract the numeric value from the pixel string
  const pxValue = parseFloat(px);

  // Convert pixels to ems
  const emValue = pxValue / base;

  // Return the value in em units
  return `${emValue}em`;
};
