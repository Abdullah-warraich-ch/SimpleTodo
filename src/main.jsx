import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TaskProvider } from "./Context/TaskContext.jsx";
import { LoginContextProvider } from "./Context/LoginContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginContextProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </LoginContextProvider>
  </StrictMode>
);
