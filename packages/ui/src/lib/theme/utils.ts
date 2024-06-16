import type { MantineThemeOverride } from '@mantine/core';
import { createTheme } from '@mantine/core';
import type { Config } from 'tailwindcss';
import type { ThemeConfig } from '../../types/config.type';

export const toMantineTheme = (
  themeConfig: ThemeConfig
): MantineThemeOverride => {
  return createTheme({
    colors: {
      primary: [
        themeConfig.colors.primary[50],
        themeConfig.colors.primary[100],
        themeConfig.colors.primary[200],
        themeConfig.colors.primary[300],
        themeConfig.colors.primary[400],
        themeConfig.colors.primary[500],
        themeConfig.colors.primary[600],
        themeConfig.colors.primary[700],
        themeConfig.colors.primary[800],
        themeConfig.colors.primary[900],
        themeConfig.colors.primary[950],
      ],
      secondary: [
        themeConfig.colors.secondary[50],
        themeConfig.colors.secondary[100],
        themeConfig.colors.secondary[200],
        themeConfig.colors.secondary[300],
        themeConfig.colors.secondary[400],
        themeConfig.colors.secondary[500],
        themeConfig.colors.secondary[600],
        themeConfig.colors.secondary[700],
        themeConfig.colors.secondary[800],
        themeConfig.colors.secondary[900],
        themeConfig.colors.secondary[950],
      ],
    },
    headings: {
      fontFamily: themeConfig.fontFamily.heading,
    },
    fontFamily: themeConfig.fontFamily.body,
    breakpoints: {
      xs: pxToEm(themeConfig.breakpoints.xs),
      sm: pxToEm(themeConfig.breakpoints.sm),
      md: pxToEm(themeConfig.breakpoints.md),
      lg: pxToEm(themeConfig.breakpoints.lg),
      xl: pxToEm(themeConfig.breakpoints.xl),
    },
  });
};

export const toTailwindTheme = (
  themeConfig: ThemeConfig
): Pick<Config, 'theme'> => {
  return {
    theme: {
      colors: {
        primary: {
          50: themeConfig.colors.primary[50],
          100: themeConfig.colors.primary[100],
          200: themeConfig.colors.primary[200],
          300: themeConfig.colors.primary[300],
          400: themeConfig.colors.primary[400],
          500: themeConfig.colors.primary[500],
          600: themeConfig.colors.primary[600],
          700: themeConfig.colors.primary[700],
          800: themeConfig.colors.primary[800],
          900: themeConfig.colors.primary[900],
          950: themeConfig.colors.primary[950],
        },
        secondary: {
          50: themeConfig.colors.secondary[50],
          100: themeConfig.colors.secondary[100],
          200: themeConfig.colors.secondary[200],
          300: themeConfig.colors.secondary[300],
          400: themeConfig.colors.secondary[400],
          500: themeConfig.colors.secondary[500],
          600: themeConfig.colors.secondary[600],
          700: themeConfig.colors.secondary[700],
          800: themeConfig.colors.secondary[800],
          900: themeConfig.colors.secondary[900],
          950: themeConfig.colors.secondary[950],
        },
      },
      fontFamily: {
        heading: themeConfig.fontFamily.heading,
        body: themeConfig.fontFamily.body,
      },
      extend: {
        screens: {
          xs: themeConfig.breakpoints.xs,
          sm: themeConfig.breakpoints.sm,
          md: themeConfig.breakpoints.md,
          lg: themeConfig.breakpoints.lg,
          xl: themeConfig.breakpoints.xl,
        },
      },
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
