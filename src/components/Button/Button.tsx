import { useThemeContext } from "../../store/ThemeContext/ThemeContext";
import { StyledButton } from "./StyledButton";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button = ({ children, onClick, disabled }: ButtonProps) => {
  const { themeMode } = useThemeContext();
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      $themeMode={themeMode}
      $size={"small"}
    >
      {children}
    </StyledButton>
  );
};
