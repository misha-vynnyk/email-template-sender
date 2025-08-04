import { useState, useRef } from "react";
import {
  FormWrapper,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledButton,
  ErrorMessage,
  StyledTitle,
} from "./StyledRegistrationForm";
import { useThemeContext } from "../../../store/ThemeContext/ThemeContext";
import { toast } from "react-toastify";
import { useModal } from "../../../store/ModalContext/ModalContext";

export const RegistrationForm = () => {
  const { themeMode } = useThemeContext();
  const { closeModal, setIsLogin } = useModal();

  const [userEmail, setUserEmail] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [appPassword, setAppPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const inputRefs = {
    userEmail: useRef<HTMLInputElement>(null),
    senderEmail: useRef<HTMLInputElement>(null),
    appPassword: useRef<HTMLInputElement>(null),
  };

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};

    if (!userEmail || !validateEmail(userEmail)) {
      newErrors.userEmail = "Enter a valid user email.";
    }

    if (!senderEmail || !validateEmail(senderEmail)) {
      newErrors.senderEmail = "Enter a valid sender email.";
    }

    if (!appPassword) {
      newErrors.appPassword = "App password is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstErrorKey = Object.keys(newErrors)[0];
      inputRefs[firstErrorKey as keyof typeof inputRefs]?.current?.focus();
      return;
    }

    const formData = {
      userEmail,
      senderEmail,
      appPassword,
      isLogin: true,
    };

    try {
      localStorage.setItem("emailSenderForm", JSON.stringify(formData));
      toast.success("✅ You're all set! Credentials saved.");
      setErrors({});
      setUserEmail("");
      setSenderEmail("");
      setAppPassword("");
      setIsLogin(true);
      closeModal();
    } catch (e) {
      toast.error("❌ Failed to save to LocalStorage");
      console.error(e);
    }
  };

  return (
    <FormWrapper>
      <StyledForm
        onSubmit={handleSubmit}
        $themeMode={themeMode}
      >
        <StyledTitle>Register to Start Sending</StyledTitle>

        <StyledLabel>Email for Login</StyledLabel>
        <StyledInput
          ref={inputRefs.userEmail}
          type='email'
          placeholder='your@email.com'
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        {errors.userEmail && <ErrorMessage>{errors.userEmail}</ErrorMessage>}

        <StyledLabel>Sender Email</StyledLabel>
        <StyledInput
          ref={inputRefs.senderEmail}
          type='email'
          placeholder='sender@gmail.com'
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
        />
        {errors.senderEmail && <ErrorMessage>{errors.senderEmail}</ErrorMessage>}

        <StyledLabel>App Password</StyledLabel>
        <StyledInput
          ref={inputRefs.appPassword}
          type='password'
          placeholder='your-google-app-password'
          value={appPassword}
          onChange={(e) => setAppPassword(e.target.value)}
        />
        {errors.appPassword && <ErrorMessage>{errors.appPassword}</ErrorMessage>}

        <StyledButton
          type='submit'
          $themeMode={themeMode}
        >
          Register
        </StyledButton>
      </StyledForm>
    </FormWrapper>
  );
};
