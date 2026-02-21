import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  Truck,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  Building2,
  Store,
  UserCog,
  Key,
  MapPin,
  DollarSign,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import dispatchLogo from "@/assets/dispatch-logo.png";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface DashboardLayoutProps {
  children: ReactNode;
  role: "admin" | "supervisor" | "merchant" | "driver";
  title: string;
}

const navConfigs: Record<string, NavItem[]> = {
  admin: [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Couriers", href: "/admin/couriers", icon: Building2 },
    { label: "Merchants", href: "/admin/merchants", icon: Store },
    { label: "System Metrics", href: "/admin/metrics", icon: BarChart3 },
    { label: "Settings", href: "/admin/settings", icon: Settings },
  ],
  supervisor: [
    { label: "Dashboard", href: "/supervisor", icon: LayoutDashboard },
    { label: "Shipments", href: "/supervisor/shipments", icon: Package },
    { label: "Drivers", href: "/supervisor/drivers", icon: Users },
    { label: "Fleet Map", href: "/supervisor/fleet", icon: MapPin },
    { label: "Payments", href: "/supervisor/payments", icon: DollarSign },
    { label: "Analytics", href: "/supervisor/analytics", icon: BarChart3 },
  ],
  merchant: [
    { label: "Dashboard", href: "/merchant", icon: LayoutDashboard },
    { label: "Shipments", href: "/merchant/shipments", icon: Package },
    { label: "Create Shipment", href: "/merchant/shipments/new", icon: Truck },
    { label: "Couriers", href: "/merchant/couriers", icon: Building2 },
    { label: "Analytics", href: "/merchant/analytics", icon: BarChart3 },
    { label: "API Keys", href: "/merchant/api-keys", icon: Key },
    { label: "Profile", href: "/merchant/profile", icon: UserCog },
  ],
  driver: [],
};

export function DashboardLayout({ children, role, title }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navItems = navConfigs[role];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden lg:flex flex-col bg-sidebar text-sidebar-foreground transition-all duration-300 ease-in-out border-r border-sidebar-border",
          sidebarOpen ? "w-56" : "w-16"
        )}
      >
        <div className="flex items-center justify-between h-12 px-3 border-b border-sidebar-border">
          {sidebarOpen && (
              <Link to="/" className="flex items-center gap-2">
              <img src={dispatchLogo.src} alt="Dispatch" className="h-16 w-auto" />
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-sidebar-foreground hover:bg-sidebar-accent h-7 w-7"
          >
            <ChevronLeft className={cn("h-4 w-4 transition-transform", !sidebarOpen && "rotate-180")} />
          </Button>
        </div>

        <nav className="flex-1 py-2 px-2 space-y-0.5">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "nav-link",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-primary"
                    : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                )}
              >
                <item.icon className="h-4 w-4 flex-shrink-0" />
                {sidebarOpen && <span className="text-sm">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-2 border-t border-sidebar-border">
          <Link
            to="/"
            className={cn(
              "nav-link text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
            )}
          >
            <LogOut className="h-4 w-4 flex-shrink-0" />
            {sidebarOpen && <span className="text-sm">Sign Out</span>}
          </Link>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-foreground/50" onClick={() => setMobileOpen(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-56 bg-sidebar text-sidebar-foreground animate-slide-in-right">
              <div className="flex items-center justify-between h-12 px-3 border-b border-sidebar-border">
                <Link to="/" className="flex items-center gap-2">
                <img src={dispatchLogo.src} alt="Dispatch" className="h-16 w-auto" />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileOpen(false)}
                className="text-sidebar-foreground h-7 w-7"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <nav className="flex-1 py-2 px-2 space-y-0.5">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "nav-link",
                      isActive
                        ? "bg-sidebar-accent text-sidebar-primary"
                        : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="text-sm">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="h-12 border-b border-border bg-card flex items-center justify-between px-3 lg:px-4">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-7 w-7"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-4 w-4" />
            </Button>
            <h1 className="text-base font-semibold text-foreground">{title}</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-semibold">
              {role[0].toUpperCase()}
            </div>
          </div>
        </header>

        <main className="flex-1 p-3 lg:p-4 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
