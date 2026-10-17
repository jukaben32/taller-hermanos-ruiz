import React from 'react';
import { WORKSHOP_INFO, getWorkshopStatus } from '../data/workshopData';
import { ArrowRight, Phone, Star } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const status = getWorkshopStatus();

  return (
    <section className="relative w-full bg-[#111315] pt-10 sm:pt-14 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top live status & Google reviews row */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 pb-6 sm:pb-8 mb-8 sm:mb-10 border-b border-[#26292D]">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2.5 bg-[#181A1D] px-3.5 py-2 border border-[#26292D]">
            <span
              className={`inline-block w-2.5 h-2.5 ${
                status.isOpen ? 'bg-[#22C55E] animate-pulse' : 'bg-[#e2e2e5]'
              }`}
            />
            <span
              className={`font-headline text-xs sm:text-sm uppercase tracking-wider font-bold ${
                status.isOpen ? 'text-[#22C55E]' : 'text-[#c3c6cf]'
              }`}
            >
              {status.statusText}
            </span>
            <span className="font-headline text-xs sm:text-sm uppercase text-[#c3c6cf] tracking-wider">
              · {status.subText}
            </span>
          </div>

          {/* Google Reviews Badge */}
          <a
            href="#opiniones"
            className="flex items-center gap-2 bg-[#181A1D] px-3.5 py-2 border border-[#26292D] hover:border-[#ffc400] transition-colors"
          >
            <div className="flex text-[#ffc400]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#ffc400] text-[#ffc400]" />
              ))}
            </div>
            <span className="font-headline text-xs sm:text-sm uppercase text-[#e2e2e5] tracking-wider font-bold">
              ★ {WORKSHOP_INFO.googleRating} en Google
            </span>
            <span className="text-xs text-[#c3c6cf]">
              ({WORKSHOP_INFO.googleReviewCount} reseñas de clientes)
            </span>
          </a>
        </div>

        {/* Hero grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-block bg-[#181A1D] border-l-4 border-[#ffc400] px-3 py-1 mb-5">
              <span className="font-headline text-xs uppercase tracking-widest text-[#ffc400] font-bold">
                SANTO DOMINGO, D.N. · ENSANCHE LA FE · DESDE 1998
              </span>
            </div>

            <h1 className="font-headline text-4xl sm:text-6xl lg:text-[72px] uppercase tracking-tight text-[#e2e2e5] leading-none mb-6 font-extrabold">
              PRESUPUESTO CERRADO <br className="hidden sm:inline" />
              <span className="text-[#ffc400] bg-[#1E2022] px-2 sm:px-3 inline-block my-1 border-b-2 border-[#ffc400]">
                ANTES DE TOCAR
              </span>{' '}
              <br className="hidden sm:inline" />
              TU VEHÍCULO
            </h1>

            <p className="text-base sm:text-lg text-[#c3c6cf] max-w-2xl mb-8 leading-relaxed">
              Mecánica honesta, escaneo computarizado y tren delantero en Ensanche La Fe (Distrito Nacional, Santo Domingo). Más de 26 años
              solucionando averías sin sorpresas en la factura ni cobros adicionales imprevistos.
            </p>

            {/* High impact action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href={`https://wa.me/${WORKSHOP_INFO.whatsappClean}?text=Hola%20Hermanos%20Ruiz%20Santo%20Domingo%2C%20necesito%20presupuesto%20para%20mi%20veh%C3%ADculo`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#ffc400] text-[#181c22] font-headline text-base sm:text-lg uppercase px-6 sm:px-8 py-3.5 sm:py-4 font-bold shadow-[4px_4px_0px_#000000] hover:bg-[#ffdf99] transition-all active:translate-x-0.5 active:translate-y-0.5"
              >
                <span>PEDIR CITA POR WHATSAPP</span>
                <ArrowRight className="w-5 h-5 font-bold" />
              </a>

              <a
                href={`tel:${WORKSHOP_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-2.5 bg-[#181A1D] text-[#e2e2e5] border border-[#3A3E45] font-headline text-base sm:text-lg uppercase px-6 sm:px-8 py-3.5 sm:py-4 hover:border-[#ffc400] hover:text-[#ffc400] transition-colors font-bold"
              >
                <Phone className="w-5 h-5 text-[#ffc400]" />
                <span>LLAMAR ({WORKSHOP_INFO.phone})</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-[#26292D] w-full">
              <div className="border-l-2 border-[#ffc400] pl-3">
                <div className="font-headline text-2xl sm:text-3xl text-[#ffc400] font-bold">0 RD$</div>
                <div className="font-headline text-xs sm:text-sm uppercase text-[#c3c6cf] tracking-wider">
                  Presupuesto inicial
                </div>
              </div>
              <div className="border-l-2 border-[#ffc400] pl-3">
                <div className="font-headline text-2xl sm:text-3xl text-[#ffc400] font-bold">12 MESES</div>
                <div className="font-headline text-xs sm:text-sm uppercase text-[#c3c6cf] tracking-wider">
                  Garantía por escrito
                </div>
              </div>
              <div className="border-l-2 border-[#ffc400] pl-3">
                <div className="font-headline text-2xl sm:text-3xl text-[#ffc400] font-bold">EN EL DÍA</div>
                <div className="font-headline text-xs sm:text-sm uppercase text-[#c3c6cf] tracking-wider">
                  Mantenimiento exprés
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Industrial Frame Photo */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative bg-[#0B0C0E] border-2 border-[#26292D] p-3 shadow-[8px_8px_0px_#000000]">
              {/* Graphic bolt corners */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#ffc400]" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#ffc400]" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#ffc400]" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#ffc400]" />

              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#181A1D]">
                <img
                  className="w-full h-full object-cover filter contrast-105"
                  src={WORKSHOP_INFO.images.heroBoxes}
                  alt="Interior del taller mecánico Hermanos Ruiz con elevadores hidráulicos activos en Santo Domingo"
                />

                {/* Overlaid technical plate */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#111315]/95 border-l-4 border-[#ffc400] p-3 text-left">
                  <div className="flex items-center justify-between">
                    <span className="font-headline text-xs sm:text-sm uppercase tracking-widest text-[#ffc400] font-bold block">
                      REGISTRO TÉCNICO · BOXES 1 Y 2
                    </span>
                    <span className="font-mono text-xs text-[#ffc400]">RNC: 1-31-82947-1</span>
                  </div>
                  <span className="text-xs text-[#c3c6cf] block mt-0.5">
                    [FOTO REAL: Fachada y zona de elevadores hidráulicos en Ensanche La Fe, Santo Domingo]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
