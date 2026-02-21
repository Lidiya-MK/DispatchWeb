import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Package, MapPin, User, DollarSign, Truck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const couriers = [
  { id: "1", name: "Express Delivery Co.", price: "ETB 120", eta: "30 min", rating: 4.8 },
  { id: "2", name: "Swift Logistics", price: "ETB 95", eta: "45 min", rating: 4.6 },
  { id: "3", name: "City Runners", price: "ETB 80", eta: "50 min", rating: 4.5 },
  { id: "4", name: "Fast Track Delivery", price: "ETB 150", eta: "25 min", rating: 4.9 },
];

export default function MerchantCreateShipment() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedCourier, setSelectedCourier] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Shipment Created",
      description: "Your shipment has been created and is pending pickup.",
    });
    navigate("/merchant/shipments");
  };

  return (
    <DashboardLayout role="merchant" title="Create Shipment">
      <div className="max-w-3xl mx-auto space-y-6">
        <Link to="/merchant/shipments" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to Shipments
        </Link>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Pickup Details */}
          <div className="bg-card rounded-xl border border-border p-6 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <Package className="h-5 w-5 text-success" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">Pickup Details</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Pickup Address</Label>
                <Input placeholder="e.g., Bole, near Edna Mall" required />
              </div>
              <div className="space-y-2">
                <Label>Pickup Landmark</Label>
                <Input placeholder="e.g., Next to Edna Mall entrance" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Pickup Notes</Label>
              <Textarea placeholder="Additional instructions for pickup..." rows={2} />
            </div>
          </div>

          {/* Delivery Details */}
          <div className="bg-card rounded-xl border border-border p-6 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">Delivery Details</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Delivery Address</Label>
                <Input placeholder="e.g., Kazanchis, Addis Ababa" required />
              </div>
              <div className="space-y-2">
                <Label>Delivery Landmark</Label>
                <Input placeholder="e.g., Near Kazanchis bus station" />
              </div>
            </div>
          </div>

          {/* Recipient Details */}
          <div className="bg-card rounded-xl border border-border p-6 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center">
                <User className="h-5 w-5 text-info" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">Recipient Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Recipient Name</Label>
                <Input placeholder="Full name" required />
              </div>
              <div className="space-y-2">
                <Label>Phone Number</Label>
                <Input type="tel" placeholder="+251 9XX XXX XXXX" required />
              </div>
            </div>
          </div>

          {/* Package & Payment */}
          <div className="bg-card rounded-xl border border-border p-6 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-warning" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">Package & Payment</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Package Size</Label>
                <Select defaultValue="small">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (≤2kg)</SelectItem>
                    <SelectItem value="medium">Medium (2-5kg)</SelectItem>
                    <SelectItem value="large">Large (5-15kg)</SelectItem>
                    <SelectItem value="xlarge">Extra Large (15kg+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>COD Amount (ETB)</Label>
                <Input type="number" placeholder="0" min="0" />
              </div>
              <div className="space-y-2">
                <Label>Package Description</Label>
                <Input placeholder="e.g., Electronics" />
              </div>
            </div>
          </div>

          {/* Courier Selection */}
          <div className="bg-card rounded-xl border border-border p-6 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Truck className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">Choose Courier</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {couriers.map((courier) => (
                <button
                  key={courier.id}
                  type="button"
                  onClick={() => setSelectedCourier(courier.id)}
                  className={`p-4 rounded-lg border text-left transition-all ${
                    selectedCourier === courier.id
                      ? "border-primary bg-primary/5 shadow-md"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">{courier.name}</span>
                    <span className="flex items-center gap-1 text-sm text-warning">★ {courier.rating}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{courier.price}</span>
                    <span>ETA: {courier.eta}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-3">
            <Link to="/merchant/shipments">
              <Button variant="outline" type="button">Cancel</Button>
            </Link>
            <Button type="submit" disabled={!selectedCourier}>
              Create Shipment
            </Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
