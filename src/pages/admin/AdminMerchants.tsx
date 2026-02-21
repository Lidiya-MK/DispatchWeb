import { DashboardLayout } from "@/components/DashboardLayout";
import { DataTable } from "@/components/DataTable";
import { Input } from "@/components/ui/input";
import { Search, Store, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const merchants = [
  { id: "1", businessName: "Ethio Electronics", email: "sales@ethioelec.et", phone: "+251 911 111 111", totalShipments: 1245, apiUsage: "High", status: "active", joinedDate: "Jan 5, 2024" },
  { id: "2", businessName: "Fashion Hub", email: "orders@fashionhub.et", phone: "+251 922 222 222", totalShipments: 892, apiUsage: "Medium", status: "active", joinedDate: "Jan 18, 2024" },
  { id: "3", businessName: "Book Corner", email: "hello@bookcorner.et", phone: "+251 933 333 333", totalShipments: 456, apiUsage: "Low", status: "active", joinedDate: "Feb 2, 2024" },
  { id: "4", businessName: "Gadget Zone", email: "support@gadgetzone.et", phone: "+251 944 444 444", totalShipments: 2134, apiUsage: "High", status: "active", joinedDate: "Feb 15, 2024" },
  { id: "5", businessName: "Home Essentials", email: "info@homeess.et", phone: "+251 955 555 555", totalShipments: 678, apiUsage: "Medium", status: "active", joinedDate: "Mar 1, 2024" },
  { id: "6", businessName: "Sports Gear", email: "orders@sportsgear.et", phone: "+251 966 666 666", totalShipments: 234, apiUsage: "Low", status: "inactive", joinedDate: "Mar 20, 2024" },
  { id: "7", businessName: "Pet Paradise", email: "woof@petparadise.et", phone: "+251 977 777 777", totalShipments: 567, apiUsage: "Medium", status: "active", joinedDate: "Apr 8, 2024" },
];

const columns = [
  {
    key: "businessName",
    header: "Business",
    render: (item: typeof merchants[0]) => (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Store className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="font-medium text-foreground">{item.businessName}</p>
          <p className="text-sm text-muted-foreground">{item.email}</p>
        </div>
      </div>
    ),
  },
  { key: "phone", header: "Phone" },
  { key: "totalShipments", header: "Total Shipments" },
  {
    key: "apiUsage",
    header: "API Usage",
    render: (item: typeof merchants[0]) => (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        item.apiUsage === "High" ? "bg-accent/10 text-accent" :
        item.apiUsage === "Medium" ? "bg-info/10 text-info" :
        "bg-muted text-muted-foreground"
      }`}>
        {item.apiUsage}
      </span>
    ),
  },
  {
    key: "status",
    header: "Status",
    render: (item: typeof merchants[0]) => (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        item.status === "active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"
      }`}>
        {item.status}
      </span>
    ),
  },
  { key: "joinedDate", header: "Joined" },
  {
    key: "actions",
    header: "",
    render: (item: typeof merchants[0]) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>View Details</DropdownMenuItem>
          <DropdownMenuItem>View Shipments</DropdownMenuItem>
          <DropdownMenuItem>API Usage Report</DropdownMenuItem>
          {item.status === "active" ? (
            <DropdownMenuItem className="text-destructive">Ban Merchant</DropdownMenuItem>
          ) : (
            <DropdownMenuItem>Reactivate</DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export default function AdminMerchants() {
  return (
    <DashboardLayout role="admin" title="Registered Merchants">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search merchants..." className="pl-10" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">Total Merchants</p>
            <p className="text-2xl font-bold text-foreground mt-1">1,847</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">Active</p>
            <p className="text-2xl font-bold text-success mt-1">1,789</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">Using API</p>
            <p className="text-2xl font-bold text-accent mt-1">1,234</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">Dashboard Only</p>
            <p className="text-2xl font-bold text-info mt-1">613</p>
          </div>
        </div>

        {/* Table */}
        <DataTable
          columns={columns}
          data={merchants}
          keyExtractor={(item) => item.id}
        />
      </div>
    </DashboardLayout>
  );
}
