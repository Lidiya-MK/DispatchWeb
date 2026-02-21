import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCouriers from "./pages/admin/AdminCouriers";
import AdminMerchants from "./pages/admin/AdminMerchants";
import AdminMetrics from "./pages/admin/AdminMetrics";
import SupervisorDashboard from "./pages/supervisor/SupervisorDashboard";
import SupervisorShipments from "./pages/supervisor/SupervisorShipments";
import SupervisorDrivers from "./pages/supervisor/SupervisorDrivers";
import SupervisorFleet from "./pages/supervisor/SupervisorFleet";
import SupervisorPayments from "./pages/supervisor/SupervisorPayments";
import SupervisorAnalytics from "./pages/supervisor/SupervisorAnalytics";
import MerchantDashboard from "./pages/merchant/MerchantDashboard";
import MerchantShipments from "./pages/merchant/MerchantShipments";
import MerchantCreateShipment from "./pages/merchant/MerchantCreateShipment";
import MerchantCouriers from "./pages/merchant/MerchantCouriers";
import MerchantAnalytics from "./pages/merchant/MerchantAnalytics";
import MerchantApiKeys from "./pages/merchant/MerchantApiKeys";
import MerchantProfile from "./pages/merchant/MerchantProfile";
import DriverDeliveries from "./pages/driver/DriverDeliveries";
import DriverDeliveryDetail from "./pages/driver/DriverDeliveryDetail";
import DriverMap from "./pages/driver/DriverMap";
import DriverHistory from "./pages/driver/DriverHistory";
import DriverProfile from "./pages/driver/DriverProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Auth Routes */}
          <Route path="/login/:role" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/couriers" element={<AdminCouriers />} />
          <Route path="/admin/merchants" element={<AdminMerchants />} />
          <Route path="/admin/metrics" element={<AdminMetrics />} />
          {/* Supervisor Routes */}
          <Route path="/supervisor" element={<SupervisorDashboard />} />
          <Route path="/supervisor/shipments" element={<SupervisorShipments />} />
          <Route path="/supervisor/drivers" element={<SupervisorDrivers />} />
          <Route path="/supervisor/fleet" element={<SupervisorFleet />} />
          <Route path="/supervisor/payments" element={<SupervisorPayments />} />
          <Route path="/supervisor/analytics" element={<SupervisorAnalytics />} />
          {/* Merchant Routes */}
          <Route path="/merchant" element={<MerchantDashboard />} />
          <Route path="/merchant/shipments" element={<MerchantShipments />} />
          <Route path="/merchant/shipments/new" element={<MerchantCreateShipment />} />
          <Route path="/merchant/couriers" element={<MerchantCouriers />} />
          <Route path="/merchant/analytics" element={<MerchantAnalytics />} />
          <Route path="/merchant/api-keys" element={<MerchantApiKeys />} />
          <Route path="/merchant/profile" element={<MerchantProfile />} />
          {/* Driver Routes */}
          <Route path="/driver" element={<DriverDeliveries />} />
          <Route path="/driver/delivery/:id" element={<DriverDeliveryDetail />} />
          <Route path="/driver/map" element={<DriverMap />} />
          <Route path="/driver/history" element={<DriverHistory />} />
          <Route path="/driver/profile" element={<DriverProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
