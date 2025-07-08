'use client';

import { ThemeProvider } from 'next-themes';
import type { ReactNode, JSX } from 'react';

interface NextThemeProviderProps {
  children: ReactNode;
}

const NextThemeProvider = ({ children }: NextThemeProviderProps): JSX.Element => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default NextThemeProvider;