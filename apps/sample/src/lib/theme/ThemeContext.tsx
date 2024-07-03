'use client';

import { createContext } from 'react';
import themeManager from './ThemeManager';

export default createContext<{
  theme: string;
  setTheme: (theme: string) => void;
}>({
  theme: themeManager.getDefaultThemeKey(),
  setTheme: () => {
    // do nothing
  },
});
