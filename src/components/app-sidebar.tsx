"use client";

import { Calendar, GalleryVerticalEnd, LayoutDashboard, User, UserPlus, Users } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "" },
  { icon: Calendar, label: "Appointments", href: "appointments" },
  { icon: UserPlus, label: "Add Doctor", href: "add-doctor" },
  { icon: User, label: "Profile", href: "profile" },
  { icon: Users, label: "Doctor Lists", href: "doctor-lists" },
];

export function AppSidebar() {
  const pathname = useLocation().pathname.split("/").pop();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/admin">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <GalleryVerticalEnd className="size-4 " />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Lucmanm Medical </span>
                  <span className="text-xs text-muted-foreground">v1.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem
              key={item.href}
              className={`${pathname === item.href && "border-r-4 border-r-slate-950"}  font-semibold rounded-none content-center flex justify-center`}
            >
              <SidebarMenuButton asChild tooltip={item.label} className={`${pathname === item.href && "-mr-4"}`}>
                <Link to={`/admin/${item.href}`}>
                  <item.icon className="size-4" />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>{/* You can add footer content here if needed */}</SidebarFooter>
    </Sidebar>
  );
}
