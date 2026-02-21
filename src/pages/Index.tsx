import { Link } from "react-router-dom";
import { Package, Truck, BarChart3, Shield, ArrowRight, Users, Zap, Globe, MapPin, Key, Star, CheckCircle, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import dispatchLogo from "@/assets/dispatch-logo.png";

const features = [
  {
    icon: Package,
    title: "Shipment Management",
    description: "Create, track, and manage shipments across multiple courier providers from one unified platform.",
  },
  {
    icon: Truck,
    title: "Fleet Coordination",
    description: "Real-time driver tracking, route management, and delivery confirmation workflows.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Compare courier performance, delivery times, and success rates with rich analytics dashboards.",
  },
  {
    icon: Key,
    title: "Secure API Integration",
    description: "RESTful API with key management for seamless e-commerce platform integration.",
  },
  {
    icon: MapPin,
    title: "Location Intelligence",
    description: "Landmark-based location resolution tailored for Addis Ababa's unique addressing system.",
  },
  {
    icon: Star,
    title: "Courier Ratings",
    description: "Rate and compare courier providers based on real delivery performance data.",
  },
];

const roles = [
  {
    title: "Merchant",
    description: "Create shipments, compare couriers, track deliveries, manage API keys, and view analytics.",
    href: "/login/merchant",
    icon: Package,
    gradient: "from-primary to-accent",
  },
  {
    title: "Courier Supervisor",
    description: "Manage drivers, assign shipments, monitor fleet performance, and track payments.",
    href: "/login/supervisor",
    icon: Users,
    gradient: "from-info to-primary",
  },
  {
    title: "Driver",
    description: "View assigned deliveries, update statuses, navigate to destinations, and submit proof of delivery.",
    href: "/login/driver",
    icon: Truck,
    gradient: "from-success to-info",
  },
  {
    title: "Administrator",
    description: "Oversee the platform — manage couriers, merchants, and system-wide metrics.",
    href: "/login/admin",
    icon: Shield,
    gradient: "from-accent to-destructive",
  },
];

const stats = [
  { label: "Couriers", value: "24+", icon: Truck },
  { label: "Merchants", value: "1,800+", icon: Package },
  { label: "Deliveries", value: "45K+", icon: CheckCircle },
  { label: "Avg Time", value: "32min", icon: Clock },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar (floating - translucent curvy pill) */}
      <nav className="sticky top-4 z-50 pointer-events-none">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mx-auto w-full max-w-5xl pointer-events-auto bg-card/70 backdrop-blur-lg border border-border/30 rounded-full px-3 py-1 flex items-center gap-4 shadow-md">
            <Link to="/" className="flex items-center gap-3">
              <img src={dispatchLogo.src} alt="Dispatch" className="h-20 w-auto" />
            </Link>

            <nav className="hidden md:flex items-center gap-6 ml-4">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">Features</a>
              <a href="#how" className="text-sm text-muted-foreground hover:text-foreground">How it works</a>
              <a href="#roles" className="text-sm text-muted-foreground hover:text-foreground">Roles</a>
              <a href="#stats" className="text-sm text-muted-foreground hover:text-foreground">Stats</a>
            </nav>

            <div className="flex-1" />

            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#"
                role="button"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-2 rounded-full shadow hover:shadow-lg transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d="M4 4v16l16-8z" />
                </svg>
                <span className="text-sm">Download Driver App</span>
              </a>

              <Link to="/register">
                <Button variant="outline" size="sm">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden -mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/15" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-8 animate-fade-in">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Built for Addis Ababa's logistics ecosystem</span>
          </div>
          
          <div className="flex justify-center mb-10 animate-scale-in">
            <img src={dispatchLogo.src} alt="Dispatch" className="h-36 md:h-44 w-auto drop-shadow-2xl mt-6" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight mb-6 max-w-4xl mx-auto animate-slide-up">
            Unified Logistics for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Merchants
            </span>{" "}
            &{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Couriers
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in">
            Dispatch is the middleware that bridges merchants with courier service providers — simplifying shipment creation, courier selection, and delivery tracking through one powerful platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Link to="/register">
              <Button size="lg" className="gap-2 text-base px-10 h-14 text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
                Get Started <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login/merchant">
              <Button variant="outline" size="lg" className="text-base px-10 h-14 text-lg">
                Log In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Live Stats Bar */}
      <section id="stats" style={{ scrollMarginTop: '5rem' }} className="relative -mt-8 z-10 max-w-4xl mx-auto px-4">
        <div className="bg-card/90 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ scrollMarginTop: '5rem' }} className="py-24 mt-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">Platform Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Everything you need to manage deliveries</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">From shipment creation to proof of delivery — Dispatch handles the full lifecycle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="bg-card rounded-2xl border border-border p-7 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                  <f.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" style={{ scrollMarginTop: '5rem' }} className="py-24 bg-card/50 border-y border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-accent tracking-wider uppercase mb-3">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get started in minutes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Register Your Business", desc: "Create a merchant account with your business details and get instant access." },
              { step: "2", title: "Choose Your Courier", desc: "Browse available courier providers, compare pricing and performance metrics." },
              { step: "3", title: "Start Shipping", desc: "Create shipments, track deliveries in real-time, and analyze your logistics." },
            ].map((item) => (
              <div key={item.step} className="text-center relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/20">
                  <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role-based access */}
      <section id="roles" style={{ scrollMarginTop: '5rem' }} className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">Role-Based Access</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Built for every role in the chain</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">Select your role to access your dedicated dashboard.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {roles.map((role) => (
              <Link
                key={role.href}
                to={role.href}
                className="group bg-card rounded-2xl border border-border p-7 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${role.gradient} flex items-center justify-center shadow-lg`}>
                    <role.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{role.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{role.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
            <Globe className="h-10 w-10 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to streamline your logistics?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join Dispatch and connect your business to Addis Ababa's courier network today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="gap-2 text-base px-10 h-14 text-lg shadow-lg shadow-primary/25">
                Create Merchant Account <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login/supervisor">
              <Button variant="outline" size="lg" className="text-base px-8 h-14">
                Courier Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 bg-card/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img src={dispatchLogo} alt="Dispatch" className="h-12 w-auto" />
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link to="/login/merchant" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Merchant</Link>
              <Link to="/login/supervisor" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Supervisor</Link>
              <Link to="/login/driver" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Driver</Link>
              <Link to="/login/admin" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Admin</Link>
              <Link to="/register" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Register</Link>
            </div>
            <p className="text-xs text-muted-foreground">© 2026 Dispatch. Built for Addis Ababa.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
