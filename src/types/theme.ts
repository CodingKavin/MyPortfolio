export type ThemeId = "terminal" | "blueprint" | "daylight";

export interface ThemeContextValue {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
}
