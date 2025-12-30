import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.amenities': 'Services',
    'nav.rooms': 'Chambres',
    'nav.location': 'Emplacement',
    'nav.policies': 'Politiques',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.welcome': 'Bienvenue à',
    'hero.title': 'The Dreams Hotel',
    'hero.subtitle': 'Un havre de détente au cœur de Douala',
    'hero.cta.rooms': 'Découvrir nos chambres',
    'hero.cta.contact': 'Nous contacter',
    
    // Amenities Section
    'amenities.title': 'Nos Services',
    'amenities.subtitle': 'Un paradis de confort et de luxe',
    'amenities.pools': '12 Piscines',
    'amenities.pools.desc': 'Piscines extérieures et intérieure pour toute la famille',
    'amenities.restaurant': 'Restaurant',
    'amenities.restaurant.desc': 'Petit-déjeuner gratuit et cuisine locale raffinée',
    'amenities.fitness': 'Fitness & Spa',
    'amenities.fitness.desc': 'Salle de sport moderne et sauna relaxant',
    'amenities.kids': 'Club Enfants',
    'amenities.kids.desc': 'Espace de jeux sécurisé pour les petits',
    'amenities.business': 'Centre d\'affaires',
    'amenities.business.desc': 'Salles de réunion équipées et WiFi haut débit',
    'amenities.parking': 'Parking Gratuit',
    'amenities.parking.desc': 'Stationnement sécurisé pour tous nos clients',
    
    // Rooms Section
    'rooms.title': 'Nos Chambres',
    'rooms.subtitle': 'Confort et élégance pour votre séjour',
    'rooms.classic': 'Chambre Classique',
    'rooms.classic.desc': 'Confortable et bien équipée pour un séjour agréable',
    'rooms.double': 'Double Luxe',
    'rooms.double.desc': 'Espace généreux avec vue sur la piscine',
    'rooms.junior': 'Junior Suite',
    'rooms.junior.desc': 'Suite élégante avec coin salon séparé',
    'rooms.senior': 'Senior Suite',
    'rooms.senior.desc': 'Notre suite premium avec balcon privé',
    'rooms.viewAll': 'Voir toutes les chambres',
    
    // Features
    'feature.ac': 'Climatisation',
    'feature.wifi': 'WiFi Gratuit',
    'feature.pool': 'Accès Piscine',
    'feature.kitchen': 'Kitchenette',
    'feature.soundproof': 'Insonorisation',
    'feature.balcony': 'Balcon',
    
    // Testimonials
    'testimonials.title': 'Avis de nos clients',
    'testimonials.subtitle': 'Ce que disent nos visiteurs',
    
    // Location
    'location.title': 'Notre Emplacement',
    'location.subtitle': 'Idéalement situé à Nyalla Pariso',
    'location.airport': 'À 5.7 miles de l\'aéroport de Douala',
    'location.stadium': 'Proche du Stade Japoma',
    'location.attractions': 'Attractions à proximité',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Nous sommes à votre écoute',
    'contact.name': 'Votre nom',
    'contact.email': 'Votre email',
    'contact.message': 'Votre message',
    'contact.send': 'Envoyer',
    'contact.phone': 'Téléphone',
    'contact.address': 'Adresse',
    'contact.followUs': 'Suivez-nous',
    
    // Footer
    'footer.description': 'Votre destination de luxe à Douala, Cameroun. Un petit paradis près du stade Japoma.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.legal': 'Mentions Légales',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions générales',
    'footer.rights': 'Tous droits réservés',
    
    // Policies
    'policies.title': 'Politiques de Réservation',
    'policies.checkin': 'Arrivée',
    'policies.checkout': 'Départ',
    'policies.checkin.time': 'À partir de 14h00',
    'policies.checkout.time': 'Avant 12h00',
    'policies.cancellation': 'Politique d\'annulation',
    'policies.cancellation.desc': 'Annulation gratuite jusqu\'à 24h avant l\'arrivée',
    'policies.children': 'Enfants',
    'policies.children.desc': 'Les enfants de tous âges sont les bienvenus',
    'policies.pets': 'Animaux',
    'policies.pets.desc': 'Les animaux ne sont pas acceptés',
    'policies.frontdesk': 'Réception 24h/24',
    'policies.express': 'Check-in express disponible',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.amenities': 'Amenities',
    'nav.rooms': 'Rooms',
    'nav.location': 'Location',
    'nav.policies': 'Policies',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.welcome': 'Welcome to',
    'hero.title': 'The Dreams Hotel',
    'hero.subtitle': 'A haven of relaxation in the heart of Douala',
    'hero.cta.rooms': 'Discover our rooms',
    'hero.cta.contact': 'Contact us',
    
    // Amenities Section
    'amenities.title': 'Our Amenities',
    'amenities.subtitle': 'A paradise of comfort and luxury',
    'amenities.pools': '12 Pools',
    'amenities.pools.desc': 'Outdoor and indoor pools for the whole family',
    'amenities.restaurant': 'Restaurant',
    'amenities.restaurant.desc': 'Free breakfast and refined local cuisine',
    'amenities.fitness': 'Fitness & Spa',
    'amenities.fitness.desc': 'Modern gym and relaxing sauna',
    'amenities.kids': 'Kids Club',
    'amenities.kids.desc': 'Safe play area for children',
    'amenities.business': 'Business Center',
    'amenities.business.desc': 'Equipped meeting rooms and high-speed WiFi',
    'amenities.parking': 'Free Parking',
    'amenities.parking.desc': 'Secure parking for all our guests',
    
    // Rooms Section
    'rooms.title': 'Our Rooms',
    'rooms.subtitle': 'Comfort and elegance for your stay',
    'rooms.classic': 'Classic Room',
    'rooms.classic.desc': 'Comfortable and well-equipped for a pleasant stay',
    'rooms.double': 'Double Deluxe',
    'rooms.double.desc': 'Generous space with pool view',
    'rooms.junior': 'Junior Suite',
    'rooms.junior.desc': 'Elegant suite with separate living area',
    'rooms.senior': 'Senior Suite',
    'rooms.senior.desc': 'Our premium suite with private balcony',
    'rooms.viewAll': 'View all rooms',
    
    // Features
    'feature.ac': 'Air Conditioning',
    'feature.wifi': 'Free WiFi',
    'feature.pool': 'Pool Access',
    'feature.kitchen': 'Kitchenette',
    'feature.soundproof': 'Soundproofing',
    'feature.balcony': 'Balcony',
    
    // Testimonials
    'testimonials.title': 'Guest Reviews',
    'testimonials.subtitle': 'What our visitors say',
    
    // Location
    'location.title': 'Our Location',
    'location.subtitle': 'Ideally located in Nyalla Pariso',
    'location.airport': '5.7 miles from Douala Airport',
    'location.stadium': 'Near Japoma Stadium',
    'location.attractions': 'Nearby Attractions',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to help',
    'contact.name': 'Your name',
    'contact.email': 'Your email',
    'contact.message': 'Your message',
    'contact.send': 'Send',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.followUs': 'Follow Us',
    
    // Footer
    'footer.description': 'Your luxury destination in Douala, Cameroon. A little paradise near Japoma Stadium.',
    'footer.quickLinks': 'Quick Links',
    'footer.legal': 'Legal Notice',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.rights': 'All rights reserved',
    
    // Policies
    'policies.title': 'Booking Policies',
    'policies.checkin': 'Check-in',
    'policies.checkout': 'Check-out',
    'policies.checkin.time': 'From 2:00 PM',
    'policies.checkout.time': 'Before 12:00 PM',
    'policies.cancellation': 'Cancellation Policy',
    'policies.cancellation.desc': 'Free cancellation up to 24h before arrival',
    'policies.children': 'Children',
    'policies.children.desc': 'Children of all ages are welcome',
    'policies.pets': 'Pets',
    'policies.pets.desc': 'Pets are not allowed',
    'policies.frontdesk': '24-hour Front Desk',
    'policies.express': 'Express check-in available',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    // Detect browser language, default to French for Cameroon
    const browserLang = navigator.language.slice(0, 2);
    if (browserLang === 'en') {
      setLanguage('en');
    }
  }, []);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
