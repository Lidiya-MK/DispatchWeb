import { DashboardLayout } from "@/components/DashboardLayout";
import { StatsCard } from "@/components/StatsCard";
import { Package, CheckCircle, Clock, XCircle, TrendingUp, BarChart3 } from "lucide-react";

const stats = [
  { title: "Total Shipments", value: "1,247", change: "This month", changeType: "neutral" as const, icon: Package },
  { title: "Delivered", value: "1,156", change: "92.7% success rate", changeType: "positive" as const, icon: CheckCircle },
  { title: "Avg Delivery Time", value: "32 min", change: "-5 min from last month", changeType: "positive" as const, icon: Clock },
  { title: "Failed", value: "24", change: "-8% from last month", changeType: "positive" as const, icon: XCircle },
];

const courierComparison = [
  { name: "Fast Track Delivery", deliveries: 312, successRate: "98.5%", avgTime: "25 min", rating: 4.9 },
  { name: "Express Delivery Co.", deliveries: 245, successRate: "97.2%", avgTime: "28 min", rating: 4.8 },
  { name: "Addis Express", deliveries: 201, successRate: "96.3%", avgTime: "30 min", rating: 4.7 },
  { name: "Swift Logistics", deliveries: 189, successRate: "95.8%", avgTime: "35 min", rating: 4.6 },
  { name: "City Runners", deliveries: 156, successRate: "94.1%", avgTime: "32 min", rating: 4.5 },
];

export default function MerchantAnalytics() {
  return (
    <DashboardLayout role="merchant" title="Analytics">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={stat.title} style={{ animationDelay: `${i * 0.1}s` }}>
              <StatsCard {...stat} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Shipment Trends */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-4">Shipment Volume (30 Days)</h3>
            <div className="h-48 flex items-end justify-between gap-1 px-2">
              {Array.from({ length: 30 }).map((_, i) => {
                const height = 30 + Math.random() * 70;
                return (
                  <div key={i} className="flex-1 bg-primary/50 rounded-t hover:bg-primary transition-colors" style={{ height: `${height}%` }} />
                );
              })}
            </div>
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              <span>30 days ago</span>
              <span>Today</span>
            </div>
          </div>

          {/* Delivery Status Distribution */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-4">Delivery Outcomes</h3>
            <div className="flex items-center justify-center h-48">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
                  <circle cx="18" cy="18" r="16" fill="none" stroke="hsl(var(--success))" strokeWidth="3" strokeDasharray="92.7 7.3" strokeLinecap="round" />
                  <circle cx="18" cy="18" r="16" fill="none" stroke="hsl(var(--destructive))" strokeWidth="3" strokeDasharray="1.9 98.1" strokeDashoffset="-92.7" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-2xl font-bold text-foreground">92.7%</span>
                  <span className="text-xs text-muted-foreground">Success</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success" />
                <span className="text-sm text-muted-foreground">Delivered (92.7%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <span className="text-sm text-muted-foreground">Failed (1.9%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-muted-foreground" />
                <span className="text-sm text-muted-foreground">Other (5.4%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Courier Performance Comparison */}
        <div className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Courier Performance Comparison</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Courier</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Deliveries</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Success Rate</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Avg Time</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Rating</th>
                </tr>
              </thead>
              <tbody>
                {courierComparison.map((courier, i) => (
                  <tr key={courier.name} className="border-b border-border last:border-0">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary">{i + 1}</span>
                        <span className="font-medium text-foreground">{courier.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right text-foreground">{courier.deliveries}</td>
                    <td className="py-3 px-4 text-right"><span className="text-success font-medium">{courier.successRate}</span></td>
                    <td className="py-3 px-4 text-right text-foreground">{courier.avgTime}</td>
                    <td className="py-3 px-4 text-right"><span className="flex items-center justify-end gap-1"><span className="text-warning">★</span>{courier.rating}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
