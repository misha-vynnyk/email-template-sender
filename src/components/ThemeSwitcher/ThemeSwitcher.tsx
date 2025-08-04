import { useThemeContext } from "../../store/ThemeContext/ThemeContext";
import { Fill, Icon, IconPart, ThemeWrapper, Toggle, ToggleWrap } from "./StyledThemeSwitcher";

export const ThemeSwitcher = () => {
  const { toggleTheme, checked, setChecked } = useThemeContext();

  const handleChange = () => {
    toggleTheme();
    setChecked((prev) => !prev);
  };

  return (
    <ThemeWrapper>
      <ToggleWrap>
        <Toggle
          id="theme-toggle"
          type="checkbox"
          role="switch"
          onChange={handleChange}
        />
        <Fill style={{ transform: checked ? "translateX(0)" : "translateX(-100%)" }} />
        <Icon style={{ transform: checked ? "translateX(3em)" : "translateX(0)" }}>
          {[...Array(9)].map((_, i) => (
            <IconPart
              key={i}
              style={{
                ...(i === 0
                  ? {
                      boxShadow: checked
                        ? "0.2em -0.2em 0 0.2em hsl(0,0%,100%) inset"
                        : "0.4em -0.4em 0 0.5em hsl(0,0%,100%) inset",
                      transform: checked ? "scale(1) translate(0.2em, -0.2em)" : "scale(0.5)",
                      top: checked ? "0.2em" : "calc(50% - 0.5em)",
                      left: checked ? "-0.2em" : "calc(50% - 0.5em)",
                    }
                  : {
                      opacity: checked ? 0 : 1,
                      transform: `rotate(${45 * (i - 1)}deg) translateY(0.5em)`,
                      top: "50%",
                      left: "calc(50% - 0.05em)",
                      width: "0.1em",
                      height: "0.2em",
                      borderRadius: "0.05em",
                      backgroundColor: "hsl(0,0%,100%)",
                      transformOrigin: "50% 0",
                    }),
              }}
            />
          ))}
        </Icon>
      </ToggleWrap>
    </ThemeWrapper>
  );
};
