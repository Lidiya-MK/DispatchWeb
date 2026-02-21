import { DashboardLayout } from "@/components/DashboardLayout";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, MoreHorizontal, Building2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const couriers = [
  { id: "1", name: "Express Delivery Co.", email: "contact@expressdelivery.et", phone: "+251 911 234 567", drivers: 45, activeShipments: 234, status: "active", rating: 4.8, joinedDate: "Jan 15, 2024" },
  { id: "2", name: "Swift Logistics", email: "info@swiftlogistics.et", phone: "+251 922 345 678", drivers: 32, activeShipments: 189, status: "active", rating: 4.6, joinedDate: "Feb 3, 2024" },
  { id: "3", name: "City Runners", email: "hello@cityrunners.et", phone: "+251 933 456 789", drivers: 28, activeShipments: 156, status: "active", rating: 4.5, joinedDate: "Feb 18, 2024" },
  { id: "4", name: "Metro Dispatch", email: "admin@metrodispatch.et", phone: "+251 944 567 890", drivers: 15, activeShipments: 0, status: "pending", rating: 0, joinedDate: "Dec 10, 2024" },
  { id: "5", name: "Fast Track Delivery", email: "ops@fasttrack.et", phone: "+251 955 678 901", drivers: 52, activeShipments: 312, status: "active", rating: 4.9, joinedDate: "Mar 22, 2024" },
  { id: "6", name: "Addis Express", email: "contact@addisexpress.et", phone: "+251 966 789 012", drivers: 38, activeShipments: 201, status: "active", rating: 4.7, joinedDate: "Apr 5, 2024" },
  { id: "7", name: "Quick Move", email: "support@quickmove.et", phone: "+251 977 890 123", drivers: 22, activeShipments: 98, status: "suspended", rating: 3.2, joinedDate: "May 12, 2024" },
];

const columns = [
  {
    key: "name",
    header: "Courier",
    render: (item: typeof couriers[0]) => (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
          <Building2 className="w-5 h-5 text-accent" />
        </div>
        <div>
          <p className="font-medium text-foreground">{item.name}</p>
          <p className="text-sm text-muted-foreground">{item.email}</p>
        </div>
      </div>
    ),
  },
  { key: "phone", header: "Phone" },
  { key: "drivers", header: "Drivers" },
  { key: "activeShipments", header: "Active Shipments" },
  {
    key: "status",
    header: "Status",
    render: (item: typeof couriers[0]) => (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        item.status === "active" ? "bg-success/10 text-success" :
        item.status === "pending" ? "bg-warning/10 text-warning" :
        "bg-destructive/10 text-destructive"
      }`}>
        {item.status}
      </span>
    ),
  },
  {
    key: "rating",
    header: "Rating",
    render: (item: typeof couriers[0]) => (
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
  { key: "joinedDate", header: "Joined" },
  {
    key: "actions",
    header: "",
    render: (item: typeof couriers[0]) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>View Details</DropdownMenuItem>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          {item.status === "pending" && <DropdownMenuItem>Approve</DropdownMenuItem>}
          {item.status === "active" && <DropdownMenuItem className="text-destructive">Suspend</DropdownMenuItem>}
          {item.status === "suspended" && <DropdownMenuItem>Reactivate</DropdownMenuItem>}
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export default function AdminCouriers() {
  return (
    <DashboardLayout role="admin" title="Courier Organizations">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search couriers..." className="pl-10" />
          </div>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Courier
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">Total Couriers</p>
            <p className="text-2xl font-bold text-foreground mt-1">24</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">Active</p>
            <p className="text-2xl font-bold text-success mt-1">21</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">Pending Approval</p>
            <p className="text-2xl font-bold text-warning mt-1">2</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">Suspended</p>
            <p className="text-2xl font-bold text-destructive mt-1">1</p>
          </div>
        </div>

        {/* Table */}
        <DataTable
          columns={columns}
          data={couriers}
          keyExtractor={(item) => item.id}
        />
      </div>
    </DashboardLayout>
  );
}
