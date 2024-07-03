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
  /**
   * Primary color
   */
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

  /**
   * Secondary color
   */
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

  /**
   * Background color
   */
  background: string;

  /**
   * Foreground color
   */
  foreground: string;

  /**
   * Background color of the card component
   */
  cardBackground: string;

  /**
   * Background color of the menu component
   */
  menuBackground: string;

  /**
   * Background color of the menu item
   */
  menuItemBackground: string;

  /**
   * Background color of the menu item when active
   */
  menuItemActiveBackground: string;

  /**
   * Background color of the input component
   */
  inputBackground: string;
}

export interface FontFamilyConfig {
  heading: string;
  body: string;
}

export interface ThemeEntry {
  name: string;
  key: string;
  category: 'dark' | 'light';
  colors: ColorsConfig;
}

export interface ThemeMapping {
  defaultTheme: string;
  themes: ThemeEntry[];
  fontFamily: FontFamilyConfig;
  breakpoints: BreakpointsConfig;
}
