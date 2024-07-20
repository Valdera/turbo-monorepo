import { createContext } from 'react';
import { ThemeManager } from '@/libs/manager';
import type { ThemeEntry } from '@/libs/types';

export default createContext<{
  theme: string;
  themeEntries: ThemeEntry[];
  setTheme: (theme: string) => void;
}>({
  themeEntries: [],
  theme: ThemeManager.getDefaultThemeKey(),
  setTheme: () => {
    // do nothing
  },
});
