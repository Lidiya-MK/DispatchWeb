import { MobileLayout } from "@/components/MobileLayout";
import { StatusBadge } from "@/components/StatusBadge";
import { Package, Clock, Star } from "lucide-react";

const deliveries = [
  { id: "1", trackingNumber: "DSP-2024-001230", recipientName: "Selam Worku", address: "Summit, Addis Ababa", status: "delivered" as const, completedAt: "Today, 14:30", codCollected: 890, rating: 5 },
  { id: "2", trackingNumber: "DSP-2024-001228", recipientName: "Yared Bekele", address: "Lideta, Addis Ababa", status: "delivered" as const, completedAt: "Today, 12:15", codCollected: 3200, rating: 4 },
  { id: "3", trackingNumber: "DSP-2024-001225", recipientName: "Hana Girma", address: "Arat Kilo, Addis Ababa", status: "delivered" as const, completedAt: "Today, 10:45", codCollected: 0, rating: 5 },
  { id: "4", trackingNumber: "DSP-2024-001220", recipientName: "Tesfaye Haile", address: "22 Mazoria, Addis Ababa", status: "failed" as const, completedAt: "Yesterday, 16:00", codCollected: 0, rating: 0 },
  { id: "5", trackingNumber: "DSP-2024-001218", recipientName: "Meron Assefa", address: "Megenagna, Addis Ababa", status: "delivered" as const, completedAt: "Yesterday, 14:30", codCollected: 1500, rating: 5 },
];

export default function DriverHistory() {
  return (
    <MobileLayout title="Delivery History">
      <div className="p-4 space-y-3">
        {/* Summary */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="mobile-card text-center">
            <p className="text-2xl font-bold text-foreground">245</p>
            <p className="text-xs text-muted-foreground">Total</p>
          </div>
          <div className="mobile-card text-center">
            <p className="text-2xl font-bold text-success">98.2%</p>
            <p className="text-xs text-muted-foreground">Success</p>
          </div>
          <div className="mobile-card text-center">
            <p className="text-2xl font-bold text-warning">4.9</p>
            <p className="text-xs text-muted-foreground">Rating</p>
          </div>
        </div>

        <h2 className="font-semibold text-foreground">Recent Deliveries</h2>

        {deliveries.map((d) => (
          <div key={d.id} className="mobile-card">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="font-mono text-xs text-muted-foreground">{d.trackingNumber}</p>
                <p className="font-semibold text-foreground">{d.recipientName}</p>
              </div>
              <StatusBadge status={d.status} />
            </div>
            <p className="text-sm text-muted-foreground mb-2">{d.address}</p>
            <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{d.completedAt}</span>
              {d.codCollected > 0 && <span className="font-medium text-foreground">ETB {d.codCollected.toLocaleString()}</span>}
              {d.rating > 0 && (
                <span className="flex items-center gap-0.5 text-warning">
                  <Star className="h-3 w-3 fill-warning" />{d.rating}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </MobileLayout>
  );
}
