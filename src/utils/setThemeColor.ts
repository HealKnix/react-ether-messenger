export const setThemeColor = (color: string | null | undefined) =>
  document
    .querySelector('html')
    ?.setAttribute('data-theme-color', color ?? 'default-accent-color');
