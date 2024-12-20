import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";

import Header from "@/components/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header/>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminLayout;
