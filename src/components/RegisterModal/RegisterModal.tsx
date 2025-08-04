import { useModal } from "../../store/ModalContext/ModalContext";
import { RegistrationForm } from "../Landing/RegistrationForm/RegistrationForm";
import { ModalOverlay, ModalWrapper, ModalContent, CloseButton } from "./StyledRegisterModal";

export const RegisterModal = () => {
  const { isOpen, closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={closeModal}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <ModalContent>
          <CloseButton onClick={closeModal}>x</CloseButton>
          <RegistrationForm />
        </ModalContent>
      </ModalWrapper>
    </ModalOverlay>
  );
};
