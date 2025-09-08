import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import ComingSoon from "./pages/ComingSoon";
import YachtServices from "./pages/YachtServices";
import NotFound from "./pages/NotFound";
import PrivateJets from "./pages/PrivateJets";
import LuxuryGetaways from "./pages/LuxuryGetaways";
import YachtDetail from "./pages/YachtDetail";
import JetDetail from "./pages/JetDetail";
import GetawayDetail from "./pages/GetawayDetail";
import BlogMain from "./pages/BlogMain";
import BlogDetail from "./pages/BlogDetail";
import ContactUs from "./pages/ContactUs";

const queryClient = new QueryClient();

// Toggle this flag to switch between Coming Soon page and full app
const IS_COMING_SOON = true;

const ScrollToTop = () => {
  const location = useLocation();
  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        {IS_COMING_SOON ? (
          <Routes>
            <Route path="*" element={<ComingSoon />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/yacht-services" element={<YachtServices />} />
            <Route path="/yacht" element={<YachtDetail />} />
            <Route path="/yacht/:id" element={<YachtDetail />} />
            <Route path="/jet/:id" element={<JetDetail />} />
            <Route path="/getaway/:id" element={<GetawayDetail />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/private-jets" element={<PrivateJets />} />
            <Route path="/luxury-getaways" element={<LuxuryGetaways />} />
            <Route path="/blog" element={<BlogMain />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact-us" element={<ContactUs />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
