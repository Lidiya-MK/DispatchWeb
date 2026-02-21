import { DashboardLayout } from "@/components/DashboardLayout";
import { DataTable } from "@/components/DataTable";
import { StatusBadge, ShipmentStatus } from "@/components/StatusBadge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus, MoreHorizontal, Eye, XCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const shipments = [
  { id: "1", trackingNumber: "DSP-2024-001234", courierName: "Express Delivery Co.", status: "in_transit" as ShipmentStatus, pickupAddress: "Your Warehouse, Bole", deliveryAddress: "Kazanchis, Addis Ababa", recipientName: "Abebe Kebede", recipientPhone: "+251 911 123 456", codAmount: 1500, createdAt: "Dec 20, 2024" },
  { id: "2", trackingNumber: "DSP-2024-001235", courierName: "Swift Logistics", status: "delivered" as ShipmentStatus, pickupAddress: "Your Warehouse, Bole", deliveryAddress: "Piassa, Addis Ababa", recipientName: "Sara Hailu", recipientPhone: "+251 922 234 567", codAmount: 0, createdAt: "Dec 19, 2024" },
  { id: "3", trackingNumber: "DSP-2024-001236", courierName: "Express Delivery Co.", status: "pending" as ShipmentStatus, pickupAddress: "Your Warehouse, Bole", deliveryAddress: "Mexico, Addis Ababa", recipientName: "Daniel Tesfaye", recipientPhone: "+251 933 345 678", codAmount: 2300, createdAt: "Dec 20, 2024" },
  { id: "4", trackingNumber: "DSP-2024-001237", courierName: "City Runners", status: "delivered" as ShipmentStatus, pickupAddress: "Your Warehouse, Bole", deliveryAddress: "Arat Kilo, Addis Ababa", recipientName: "Hana Girma", recipientPhone: "+251 944 456 789", codAmount: 450, createdAt: "Dec 18, 2024" },
  { id: "5", trackingNumber: "DSP-2024-001238", courierName: "Fast Track Delivery", status: "failed" as ShipmentStatus, pickupAddress: "Your Warehouse, Bole", deliveryAddress: "Lideta, Addis Ababa", recipientName: "Yared Bekele", recipientPhone: "+251 955 567 890", codAmount: 3200, createdAt: "Dec 17, 2024" },
  { id: "6", trackingNumber: "DSP-2024-001239", courierName: "Swift Logistics", status: "assigned" as ShipmentStatus, pickupAddress: "Your Warehouse, Bole", deliveryAddress: "Summit, Addis Ababa", recipientName: "Selam Worku", recipientPhone: "+251 966 678 901", codAmount: 890, createdAt: "Dec 20, 2024" },
];

const columns = [
  {
    key: "trackingNumber",
    header: "Tracking #",
    render: (item: typeof shipments[0]) => (
      <span className="font-mono text-sm">{item.trackingNumber}</span>
    ),
  },
  {
    key: "status",
    header: "Status",
    render: (item: typeof shipments[0]) => <StatusBadge status={item.status} />,
  },
  { key: "recipientName", header: "Recipient" },
  {
    key: "deliveryAddress",
    header: "Destination",
    render: (item: typeof shipments[0]) => (
      <span className="text-sm max-w-[200px] truncate block">{item.deliveryAddress}</span>
    ),
  },
  { key: "courierName", header: "Courier" },
  {
    key: "codAmount",
    header: "COD",
    render: (item: typeof shipments[0]) => (
      item.codAmount > 0 ? (
        <span className="font-medium">ETB {item.codAmount.toLocaleString()}</span>
      ) : (
        <span className="text-muted-foreground">—</span>
      )
    ),
  },
  { key: "createdAt", header: "Created" },
  {
    key: "actions",
    header: "",
    render: (item: typeof shipments[0]) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem><Eye className="h-4 w-4 mr-2" /> View Details</DropdownMenuItem>
          {item.status === "pending" && <DropdownMenuItem><XCircle className="h-4 w-4 mr-2" /> Cancel Shipment</DropdownMenuItem>}
          {item.status === "delivered" && <DropdownMenuItem><Star className="h-4 w-4 mr-2" /> Rate Delivery</DropdownMenuItem>}
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export default function MerchantShipments() {
  return (
    <DashboardLayout role="merchant" title="Shipments">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-3 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search shipments..." className="pl-10" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="assigned">Assigned</SelectItem>
                <SelectItem value="in_transit">In Transit</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Link to="/merchant/shipments/new">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Plus className="h-4 w-4 mr-2" />
              Create Shipment
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">Total</p>
            <p className="text-2xl font-bold text-foreground mt-1">1,247</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">In Transit</p>
            <p className="text-2xl font-bold text-primary mt-1">67</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">Delivered</p>
            <p className="text-2xl font-bold text-success mt-1">1,156</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">Failed</p>
            <p className="text-2xl font-bold text-destructive mt-1">24</p>
          </div>
        </div>

        <DataTable
          columns={columns}
          data={shipments}
          keyExtractor={(item) => item.id}
        />
      </div>
    </DashboardLayout>
  );
}
