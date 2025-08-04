import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { TemplateProvider } from "./store/TemplateContext/TemplateContext";
import { ThemeProviderWrapper } from "./store/ThemeProviderWrapper";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/Landing/LandingPage";
import { Dashboard } from "./pages/Dashboard";
import { RegisterModal } from "./components/RegisterModal/RegisterModal";
import { ModalProvider } from "./store/ModalContext/ModalProviderWrapper";
import "react-toastify/dist/ReactToastify.css";

export const Root = () => (
  <React.StrictMode>
    <Router>
      <TemplateProvider>
        <ThemeProviderWrapper>
          <ModalProvider>
            <Routes>
              <Route
                path='/'
                element={<App />}
              >
                <Route
                  index
                  element={<LandingPage />}
                />
                <Route
                  path='/editor'
                  element={<Dashboard />}
                />
              </Route>
            </Routes>
            <RegisterModal />
          </ModalProvider>
        </ThemeProviderWrapper>
      </TemplateProvider>
    </Router>
  </React.StrictMode>
);
