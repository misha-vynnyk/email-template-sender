import { useTemplate } from "../../store/TemplateContext/UseTemplate";
import { useThemeContext } from "../../store/ThemeContext/ThemeContext";
import { StyledCheckboxWrapper } from "../Header/StyledHeader";
import { SidebarMenu, StyledSidebar } from "./StyledSidebar";

interface Props {
  closeSidebar: () => void;
  isSidebarOpen: boolean;
}

export const Sidebar = ({ closeSidebar, isSidebarOpen }: Props) => {
  const { useStorageToggle, setUseStorageToggle } = useTemplate();
  const { themeMode } = useThemeContext();
  return (
    <>
      {isSidebarOpen && (
        <StyledSidebar onClick={closeSidebar}>
          <SidebarMenu onClick={(e) => e.stopPropagation()}>
            <button onClick={closeSidebar}>❌</button>

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
          </SidebarMenu>
        </StyledSidebar>
      )}
    </>
  );
};
