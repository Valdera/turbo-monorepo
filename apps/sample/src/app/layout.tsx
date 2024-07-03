import { ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import DataThemeScript from '@/components/provider/DataThemeScript/DataThemeScript';
import ThemeProvider from '@/lib/theme/ThemeProvider';
import '@/styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Turborepo',
  description: 'Generated by create turbo',
};

const RootLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html lang={'en'}>
      <head>
        <meta
          content={
            'minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
          }
          name={'viewport'}
        />
        <ColorSchemeScript
          defaultColorScheme={'light'}
          nonce={'8IBTHwOdqNKAWeKl7plt8g=='}
        />
        <DataThemeScript
          defaultTheme={'light'}
          localStorageKey={'app-theme'}
          nonce={'8IBTHwOaqNKAWeKl7plt8g=='}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
