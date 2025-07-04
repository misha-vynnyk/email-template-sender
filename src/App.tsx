import { CodeMirrorComponent } from "./components/CodeMirror/CodeMirror";
import "./App.css";
import { toast } from "react-toastify";
import { useTemplate } from "./context/UseTemplate";

function App() {
  const { editorHtml, subject, track } = useTemplate();

  const handleSendEmail = () => {
    console.log("Sending email with:", { editorHtml, subject, track });
    toast.success("📨 Email sent (simulated)", { autoClose: 2000 });
  };

  return (
    <>
      <CodeMirrorComponent />
      <button onClick={handleSendEmail}>Send Email</button>
    </>
  );
}

export default App;
