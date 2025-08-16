"use client";

import { useEffect } from 'react';
import { useThemeStore } from '@/stores/theme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((s) => s.theme);
  const direction = useThemeStore((s) => s.direction);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    root.setAttribute('dir', direction);
  }, [theme, direction]);

  return <>{children}</>;
}