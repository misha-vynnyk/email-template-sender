// Email валідація
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// HTML валідація
export const validateHTML = (html: string): boolean => {
  if (!html || typeof html !== "string") return false;
  if (html.trim().length === 0) return false;
  if (html.length > 50000) return false; // Обмеження розміру
  return true;
};

// Subject валідація
export const validateSubject = (subject: string): boolean => {
  if (!subject || typeof subject !== "string") return false;
  if (subject.trim().length === 0) return false;
  if (subject.length > 200) return false; // Обмеження довжини
  return true;
};

// Password валідація
export const validatePassword = (password: string): boolean => {
  if (!password || typeof password !== "string") return false;
  if (password.length < 6) return false;
  return true;
};

// Комплексна валідація форми
export const validateEmailForm = (data: {
  userEmail: string;
  senderEmail: string;
  appPassword: string;
  subject: string;
  html: string;
}): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!validateEmail(data.userEmail)) {
    errors.push("Invalid user email format");
  }

  if (!validateEmail(data.senderEmail)) {
    errors.push("Invalid sender email format");
  }

  if (!validatePassword(data.appPassword)) {
    errors.push("Password must be at least 6 characters");
  }

  if (!validateSubject(data.subject)) {
    errors.push("Subject is required and must be less than 200 characters");
  }

  if (!validateHTML(data.html)) {
    errors.push("HTML content is required and must be less than 50KB");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
