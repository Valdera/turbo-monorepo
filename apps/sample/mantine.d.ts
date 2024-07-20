import type { DefaultMantineColor, MantineColorsTuple } from '@mantine/core';

type ExtendedCustomColors = 'primary' | 'secondary' | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeOther {
    colors: {
      background: string;
      foreground: string;
      cardBackground: string;
      menuBackground: string;
      menuItemBackground: string;
      menuItemActiveBackground: string;
      inputBackground: string;
    };
  }

  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}
