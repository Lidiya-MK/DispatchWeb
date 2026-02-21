import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Package, MapPin, Clock, User } from "lucide-react";

interface MobileLayoutProps {
  children: ReactNode;
  title: string;
  showNav?: boolean;
}

const navItems = [
  { label: "Deliveries", href: "/driver", icon: Package },
  { label: "Map", href: "/driver/map", icon: MapPin },
  { label: "History", href: "/driver/history", icon: Clock },
  { label: "Profile", href: "/driver/profile", icon: User },
];

export function MobileLayout({ children, title, showNav = true }: MobileLayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto">
      {/* Header */}
      <header className="sticky top-0 z-40 h-14 bg-primary text-primary-foreground flex items-center justify-center px-4">
        <h1 className="text-lg font-semibold">{title}</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto pb-20">
        {children}
      </main>

      {/* Bottom Navigation */}
      {showNav && (
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-card border-t border-border h-16 flex items-center justify-around px-2 z-50">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-colors",
                  isActive
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <item.icon className={cn("h-5 w-5", isActive && "animate-scale-in")} />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      )}
    </div>
  );
}
