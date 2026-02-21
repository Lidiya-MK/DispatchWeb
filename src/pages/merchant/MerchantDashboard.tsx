import { DashboardLayout } from "@/components/DashboardLayout";
import { StatsCard } from "@/components/StatsCard";
import { ShipmentCard } from "@/components/ShipmentCard";
import { Package, TrendingUp, CheckCircle, Clock } from "lucide-react";

const stats = [
  { title: "Total Shipments", value: 1247, change: "+89 this week", changeType: "positive" as const, icon: Package },
  { title: "Delivered", value: 1156, change: "92.7% success rate", changeType: "positive" as const, icon: CheckCircle },
  { title: "In Transit", value: 67, change: "12 out for delivery", changeType: "neutral" as const, icon: Clock },
  { title: "Monthly Spend", value: "ETB 45.2K", change: "+8% from last month", changeType: "neutral" as const, icon: TrendingUp },
];

const recentShipments = [
  { id: "1", trackingNumber: "DSP-2024-001234", status: "in_transit" as const, pickupAddress: "Your Warehouse, Bole", deliveryAddress: "Kazanchis, Addis Ababa", recipientName: "Abebe Kebede", recipientPhone: "+251 911 123 456", estimatedTime: "30 min", codAmount: 1500 },
  { id: "2", trackingNumber: "DSP-2024-001235", status: "delivered" as const, pickupAddress: "Your Warehouse, Bole", deliveryAddress: "Piassa, Addis Ababa", recipientName: "Sara Hailu", recipientPhone: "+251 922 234 567", codAmount: 0 },
  { id: "3", trackingNumber: "DSP-2024-001236", status: "pending" as const, pickupAddress: "Your Warehouse, Bole", deliveryAddress: "Mexico, Addis Ababa", recipientName: "Daniel Tesfaye", recipientPhone: "+251 933 345 678", codAmount: 2300 },
];

export default function MerchantDashboard() {
  return (
    <DashboardLayout role="merchant" title="Merchant Dashboard">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => <StatsCard key={stat.title} {...stat} />)}
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Recent Shipments</h2>
            <a href="/merchant/shipments" className="text-sm text-accent hover:underline">View all</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentShipments.map((s) => <ShipmentCard key={s.id} {...s} />)}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
