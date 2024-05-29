import { create } from 'zustand';

interface AccentColorThemeState {
  color: string;
  setColor: (color: string) => void;
}

export const useAccentColorTheme = create<AccentColorThemeState>()(
  (set, state) => ({
    color: localStorage.getItem('accent-color-theme') ?? '#5643D0',
    setColor: (color) => {
      set({ color });
      localStorage.setItem('accent-color-theme', color);
      document
        .querySelector('body')
        ?.setAttribute(
          'style',
          `--accent-color: ${state().color}; --text-accent-color: color-mix(in srgb, ${state().color} 10%, white 100%)`,
        );
    },
  }),
);
