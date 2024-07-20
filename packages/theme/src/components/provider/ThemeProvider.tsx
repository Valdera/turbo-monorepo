import { MantineProvider, useMantineColorScheme } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { useEffect } from 'react';
import { ThemeManager } from '@/libs/manager';
import type { ThemeMapping } from '@/libs/types';
import ThemeContext from './ThemeContext';

const ThemeProvider: React.FC<{
  children: React.ReactNode;
  themeMapping: ThemeMapping;
}> = ({ children, themeMapping }) => {
  const themeManager = new ThemeManager(themeMapping);

  const [theme, setTheme] = useLocalStorage({
    key: 'app-theme',
    getInitialValueInEffect: true,
    defaultValue: ThemeManager.getDefaultThemeKey(),
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <MantineProvider
      defaultColorScheme={themeManager.getThemeCategory(theme)}
      theme={themeManager.getMantineTheme(theme)}
    >
      <ThemeContextProviderWrapper
        setTheme={setTheme}
        theme={theme}
        themeManager={themeManager}
      >
        {children}
      </ThemeContextProviderWrapper>
    </MantineProvider>
  );
};

const ThemeContextProviderWrapper: React.FC<{
  children: React.ReactNode;
  theme: string;
  setTheme: (theme: string) => void;
  themeManager: ThemeManager;
}> = ({ children, theme, setTheme, themeManager }) => {
  const { setColorScheme } = useMantineColorScheme();

  const handleSetTheme = (udpatedTheme: string): void => {
    setTheme(udpatedTheme);
    setColorScheme(themeManager.getThemeCategory(udpatedTheme));
  };

  return (
    <ThemeContext.Provider
      value={{
        themeEntries: themeManager.getThemeEntries(),
        theme,
        setTheme: handleSetTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
