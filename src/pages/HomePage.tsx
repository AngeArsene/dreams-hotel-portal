import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Waves, 
  Utensils, 
  Dumbbell, 
  Baby, 
  Briefcase, 
  Car,
  Star,
  ArrowRight,
  MapPin,
  Quote
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-hotel.jpg';
import poolImage from '@/assets/pool-amenity.jpg';
import restaurantImage from '@/assets/restaurant-amenity.jpg';
import fitnessImage from '@/assets/fitness-amenity.jpg';
import roomSuiteImage from '@/assets/room-suite.jpg';
import roomClassicImage from '@/assets/room-classic.jpg';

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  const amenities = [
    {
      icon: Waves,
      title: t('amenities.pools'),
      description: t('amenities.pools.desc'),
      image: poolImage,
    },
    {
      icon: Utensils,
      title: t('amenities.restaurant'),
      description: t('amenities.restaurant.desc'),
      image: restaurantImage,
    },
    {
      icon: Dumbbell,
      title: t('amenities.fitness'),
      description: t('amenities.fitness.desc'),
      image: fitnessImage,
    },
    {
      icon: Baby,
      title: t('amenities.kids'),
      description: t('amenities.kids.desc'),
      image: poolImage,
    },
    {
      icon: Briefcase,
      title: t('amenities.business'),
      description: t('amenities.business.desc'),
      image: restaurantImage,
    },
    {
      icon: Car,
      title: t('amenities.parking'),
      description: t('amenities.parking.desc'),
      image: fitnessImage,
    },
  ];

  const rooms = [
    {
      name: t('rooms.classic'),
      description: t('rooms.classic.desc'),
      image: roomClassicImage,
      features: [t('feature.ac'), t('feature.wifi'), t('feature.pool')],
    },
    {
      name: t('rooms.junior'),
      description: t('rooms.junior.desc'),
      image: roomSuiteImage,
      features: [t('feature.ac'), t('feature.wifi'), t('feature.kitchen'), t('feature.pool')],
    },
    {
      name: t('rooms.senior'),
      description: t('rooms.senior.desc'),
      image: roomSuiteImage,
      features: [t('feature.ac'), t('feature.wifi'), t('feature.kitchen'), t('feature.balcony'), t('feature.soundproof')],
    },
  ];

  const testimonials = [
    {
      text: "Un petit paradis près du stade Japoma. Les piscines sont magnifiques et le personnel très accueillant.",
      author: "Marie L.",
      rating: 5,
    },
    {
      text: "Excellent séjour en famille. Les enfants ont adoré le club enfants et nous avons apprécié le calme de l'endroit.",
      author: "Jean-Pierre K.",
      rating: 5,
    },
    {
      text: "Perfect for business travel. Clean rooms, great WiFi, and the restaurant serves delicious local cuisine.",
      author: "David M.",
      rating: 5,
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-primary font-medium tracking-widest uppercase mb-4 animate-fade-up opacity-0 animation-delay-100">
              {t('hero.welcome')}
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-ivory mb-6 animate-fade-up opacity-0 animation-delay-200">
              {t('hero.title')}
            </h1>
            <p className="text-ivory/90 text-xl md:text-2xl mb-10 animate-fade-up opacity-0 animation-delay-300">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 animation-delay-400">
              <Button asChild variant="hero" size="xl">
                <Link to="/rooms">
                  {t('hero.cta.rooms')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/contact">
                  {t('hero.cta.contact')}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-ivory/50 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('amenities.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('amenities.subtitle')}
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-xl overflow-hidden shadow-soft hover-lift"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <amenity.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-ivory">
                      {amenity.title}
                    </h3>
                  </div>
                  <p className="text-ivory/80 text-sm">
                    {amenity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/amenities">
                {t('nav.amenities')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Rooms Preview Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ivory mb-4">
              {t('rooms.title')}
            </h2>
            <p className="text-ivory/70 text-lg max-w-2xl mx-auto">
              {t('rooms.subtitle')}
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div
                key={index}
                className="group bg-navy-light rounded-xl overflow-hidden hover-lift"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-ivory mb-2">
                    {room.name}
                  </h3>
                  <p className="text-ivory/70 text-sm mb-4">
                    {room.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {room.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="hero" size="lg">
              <Link to="/rooms">
                {t('rooms.viewAll')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-soft hover-lift"
              >
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">
                    {testimonial.author}
                  </span>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Teaser */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('location.title')}
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              {t('location.subtitle')}
            </p>
            <p className="text-foreground mb-8">
              {t('location.airport')} • {t('location.stadium')}
            </p>
            <Button asChild variant="default" size="lg">
              <Link to="/location">
                {t('nav.location')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
