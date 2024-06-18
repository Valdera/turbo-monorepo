'use client';

import { MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { toMantineTheme } from '@/lib/utils/theme';
import type {
  AvailableTheme} from '@/styles/theme';
import {
  DEFAULT_THEME_KEY,
  themeConfigMapping,
} from '@/styles/theme';
import ThemeContext from './ThemeContext';

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useLocalStorage<AvailableTheme>({
    key: 'theme',
    defaultValue: DEFAULT_THEME_KEY,
  });

  const themeConfig = themeConfigMapping[theme];

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MantineProvider
        defaultColorScheme={"auto"}
        theme={toMantineTheme(themeConfig)}
      >
        {children}
      </MantineProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
