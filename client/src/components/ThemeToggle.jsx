
import { Monitor, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {

  const {
    preference,
    resolvedTheme,
    setPreference
  } = useTheme();

  const icons = {
    system: Monitor,
    light: Sun,
    dark: Moon
  };

  const Icon = icons[preference];

  const nextPreference = {
    system: "light",
    light: "dark",
    dark: "system"
  };

  const handleThemeChange = () => {
    setPreference(nextPreference[preference]);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={handleThemeChange}
      title={`Theme: ${preference}. Currently displaying ${resolvedTheme} mode. Click to change.`}
      aria-label={`Theme preference: ${preference}. Click to change theme.`}
    >
      <Icon size={19} />
    </button>
  );
}

export default ThemeToggle;
