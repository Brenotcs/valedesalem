import { useEffect } from "react";
import { useTheme } from "./ThemeContext";

export function useApplyTheme() {
  const { theme } = useTheme();
  useEffect(() => {
    document.body.classList.remove("theme-dark", "theme-light");
    document.body.classList.add(theme === "light" ? "theme-light" : "theme-dark");
  }, [theme]);
}
