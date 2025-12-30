import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HomePage from "@/pages/HomePage";
import AmenitiesPage from "@/pages/AmenitiesPage";
import RoomsPage from "@/pages/RoomsPage";
import LocationPage from "@/pages/LocationPage";
import PoliciesPage from "@/pages/PoliciesPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/amenities" element={<AmenitiesPage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/policies" element={<PoliciesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
