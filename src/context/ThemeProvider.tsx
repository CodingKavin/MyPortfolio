import { useState, useEffect, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";
import type { ThemeId } from "../types";

const THEME_IDS: ThemeId[] = ["terminal", "blueprint", "daylight"];

const isThemeId = (value: string): value is ThemeId =>
  (THEME_IDS as string[]).includes(value);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeId>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme && isThemeId(savedTheme) ? savedTheme : "terminal";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
