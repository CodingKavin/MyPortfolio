import { useTheme } from "../../context/ThemeContext";
import Typography from "../Typography/Typography";
import type { ThemeId } from "../../types";
import "./ThemePicker.scss";

const THEME_OPTIONS: { id: ThemeId; label: string; hint: string; swatch: string }[] = [
  {
    id: "terminal",
    label: "Terminal",
    hint: "dev / automation",
    swatch: "linear-gradient(135deg, #0a0f0d 50%, #4fe0a8 50%)",
  },
  {
    id: "blueprint",
    label: "Blueprint",
    hint: "engineering roots",
    swatch: "linear-gradient(135deg, #0a1f2c 50%, #7fd8ff 50%)",
  },
  {
    id: "daylight",
    label: "Daylight",
    hint: "read-fast, recruiters",
    swatch: "linear-gradient(135deg, #faf9f6 50%, #1f4fbf 50%)",
  },
];

type ThemePickerVariant = "rail" | "tablet" | "mobile";

interface ThemePickerProps {
  variant: ThemePickerVariant;
}

const ThemePicker = ({ variant }: ThemePickerProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`theme-picker theme-picker--${variant}`}>
      {variant === "rail" && (
        <Typography variant="h4" className="theme-picker__label">
          Theme
        </Typography>
      )}
      <div className="theme-picker__options">
        {THEME_OPTIONS.map((option) => (
          <button
            key={option.id}
            type="button"
            className="theme-picker__option"
            aria-pressed={theme === option.id}
            onClick={() => setTheme(option.id)}
          >
            <span
              className="theme-picker__swatch"
              style={{ background: option.swatch }}
            />
            <span className="theme-picker__text">
              <Typography variant="p3" className="theme-picker__option-label">
                {option.label}
              </Typography>
              {variant === "rail" && (
                <Typography variant="p3" className="theme-picker__hint">
                  {option.hint}
                </Typography>
              )}
            </span>
            {variant !== "mobile" && (
              <span className="theme-picker__mark">
                {theme === option.id ? "●" : ""}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemePicker;
