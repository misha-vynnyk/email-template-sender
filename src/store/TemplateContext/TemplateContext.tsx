import {
  useEffect,
  useMemo,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { TemplateContext } from "./UseTemplate";
import { toast } from "react-toastify";

const emailUserFromEnv = import.meta.env.VITE_EMAIL_USER || "";
const senderEmailFromEnv = import.meta.env.VITE_DESTINATION_EMAIL_USER || "";
const passUserFromEnv = import.meta.env.VITE_EMAIL_PASS || "";

// Валідація email
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Валідація HTML
const validateHTML = (html: string): boolean => {
  return html.trim().length > 0 && html.length < 50000;
};

export const TemplateProvider = ({ children }: { children: ReactNode }) => {
  const [editorHtml, setEditorHtml] = useState("<h1>Hello email!</h1>");
  const [subject, setSubject] = useState("Untitled Email");
  const [track, setTrack] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverStatus, setServerStatus] = useState<'checking' | 'online' | 'offline'>('checking');

  const [userEmail, setUserEmail] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [appPassword, setAppPassword] = useState("");

  const [useStorageToggle, setUseStorageToggle] = useState("localStorage");
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  // Перевірка стану сервера
  const checkServerStatus = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:3001/api/health');
      setServerStatus(response.ok ? 'online' : 'offline');
    } catch {
      setServerStatus('offline');
    }
  }, []);

  // Перевірка сервера при завантаженні
  useEffect(() => {
    checkServerStatus();
    
    // Перевірка кожні 30 секунд
    const interval = setInterval(checkServerStatus, 30000);
    return () => clearInterval(interval);
  }, [checkServerStatus]);

  // === Load credentials only once on mount or toggle ===
  useEffect(() => {
    if (useStorageToggle === "localStorage") {
      const savedRaw = localStorage.getItem("emailSenderForm");

      if (!savedRaw) {
        toast.warn("⚠️ No data in LocalStorage.");
        return;
      }

      try {
        const saved = JSON.parse(savedRaw);
        if (!saved.userEmail || !saved.senderEmail || !saved.appPassword) {
          toast.warn("⚠️ LocalStorage data is incomplete.");
        }

        setUserEmail(saved.userEmail ?? "");
        setSenderEmail(saved.senderEmail ?? "");
        setAppPassword(saved.appPassword ?? "");
      } catch {
        toast.error("❌ Failed to parse LocalStorage data.");
      }
    }

    if (useStorageToggle === "env") {
      setUserEmail(emailUserFromEnv);
      setSenderEmail(senderEmailFromEnv);
      setAppPassword(passUserFromEnv);
    }
  }, [useStorageToggle]);

  // Автозбереження в localStorage
  useEffect(() => {
    if (
      useStorageToggle === "localStorage" &&
      (userEmail || senderEmail || appPassword)
    ) {
      const dataToSave = {
        userEmail,
        senderEmail,
        appPassword,
        lastSaved: new Date().toISOString(),
      };
      localStorage.setItem("emailSenderForm", JSON.stringify(dataToSave));
      setLastSaved(new Date());
    }
  }, [userEmail, senderEmail, appPassword, useStorageToggle]);

  const isReadyToSend = useMemo(() => {
    return subject.trim() !== "" && validateHTML(editorHtml);
  }, [subject, editorHtml]);

  const areCredentialsValid = useMemo(() => {
    return (
      validateEmail(userEmail) &&
      validateEmail(senderEmail) &&
      appPassword.length > 0
    );
  }, [userEmail, senderEmail, appPassword]);

  const sendEmail = useCallback(async () => {
    if (loading) return;

    // ⛔️ Fast optimistic validation before anything else
    if (!isReadyToSend) {
      if (!subject.trim()) toast.warning("Subject is required.");
      if (!validateHTML(editorHtml)) toast.warning("Email content cannot be empty or too large.");
      return;
    }

    if (!areCredentialsValid) {
      toast.error("❌ Email credentials are missing or invalid.");
      return;
    }

    try {
      setLoading(true);

      // Перевірка доступності сервера
      const serverUrl = "http://localhost:3001";
      
      // Спочатку перевіряємо health endpoint
      try {
        const healthCheck = await fetch(`${serverUrl}/api/health`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        
        if (!healthCheck.ok) {
          throw new Error('Server is not responding properly');
        }
      } catch {
        throw new Error('Server is not running. Please start the server with: cd server && npm run dev');
      }

      const res = await fetch(`${serverUrl}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          html: editorHtml,
          subject,
          userEmail: userEmail,
          senderEmail: senderEmail,
          appPassword: appPassword,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || `Server error ${res.status}`);
      }

      const data = await res.json();
      console.log("✅ Success:", data);
      toast.success("📨 Email sent!");
    } catch (error) {
      console.error("❌ Error sending:", error);
      
      let errorMessage = "❌ Email send failed";
      
      if (error instanceof Error) {
        if (error.message.includes('Failed to fetch') || error.message.includes('net::ERR_CONNECTION_REFUSED')) {
          errorMessage = "❌ Cannot connect to server. Please ensure the server is running on port 3001.";
        } else if (error.message.includes('Server is not running')) {
          errorMessage = error.message;
        } else {
          errorMessage = error.message;
        }
      }
      
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [loading, isReadyToSend, areCredentialsValid, editorHtml, subject, userEmail, senderEmail, appPassword]);

  // Функція для очищення даних
  const clearCredentials = useCallback(() => {
    setUserEmail("");
    setSenderEmail("");
    setAppPassword("");
    localStorage.removeItem("emailSenderForm");
    toast.info("🧹 Credentials cleared");
  }, []);

  return (
    <TemplateContext.Provider
      value={{
        editorHtml,
        setEditorHtml,
        subject,
        setSubject,
        track,
        setTrack,
        loading,
        setLoading,
        sendEmail,
        useStorageToggle,
        setUseStorageToggle,
        setUserEmail,
        setSenderEmail,
        setAppPassword,
        clearCredentials,
        isReadyToSend,
        areCredentialsValid,
        lastSaved,
        serverStatus,
        checkServerStatus,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
};
