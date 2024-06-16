import type { ThemeConfig } from '../../types/config.type';

export interface ThemeProviderProps {
  children: React.ReactNode;
  themeConfig: ThemeConfig;
}
