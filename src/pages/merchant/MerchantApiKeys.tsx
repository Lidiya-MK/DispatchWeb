import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Key, Plus, Copy, Eye, EyeOff, Trash2, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const apiKeys = [
  { id: "1", name: "Production Key", key: "dsp_live_k7x9m2...a4b8", prefix: "dsp_live_k7x9m2", created: "Jan 15, 2024", lastUsed: "2 min ago", status: "active" },
  { id: "2", name: "Staging Key", key: "dsp_test_p3q8n5...c2d7", prefix: "dsp_test_p3q8n5", created: "Feb 3, 2024", lastUsed: "3 days ago", status: "active" },
  { id: "3", name: "Old Integration Key", key: "dsp_live_r1s6t4...e9f3", prefix: "dsp_live_r1s6t4", created: "Mar 20, 2024", lastUsed: "30 days ago", status: "inactive" },
];

export default function MerchantApiKeys() {
  const { toast } = useToast();
  const [visibleKeys, setVisibleKeys] = useState<Set<string>>(new Set());

  const toggleVisibility = (id: string) => {
    setVisibleKeys((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const copyKey = (key: string) => {
    navigator.clipboard.writeText(key);
    toast({ title: "Copied", description: "API key copied to clipboard" });
  };

  return (
    <DashboardLayout role="merchant" title="API Keys">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Info Card */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">API Authentication</h3>
            <p className="text-sm text-muted-foreground">
              Use your API keys to authenticate requests to the Dispatch API. Include your key in the <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">X-API-Key</code> header of every request. Keep your keys secret and never expose them in client-side code.
            </p>
          </div>
        </div>

        {/* Create Key */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">Your API Keys</h2>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Generate New Key
          </Button>
        </div>

        {/* Keys List */}
        <div className="space-y-4">
          {apiKeys.map((apiKey) => (
            <div key={apiKey.id} className="bg-card rounded-xl border border-border p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Key className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{apiKey.name}</h3>
                    <p className="text-xs text-muted-foreground">Created {apiKey.created}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  apiKey.status === "active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"
                }`}>
                  {apiKey.status}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-3 mb-3">
                <code className="flex-1 font-mono text-sm text-foreground">
                  {visibleKeys.has(apiKey.id) ? apiKey.key : apiKey.prefix + "••••••••"}
                </code>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toggleVisibility(apiKey.id)}>
                  {visibleKeys.has(apiKey.id) ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => copyKey(apiKey.key)}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Last used: {apiKey.lastUsed}</span>
                <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive h-7 text-xs">
                  <Trash2 className="h-3 w-3 mr-1" /> Revoke
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* API Usage */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-4">API Usage (Last 7 Days)</h3>
          <div className="h-40 flex items-end justify-between gap-2 px-4">
            {[1245, 1432, 1189, 1567, 1834, 1623, 1956].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-primary/60 rounded-t hover:bg-primary transition-colors"
                  style={{ height: `${(val / 2000) * 140}px` }}
                />
                <span className="text-xs text-muted-foreground">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
