import { MobileLayout } from "@/components/MobileLayout";
import { Button } from "@/components/ui/button";
import { User, Phone, Mail, Truck, Star, Package, CheckCircle, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export default function DriverProfile() {
  return (
    <MobileLayout title="My Profile">
      <div className="p-4 space-y-4">
        {/* Profile Header */}
        <div className="mobile-card text-center py-6">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
            <User className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Yohannes Alemayehu</h2>
          <p className="text-sm text-muted-foreground">Express Delivery Co.</p>
          <div className="flex items-center justify-center gap-1 mt-2 text-warning">
            <Star className="h-4 w-4 fill-warning" />
            <span className="font-semibold">4.9</span>
            <span className="text-muted-foreground text-sm">(245 deliveries)</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mobile-card space-y-3">
          <h3 className="font-semibold text-foreground">Contact Information</h3>
          <div className="flex items-center gap-3 text-sm">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">+251 911 111 111</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">yohannes@email.com</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Truck className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">Motorcycle</span>
          </div>
        </div>

        {/* Stats */}
        <div className="mobile-card">
          <h3 className="font-semibold text-foreground mb-3">Performance</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <Package className="h-5 w-5 text-primary mx-auto mb-1" />
              <p className="text-lg font-bold text-foreground">1,245</p>
              <p className="text-xs text-muted-foreground">Total Deliveries</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <CheckCircle className="h-5 w-5 text-success mx-auto mb-1" />
              <p className="text-lg font-bold text-foreground">98.2%</p>
              <p className="text-xs text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>

        {/* Cash Summary */}
        <div className="mobile-card">
          <h3 className="font-semibold text-foreground mb-2">Cash in Hand</h3>
          <p className="text-3xl font-bold text-accent">ETB 12,500</p>
          <p className="text-sm text-muted-foreground mt-1">Pending collection from supervisor</p>
        </div>

        {/* Sign Out */}
        <Link to="/">
          <Button variant="outline" className="w-full mt-4">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </Link>
      </div>
    </MobileLayout>
  );
}
