import { useEffect, useState } from "react";
import { ModalContext } from "./ModalContext";

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    try {
      const savedString = localStorage.getItem("emailSenderForm");
      const savedLogin = savedString ? JSON.parse(savedString) : null;
      setIsLogin(savedLogin?.isLogin === true);
    } catch {
      console.warn("⚠️ Failed to parse login info:");
      setIsLogin(false);
    }
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, isLogin, setIsLogin }}>
      {children}
    </ModalContext.Provider>
  );
};
