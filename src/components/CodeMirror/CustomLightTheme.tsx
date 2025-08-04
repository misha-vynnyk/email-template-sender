import { EditorView } from "@codemirror/view";
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { tags as t } from "@lezer/highlight";

export const customLightTheme = EditorView.theme(
  {
    "&": {
      backgroundColor: "#FFFFFF",
      color: "#0F172A",
      fontFamily: "'Fira Code', monospace",
      fontSize: "14px",
      borderRadius: "12px",
      border: "1px solid #CBD5E1",
      padding: "12px",
      transition: "background-color 0.3s ease, color 0.3s ease, border 0.3s ease",
    },
    ".cm-editor": {
      backgroundColor: "#FFFFFF",
      transition: "background-color 0.3s ease",
    },
    ".cm-scroller": {
      backgroundColor: "#FFFFFF",
      transition: "background-color 0.3s ease",
    },
    ".cm-content": {
      padding: "8px 0",
      transition: "color 0.3s ease",
    },
    ".cm-gutters": {
      backgroundColor: "#F8FAFC",
      color: "#64748B",
      border: "none",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
    ".cm-cursor": {
      borderLeft: "1.5px solid #9333EA",
      transition: "border-left-color 0.3s ease",
    },
    "&.cm-focused .cm-selectionBackground, ::selection": {
      backgroundColor: "rgba(147, 51, 234, 0.2)",
    },
    "&.cm-focused": {
      outline: "2px solid #9333EA",
      transition: "outline 0.3s ease",
    },
  },
  { dark: false }
);

export const customLightHighlightStyle = syntaxHighlighting(
  HighlightStyle.define([
    { tag: t.keyword, color: "#9333EA", fontWeight: "bold" },
    { tag: t.string, color: "#15803D" },
    { tag: t.comment, color: "#94A3B8", fontStyle: "italic" },
    { tag: t.tagName, color: "#EA580C" },
    { tag: t.attributeName, color: "#0EA5E9" },
  ])
);
