import { MobileLayout } from "@/components/MobileLayout";
import { ShipmentCard } from "@/components/ShipmentCard";
import { useNavigate } from "react-router-dom";

const shipments = [
  { id: "1", trackingNumber: "DSP-2024-001234", status: "assigned" as const, pickupAddress: "Ethio Electronics, Bole", deliveryAddress: "Kazanchis, Addis Ababa", recipientName: "Abebe Kebede", recipientPhone: "+251 911 123 456", estimatedTime: "30 min", codAmount: 1500 },
  { id: "2", trackingNumber: "DSP-2024-001235", status: "picked_up" as const, pickupAddress: "Fashion Hub, Megenagna", deliveryAddress: "Piassa, Addis Ababa", recipientName: "Sara Hailu", recipientPhone: "+251 922 234 567", estimatedTime: "45 min", codAmount: 0 },
  { id: "3", trackingNumber: "DSP-2024-001236", status: "in_transit" as const, pickupAddress: "Gadget Zone, CMC", deliveryAddress: "Mexico, Addis Ababa", recipientName: "Daniel Tesfaye", recipientPhone: "+251 933 345 678", estimatedTime: "20 min", codAmount: 2300 },
];

export default function DriverDeliveries() {
  const navigate = useNavigate();
  return (
    <MobileLayout title="My Deliveries">
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-semibold text-foreground">Today's Assignments</h2>
          <span className="text-sm text-muted-foreground">{shipments.length} deliveries</span>
        </div>
        {shipments.map((s) => (
          <ShipmentCard key={s.id} {...s} variant="mobile" onClick={() => navigate(`/driver/delivery/${s.id}`)} />
        ))}
      </div>
    </MobileLayout>
  );
}
