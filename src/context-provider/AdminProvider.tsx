import { AdminContext, AdminContextType } from "@/hook/userAdminContext";
import { useState, useEffect } from "react";

export const AdminContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [aToken, setaToken] = useState<string | "">("");

  const backendUri = import.meta.env.VITE_BACKEND_URL;

  // Initialize aToken using useEffect to ensure it runs on the client-side
  useEffect(() => {
    const token = localStorage.getItem("aToken");
    if (token) {
      setaToken(token);
    } else {
      localStorage.clear();
    }
  }, []);

  const value: AdminContextType = {
    backendUri,
    aToken,
    setaToken,
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};
