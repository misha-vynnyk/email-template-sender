import { createContext, useContext } from "react";

type TemplateContextType = {
  editorHtml: string;
  setEditorHtml: (val: string) => void;
  subject: string;
  setSubject: (val: string) => void;
  track: boolean;
  setTrack: (val: boolean) => void;
};

export const TemplateContext = createContext<TemplateContextType | undefined>(undefined);

export const useTemplate = () => {
  const context = useContext(TemplateContext);
  if (!context) throw new Error("useTemplate must be used within TemplateProvider");
  return context;
};
