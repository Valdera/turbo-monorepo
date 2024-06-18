'use client';

import { createContext } from 'react';
import type { AvailableTheme } from '@/styles/theme';

export default createContext<{
  theme: AvailableTheme;
  setTheme: (theme: AvailableTheme) => void;
} | null>(null);
