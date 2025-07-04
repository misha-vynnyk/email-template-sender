import { useState, type ReactNode } from "react";
import { TemplateContext } from "./UseTemplate";

export const TemplateProvider = ({ children }: { children: ReactNode }) => {
  const [editorHtml, setEditorHtml] = useState("<h1>Hello email!</h1>");
  const [subject, setSubject] = useState("Untitled Email");
  const [track, setTrack] = useState(false);

  return (
    <TemplateContext.Provider
      value={{ editorHtml, setEditorHtml, subject, setSubject, track, setTrack }}
    >
      {children}
    </TemplateContext.Provider>
  );
};
