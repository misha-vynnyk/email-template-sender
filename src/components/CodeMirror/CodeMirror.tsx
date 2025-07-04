import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";

export const CodeMirrorComponent = () => {
  return (
    <div>
      CodeMirror
      <CodeMirror
        value='<h1>Hello Email</h1>'
        height='800px'
        width="600px"
        extensions={[html()]}
      />
    </div>
  );
};
