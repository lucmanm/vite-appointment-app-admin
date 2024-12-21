import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";

import Header from "@/components/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const AdminLayout = () => {
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
