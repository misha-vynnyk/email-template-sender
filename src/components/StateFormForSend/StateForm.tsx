import { useState, useEffect } from "react";
import { useTemplate } from "../../store/TemplateContext/UseTemplate";
import { StyledStateForm } from "./StyledStateForm";
import { motion, AnimatePresence } from "framer-motion";

// Валідація email
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const StateForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sender, setSender] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const {
    useStorageToggle,
    setUserEmail,
    setSenderEmail,
    setAppPassword,
    areCredentialsValid,
    clearCredentials,
    lastSaved,
  } = useTemplate();

  // Валідація в реальному часі
  useEffect(() => {
    const newErrors: { [key: string]: string } = {};

    if (email && !validateEmail(email)) {
      newErrors.email = "Invalid email format";
    }

    if (sender && !validateEmail(sender)) {
      newErrors.sender = "Invalid email format";
    }

    if (password && password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
  }, [email, sender, password]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Фінальна валідація
    if (Object.keys(errors).length > 0) {
      return;
    }

    const resetFields = () => {
      setEmail("");
      setSender("");
      setPassword("");
    };

    if (email || sender || password) {
      setUserEmail(email);
      setSenderEmail(sender);
      setAppPassword(password);
      resetFields();
    }
  };

  const isFormValid =
    email && sender && password && Object.keys(errors).length === 0;

  return (
    <AnimatePresence mode="wait">
      {useStorageToggle === "state" && (
        <motion.div
          key="popup-form"
          initial={{ opacity: 0, y: -50, scale: 0.6 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.6 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            mass: 0.5,
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transformOrigin: "top center",
          }}
        >
          <StyledStateForm onSubmit={handleSubmit}>
            {areCredentialsValid && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="credentials-status"
                style={{
                  background: "#4CAF50",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "4px",
                  marginBottom: "16px",
                  fontSize: "14px",
                }}
              >
                ✅ Credentials saved{" "}
                {lastSaved && `(${new Date(lastSaved).toLocaleTimeString()})`}
                <button
                  type="button"
                  onClick={clearCredentials}
                  style={{
                    background: "none",
                    border: "none",
                    color: "white",
                    marginLeft: "8px",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  Clear
                </button>
              </motion.div>
            )}

            <label>
              User Email
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={errors.email ? "error" : ""}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </label>

            <label>
              Receiver Email
              <input
                type="email"
                placeholder="receiver@example.com"
                value={sender}
                onChange={(e) => setSender(e.target.value)}
                required
                className={errors.sender ? "error" : ""}
              />
              {errors.sender && (
                <span className="error-message">{errors.sender}</span>
              )}
            </label>

            <label>
              App Password
              <input
                type="password"
                placeholder="App password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={errors.password ? "error" : ""}
              />
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </label>

            <button
              type="submit"
              disabled={!isFormValid}
              style={{
                opacity: isFormValid ? 1 : 0.6,
                cursor: isFormValid ? "pointer" : "not-allowed",
              }}
            >
              Save for one time send
            </button>
          </StyledStateForm>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
