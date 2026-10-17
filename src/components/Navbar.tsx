import React, { useState, useEffect } from 'react';
import { WORKSHOP_INFO, getWorkshopStatus } from '../data/workshopData';
import { PromoBanner, PromoOffer } from './PromoBanner';
import { SocialLinks } from './SocialLinks';
import { Menu, X, Phone, MessageSquare, Wrench, Clock, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onClaimOffer: (offer: PromoOffer) => void;
  promoVisible: boolean;
  onTogglePromo: (visible: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onClaimOffer,
  promoVisible,
  onTogglePromo,
}) => {
  const [status, setStatus] = useState(getWorkshopStatus());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getWorkshopStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#111315] border-b-2 border-[#ffc400] shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
      {/* Promotional Banner in brand yellow */}
      {promoVisible && (
        <PromoBanner
          onClaimOffer={(offer) => {
            onClaimOffer(offer);
            setMobileMenuOpen(false);
          }}
          onDismiss={() => onTogglePromo(false)}
        />
      )}

      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Logo & Brand lockup */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <img
            alt="Logotipo Hermanos Ruiz"
            className="h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            src={WORKSHOP_INFO.images.logo}
          />
          <div className="flex flex-col border-l border-[#4f4632] pl-3">
            <span className="font-headline text-lg sm:text-2xl uppercase tracking-wider text-[#e2e2e5] leading-none font-bold">
              Hermanos Ruiz
            </span>
            <span className="font-headline text-xs sm:text-sm uppercase tracking-widest text-[#ffc400] leading-none mt-1 font-semibold">
              Taller Mecánico · Santo Domingo
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          <a
            href="#servicios"
            className="font-headline text-sm uppercase tracking-wider text-[#c3c6cf] hover:text-[#ffc400] transition-colors pb-1 hover:border-b-2 hover:border-[#ffc400]"
          >
            Servicios
          </a>
          <a
            href="#calculadora"
            className="font-headline text-sm uppercase tracking-wider text-[#c3c6cf] hover:text-[#ffc400] transition-colors pb-1 hover:border-b-2 hover:border-[#ffc400] flex items-center gap-1"
          >
            <span className="w-1.5 h-1.5 bg-[#ffc400]"></span>
            Calculador Presupuesto
          </a>
          <a
            href="#como-trabajamos"
            className="font-headline text-sm uppercase tracking-wider text-[#c3c6cf] hover:text-[#ffc400] transition-colors pb-1 hover:border-b-2 hover:border-[#ffc400]"
          >
            Cómo trabajamos
          </a>
          <a
            href="#opiniones"
            className="font-headline text-sm uppercase tracking-wider text-[#c3c6cf] hover:text-[#ffc400] transition-colors pb-1 hover:border-b-2 hover:border-[#ffc400]"
          >
            Opiniones
          </a>
          <a
            href="#donde-estamos"
            className="font-headline text-sm uppercase tracking-wider text-[#c3c6cf] hover:text-[#ffc400] transition-colors pb-1 hover:border-b-2 hover:border-[#ffc400]"
          >
            Dónde estamos
          </a>

          {/* Quick toggle to show promo banner if closed */}
          {!promoVisible && (
            <button
              onClick={() => onTogglePromo(true)}
              className="font-headline text-xs uppercase bg-[#ffc400]/15 text-[#ffc400] border border-[#ffc400]/40 px-2.5 py-1 hover:bg-[#ffc400] hover:text-[#111315] transition-colors flex items-center gap-1 font-bold cursor-pointer"
              title="Ver campañas de descuento activas"
            >
              <Sparkles className="w-3 h-3" />
              <span>Ofertas RD$</span>
            </button>
          )}
        </nav>

        {/* Right Action zone: Direct phone + CTA */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          {/* Phone numbers status block on desktop */}
          <div className="hidden md:flex flex-col text-right">
            <div className="flex items-center justify-end gap-1.5">
              <span
                className={`inline-block w-2 h-2 ${
                  status.isOpen ? 'bg-[#22C55E]' : 'bg-[#e2e2e5]'
                }`}
              />
              <span
                className={`font-headline text-xs uppercase tracking-wider font-bold ${
                  status.isOpen ? 'text-[#22C55E]' : 'text-[#c3c6cf]'
                }`}
              >
                {status.statusText}
              </span>
              <a
                href={`tel:${WORKSHOP_INFO.phoneClean}`}
                className="font-headline text-xs uppercase tracking-wider text-[#e2e2e5] hover:text-[#ffc400] transition-colors"
              >
                · {WORKSHOP_INFO.phone}
              </a>
            </div>
            <span className="font-headline text-xs text-[#c3c6cf] uppercase tracking-wider mt-0.5">
              WhatsApp: <strong className="text-[#ffc400] font-bold">{WORKSHOP_INFO.whatsapp}</strong>
            </span>
          </div>

          {/* Pedir Cita CTA */}
          <button
            onClick={onOpenBooking}
            className="bg-[#ffc400] text-[#181c22] font-headline text-base sm:text-lg uppercase px-4 sm:px-6 py-2.5 sm:py-3 font-bold rounded-none shadow-[3px_3px_0px_#000000] hover:bg-[#ffdf99] transition-all active:translate-x-0.5 active:translate-y-0.5 cursor-pointer whitespace-nowrap"
          >
            Pedir Cita
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center bg-[#1e2022] border border-[#333537] text-[#e2e2e5] hover:text-[#ffc400]"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#181a1d] border-b-2 border-[#ffc400] px-6 py-5 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            <div className="pb-3 border-b border-[#26292d] flex items-center justify-between text-xs font-headline uppercase text-[#c3c6cf]">
              <span className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 inline-block ${
                    status.isOpen ? 'bg-[#22C55E]' : 'bg-[#e2e2e5]'
                  }`}
                />
                <strong className={status.isOpen ? 'text-[#22C55E]' : 'text-white'}>
                  {status.statusText}
                </strong>
                <span>· {status.subText}</span>
              </span>
              <span className="text-[#ffc400]">Santo Domingo, D.N.</span>
            </div>

            {/* If banner is dismissed, allow reopening from drawer */}
            {!promoVisible && (
              <button
                onClick={() => {
                  onTogglePromo(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-[#ffc400] text-[#111315] py-2 px-3 font-headline uppercase font-bold text-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Ver Campañas y Descuentos Activos (RD$)</span>
              </button>
            )}

            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="font-headline text-lg uppercase tracking-wider text-white hover:text-[#ffc400] flex items-center gap-2"
            >
              <Wrench className="w-4 h-4 text-[#ffc400]" />
              Nuestros Servicios y Tarifas
            </a>
            <a
              href="#calculadora"
              onClick={() => setMobileMenuOpen(false)}
              className="font-headline text-lg uppercase tracking-wider text-[#ffc400] flex items-center gap-2"
            >
              <Clock className="w-4 h-4 text-[#ffc400]" />
              Calculador de Presupuesto en RD$
            </a>
            <a
              href="#como-trabajamos"
              onClick={() => setMobileMenuOpen(false)}
              className="font-headline text-lg uppercase tracking-wider text-white hover:text-[#ffc400]"
            >
              Cómo trabajamos (3 Pasos)
            </a>
            <a
              href="#opiniones"
              onClick={() => setMobileMenuOpen(false)}
              className="font-headline text-lg uppercase tracking-wider text-white hover:text-[#ffc400]"
            >
              Opiniones de Clientes (★ 4.8)
            </a>
            <a
              href="#donde-estamos"
              onClick={() => setMobileMenuOpen(false)}
              className="font-headline text-lg uppercase tracking-wider text-white hover:text-[#ffc400]"
            >
              Dónde estamos (Ensanche La Fe)
            </a>

            <div className="pt-4 border-t border-[#26292d] grid grid-cols-2 gap-3">
              <a
                href={`tel:${WORKSHOP_INFO.phoneClean}`}
                className="bg-[#111315] border border-[#3a3e45] py-2.5 px-3 text-center font-headline uppercase text-white flex items-center justify-center gap-1.5 text-sm"
              >
                <Phone className="w-4 h-4 text-[#ffc400]" />
                {WORKSHOP_INFO.phone}
              </a>
              <a
                href={`https://wa.me/${WORKSHOP_INFO.whatsappClean}?text=Hola%20Hermanos%20Ruiz%2C%20necesito%20consulta%20de%20taller%20en%20Santo%20Domingo`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ffc400] text-[#111315] font-bold py-2.5 px-3 text-center font-headline uppercase flex items-center justify-center gap-1.5 text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
            </div>

            <div className="pt-4 border-t border-[#26292d]">
              <div className="font-headline text-xs uppercase text-[#9c8f78] mb-2 font-bold tracking-wider">
                Síguenos en Redes Sociales
              </div>
              <SocialLinks variant="compact" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
