import { DashboardLayout } from "@/components/DashboardLayout";
import { StatsCard } from "@/components/StatsCard";
import { Package, Clock, TrendingUp, CheckCircle, XCircle, BarChart3 } from "lucide-react";

const stats = [
  { title: "Total Deliveries", value: "3,247", change: "This month", changeType: "neutral" as const, icon: Package },
  { title: "Success Rate", value: "94.7%", change: "+2.3% from last month", changeType: "positive" as const, icon: CheckCircle },
  { title: "Avg Delivery Time", value: "32 min", change: "-5 min improvement", changeType: "positive" as const, icon: Clock },
  { title: "Failed Deliveries", value: "172", change: "-12% from last month", changeType: "positive" as const, icon: XCircle },
];

const driverPerformance = [
  { name: "Yohannes A.", deliveries: 245, successRate: "98.2%", avgTime: "28 min", rating: 4.9 },
  { name: "Helen A.", deliveries: 212, successRate: "97.1%", avgTime: "30 min", rating: 4.8 },
  { name: "Meron T.", deliveries: 198, successRate: "96.4%", avgTime: "31 min", rating: 4.7 },
  { name: "Biruk G.", deliveries: 156, successRate: "95.8%", avgTime: "33 min", rating: 4.8 },
  { name: "Tigist H.", deliveries: 134, successRate: "94.2%", avgTime: "35 min", rating: 4.6 },
];

export default function SupervisorAnalytics() {
  return (
    <DashboardLayout role="supervisor" title="Analytics">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={stat.title} style={{ animationDelay: `${index * 0.1}s` }}>
              <StatsCard {...stat} />
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Delivery Trends */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-4">Delivery Trends (30 Days)</h3>
            <div className="h-48 flex items-end justify-between gap-1 px-2">
              {Array.from({ length: 30 }).map((_, index) => {
                const height = 40 + Math.random() * 60;
                return (
                  <div
                    key={index}
                    className="flex-1 bg-accent/60 rounded-t hover:bg-accent transition-colors"
                    style={{ height: `${height}%` }}
                  />
                );
              })}
            </div>
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              <span>Nov 20</span>
              <span>Dec 20</span>
            </div>
          </div>

          {/* Status Distribution */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-4">Delivery Status Distribution</h3>
            <div className="flex items-center justify-center h-48">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
                  <circle cx="18" cy="18" r="16" fill="none" stroke="hsl(var(--success))" strokeWidth="3"
                    strokeDasharray="75.4 24.6" strokeLinecap="round" />
                  <circle cx="18" cy="18" r="16" fill="none" stroke="hsl(var(--destructive))" strokeWidth="3"
                    strokeDasharray="5.3 94.7" strokeDashoffset="-75.4" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-2xl font-bold text-foreground">94.7%</span>
                  <span className="text-xs text-muted-foreground">Success</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success" />
                <span className="text-sm text-muted-foreground">Delivered (94.7%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <span className="text-sm text-muted-foreground">Failed (5.3%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Driver Performance */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-4">Top Performing Drivers</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Driver</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Deliveries</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Success Rate</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Avg Time</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Rating</th>
                </tr>
              </thead>
              <tbody>
                {driverPerformance.map((driver, index) => (
                  <tr key={driver.name} className="border-b border-border last:border-0">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs font-medium text-accent">
                          {index + 1}
                        </span>
                        <span className="font-medium text-foreground">{driver.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right text-foreground">{driver.deliveries}</td>
                    <td className="py-3 px-4 text-right">
                      <span className="text-success font-medium">{driver.successRate}</span>
                    </td>
                    <td className="py-3 px-4 text-right text-foreground">{driver.avgTime}</td>
                    <td className="py-3 px-4 text-right">
                      <span className="flex items-center justify-end gap-1">
                        <span className="text-warning">★</span>
                        {driver.rating}
                      </span>
                    </td>
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
