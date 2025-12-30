import React from 'react';
import { Wind, Wifi, Waves, UtensilsCrossed, Tv, Volume2, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import roomSuiteImage from '@/assets/room-suite.jpg';
import roomClassicImage from '@/assets/room-classic.jpg';

const RoomsPage: React.FC = () => {
  const { t } = useLanguage();

  const rooms = [
    {
      name: t('rooms.classic'),
      description: t('rooms.classic.desc'),
      image: roomClassicImage,
      features: [
        { icon: Wind, label: t('feature.ac') },
        { icon: Wifi, label: t('feature.wifi') },
        { icon: Waves, label: t('feature.pool') },
        { icon: Tv, label: 'TV Satellite' },
      ],
      highlights: [
        'Lit queen size confortable',
        'Salle de bain privée',
        'Coffre-fort',
        'Minibar'
      ]
    },
    {
      name: t('rooms.double'),
      description: t('rooms.double.desc'),
      image: roomSuiteImage,
      features: [
        { icon: Wind, label: t('feature.ac') },
        { icon: Wifi, label: t('feature.wifi') },
        { icon: Waves, label: t('feature.pool') },
        { icon: Tv, label: 'TV Satellite' },
        { icon: UtensilsCrossed, label: t('feature.kitchen') },
      ],
      highlights: [
        'Lit king size',
        'Vue sur la piscine',
        'Coin salon',
        'Salle de bain de luxe'
      ]
    },
    {
      name: t('rooms.junior'),
      description: t('rooms.junior.desc'),
      image: roomSuiteImage,
      features: [
        { icon: Wind, label: t('feature.ac') },
        { icon: Wifi, label: t('feature.wifi') },
        { icon: Waves, label: t('feature.pool') },
        { icon: UtensilsCrossed, label: t('feature.kitchen') },
        { icon: Volume2, label: t('feature.soundproof') },
      ],
      highlights: [
        'Suite spacieuse',
        'Salon séparé',
        'Bureau de travail',
        'Baignoire et douche'
      ]
    },
    {
      name: t('rooms.senior'),
      description: t('rooms.senior.desc'),
      image: roomSuiteImage,
      features: [
        { icon: Wind, label: t('feature.ac') },
        { icon: Wifi, label: t('feature.wifi') },
        { icon: Waves, label: t('feature.pool') },
        { icon: UtensilsCrossed, label: t('feature.kitchen') },
        { icon: Volume2, label: t('feature.soundproof') },
      ],
      highlights: [
        'Notre plus grande suite',
        'Balcon privé panoramique',
        'Jacuzzi privatif',
        'Service VIP inclus'
      ]
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-ivory mb-6">
              {t('rooms.title')}
            </h1>
            <p className="text-ivory/80 text-xl">
              {t('rooms.subtitle')}
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-8" />
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {rooms.map((room, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-elevated hover-lift"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative aspect-[4/3] lg:aspect-auto">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-transparent lg:hidden" />
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {room.name}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {room.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {room.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full"
                        >
                          <feature.icon className="w-4 h-4 text-primary" />
                          <span className="text-sm text-foreground">{feature.label}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Highlights */}
                    <div className="grid grid-cols-2 gap-3">
                      {room.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent" />
                          <span className="text-sm text-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note about pricing */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pour les tarifs et disponibilités, veuillez nous contacter directement. 
            Notre équipe se fera un plaisir de vous aider à planifier votre séjour.
          </p>
        </div>
      </section>
    </main>
  );
};

export default RoomsPage;
