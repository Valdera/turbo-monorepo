import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { toMantineTheme } from '../../lib/theme/utils';
import type { ThemeProviderProps } from './ThemeProvider.type';

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  themeConfig,
}) => {
  return (
    <MantineProvider theme={toMantineTheme(themeConfig)}>
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;
