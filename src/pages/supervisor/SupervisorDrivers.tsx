import { DashboardLayout } from "@/components/DashboardLayout";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, MoreHorizontal, Phone, MapPin, Truck } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const drivers = [
  { id: "1", name: "Yohannes Alemayehu", phone: "+251 911 111 111", email: "yohannes@email.com", status: "available", vehicleType: "Motorcycle", completedToday: 8, totalDeliveries: 1245, rating: 4.9, cashInHand: 12500 },
  { id: "2", name: "Meron Tadesse", phone: "+251 922 222 222", email: "meron@email.com", status: "delivering", vehicleType: "Motorcycle", completedToday: 6, totalDeliveries: 892, rating: 4.7, cashInHand: 8900 },
  { id: "3", name: "Biruk Getachew", phone: "+251 933 333 333", email: "biruk@email.com", status: "available", vehicleType: "Bicycle", completedToday: 5, totalDeliveries: 567, rating: 4.8, cashInHand: 4500 },
  { id: "4", name: "Helen Assefa", phone: "+251 944 444 444", email: "helen@email.com", status: "delivering", vehicleType: "Motorcycle", completedToday: 7, totalDeliveries: 1034, rating: 4.6, cashInHand: 11200 },
  { id: "5", name: "Solomon Bekele", phone: "+251 955 555 555", email: "solomon@email.com", status: "offline", vehicleType: "Motorcycle", completedToday: 0, totalDeliveries: 756, rating: 4.5, cashInHand: 0 },
  { id: "6", name: "Tigist Haile", phone: "+251 966 666 666", email: "tigist@email.com", status: "available", vehicleType: "Car", completedToday: 4, totalDeliveries: 423, rating: 4.8, cashInHand: 6700 },
];

const columns = [
  {
    key: "name",
    header: "Driver",
    render: (item: typeof drivers[0]) => (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
          <span className="font-semibold text-accent">{item.name.charAt(0)}</span>
        </div>
        <div>
          <p className="font-medium text-foreground">{item.name}</p>
          <p className="text-sm text-muted-foreground">{item.email}</p>
        </div>
      </div>
    ),
  },
  {
    key: "phone",
    header: "Phone",
    render: (item: typeof drivers[0]) => (
      <div className="flex items-center gap-2">
        <Phone className="w-4 h-4 text-muted-foreground" />
        <span>{item.phone}</span>
      </div>
    ),
  },
  {
    key: "vehicleType",
    header: "Vehicle",
    render: (item: typeof drivers[0]) => (
      <div className="flex items-center gap-2">
        <Truck className="w-4 h-4 text-muted-foreground" />
        <span>{item.vehicleType}</span>
      </div>
    ),
  },
  {
    key: "status",
    header: "Status",
    render: (item: typeof drivers[0]) => (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        item.status === "available" ? "bg-success/10 text-success" :
        item.status === "delivering" ? "bg-accent/10 text-accent" :
        "bg-muted text-muted-foreground"
      }`}>
        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
          item.status === "available" ? "bg-success" :
          item.status === "delivering" ? "bg-accent animate-pulse" :
          "bg-muted-foreground"
        }`} />
        {item.status}
      </span>
    ),
  },
  {
    key: "completedToday",
    header: "Today",
    render: (item: typeof drivers[0]) => (
      <span className="font-medium">{item.completedToday} deliveries</span>
    ),
  },
  {
    key: "rating",
    header: "Rating",
    render: (item: typeof drivers[0]) => (
      <span className="flex items-center gap-1">
        <span className="text-warning">★</span>
        {item.rating}
      </span>
    ),
  },
  {
    key: "cashInHand",
    header: "Cash in Hand",
    render: (item: typeof drivers[0]) => (
      item.cashInHand > 0 ? (
        <span className="font-medium text-accent">ETB {item.cashInHand.toLocaleString()}</span>
      ) : (
        <span className="text-muted-foreground">—</span>
      )
    ),
  },
  {
    key: "actions",
    header: "",
    render: (item: typeof drivers[0]) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>View Profile</DropdownMenuItem>
          <DropdownMenuItem>View Deliveries</DropdownMenuItem>
          <DropdownMenuItem>Track Location</DropdownMenuItem>
          <DropdownMenuItem>Collect Cash</DropdownMenuItem>
          <DropdownMenuItem className="text-destructive">Suspend</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export default function SupervisorDrivers() {
  return (
    <DashboardLayout role="supervisor" title="Driver Management">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search drivers..." className="pl-10" />
          </div>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Driver
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">Total Drivers</p>
            <p className="text-2xl font-bold text-foreground mt-1">28</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">Available</p>
            <p className="text-2xl font-bold text-success mt-1">12</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">On Delivery</p>
            <p className="text-2xl font-bold text-accent mt-1">10</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">Offline</p>
            <p className="text-2xl font-bold text-muted-foreground mt-1">6</p>
          </div>
        </div>

        {/* Cash Collection Alert */}
        <div className="bg-warning/10 border border-warning/30 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="font-medium text-foreground">Cash Collection Required</p>
            <p className="text-sm text-muted-foreground mt-1">Total cash in hand across all drivers: <span className="font-semibold text-foreground">ETB 43,800</span></p>
          </div>
          <Button variant="outline" className="border-warning text-warning hover:bg-warning hover:text-warning-foreground">
            View Details
          </Button>
        </div>

        {/* Table */}
        <DataTable
          columns={columns}
          data={drivers}
          keyExtractor={(item) => item.id}
        />
      </div>
    </DashboardLayout>
  );
}
