'use client';

import { MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import type { RefObject } from 'react';
import { useEffect } from 'react';
import ThemeContext from './ThemeContext';
import themeManager from './ThemeManager';

const ThemeProvider: React.FC<{
  children: React.ReactNode;
  bodyRef?: RefObject<HTMLBodyElement>;
}> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage({
    key: 'app-theme',
    getInitialValueInEffect: true,
    defaultValue: themeManager.getDefaultThemeKey(),
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', `${theme}-theme`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MantineProvider
        defaultColorScheme={themeManager.getThemeCategory(theme)}
        theme={themeManager.getMantineTheme(theme)}
        withCssVariables={false}
        withGlobalClasses={false}
      >
        {children}
      </MantineProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
