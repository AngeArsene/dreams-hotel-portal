import React from 'react';
import { MapPin, Plane, Trophy, ShoppingBag, Coffee, Building } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LocationPage: React.FC = () => {
  const { t } = useLanguage();

  const nearbyAttractions = [
    {
      icon: Trophy,
      name: 'Stade Japoma',
      distance: '2 km',
      description: 'Stade moderne de la CAN 2021'
    },
    {
      icon: ShoppingBag,
      name: 'Marché Artisanal',
      distance: '3.8 km',
      description: 'Artisanat local et souvenirs'
    },
    {
      icon: Coffee,
      name: 'Terrific Coffee',
      distance: '1.5 km',
      description: 'Café et restauration'
    },
    {
      icon: Building,
      name: 'Centre-ville Douala',
      distance: '8 km',
      description: 'Commerce et affaires'
    },
    {
      icon: Plane,
      name: 'Aéroport International',
      distance: '9.2 km',
      description: 'Douala International Airport'
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-ivory mb-6">
              {t('location.title')}
            </h1>
            <p className="text-ivory/80 text-xl">
              {t('location.subtitle')}
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-8" />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7543219559047!2d9.7889!3d4.0228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNyalla%20Pariso%2C%20Douala!5e0!3m2!1sfr!2scm!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Dreams Hotel Location"
                className="w-full"
              />
            </div>

            {/* Address & Info */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Comment nous trouver
              </h2>
              
              <div className="bg-card rounded-xl p-6 shadow-soft mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Adresse</h3>
                    <p className="text-muted-foreground">
                      Nyalla Pariso<br />
                      Douala, Région du Littoral<br />
                      Cameroun
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Plane className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{t('location.airport')}</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{t('location.stadium')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-4">
            {t('location.attractions')}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Découvrez les attractions et points d'intérêt à proximité de notre hôtel
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {nearbyAttractions.map((attraction, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <attraction.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-foreground">
                        {attraction.name}
                      </h3>
                      <span className="text-primary text-sm font-medium">
                        {attraction.distance}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {attraction.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation Tips */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl font-semibold text-ivory mb-4">
            Transport depuis l'aéroport
          </h3>
          <p className="text-ivory/80 max-w-2xl mx-auto">
            Des taxis sont disponibles à l'aéroport international de Douala. 
            Le trajet jusqu'à l'hôtel prend environ 20-30 minutes selon le trafic. 
            Contactez-nous pour organiser un transfert privé.
          </p>
        </div>
      </section>
    </main>
  );
};

export default LocationPage;
