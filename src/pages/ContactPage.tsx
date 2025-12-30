import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Message envoyé avec succès! Nous vous répondrons bientôt.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-ivory mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-ivory/80 text-xl">
              {t('contact.subtitle')}
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-8" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                Envoyez-nous un message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="Jean Dupont"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="jean@exemple.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Votre message..."
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Envoi en cours...' : t('contact.send')}
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                Nos Coordonnées
              </h2>
              
              <div className="space-y-6">
                <div className="bg-card rounded-xl p-6 shadow-soft hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {t('contact.address')}
                      </h3>
                      <p className="text-muted-foreground">
                        Nyalla Pariso<br />
                        Douala, Région du Littoral<br />
                        Cameroun
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-soft hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {t('contact.phone')}
                      </h3>
                      <a href="tel:+237000000000" className="text-primary hover:underline">
                        +237 000 000 000
                      </a>
                      <div className="flex items-center gap-2 mt-2 text-muted-foreground text-sm">
                        <MessageCircle className="w-4 h-4" />
                        <span>WhatsApp disponible</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-soft hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Email
                      </h3>
                      <a href="mailto:contact@thedreamshotel.com" className="text-primary hover:underline">
                        contact@thedreamshotel.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-secondary rounded-xl p-6">
                  <h3 className="font-semibold text-ivory mb-4">
                    {t('contact.followUs')}
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/Thedreamshotel/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-ivory/10 flex items-center justify-center text-ivory hover:bg-primary hover:text-secondary transition-all duration-300"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full bg-ivory/10 flex items-center justify-center text-ivory hover:bg-primary hover:text-secondary transition-all duration-300"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
            {t('policies.frontdesk')}
          </h3>
          <p className="text-muted-foreground">
            Notre équipe parle français et anglais et est disponible 24h/24 pour vous assister.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
