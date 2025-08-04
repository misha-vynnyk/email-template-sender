import { EditorView } from "@codemirror/view";
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { tags as t } from "@lezer/highlight";

export const customDarkTheme = EditorView.theme(
  {
    "&": {
      backgroundColor: "#0F172A !important",
      color: "#F8FAFC",
      fontFamily: "'Fira Code', monospace",
      fontSize: "14px",
      borderRadius: "12px",
      border: "1px solid rgba(248, 250, 252, 0.1)",
      padding: "12px",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
    ".cm-content": {
      padding: "8px 0",
      transition: "color 0.3s ease",
    },
    ".cm-gutters": {
      backgroundColor: "#1E293B",
      color: "#94A3B8",
      border: "none",
    },
    ".cm-cursor": {
      borderLeft: "1.5px solid #A3E635",
    },
    "&.cm-focused .cm-selectionBackground, ::selection": {
      backgroundColor: "rgba(163, 230, 53, 0.2)",
    },
    "&.cm-focused": {
      outline: "2px solid #A3E635",
    },
    ".cm-editor": {
      backgroundColor: "#0F172A",
      transition: "background-color 0.3s ease",
    },
    ".cm-scroller": {
      backgroundColor: "#0F172A",
      transition: "background-color 0.3s ease",
    },
  },
  { dark: true }
);

export const customDarkHighlightStyle = syntaxHighlighting(
  HighlightStyle.define([
    { tag: t.keyword, color: "#A3E635", fontWeight: "bold" },
    { tag: t.string, color: "#4ADE80" },
    { tag: t.comment, color: "#64748B", fontStyle: "italic" },
    { tag: t.tagName, color: "#38BDF8" },
    { tag: t.attributeName, color: "#F472B6" },
  ])
);
