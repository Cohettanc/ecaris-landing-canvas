
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import PageTransition from "./components/PageTransition";
import Index from "./pages/Index";
import LegalNotice from "./pages/LegalNotice";
import DataProtection from "./pages/DataProtection";
import CloudService from "./pages/CloudService";
import StrategyArchitecture from "./pages/StrategyArchitecture";
import DataGovernance from "./pages/DataGovernance";
import ErpApplications from "./pages/ErpApplications";
import OfficePageLayout from "./components/OfficePageLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// AnimatedRoutes component to apply transitions to routes
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen relative">
      <PageTransition>
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="/data-protection" element={<DataProtection />} />
          <Route path="/cloud-service" element={<CloudService />} />
          <Route path="/strategy-architecture" element={<StrategyArchitecture />} />
          <Route path="/data-governance" element={<DataGovernance />} />
          <Route path="/erp-applications" element={<ErpApplications />} />
          <Route path="/office/:officeId" element={<OfficePageLayout />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
