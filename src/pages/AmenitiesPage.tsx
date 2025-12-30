import React from 'react';
import { 
  Waves, 
  Utensils, 
  Dumbbell, 
  Baby, 
  Briefcase, 
  Car,
  Wifi,
  Wind,
  Tv,
  Coffee,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import poolImage from '@/assets/pool-amenity.jpg';
import restaurantImage from '@/assets/restaurant-amenity.jpg';
import fitnessImage from '@/assets/fitness-amenity.jpg';

const AmenitiesPage: React.FC = () => {
  const { t } = useLanguage();

  const mainAmenities = [
    {
      icon: Waves,
      title: t('amenities.pools'),
      description: t('amenities.pools.desc'),
      image: poolImage,
      details: [
        '12 piscines extérieures',
        '1 piscine intérieure chauffée',
        'Piscine pour enfants sécurisée',
        'Transats et parasols inclus'
      ]
    },
    {
      icon: Utensils,
      title: t('amenities.restaurant'),
      description: t('amenities.restaurant.desc'),
      image: restaurantImage,
      details: [
        'Petit-déjeuner buffet gratuit',
        'Cuisine camerounaise et internationale',
        'Service en chambre disponible',
        'Bar lounge avec terrasse'
      ]
    },
    {
      icon: Dumbbell,
      title: t('amenities.fitness'),
      description: t('amenities.fitness.desc'),
      image: fitnessImage,
      details: [
        'Équipements cardio modernes',
        'Espace musculation complet',
        'Sauna relaxant',
        'Accès 24h/24'
      ]
    },
  ];

  const additionalAmenities = [
    { icon: Baby, title: t('amenities.kids'), description: t('amenities.kids.desc') },
    { icon: Briefcase, title: t('amenities.business'), description: t('amenities.business.desc') },
    { icon: Car, title: t('amenities.parking'), description: t('amenities.parking.desc') },
    { icon: Wifi, title: 'WiFi Haut Débit', description: 'Connexion gratuite dans tout l\'établissement' },
    { icon: Wind, title: 'Climatisation', description: 'Contrôle individuel dans chaque chambre' },
    { icon: Tv, title: 'TV Satellite', description: 'Chaînes internationales disponibles' },
    { icon: Coffee, title: 'Room Service', description: 'Disponible de 6h à 23h' },
    { icon: ShieldCheck, title: 'Sécurité 24/7', description: 'Personnel de sécurité et vidéosurveillance' },
    { icon: Clock, title: 'Réception 24h/24', description: 'À votre service jour et nuit' },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-ivory mb-6">
              {t('amenities.title')}
            </h1>
            <p className="text-ivory/80 text-xl">
              {t('amenities.subtitle')}
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-8" />
          </div>
        </div>
      </section>

      {/* Main Amenities */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {mainAmenities.map((amenity, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                    <img
                      src={amenity.image}
                      alt={amenity.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute top-4 left-4 w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                      <amenity.icon className="w-7 h-7 text-secondary" />
                    </div>
                  </div>
                </div>
                
                <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
                    {amenity.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    {amenity.description}
                  </p>
                  <ul className="space-y-4">
                    {amenity.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Amenities Grid */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-16">
            Autres Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalAmenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft hover-lift flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <amenity.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {amenity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {amenity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AmenitiesPage;
