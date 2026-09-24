import { createContext, useContext, useEffect, useState, useCallback } from "react";

const AppContext = createContext(null);

const read = (key, fallback) => {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
};
const write = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage unavailable — ignore */
  }
};

const defaultLang = () =>
  typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
const defaultTheme = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";

export function AppProvider({ children }) {
  const [lang, setLang] = useState(() => read("lang", defaultLang()));
  const [theme, setTheme] = useState(() => read("theme", defaultTheme()));

  useEffect(() => {
    document.documentElement.lang = lang;
    write("lang", lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    write("theme", theme);
  }, [theme]);

  // t({ en, es }) → string in the active language
  const t = useCallback((obj) => (obj && typeof obj === "object" ? obj[lang] ?? obj.en : obj), [lang]);

  return (
    <AppContext.Provider
      value={{
        lang,
        t,
        toggleLang: () => setLang((l) => (l === "en" ? "es" : "en")),
        theme,
        toggleTheme: () => setTheme((th) => (th === "dark" ? "light" : "dark")),
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
