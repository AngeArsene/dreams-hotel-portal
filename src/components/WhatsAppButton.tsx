import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhatsAppButton = () => {
  const { language } = useLanguage();
  
  // The Dreams Hotel WhatsApp number (replace with actual number)
  const whatsappNumber = "237600000000";
  const message = language === 'fr' 
    ? "Bonjour! Je souhaite avoir des informations sur The Dreams Hotel."
    : "Hello! I would like information about The Dreams Hotel.";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-elevated hover:scale-110 hover:shadow-gold transition-all duration-300 group"
      aria-label={language === 'fr' ? "Contactez-nous sur WhatsApp" : "Contact us on WhatsApp"}
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-secondary text-ivory text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-soft">
        {language === 'fr' ? "Discuter sur WhatsApp" : "Chat on WhatsApp"}
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </a>
  );
};

export default WhatsAppButton;
