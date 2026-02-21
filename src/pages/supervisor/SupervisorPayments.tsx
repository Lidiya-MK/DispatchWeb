import { DashboardLayout } from "@/components/DashboardLayout";
import { StatsCard } from "@/components/StatsCard";
import { DataTable } from "@/components/DataTable";
import { DollarSign, TrendingUp, CreditCard, Wallet, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const stats = [
  { title: "Today's Collection", value: "ETB 45,230", change: "+12% from yesterday", changeType: "positive" as const, icon: DollarSign },
  { title: "Weekly Total", value: "ETB 312,450", change: "+8% from last week", changeType: "positive" as const, icon: TrendingUp },
  { title: "Pending COD", value: "ETB 23,400", change: "32 shipments", changeType: "neutral" as const, icon: CreditCard },
  { title: "Cash in Hand", value: "ETB 43,800", change: "Across 18 drivers", changeType: "neutral" as const, icon: Wallet },
];

const transactions = [
  { id: "1", date: "Dec 20, 2024 14:30", driver: "Yohannes A.", shipment: "DSP-001234", type: "COD Collection", amount: 1500, status: "collected" },
  { id: "2", date: "Dec 20, 2024 14:15", driver: "Meron T.", shipment: "DSP-001235", type: "Delivery Fee", amount: 150, status: "collected" },
  { id: "3", date: "Dec 20, 2024 13:45", driver: "Biruk G.", shipment: "DSP-001236", type: "COD Collection", amount: 2300, status: "pending" },
  { id: "4", date: "Dec 20, 2024 13:30", driver: "Helen A.", shipment: "DSP-001237", type: "COD Collection", amount: 890, status: "collected" },
  { id: "5", date: "Dec 20, 2024 12:00", driver: "Yohannes A.", shipment: "DSP-001238", type: "COD Collection", amount: 3200, status: "collected" },
  { id: "6", date: "Dec 20, 2024 11:30", driver: "Meron T.", shipment: "DSP-001239", type: "Delivery Fee", amount: 200, status: "pending" },
];

const columns = [
  { key: "date", header: "Date & Time" },
  { key: "driver", header: "Driver" },
  {
    key: "shipment",
    header: "Shipment",
    render: (item: typeof transactions[0]) => (
      <span className="font-mono text-sm">{item.shipment}</span>
    ),
  },
  {
    key: "type",
    header: "Type",
    render: (item: typeof transactions[0]) => (
      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
        item.type === "COD Collection" ? "bg-accent/10 text-accent" : "bg-info/10 text-info"
      }`}>
        {item.type}
      </span>
    ),
  },
  {
    key: "amount",
    header: "Amount",
    render: (item: typeof transactions[0]) => (
      <span className="font-semibold">ETB {item.amount.toLocaleString()}</span>
    ),
  },
  {
    key: "status",
    header: "Status",
    render: (item: typeof transactions[0]) => (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        item.status === "collected" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
      }`}>
        {item.status}
      </span>
    ),
  },
];

export default function SupervisorPayments() {
  return (
    <DashboardLayout role="supervisor" title="Payment Overview">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={stat.title} style={{ animationDelay: `${index * 0.1}s` }}>
              <StatsCard {...stat} />
            </div>
          ))}
        </div>

        {/* Filters & Export */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex gap-3">
            <Select defaultValue="today">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="cod">COD Collection</SelectItem>
                <SelectItem value="fee">Delivery Fee</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>

        {/* Revenue Chart Placeholder */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-4">Daily Revenue (Last 7 Days)</h3>
          <div className="h-48 flex items-end justify-between gap-2 px-4">
            {[45, 52, 48, 61, 55, 67, 72].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-accent rounded-t-md transition-all hover:bg-accent/80"
                  style={{ height: `${height * 2}px` }}
                />
                <span className="text-xs text-muted-foreground">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Transactions Table */}
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground">Recent Transactions</h3>
          <DataTable
            columns={columns}
            data={transactions}
            keyExtractor={(item) => item.id}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
