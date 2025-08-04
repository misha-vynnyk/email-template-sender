import { Button } from "../Button/Button";
import { SvgThemeToggle } from "../ThemeSwitcher/SvgThemeToggle";
import { StyledCheckboxWrapper, StyledHeader } from "./StyledHeader";
import { useTemplate } from "../../store/TemplateContext/UseTemplate";
import { useThemeContext } from "../../store/ThemeContext/ThemeContext";
import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { useState } from "react";
import { BurgerIcon } from "../Sidebar/StyledSidebar";
import { Sidebar } from "../Sidebar/Sidebar";

export const Header = () => {
  const { sendEmail, loading, useStorageToggle, setUseStorageToggle } = useTemplate();
  const { themeMode } = useThemeContext();

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);
  return (
    <StyledHeader $themeMode={themeMode}>
      <Link to={"/"}>
        <Logo></Logo>
      </Link>
      <BurgerIcon onClick={toggleSidebar}>☰</BurgerIcon>
      <Button
        onClick={sendEmail}
        disabled={loading}
      >
        {loading ? (
          <div className='three-body'>
            <div className='three-body__dot'></div>
            <div className='three-body__dot'></div>
            <div className='three-body__dot'></div>
          </div>
        ) : (
          "Send Email"
        )}
      </Button>
      <StyledCheckboxWrapper $themeMode={themeMode}>
        <input
          type='radio'
          name='plan'
          value={"localStorage"}
          checked={useStorageToggle === "localStorage"}
          onChange={(e) => setUseStorageToggle(e.target.value)}
          id='glass-silver'
        />
        <label htmlFor='glass-silver'>LocalStorage</label>

        <input
          type='radio'
          name='plan'
          value={"env"}
          checked={useStorageToggle === "env"}
          onChange={(e) => setUseStorageToggle(e.target.value)}
          id='glass-gold'
        />
        <label htmlFor='glass-gold'>.env File</label>

        <input
          type='radio'
          name='plan'
          value={"state"}
          checked={useStorageToggle === "state"}
          onChange={(e) => setUseStorageToggle(e.target.value)}
          id='glass-platinum'
        />
        <label htmlFor='glass-platinum'>Use State</label>

        <div className='glass-glider'></div>
      </StyledCheckboxWrapper>
      <SvgThemeToggle />

      <Sidebar
        closeSidebar={closeSidebar}
        isSidebarOpen={isSidebarOpen}
      />
    </StyledHeader>
  );
};
