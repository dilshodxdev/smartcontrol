import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/features/auth";
import { GalleryVerticalEnd } from "lucide-react";

type Props = {
  children: ReactNode;
};

export function DashboardLayout({ children }: Props) {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-60 p-4 space-y-4 border-r border-slate-300">
        <div className="flex justify-center gap-2 md:justify-start">
          <div className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            SmartControl
          </div>
        </div>

        <nav className="space-y-2">
          {/* <button className="block w-full text-left px-3 py-2 rounded hover:bg-slate-200">
            Dashboard
          </button> */}{" "}
          {/* Kengaytirish uchun */}
          <button className="block w-full text-left px-3 py-2 rounded hover:bg-slate-200">
            Qurilmalar
          </button>
          {/* <button className="block w-full text-left px-3 py-2 rounded hover:bg-slate-200">
            Sozlash
          </button> */}
          {/* Kengaytirish uchun */}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-14  flex items-center justify-between px-4 border-b border-slate-300">
          <p className="text-sm text-slate-500">
            <b>{user?.email}</b> - Aqlli uy boshqaruv tizimi
          </p>
          <Button size="sm" variant="default" onClick={logout}>
            Chiqish
          </Button>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          <h1 className="text-xl font-semibold mb-4">Mening Qurilmalarim</h1>
          <hr className="mb-4" />
          {children}
        </main>
      </div>
    </div>
  );
}
