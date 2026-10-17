import React, { useState, useEffect } from 'react';
import { ArrowRight, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export interface PromoOffer {
  id: string;
  badge: string;
  headline: string;
  benefit: string;
  targetService: string;
  initialNotes: string;
}

export const PROMO_OFFERS: PromoOffer[] = [
  {
    id: 'oferta-puntos-gratis',
    badge: 'OFERTA DE TEMPORADA',
    headline: 'Chequeo de 40 puntos de seguridad GRATIS con tu Cambio de Aceite y Filtro sintético.',
    benefit: 'Ahorro de RD$ 1,500',
    targetService: 'Cambio de Aceite y Filtro (desde RD$ 2,850)',
    initialNotes: 'Quiero aprovechar la promoción del Chequeo de 40 puntos gratis con el cambio de aceite.',
  },
  {
    id: 'oferta-pre-itv',
    badge: 'ESPECIAL MARBETE & INTRANT',
    headline: 'Escaneo computarizado OBD2 + Prueba de gases para Revista por solo RD$ 1,600.',
    benefit: 'Aprobación garantizada',
    targetService: 'Inspección Marbete y Emisiones (RD$ 1,800)',
    initialNotes: 'Quiero la oferta especial de escaneo y chequeo de gases a RD$ 1,600.',
  },
  {
    id: 'oferta-viaje-interior',
    badge: 'PLAN VIAJE AL INTERIOR',
    headline: 'Inspección de cortesía de batería, bandas de frenos y tren delantero al agendar online.',
    benefit: 'Diagnóstico 0 RD$',
    targetService: 'Frenos y Pastillas / Bandas (desde RD$ 3,400)',
    initialNotes: 'Solicito la inspección de cortesía de frenos, tren delantero y batería para viajar al interior.',
  },
];

interface PromoBannerProps {
  onClaimOffer: (offer: PromoOffer) => void;
  onDismiss: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onClaimOffer, onDismiss }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate offers every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PROMO_OFFERS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const currentOffer = PROMO_OFFERS[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + PROMO_OFFERS.length) % PROMO_OFFERS.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % PROMO_OFFERS.length);
  };

  return (
    <div className="w-full bg-[#ffc400] text-[#111315] border-b border-[#000000]/20 relative z-50 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12 py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm">
        {/* Left: Tag icon + offer details */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-hidden flex-1 min-w-0">
          <div className="hidden xs:flex items-center justify-center w-6 h-6 bg-[#111315] text-[#ffc400] shrink-0">
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          {/* Badge */}
          <span className="font-headline uppercase font-extrabold bg-[#111315] text-white px-2 py-0.5 tracking-wider text-[10px] sm:text-xs shrink-0 select-none">
            {currentOffer.badge}
          </span>

          {/* Offer text */}
          <div className="truncate flex items-center gap-2">
            <span className="font-medium text-[#111315] font-sans truncate">
              {currentOffer.headline}
            </span>
            <span className="hidden md:inline-block font-headline text-xs uppercase bg-white/70 px-1.5 py-0.5 font-bold text-[#111315] shrink-0">
              {currentOffer.benefit}
            </span>
          </div>
        </div>

        {/* Right: Carousel controls + CTA + Dismiss button */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Offer switcher arrows */}
          <div className="hidden sm:flex items-center gap-0.5 bg-black/10 px-1 py-0.5">
            <button
              onClick={handlePrev}
              className="p-0.5 hover:bg-black/15 text-[#111315] transition-colors cursor-pointer"
              aria-label="Oferta anterior"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-[11px] font-bold px-1 select-none">
              {currentIndex + 1}/{PROMO_OFFERS.length}
            </span>
            <button
              onClick={handleNext}
              className="p-0.5 hover:bg-black/15 text-[#111315] transition-colors cursor-pointer"
              aria-label="Siguiente oferta"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Action Button */}
          <button
            onClick={() => onClaimOffer(currentOffer)}
            className="bg-[#111315] text-white font-headline text-xs sm:text-sm uppercase px-2.5 sm:px-3.5 py-1 sm:py-1.5 font-bold shadow-[2px_2px_0px_#000000] hover:bg-[#1E2022] hover:text-[#ffc400] transition-all active:translate-x-0.5 active:translate-y-0.5 flex items-center gap-1 whitespace-nowrap cursor-pointer"
          >
            <span>APROVECHAR</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Dismiss button */}
          <button
            onClick={onDismiss}
            className="p-1 text-[#111315] hover:bg-black/15 transition-colors cursor-pointer ml-0.5"
            aria-label="Cerrar aviso promocional"
            title="Ocultar banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
