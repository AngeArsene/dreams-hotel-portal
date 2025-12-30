import React from 'react';
import { Clock, Calendar, Baby, PawPrint, CreditCard, Users, AlertCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PoliciesPage: React.FC = () => {
  const { t } = useLanguage();

  const policies = [
    {
      icon: Clock,
      title: t('policies.checkin'),
      content: t('policies.checkin.time'),
      note: t('policies.express'),
      type: 'success'
    },
    {
      icon: Clock,
      title: t('policies.checkout'),
      content: t('policies.checkout.time'),
      note: 'Check-out tardif possible sur demande',
      type: 'info'
    },
    {
      icon: Calendar,
      title: t('policies.cancellation'),
      content: t('policies.cancellation.desc'),
      note: 'Contactez-nous pour les conditions spéciales',
      type: 'success'
    },
    {
      icon: Baby,
      title: t('policies.children'),
      content: t('policies.children.desc'),
      note: 'Lits bébé disponibles sur demande',
      type: 'success'
    },
    {
      icon: PawPrint,
      title: t('policies.pets'),
      content: t('policies.pets.desc'),
      note: null,
      type: 'warning'
    },
    {
      icon: CreditCard,
      title: 'Paiement',
      content: 'Cartes bancaires et espèces acceptées',
      note: 'Visa, Mastercard, Mobile Money',
      type: 'info'
    },
  ];

  const additionalInfo = [
    {
      title: 'Réception 24h/24',
      description: 'Notre équipe est disponible jour et nuit pour répondre à vos besoins.'
    },
    {
      title: 'Langues parlées',
      description: 'Français et Anglais'
    },
    {
      title: 'Fumeurs',
      description: 'Chambres non-fumeurs. Zones fumeurs désignées à l\'extérieur.'
    },
    {
      title: 'Accessibilité',
      description: 'Certaines chambres sont accessibles aux personnes à mobilité réduite.'
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-ivory mb-6">
              {t('policies.title')}
            </h1>
            <p className="text-ivory/80 text-xl">
              Tout ce que vous devez savoir pour planifier votre séjour
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-8" />
          </div>
        </div>
      </section>

      {/* Main Policies */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    policy.type === 'success' ? 'bg-accent/20' :
                    policy.type === 'warning' ? 'bg-destructive/20' :
                    'bg-primary/20'
                  }`}>
                    <policy.icon className={`w-6 h-6 ${
                      policy.type === 'success' ? 'text-accent' :
                      policy.type === 'warning' ? 'text-destructive' :
                      'text-primary'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg mb-2">
                      {policy.title}
                    </h3>
                    <p className="text-foreground mb-2">
                      {policy.content}
                    </p>
                    {policy.note && (
                      <p className="text-muted-foreground text-sm">
                        {policy.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
            Informations Complémentaires
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-card rounded-lg shadow-soft"
              >
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    {info.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex items-start gap-4 p-6 bg-navy-light rounded-xl">
            <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-ivory mb-2">
                Note Importante
              </h3>
              <p className="text-ivory/80 text-sm">
                Les politiques peuvent être sujettes à des modifications. Pour les informations les plus récentes 
                sur les tarifs, disponibilités et conditions spéciales, veuillez nous contacter directement. 
                Notre équipe se fera un plaisir de vous accompagner dans la planification de votre séjour.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PoliciesPage;
