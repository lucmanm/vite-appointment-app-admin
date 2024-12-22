import { AppSidebar } from "@/components/app-sidebar";
import { Outlet, useNavigate } from "react-router-dom";

import Header from "@/components/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useAdminContext } from "@/hook/userAdminContext";
import { useEffect } from "react";

const AdminLayout = () => {
  const { aToken } = useAdminContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!aToken) {
      console.log(aToken);

      navigate("/login");
    }
  }, [aToken, navigate]);

  if (!aToken) {
    return null; // Optionally, you can show a loader or placeholder here
  }
    return (
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Header />
          <section className="md:p-4">
            <Outlet />
          </section>
        </SidebarInset>
      </SidebarProvider>
    );
};

export default AdminLayout;
