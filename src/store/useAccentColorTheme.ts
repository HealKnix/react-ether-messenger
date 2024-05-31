import { create } from 'zustand';
import { RadioFormValue } from '@/components/RadioForm/RadioForm';
import { setThemeColor } from '@/utils/setThemeColor';

interface AccentColorThemeState {
  color: string;
  colorVariants: readonly RadioFormValue[];
  setColor: (color: string) => void;
}

export const useAccentColorTheme = create<AccentColorThemeState>()((set) => ({
  color: localStorage.getItem('accent-color-theme') ?? 'default-accent-color',
  colorVariants: [
    {
      name: 'Фиолетовый',
      value: 'default-accent-color',
    },
    {
      name: 'Жёлтый',
      value: 'yellow-accent-color',
    },
    {
      name: 'Зелёный',
      value: 'green-accent-color',
    },
    {
      name: 'Синий',
      value: 'blue-accent-color',
    },
    {
      name: 'Красный',
      value: 'red-accent-color',
    },
    {
      name: 'Розовый',
      value: 'pink-accent-color',
    },
  ],
  setColor: (color) => {
    set({ color });
    localStorage.setItem('accent-color-theme', color);
    setThemeColor(color);
  },
}));
