const THEME_TOKEN = "@theme";
export const getThemeFromLocalStore = () => {
  const theme = localStorage.getItem(THEME_TOKEN);
  return theme;
};
export const setThemeToLocalStore = (theme: string) => {
  localStorage.setItem(THEME_TOKEN, theme);
};
