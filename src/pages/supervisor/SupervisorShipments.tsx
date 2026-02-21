import { DashboardLayout } from "@/components/DashboardLayout";
import { DataTable } from "@/components/DataTable";
import { StatusBadge, ShipmentStatus } from "@/components/StatusBadge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, MoreHorizontal, UserPlus } from "lucide-react";
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
  { id: "1", trackingNumber: "DSP-2024-001234", merchantName: "Ethio Electronics", status: "pending" as ShipmentStatus, pickupAddress: "Bole, Addis Ababa", deliveryAddress: "Kazanchis, Addis Ababa", recipientName: "Abebe Kebede", driverName: null, codAmount: 1500, createdAt: "Dec 20, 2024 09:30" },
  { id: "2", trackingNumber: "DSP-2024-001235", merchantName: "Fashion Hub", status: "pending" as ShipmentStatus, pickupAddress: "Megenagna, Addis Ababa", deliveryAddress: "Piassa, Addis Ababa", recipientName: "Sara Hailu", driverName: null, codAmount: 0, createdAt: "Dec 20, 2024 09:15" },
  { id: "3", trackingNumber: "DSP-2024-001236", merchantName: "Gadget Zone", status: "assigned" as ShipmentStatus, pickupAddress: "CMC, Addis Ababa", deliveryAddress: "Mexico, Addis Ababa", recipientName: "Daniel Tesfaye", driverName: "Yohannes A.", codAmount: 2300, createdAt: "Dec 20, 2024 08:45" },
  { id: "4", trackingNumber: "DSP-2024-001237", merchantName: "Book Corner", status: "picked_up" as ShipmentStatus, pickupAddress: "Sarbet, Addis Ababa", deliveryAddress: "Arat Kilo, Addis Ababa", recipientName: "Hana Girma", driverName: "Meron T.", codAmount: 450, createdAt: "Dec 20, 2024 08:30" },
  { id: "5", trackingNumber: "DSP-2024-001238", merchantName: "Ethio Electronics", status: "in_transit" as ShipmentStatus, pickupAddress: "Bole, Addis Ababa", deliveryAddress: "Lideta, Addis Ababa", recipientName: "Yared Bekele", driverName: "Biruk G.", codAmount: 3200, createdAt: "Dec 20, 2024 08:00" },
  { id: "6", trackingNumber: "DSP-2024-001239", merchantName: "Pet Paradise", status: "delivered" as ShipmentStatus, pickupAddress: "Gerji, Addis Ababa", deliveryAddress: "Summit, Addis Ababa", recipientName: "Selam Worku", driverName: "Helen A.", codAmount: 890, createdAt: "Dec 20, 2024 07:30" },
  { id: "7", trackingNumber: "DSP-2024-001240", merchantName: "Fashion Hub", status: "failed" as ShipmentStatus, pickupAddress: "Megenagna, Addis Ababa", deliveryAddress: "22 Mazoria, Addis Ababa", recipientName: "Tesfaye Haile", driverName: "Yohannes A.", codAmount: 1200, createdAt: "Dec 20, 2024 07:00" },
];

const drivers = [
  { id: "1", name: "Yohannes A." },
  { id: "2", name: "Meron T." },
  { id: "3", name: "Biruk G." },
  { id: "4", name: "Helen A." },
];

const columns = [
  {
    key: "trackingNumber",
    header: "Tracking #",
    render: (item: typeof shipments[0]) => (
      <span className="font-mono text-sm">{item.trackingNumber}</span>
    ),
  },
  { key: "merchantName", header: "Merchant" },
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
  {
    key: "driverName",
    header: "Driver",
    render: (item: typeof shipments[0]) => (
      item.driverName ? (
        <span className="text-foreground">{item.driverName}</span>
      ) : (
        <span className="text-muted-foreground">Unassigned</span>
      )
    ),
  },
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
          <DropdownMenuItem>View Details</DropdownMenuItem>
          {item.status === "pending" && <DropdownMenuItem>Assign Driver</DropdownMenuItem>}
          {item.driverName && <DropdownMenuItem>Reassign</DropdownMenuItem>}
          <DropdownMenuItem>Contact Merchant</DropdownMenuItem>
          {item.status === "failed" && <DropdownMenuItem>Mark for Retry</DropdownMenuItem>}
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export default function SupervisorShipments() {
  return (
    <DashboardLayout role="supervisor" title="Shipment Management">
      <div className="space-y-6">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-3 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by tracking # or recipient..." className="pl-10" />
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
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">Total</p>
            <p className="text-2xl font-bold text-foreground mt-1">156</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">Pending</p>
            <p className="text-2xl font-bold text-warning mt-1">32</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">In Progress</p>
            <p className="text-2xl font-bold text-info mt-1">67</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">Delivered</p>
            <p className="text-2xl font-bold text-success mt-1">52</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">Failed</p>
            <p className="text-2xl font-bold text-destructive mt-1">5</p>
          </div>
        </div>

        {/* Table */}
        <DataTable
          columns={columns}
          data={shipments}
          keyExtractor={(item) => item.id}
        />
      </div>
    </DashboardLayout>
  );
}
