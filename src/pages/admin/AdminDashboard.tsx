import { DashboardLayout } from "@/components/DashboardLayout";
import { StatsCard } from "@/components/StatsCard";
import { DataTable } from "@/components/DataTable";
import { Building2, Store, Package, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

const stats = [
  { title: "Total Couriers", value: 24, change: "+3 this month", changeType: "positive" as const, icon: Building2 },
  { title: "Active Merchants", value: 1847, change: "+127 this month", changeType: "positive" as const, icon: Store },
  { title: "Total Shipments", value: "45.2K", change: "+12% from last month", changeType: "positive" as const, icon: Package },
  { title: "Success Rate", value: "94.7%", change: "+2.3% improvement", changeType: "positive" as const, icon: TrendingUp },
];

const recentCouriers = [
  { id: "1", name: "Express Delivery Co.", drivers: 45, activeShipments: 234, status: "active", rating: 4.8 },
  { id: "2", name: "Swift Logistics", drivers: 32, activeShipments: 189, status: "active", rating: 4.6 },
  { id: "3", name: "City Runners", drivers: 28, activeShipments: 156, status: "active", rating: 4.5 },
  { id: "4", name: "Metro Dispatch", drivers: 15, activeShipments: 78, status: "pending", rating: 0 },
  { id: "5", name: "Fast Track Delivery", drivers: 52, activeShipments: 312, status: "active", rating: 4.9 },
];

const systemAlerts = [
  { id: "1", type: "warning", message: "High API usage detected for Merchant #1284", time: "5 min ago" },
  { id: "2", type: "info", message: "New courier registration: Metro Dispatch", time: "1 hour ago" },
  { id: "3", type: "success", message: "System backup completed successfully", time: "3 hours ago" },
];

const courierColumns = [
  { key: "name", header: "Courier Name" },
  { key: "drivers", header: "Drivers" },
  { key: "activeShipments", header: "Active Shipments" },
  {
    key: "status",
    header: "Status",
    render: (item: typeof recentCouriers[0]) => (
      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
        item.status === "active" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
      }`}>
        {item.status}
      </span>
    ),
  },
  {
    key: "rating",
    header: "Rating",
    render: (item: typeof recentCouriers[0]) => (
      item.rating > 0 ? (
        <span className="flex items-center gap-1">
          <span className="text-warning">★</span>
          {item.rating}
        </span>
      ) : (
        <span className="text-muted-foreground">—</span>
      )
    ),
  },
];

export default function AdminDashboard() {
  return (
    <DashboardLayout role="admin" title="Admin Dashboard">
      <div className="space-y-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((stat, index) => (
            <div key={stat.title} style={{ animationDelay: `${index * 0.1}s` }}>
              <StatsCard {...stat} />
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Courier Table */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-foreground">Courier Organizations</h2>
              <a href="/admin/couriers" className="text-xs text-primary hover:underline">
                View all
              </a>
            </div>
            <DataTable
              columns={courierColumns}
              data={recentCouriers}
              keyExtractor={(item) => item.id}
              onRowClick={(item) => console.log("Clicked:", item)}
            />
          </div>

          {/* System Alerts */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-foreground">System Alerts</h2>
            <div className="bg-card rounded-lg border border-border divide-y divide-border">
              {systemAlerts.map((alert) => (
                <div key={alert.id} className="p-3 flex items-start gap-2">
                  {alert.type === "warning" && (
                    <AlertTriangle className="w-4 h-4 text-warning flex-shrink-0 mt-0.5" />
                  )}
                  {alert.type === "success" && (
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                  )}
                  {alert.type === "info" && (
                    <Building2 className="w-4 h-4 text-info flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-foreground">{alert.message}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-card rounded-lg border border-border p-4">
            <h3 className="text-xs font-medium text-muted-foreground mb-1">Today's Deliveries</h3>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-foreground">1,247</span>
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-success">892 delivered</span>
                <span className="text-muted-foreground">|</span>
                <span className="text-warning">355 in transit</span>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg border border-border p-4">
            <h3 className="text-xs font-medium text-muted-foreground mb-1">API Requests (24h)</h3>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-foreground">847K</span>
              <span className="text-xs text-success">+18% from yesterday</span>
            </div>
          </div>
          <div className="bg-card rounded-lg border border-border p-4">
            <h3 className="text-xs font-medium text-muted-foreground mb-1">Failed Deliveries</h3>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-foreground">67</span>
              <span className="text-xs text-success">-12% from yesterday</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
