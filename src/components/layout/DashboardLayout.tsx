import type { ReactNode } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/features/auth";
import { GalleryVerticalEnd, Menu, X } from "lucide-react";

type Props = {
  children: ReactNode;
};

export function DashboardLayout({ children }: Props) {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static
          inset-y-0 left-0
          z-50
          w-60
          bg-white
          border-r border-slate-200
          p-4
          space-y-4
          transform
          transition-transform
          duration-300
          ease-in-out

          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between md:justify-start">
          <div className="flex items-center gap-2 font-semibold">
            <div className="bg-primary text-primary-foreground flex size-7 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            SmartControl
          </div>

          {/* Close (mobile) */}
          <button className="md:hidden" onClick={() => setOpen(false)}>
            <X className="size-5 text-slate-600" />
          </button>
        </div>

        {/* Nav */}
        <nav className="space-y-2 pt-2">
          <button
            className="
              block w-full text-left
              px-3 py-2
              rounded-md
              text-sm
              font-medium
              hover:bg-slate-100
              transition
            "
            onClick={() => setOpen(false)}
          >
            Qurilmalar
          </button>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col md:ml-0">
        {/* Header */}
        <header className="h-14 flex items-center justify-between px-4 border-b border-slate-200 bg-white">
          <div className="flex items-center gap-2">
            {/* Burger */}
            <button className="md:hidden" onClick={() => setOpen(true)}>
              <Menu className="size-5 text-slate-600" />
            </button>

            <p className="text-sm text-slate-500 truncate max-w-[200px] sm:max-w-full">
              <b>{user?.email}</b> – Aqlli uy tizimi
            </p>
          </div>

          <Button size="sm" variant="default" onClick={logout}>
            Chiqish
          </Button>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 sm:p-6 overflow-auto">
          <h1 className="text-lg sm:text-xl font-semibold mb-3">
            Mening Qurilmalarim
          </h1>

          <hr className="mb-4" />

          {children}
        </main>
      </div>
    </div>
  );
}
