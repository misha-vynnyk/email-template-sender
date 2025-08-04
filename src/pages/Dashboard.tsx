import { CodeMirrorComponent } from "../components/CodeMirror/CodeMirrorComponent";
import { Header } from "../components/Header/Header";
// import { Sidebar } from "../components/Sidebar/Sidebar";
import { StateForm } from "../components/StateFormForSend/StateForm";
import { useTemplate } from "../store/TemplateContext/UseTemplate";
import { StyledDashboard } from "./StyledDashboard";
import { motion } from "framer-motion";

export const Dashboard = () => {
  const { useStorageToggle } = useTemplate();

  return (
    <StyledDashboard>
      <Header />
      <motion.div
        layout
        transition={{ duration: 0.4 }}
      >
        {useStorageToggle === "state" && <StateForm />}
      </motion.div>
      <motion.div layout>
        <CodeMirrorComponent />
      </motion.div>
      <motion.div layout>
        {/* <Sidebar /> */}
      </motion.div>
    </StyledDashboard>
  );
};
