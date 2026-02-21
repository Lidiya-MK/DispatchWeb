import { MobileLayout } from "@/components/MobileLayout";
import { MapPin, Navigation, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DriverMap() {
  return (
    <MobileLayout title="Navigation">
      <div className="flex flex-col h-[calc(100vh-8rem)]">
        {/* Map placeholder */}
        <div className="flex-1 bg-gradient-to-br from-muted/30 to-muted/60 relative">
          <div className="absolute inset-0 opacity-30">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mapgrid)" />
            </svg>
          </div>

          {/* Current location */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg animate-pulse-glow">
              <Navigation className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>

          {/* Destination */}
          <div className="absolute top-1/4 right-1/4">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-lg">
              <MapPin className="w-5 h-5 text-accent-foreground" />
            </div>
            <p className="text-xs font-medium text-center mt-1 bg-card/80 px-2 py-0.5 rounded">Kazanchis</p>
          </div>

          {/* Center overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-xs text-muted-foreground">Current Delivery</p>
                  <p className="font-semibold text-foreground">DSP-2024-001234</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">ETA</p>
                  <p className="font-semibold text-accent">12 min</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Kazanchis, Addis Ababa</span>
              </div>
              <Button className="w-full bg-accent text-accent-foreground">
                <Navigation className="w-4 h-4 mr-2" />
                Open in Maps
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
