import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useThemeContext } from "./store/ThemeContext/ThemeContext";
import { Outlet } from "react-router-dom";

function App() {
  const { themeMode } = useThemeContext();

  return (
    <>
      <ToastContainer theme={themeMode} />
      <Outlet />
    </>
  );
}

export default App;
