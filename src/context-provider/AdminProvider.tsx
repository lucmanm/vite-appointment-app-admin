import { AdminContext, AdminContextType } from "@/hook/userAdminContext";
import { useState, useEffect } from "react";

export const AdminContextProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize aToken from localStorage
  const [aToken, setaToken] = useState<string>(() => localStorage.getItem("aToken") || "");

  const backendUri = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    if (!aToken) {
      localStorage.clear();
    }
  }, [aToken]);

  const value: AdminContextType = {
    backendUri,
    aToken,
    setaToken,
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};
