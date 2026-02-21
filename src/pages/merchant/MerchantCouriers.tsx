import { DashboardLayout } from "@/components/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Search, Building2, Star, Clock, CheckCircle, TrendingUp } from "lucide-react";

const couriers = [
  { id: "1", name: "Express Delivery Co.", description: "Premium same-day delivery service", rating: 4.8, successRate: "97.2%", avgTime: "28 min", totalDeliveries: 12450, priceRange: "ETB 100-200", status: "available" },
  { id: "2", name: "Swift Logistics", description: "Affordable city-wide delivery", rating: 4.6, successRate: "95.8%", avgTime: "35 min", totalDeliveries: 8920, priceRange: "ETB 70-150", status: "available" },
  { id: "3", name: "City Runners", description: "Quick deliveries in central Addis", rating: 4.5, successRate: "94.1%", avgTime: "32 min", totalDeliveries: 6780, priceRange: "ETB 60-130", status: "available" },
  { id: "4", name: "Fast Track Delivery", description: "Express courier with highest ratings", rating: 4.9, successRate: "98.5%", avgTime: "25 min", totalDeliveries: 15340, priceRange: "ETB 130-250", status: "available" },
  { id: "5", name: "Addis Express", description: "Reliable delivery across all zones", rating: 4.7, successRate: "96.3%", avgTime: "30 min", totalDeliveries: 10200, priceRange: "ETB 80-170", status: "available" },
  { id: "6", name: "Metro Dispatch", description: "New courier with competitive pricing", rating: 0, successRate: "N/A", avgTime: "N/A", totalDeliveries: 0, priceRange: "ETB 50-120", status: "new" },
];

export default function MerchantCouriers() {
  return (
    <DashboardLayout role="merchant" title="Couriers">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search couriers..." className="pl-10" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {couriers.map((courier) => (
            <div key={courier.id} className="bg-card rounded-xl border border-border p-6 hover:border-primary/40 hover:shadow-lg transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                {courier.status === "new" ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-info/10 text-info">New</span>
                ) : (
                  <span className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 text-warning fill-warning" />
                    <span className="font-semibold text-foreground">{courier.rating}</span>
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{courier.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{courier.description}</p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <div>
                    <p className="text-xs text-muted-foreground">Success Rate</p>
                    <p className="text-sm font-semibold text-foreground">{courier.successRate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-info" />
                  <div>
                    <p className="text-xs text-muted-foreground">Avg Time</p>
                    <p className="text-sm font-semibold text-foreground">{courier.avgTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground">Deliveries</p>
                    <p className="text-sm font-semibold text-foreground">{courier.totalDeliveries.toLocaleString()}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Price Range</p>
                  <p className="text-sm font-semibold text-foreground">{courier.priceRange}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
