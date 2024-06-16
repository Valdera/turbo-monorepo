import type { ThemeConfig } from '@repo/ui';

export const theme: ThemeConfig = {
  breakpoints: {
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1408px',
  },
  colors: {
    primary: {
      50: '#f3f9ff',
      100: '#e6f3ff',
      200: '#c0e0ff',
      300: '#99ccff',
      400: '#4da6ff',
      500: '#007fff',
      600: '#0073e6',
      700: '#005c99',
      800: '#004573',
      900: '#002b4d',
      950: '#001a33',
    },
    secondary: {
      50: '#f7f3f9',
      100: '#f0e6f3',
      200: '#dbc0e0',
      300: '#c999cc',
      400: '#a64da6',
      500: '#7f007f',
      600: '#730073',
      700: '#5c005c',
      800: '#450045',
      900: '#2b002b',
      950: '#1a001a',
    },
  },
  fontFamily: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
};
