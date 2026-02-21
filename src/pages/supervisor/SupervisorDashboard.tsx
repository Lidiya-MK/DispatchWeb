import { DashboardLayout } from "@/components/DashboardLayout";
import { StatsCard } from "@/components/StatsCard";
import { ShipmentCard } from "@/components/ShipmentCard";
import { Package, Truck, Users, DollarSign, Clock, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const stats = [
  { title: "Active Shipments", value: 156, change: "32 pending assignment", changeType: "neutral" as const, icon: Package },
  { title: "Available Drivers", value: "18/28", change: "10 on delivery", changeType: "neutral" as const, icon: Truck },
  { title: "Today's Deliveries", value: 89, change: "+12% from yesterday", changeType: "positive" as const, icon: CheckCircle },
  { title: "Today's Revenue", value: "ETB 45.2K", change: "+8% from yesterday", changeType: "positive" as const, icon: DollarSign },
];

const pendingShipments = [
  { id: "1", trackingNumber: "DSP-2024-001234", status: "pending" as const, pickupAddress: "Bole, Addis Ababa", deliveryAddress: "Kazanchis, Addis Ababa", recipientName: "Abebe Kebede", recipientPhone: "+251 911 123 456", estimatedTime: "30 min", codAmount: 1500 },
  { id: "2", trackingNumber: "DSP-2024-001235", status: "pending" as const, pickupAddress: "Megenagna, Addis Ababa", deliveryAddress: "Piassa, Addis Ababa", recipientName: "Sara Hailu", recipientPhone: "+251 922 234 567", estimatedTime: "45 min", codAmount: 0 },
  { id: "3", trackingNumber: "DSP-2024-001236", status: "assigned" as const, pickupAddress: "CMC, Addis Ababa", deliveryAddress: "Mexico, Addis Ababa", recipientName: "Daniel Tesfaye", recipientPhone: "+251 933 345 678", estimatedTime: "35 min", codAmount: 2300 },
];

const activeDrivers = [
  { id: "1", name: "Yohannes Alemayehu", phone: "+251 911 111 111", status: "delivering", currentShipment: "DSP-2024-001200", location: "Bole" },
  { id: "2", name: "Meron Tadesse", phone: "+251 922 222 222", status: "delivering", currentShipment: "DSP-2024-001201", location: "Kazanchis" },
  { id: "3", name: "Biruk Getachew", phone: "+251 933 333 333", status: "available", currentShipment: null, location: "Megenagna" },
  { id: "4", name: "Helen Assefa", phone: "+251 944 444 444", status: "available", currentShipment: null, location: "Piassa" },
];

export default function SupervisorDashboard() {
  const navigate = useNavigate();

  return (
    <DashboardLayout role="supervisor" title="Supervisor Dashboard">
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={stat.title} style={{ animationDelay: `${index * 0.1}s` }}>
              <StatsCard {...stat} />
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Pending Shipments */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">Pending Assignment</h2>
              <a href="/supervisor/shipments" className="text-sm text-accent hover:underline">
                View all shipments
              </a>
            </div>
            <div className="space-y-3">
              {pendingShipments.map((shipment) => (
                <ShipmentCard
                  key={shipment.id}
                  {...shipment}
                  onClick={() => navigate(`/supervisor/shipments/${shipment.id}`)}
                />
              ))}
            </div>
          </div>

          {/* Active Drivers */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">Driver Status</h2>
              <a href="/supervisor/drivers" className="text-sm text-accent hover:underline">
                View all
              </a>
            </div>
            <div className="bg-card rounded-xl border border-border divide-y divide-border">
              {activeDrivers.map((driver) => (
                <div key={driver.id} className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        driver.status === "available" ? "bg-success/10" : "bg-accent/10"
                      }`}>
                        <Users className={`w-5 h-5 ${
                          driver.status === "available" ? "text-success" : "text-accent"
                        }`} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{driver.name}</p>
                        <p className="text-sm text-muted-foreground">{driver.location}</p>
                      </div>
                    </div>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                      driver.status === "available" 
                        ? "bg-success/10 text-success" 
                        : "bg-accent/10 text-accent"
                    }`}>
                      {driver.status}
                    </span>
                  </div>
                  {driver.currentShipment && (
                    <p className="text-xs text-muted-foreground mt-2 font-mono">
                      {driver.currentShipment}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => navigate("/supervisor/shipments")}
            className="bg-card rounded-xl border border-border p-6 text-left hover:border-accent transition-colors group"
          >
            <Package className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-foreground">Manage Shipments</h3>
            <p className="text-sm text-muted-foreground mt-1">Assign and track all shipments</p>
          </button>
          <button
            onClick={() => navigate("/supervisor/drivers")}
            className="bg-card rounded-xl border border-border p-6 text-left hover:border-accent transition-colors group"
          >
            <Users className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-foreground">Driver Management</h3>
            <p className="text-sm text-muted-foreground mt-1">View and manage your fleet</p>
          </button>
          <button
            onClick={() => navigate("/supervisor/payments")}
            className="bg-card rounded-xl border border-border p-6 text-left hover:border-accent transition-colors group"
          >
            <DollarSign className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-foreground">Payment Overview</h3>
            <p className="text-sm text-muted-foreground mt-1">Track collected payments</p>
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
