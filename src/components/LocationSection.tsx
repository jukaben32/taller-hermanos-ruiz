import React from 'react';
import { WORKSHOP_INFO } from '../data/workshopData';
import { MapPin, Navigation, Train, Bus } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F3EE] text-[#111315] py-20 sm:py-24 px-4 sm:px-6 lg:px-12 border-t-2 border-[#D8D5CC]" id="donde-estamos">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b-2 border-[#D8D5CC] gap-4">
          <div>
            <span className="font-headline text-xs sm:text-sm uppercase tracking-widest text-[#6D5300] bg-[#FFC400]/25 px-3 py-1 inline-block mb-3 font-bold">
              06 // DÓNDE ENCONTRARNOS
            </span>
            <h2 className="font-headline text-3xl sm:text-5xl lg:text-[64px] uppercase tracking-tight text-[#111315] leading-none font-extrabold">
              EN EL CORAZÓN DE SANTO DOMINGO
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#575753] max-w-md font-medium">
            Acceso rápido desde la Av. John F. Kennedy, Av. 27 de Febrero y Expreso Quinto Centenario.
            Metro a 4 minutos para que dejes tu vehículo y continúes con tu día.
          </p>
        </div>

        {/* 2-Column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Map Preview with Overlaid Pin Card */}
          <div className="lg:col-span-7 bg-[#111315] p-2 border-2 border-[#111315] flex flex-col min-h-[400px]">
            <div
              className="w-full h-full min-h-[380px] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${WORKSHOP_INFO.images.mapImage})` }}
              data-location={`${WORKSHOP_INFO.address}, Santo Domingo, República Dominicana`}
            >
              {/* Overlay with central workshop tag */}
              <div className="absolute inset-0 bg-[#111315]/40 flex items-center justify-center p-4">
                <div className="bg-[#111315] border-2 border-[#ffc400] p-5 max-w-xs shadow-[6px_6px_0px_#000000] text-center">
                  <MapPin className="w-8 h-8 text-[#ffc400] mx-auto mb-1 animate-bounce" />
                  <span className="font-headline text-xl uppercase text-white block font-bold">
                    HERMANOS RUIZ
                  </span>
                  <span className="text-xs text-[#c3c6cf] block mt-1 font-mono">
                    {WORKSHOP_INFO.address} · Santo Domingo, D.N.
                  </span>
                  <span className="font-headline text-xs text-[#ffc400] uppercase block mt-2 font-bold tracking-wider">
                    ★ Acceso directo y parqueo disponible
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Directions & Exterior Photo */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="bg-white border-2 border-[#D8D5CC] p-6 sm:p-8">
              <h3 className="font-headline text-2xl uppercase text-[#111315] mb-2 font-bold">
                {WORKSHOP_INFO.name}
              </h3>
              <p className="text-sm text-[#575753] mb-6">
                <strong className="text-[#111315]">{WORKSHOP_INFO.address}</strong>
                <br />
                {WORKSHOP_INFO.city}, {WORKSHOP_INFO.district} · República Dominicana
              </p>

              {/* Transit Directions */}
              <div className="space-y-4 pt-4 border-t border-[#EBE9E4]">
                <div className="flex items-start gap-3">
                  <Train className="w-5 h-5 text-[#111315] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-headline text-sm uppercase text-[#111315] block font-bold">
                      En Metro:
                    </strong>
                    <span className="text-xs sm:text-sm text-[#575753]">{WORKSHOP_INFO.transit.metro}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Bus className="w-5 h-5 text-[#111315] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-headline text-sm uppercase text-[#111315] block font-bold">
                      En Transporte Público / OMSA:
                    </strong>
                    <span className="text-xs sm:text-sm text-[#575753]">{WORKSHOP_INFO.transit.bus}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-[#111315] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-headline text-sm uppercase text-[#111315] block font-bold">
                      En Vehículo (Vías Principales):
                    </strong>
                    <span className="text-xs sm:text-sm text-[#575753]">{WORKSHOP_INFO.transit.car}</span>
                  </div>
                </div>
              </div>

              {/* Open in Google Maps */}
              <div className="mt-8">
                <a
                  className="w-full text-center block bg-[#111315] text-[#F5F3EE] font-headline text-base uppercase py-3.5 border-l-4 border-[#ffc400] hover:bg-[#ffc400] hover:text-[#111315] hover:border-[#111315] transition-colors shadow-[4px_4px_0px_#000000] font-bold tracking-wider"
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    `Taller Hermanos Ruiz ${WORKSHOP_INFO.address} Santo Domingo Republica Dominicana`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ABRIR RUTA EN GOOGLE MAPS ↗
                </a>
              </div>
            </div>

            {/* Entrance Photo */}
            <div className="bg-white border-2 border-[#D8D5CC] p-3">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#EBE9E4]">
                <img
                  className="w-full h-full object-cover"
                  src={WORKSHOP_INFO.images.workshopEntrance}
                  alt="Fachada del taller Hermanos Ruiz en Santo Domingo"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-[#111315]/95 px-3 py-1.5 border-l-2 border-[#ffc400] flex items-center justify-between">
                  <span className="font-headline text-[11px] uppercase tracking-wider text-[#F5F3EE]">
                    [ACCESO PRINCIPAL EN ENSANCHE LA FE]
                  </span>
                  <span className="font-headline text-[11px] uppercase font-bold text-[#22C55E]">
                    RAMPAS ACTIVAS
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
