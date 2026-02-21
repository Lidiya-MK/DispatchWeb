import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Package, Users, Truck, Shield, Eye, EyeOff } from "lucide-react";
import dispatchLogo from "@/assets/dispatch-logo.png";

const roleConfig: Record<string, { label: string; icon: React.ComponentType<{ className?: string }>; dashboard: string; color: string }> = {
  merchant: { label: "Merchant", icon: Package, dashboard: "/merchant", color: "text-primary" },
  supervisor: { label: "Courier Supervisor", icon: Users, dashboard: "/supervisor", color: "text-info" },
  driver: { label: "Driver", icon: Truck, dashboard: "/driver", color: "text-success" },
  admin: { label: "Administrator", icon: Shield, dashboard: "/admin", color: "text-accent" },
};

export default function LoginPage() {
  const { role = "merchant" } = useParams<{ role: string }>();
  const navigate = useNavigate();
  const config = roleConfig[role] || roleConfig.merchant;
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with auth backend
    navigate(config.dashboard);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left panel */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary/20 via-background to-accent/10 items-center justify-center p-12">
        <div className="max-w-md text-center">
          <img src={dispatchLogo.src} alt="Dispatch" className="h-24 w-auto mx-auto mb-8" />
          <h2 className="text-2xl font-bold text-foreground mb-3">Welcome back to Dispatch</h2>
          <p className="text-muted-foreground">
            Unified logistics platform connecting merchants and courier providers in Addis Ababa.
          </p>
        </div>
      </div>

      {/* Right panel - form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <Link to="/" className="lg:hidden flex justify-center mb-8">
            <img src={dispatchLogo.src} alt="Dispatch" className="h-16 w-auto" />
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center`}>
              <config.icon className={`h-5 w-5 ${config.color}`} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">{config.label} Login</h1>
              <p className="text-xs text-muted-foreground">Sign in to your {config.label.toLowerCase()} account</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>

          {role === "merchant" && (
            <p className="text-center text-sm text-muted-foreground mt-6">
              Don't have an account?{" "}
              <Link to="/register" className="text-primary hover:underline font-medium">
                Sign up
              </Link>
            </p>
          )}

          {/* Role switcher */}
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground mb-3 text-center">Login as a different role</p>
            <div className="flex justify-center gap-2">
              {Object.entries(roleConfig)
                .filter(([key]) => key !== role)
                .map(([key, cfg]) => (
                  <Link key={key} to={`/login/${key}`}>
                    <Button variant="ghost" size="sm" className="gap-1.5 text-xs">
                      <cfg.icon className="h-3.5 w-3.5" />
                      {cfg.label}
                    </Button>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
