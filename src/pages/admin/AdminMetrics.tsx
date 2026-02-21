import { DashboardLayout } from "@/components/DashboardLayout";
import { StatsCard } from "@/components/StatsCard";
import { Server, Database, Zap, Shield, Clock, AlertCircle } from "lucide-react";

const systemMetrics = [
  { title: "API Uptime", value: "99.97%", change: "Last 30 days", changeType: "neutral" as const, icon: Server },
  { title: "Database Health", value: "Healthy", change: "All systems operational", changeType: "positive" as const, icon: Database },
  { title: "Avg Response Time", value: "142ms", change: "-12ms from last week", changeType: "positive" as const, icon: Zap },
  { title: "Security Status", value: "Secure", change: "No threats detected", changeType: "positive" as const, icon: Shield },
];

const apiEndpoints = [
  { endpoint: "/api/v1/shipments", requests: "125,432", avgLatency: "89ms", errorRate: "0.02%" },
  { endpoint: "/api/v1/rates", requests: "98,234", avgLatency: "124ms", errorRate: "0.01%" },
  { endpoint: "/api/v1/tracking", requests: "234,567", avgLatency: "67ms", errorRate: "0.03%" },
  { endpoint: "/api/v1/webhooks", requests: "45,678", avgLatency: "156ms", errorRate: "0.08%" },
  { endpoint: "/api/v1/drivers", requests: "34,567", avgLatency: "92ms", errorRate: "0.01%" },
];

export default function AdminMetrics() {
  return (
    <DashboardLayout role="admin" title="System Metrics">
      <div className="space-y-6">
        {/* System Health */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {systemMetrics.map((stat, index) => (
            <div key={stat.title} style={{ animationDelay: `${index * 0.1}s` }}>
              <StatsCard {...stat} />
            </div>
          ))}
        </div>

        {/* API Performance */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">API Endpoint Performance (24h)</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Endpoint</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Requests</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Avg Latency</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Error Rate</th>
                </tr>
              </thead>
              <tbody>
                {apiEndpoints.map((endpoint) => (
                  <tr key={endpoint.endpoint} className="border-b border-border last:border-0">
                    <td className="py-3 px-4 font-mono text-sm text-foreground">{endpoint.endpoint}</td>
                    <td className="py-3 px-4 text-right text-sm text-foreground">{endpoint.requests}</td>
                    <td className="py-3 px-4 text-right text-sm text-foreground">{endpoint.avgLatency}</td>
                    <td className="py-3 px-4 text-right">
                      <span className={`text-sm ${
                        parseFloat(endpoint.errorRate) < 0.05 ? "text-success" : "text-warning"
                      }`}>
                        {endpoint.errorRate}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Charts Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Request Volume (7 days)</h3>
            <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
              <div className="text-center">
                <Clock className="w-12 h-12 text-muted-foreground/50 mx-auto mb-2" />
                <p className="text-muted-foreground">Real-time chart would display here</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Error Distribution</h3>
            <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
              <div className="text-center">
                <AlertCircle className="w-12 h-12 text-muted-foreground/50 mx-auto mb-2" />
                <p className="text-muted-foreground">Error breakdown chart would display here</p>
              </div>
            </div>
          </div>
        </div>

        {/* Database Stats */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Database Statistics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">Total Records</p>
              <p className="text-2xl font-bold text-foreground mt-1">12.4M</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">Storage Used</p>
              <p className="text-2xl font-bold text-foreground mt-1">847 GB</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">Active Connections</p>
              <p className="text-2xl font-bold text-foreground mt-1">156</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">Query Cache Hit</p>
              <p className="text-2xl font-bold text-success mt-1">98.2%</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
