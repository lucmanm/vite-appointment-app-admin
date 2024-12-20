import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./app";
import { AdminContextProvider } from "./context-provider/AdminProvider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AdminContextProvider>
        <App />
        <ToastContainer position="top-center"/>
      </AdminContextProvider>
    </BrowserRouter>
  </StrictMode>
);
