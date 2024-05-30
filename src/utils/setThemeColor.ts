export const setThemeColor = (color: string) =>
  document.querySelector('html')?.setAttribute('data-theme-color', color);
