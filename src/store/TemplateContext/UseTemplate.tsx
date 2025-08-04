import { createContext, useContext } from "react";

interface TemplateContextType {
  editorHtml: string;
  setEditorHtml: (html: string) => void;
  subject: string;
  setSubject: (subject: string) => void;
  track: boolean;
  setTrack: (track: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  sendEmail: () => Promise<void>;
  useStorageToggle: string;
  setUseStorageToggle: (toggle: string) => void;
  setUserEmail: (email: string) => void;
  setSenderEmail: (email: string) => void;
  setAppPassword: (password: string) => void;
  clearCredentials: () => void;
  isReadyToSend: boolean;
  areCredentialsValid: boolean;
  lastSaved: Date | null;
  serverStatus: 'checking' | 'online' | 'offline';
  checkServerStatus: () => Promise<void>;
}

export const TemplateContext = createContext<TemplateContextType | undefined>(
  undefined
);

export const useTemplate = (): TemplateContextType => {
  const context = useContext(TemplateContext);
  if (!context) {
    throw new Error("useTemplate must be used within a TemplateProvider");
  }
  return context;
};
