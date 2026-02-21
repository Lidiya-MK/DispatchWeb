import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Store, Mail, Phone, MapPin, Save, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function MerchantProfile() {
  const { toast } = useToast();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Profile Updated", description: "Your business profile has been saved." });
  };

  return (
    <DashboardLayout role="merchant" title="Profile">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Business Info */}
        <form onSubmit={handleSave} className="space-y-6">
          <div className="bg-card rounded-xl border border-border p-6 space-y-5">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <Store className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">Business Information</h2>
                <p className="text-sm text-muted-foreground">Manage your business details</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Business Name</Label>
                <Input defaultValue="Ethio Electronics" />
              </div>
              <div className="space-y-2">
                <Label>Business Type</Label>
                <Input defaultValue="E-commerce" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Business Description</Label>
              <Textarea defaultValue="Leading electronics retailer in Addis Ababa with same-day delivery." rows={3} />
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-card rounded-xl border border-border p-6 space-y-4">
            <h2 className="text-lg font-semibold text-foreground mb-2">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="flex items-center gap-2"><Mail className="h-4 w-4" /> Email</Label>
                <Input type="email" defaultValue="sales@ethioelec.et" />
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2"><Phone className="h-4 w-4" /> Phone</Label>
                <Input type="tel" defaultValue="+251 911 111 111" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Default Pickup Address</Label>
              <Input defaultValue="Bole, near Edna Mall, Addis Ababa" />
            </div>
          </div>

          {/* Webhook Settings */}
          <div className="bg-card rounded-xl border border-border p-6 space-y-4">
            <h2 className="text-lg font-semibold text-foreground mb-2">Webhook Settings</h2>
            <p className="text-sm text-muted-foreground mb-3">Receive real-time updates about your shipments via webhooks.</p>
            <div className="space-y-2">
              <Label>Webhook URL</Label>
              <Input placeholder="https://your-domain.com/webhooks/dispatch" />
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
