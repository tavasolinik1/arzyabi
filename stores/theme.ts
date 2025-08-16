import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type AppTheme = 'light' | 'dark';
export type Direction = 'ltr' | 'rtl';

interface ThemeState {
  theme: AppTheme;
  direction: Direction;
  setTheme: (theme: AppTheme) => void;
  toggleTheme: () => void;
  setDirection: (dir: Direction) => void;
  toggleDirection: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'light',
      direction: 'ltr',
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set({ theme: get().theme === 'dark' ? 'light' : 'dark' }),
      setDirection: (direction) => set({ direction }),
      toggleDirection: () => set({ direction: get().direction === 'rtl' ? 'ltr' : 'rtl' }),
    }),
    {
      name: 'theme-store',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ theme: state.theme, direction: state.direction }),
    }
  )
);