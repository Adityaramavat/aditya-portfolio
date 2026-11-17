import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

const ThemeContext = createContext(null);

const STORAGE_KEY = "portfolio-theme-preference";

function getInitialPreference() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (["system", "light", "dark"].includes(saved)) {
      return saved;
    }
  } catch (error) {
    console.warn("Theme preference could not be loaded.");
  }

  return "system";
}

export function ThemeProvider({ children }) {
  const [preference, setPreference] = useState(
    getInitialPreference
  );

  const [resolvedTheme, setResolvedTheme] = useState("light");

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
     const updateTheme = () => {
      const theme =
        preference === "system"
          ? media.matches
            ? "dark"
            : "light"
          : preference;

      document.documentElement.setAttribute(
        "data-theme",
        theme
      );

      setResolvedTheme(theme);
    };

     updateTheme();

    try {
      localStorage.setItem(STORAGE_KEY, preference);
    } catch (error) {
      console.warn("Theme preference could not be saved.");
    }

    if (preference === "system") {
      if (media.addEventListener) {
        media.addEventListener("change", updateTheme);

        return () => {
          media.removeEventListener("change", updateTheme);
        };
      }
       media.addListener(updateTheme);

      return () => media.removeListener(updateTheme);
    }
  }, [preference]);

  const value = useMemo(
    () => ({
      preference,
      resolvedTheme,
      setPreference
    }),
    [preference, resolvedTheme]
  );
 return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
}