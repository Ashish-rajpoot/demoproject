import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="flex">
      <AppSidebar />

      <main className="grow pl-3">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
