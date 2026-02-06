import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/features/auth";

type Props = {
  children: ReactNode;
};

export function DashboardLayout({ children }: Props) {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-60 p-4 space-y-4 border-r border-slate-300">
        <h2 className="text-xl font-bold text-emerald-400">SmartControl</h2>

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

          <Button size="sm" variant="destructive" onClick={logout}>
            Logout
          </Button>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
