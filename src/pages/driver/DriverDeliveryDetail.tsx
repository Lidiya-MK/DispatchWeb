import { MobileLayout } from "@/components/MobileLayout";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Navigation, Package, DollarSign, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DriverDeliveryDetail() {
  const navigate = useNavigate();
  return (
    <MobileLayout title="Delivery Details" showNav={false}>
      <div className="p-4 space-y-4">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-muted-foreground">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        
        <div className="mobile-card">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-sm text-muted-foreground">DSP-2024-001234</span>
            <StatusBadge status="assigned" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Abebe Kebede</h2>
          <div className="flex items-center gap-2 mt-2 text-muted-foreground">
            <Phone className="w-4 h-4" />
            <span>+251 911 123 456</span>
          </div>
        </div>

        <div className="mobile-card space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center"><Package className="w-4 h-4 text-success" /></div>
            <div><p className="text-xs text-muted-foreground">Pickup</p><p className="font-medium">Ethio Electronics, Bole</p></div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center"><MapPin className="w-4 h-4 text-accent" /></div>
            <div><p className="text-xs text-muted-foreground">Delivery</p><p className="font-medium">Kazanchis, Addis Ababa</p></div>
          </div>
        </div>

        <div className="mobile-card flex items-center justify-between">
          <div className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-accent" /><span className="text-sm text-muted-foreground">Amount to Collect</span></div>
          <span className="text-xl font-bold text-accent">ETB 1,500</span>
        </div>

        <div className="space-y-3 pt-4">
          <Button className="w-full bg-accent text-accent-foreground h-12"><Navigation className="w-4 h-4 mr-2" />Navigate to Pickup</Button>
          <Button variant="outline" className="w-full h-12">Mark as Picked Up</Button>
        </div>
      </div>
    </MobileLayout>
  );
}
