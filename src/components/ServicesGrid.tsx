import React from 'react';
import { WORKSHOP_SERVICES, WorkshopService } from '../data/workshopData';
import { Clock } from 'lucide-react';

interface ServicesGridProps {
  onSelectService: (service: WorkshopService) => void;
  onOpenCalculator: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onSelectService,
  onOpenCalculator,
}) => {
  return (
    <section className="w-full bg-[#F5F3EE] text-[#111315] py-20 sm:py-24 px-4 sm:px-6 lg:px-12" id="servicios">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b-2 border-[#D8D5CC] gap-4">
          <div>
            <span className="font-headline text-xs sm:text-sm uppercase tracking-widest text-[#6D5300] bg-[#FFC400]/25 px-3 py-1 inline-block mb-3 font-bold">
              01 // NUESTROS SERVICIOS
            </span>
            <h2 className="font-headline text-3xl sm:text-5xl lg:text-[64px] uppercase tracking-tight text-[#111315] leading-none font-extrabold">
              MECÁNICA CLARA Y TARIFAS PÚBLICAS
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <p className="text-sm sm:text-base text-[#575753] max-w-md font-medium">
              Precios transparentes en pesos dominicanos (RD$) y tiempos reales. Si detectamos algo imprevisto, te avisamos antes.
            </p>
            <button
              onClick={onOpenCalculator}
              className="text-xs sm:text-sm font-headline uppercase font-bold tracking-wider text-[#111315] bg-[#ffc400] px-3 py-1.5 shadow-[2px_2px_0px_#111315] hover:bg-[#e6b100] transition-colors cursor-pointer"
            >
              ★ Abrir Calculador de Presupuesto en RD$
            </button>
          </div>
        </div>

        {/* 4x2 Grid of Technical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKSHOP_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white border-2 border-[#D8D5CC] p-6 flex flex-col justify-between hover:border-[#111315] transition-all shadow-sm relative group"
            >
              {/* Card Index */}
              <span className="absolute top-4 right-4 font-headline text-2xl sm:text-3xl font-bold text-[#cecdc8] group-hover:text-[#ffc400] transition-colors select-none">
                {service.number}
              </span>

              <div>
                {/* Material Symbol Icon box */}
                <div className="w-12 h-12 bg-[#F5F3EE] border border-[#D8D5CC] flex items-center justify-center mb-4 text-[#111315]">
                  <span className="material-symbol text-2xl">{service.iconName}</span>
                </div>

                <h3 className="font-headline text-xl sm:text-2xl uppercase text-[#111315] mb-2 leading-tight font-bold">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#575753] mb-6 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              {/* Pricing & Booking action */}
              <div className="pt-4 border-t border-[#EBE9E4]">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-headline text-xs uppercase tracking-wider text-[#775A00] font-semibold">
                    {service.basePrice === 0
                      ? 'Diagnóstico'
                      : service.id === 'pre-itv-gases' || service.id === 'diagnosis-electronica'
                      ? 'Tarifa fija'
                      : 'Desde'}
                  </span>
                  <span className="font-headline text-2xl sm:text-3xl font-bold text-[#111315]">
                    {service.basePrice === 0
                      ? '0 RD$'
                      : `RD$ ${service.basePrice.toLocaleString('es-DO')}${service.id === 'neumaticos-paralelo' ? '/goma' : ''}`}
                  </span>
                </div>

                <div className="font-headline text-xs text-[#575753] uppercase mb-4 flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#775a00]" />
                  <span>Duración: {service.duration}</span>
                </div>

                <button
                  onClick={() => onSelectService(service)}
                  className="w-full text-center block bg-[#111315] text-[#F5F3EE] font-headline text-sm uppercase py-2.5 border-l-4 border-[#ffc400] hover:bg-[#ffc400] hover:text-[#111315] hover:border-[#111315] transition-colors font-bold tracking-wider cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
                >
                  Consultar Cita
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
