import { DashboardLayout } from "@/components/DashboardLayout";
import { MapPin, Truck, Package, Clock } from "lucide-react";

const drivers = [
  { id: "1", name: "Yohannes A.", lat: 9.0245, lng: 38.7523, status: "delivering", currentShipment: "DSP-001234", destination: "Kazanchis" },
  { id: "2", name: "Meron T.", lat: 9.0127, lng: 38.7612, status: "delivering", currentShipment: "DSP-001235", destination: "Piassa" },
  { id: "3", name: "Biruk G.", lat: 9.0312, lng: 38.7489, status: "available", currentShipment: null, destination: null },
  { id: "4", name: "Helen A.", lat: 9.0089, lng: 38.7701, status: "delivering", currentShipment: "DSP-001236", destination: "Mexico" },
];

export default function SupervisorFleet() {
  return (
    <DashboardLayout role="supervisor" title="Fleet Map">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-card rounded-xl border border-border p-4">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-success" />
              <span className="text-sm text-muted-foreground">Available</span>
            </div>
            <p className="text-2xl font-bold text-foreground mt-2">12</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground">On Delivery</span>
            </div>
            <p className="text-2xl font-bold text-foreground mt-2">10</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-info" />
              <span className="text-sm text-muted-foreground">Avg Delivery</span>
            </div>
            <p className="text-2xl font-bold text-foreground mt-2">32 min</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-warning" />
              <span className="text-sm text-muted-foreground">Active Zones</span>
            </div>
            <p className="text-2xl font-bold text-foreground mt-2">8</p>
          </div>
        </div>

        {/* Map Area */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="h-[500px] bg-gradient-to-br from-muted/30 to-muted/60 flex items-center justify-center relative">
                {/* Placeholder for actual map integration */}
                <div className="absolute inset-0 opacity-30">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                
                {/* Simulated driver markers */}
                <div className="absolute" style={{ top: "30%", left: "40%" }}>
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center animate-pulse shadow-glow">
                    <Truck className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <p className="text-xs font-medium text-center mt-1">Yohannes</p>
                </div>
                <div className="absolute" style={{ top: "50%", left: "60%" }}>
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center animate-pulse shadow-glow">
                    <Truck className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <p className="text-xs font-medium text-center mt-1">Meron</p>
                </div>
                <div className="absolute" style={{ top: "40%", left: "25%" }}>
                  <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center shadow-md">
                    <Truck className="w-5 h-5 text-success-foreground" />
                  </div>
                  <p className="text-xs font-medium text-center mt-1">Biruk</p>
                </div>
                <div className="absolute" style={{ top: "65%", left: "55%" }}>
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center animate-pulse shadow-glow">
                    <Truck className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <p className="text-xs font-medium text-center mt-1">Helen</p>
                </div>

                <div className="text-center z-10 bg-card/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground">Live Fleet Tracking</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Real-time GPS tracking via Google Maps integration
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Driver List */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Active Drivers</h3>
            <div className="space-y-3">
              {drivers.map((driver) => (
                <div key={driver.id} className="bg-card rounded-xl border border-border p-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      driver.status === "available" ? "bg-success/10" : "bg-accent/10"
                    }`}>
                      <Truck className={`w-4 h-4 ${
                        driver.status === "available" ? "text-success" : "text-accent"
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground text-sm">{driver.name}</p>
                      {driver.destination ? (
                        <p className="text-xs text-muted-foreground truncate">
                          → {driver.destination}
                        </p>
                      ) : (
                        <p className="text-xs text-success">Available</p>
                      )}
                    </div>
                    <span className={`w-2 h-2 rounded-full ${
                      driver.status === "available" ? "bg-success" : "bg-accent animate-pulse"
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
