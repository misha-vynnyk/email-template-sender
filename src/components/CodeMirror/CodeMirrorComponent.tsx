import CodeMirror, { type Extension } from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { useTemplate } from "../../store/TemplateContext/UseTemplate";
import { StyledCodeMirror } from "./StyledCodeMirror";
import { customLightHighlightStyle, customLightTheme } from "./CustomLightTheme";
import { customDarkTheme, customDarkHighlightStyle } from "./CustomDarkTheme";
import { useThemeContext } from "../../store/ThemeContext/ThemeContext";

export const CodeMirrorComponent = () => {
  const { editorHtml, setEditorHtml } = useTemplate();
  const {checked} = useThemeContext();
  const extensions: Extension[] = [html()];

  if (checked) {
    extensions.push(customDarkTheme, customDarkHighlightStyle);
  } else {
    extensions.push(customLightTheme, customLightHighlightStyle);
  }

  return (
    <StyledCodeMirror>
      <CodeMirror
        value={editorHtml}
        onChange={(value) => setEditorHtml(value)}
        height='600px'
        width='100%'
        extensions={extensions}
      />
    </StyledCodeMirror>
  );
};
