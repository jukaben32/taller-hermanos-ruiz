import React, { useState, useId } from 'react';
import { WORKSHOP_SERVICES } from '../data/workshopData';
import { Calculator, Check, ArrowRight, ShieldCheck, Clock, AlertTriangle } from 'lucide-react';

interface BudgetCalculatorProps {
  onTransferToBooking: (selectedSummary: {
    serviceName: string;
    vehicleCategory: string;
    estimatedTotal: number;
    estimatedDuration: string;
    details: string;
  }) => void;
}

type VehicleCategory = 'turismo' | 'suv' | 'furgoneta';

export const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({
  onTransferToBooking,
}) => {
  const [vehicleCategory, setVehicleCategory] = useState<VehicleCategory>('turismo');
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>(['aceite-filtros']);
  const [tireCount, setTireCount] = useState<number>(2);
  const tireCountId = useId();

  const categoryMultipliers: Record<VehicleCategory, { label: string; factor: number; subtitle: string }> = {
    turismo: { label: 'Carro Sedán / Hatchback', factor: 1.0, subtitle: 'Corolla, Civic, Sonata, K5, Elantra, Yaris...' },
    suv: { label: 'Yipeta (SUV) / 4x4', factor: 1.2, subtitle: 'CR-V, RAV4, Tucson, Sportage, Explorer, 4Runner...' },
    furgoneta: { label: 'Camioneta / Carga Liviana', factor: 1.35, subtitle: 'Hilux, D-Max, Frontier, Delta, Hiace, H-100...' },
  };

  const toggleService = (id: string) => {
    setSelectedServiceIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculation logic in Dominican Pesos (RD$)
  const currentFactor = categoryMultipliers[vehicleCategory].factor;
  
  let partsAndLaborTotal = 0;
  let estimatedMinutes = 0;

  selectedServiceIds.forEach((id) => {
    const s = WORKSHOP_SERVICES.find((serv) => serv.id === id);
    if (!s) return;

    if (id === 'neumaticos-paralelo') {
      partsAndLaborTotal += s.basePrice * tireCount * currentFactor;
      estimatedMinutes += 25 * tireCount;
    } else {
      partsAndLaborTotal += s.basePrice * currentFactor;
      if (s.id === 'aceite-filtros') estimatedMinutes += 45;
      else if (s.id === 'frenos-pastillas') estimatedMinutes += 60;
      else if (s.id === 'pre-itv-gases') estimatedMinutes += 50;
      else if (s.id === 'diagnosis-electronica') estimatedMinutes += 30;
      else if (s.id === 'climatizacion-gas') estimatedMinutes += 45;
      else if (s.id === 'distribucion-embrague') estimatedMinutes += 360;
      else estimatedMinutes += 60;
    }
  });

  const basePriceRound = Math.round(partsAndLaborTotal);
  // ITBIS in Dominican Republic is 18%
  const itbisAmount = Math.round(basePriceRound * 0.18);
  const totalWithItbis = basePriceRound + itbisAmount;

  const hours = Math.floor(estimatedMinutes / 60);
  const mins = estimatedMinutes % 60;
  const durationString =
    hours > 0 ? (mins > 0 ? `~${hours}h ${mins}m` : `~${hours} horas`) : `~${mins} min`;

  const handleApplyToBooking = () => {
    const selectedNames = selectedServiceIds
      .map((id) => WORKSHOP_SERVICES.find((s) => s.id === id)?.title)
      .filter(Boolean)
      .join(' + ');

    onTransferToBooking({
      serviceName: selectedNames || 'Mantenimiento General',
      vehicleCategory: categoryMultipliers[vehicleCategory].label,
      estimatedTotal: totalWithItbis,
      estimatedDuration: durationString,
      details: `Presupuesto estimado: RD$ ${totalWithItbis.toLocaleString('es-DO')} ITBIS incl. (${durationString} estimada para ${categoryMultipliers[vehicleCategory].label})`,
    });
  };

  return (
    <section className="w-full bg-[#181A1D] text-[#e2e2e5] py-20 sm:py-24 px-4 sm:px-6 lg:px-12 border-t border-[#26292D]" id="calculadora">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#26292D] gap-4">
          <div>
            <span className="font-headline text-xs sm:text-sm uppercase tracking-widest text-[#ffc400] bg-[#111315] px-3 py-1 inline-block mb-3 font-bold border border-[#333537]">
              COTIZACIÓN EN VIVO · REPÚBLICA DOMINICANA (RD$)
            </span>
            <h2 className="font-headline text-3xl sm:text-5xl lg:text-[60px] uppercase tracking-tight text-[#e2e2e5] leading-none font-extrabold">
              CALCULADOR DE PRESUPUESTO PREVIO
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#c3c6cf] max-w-md">
            Selecciona el tipo de vehículo y las intervenciones requeridas. Cotización transparente
            con piezas de calidad garantizada, mano de obra certificada y 12 meses de garantía.
          </p>
        </div>

        {/* 2-Column interactive workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Configuration selections */}
          <div className="lg:col-span-7 space-y-8 bg-[#111315] p-6 sm:p-8 border-2 border-[#26292D]">
            {/* Step 1: Vehicle type */}
            <div>
              <label className="font-headline text-sm uppercase tracking-wider text-[#ffc400] font-bold block mb-3">
                1. Selecciona la categoría de tu vehículo
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(Object.keys(categoryMultipliers) as VehicleCategory[]).map((catKey) => {
                  const cat = categoryMultipliers[catKey];
                  const isSelected = vehicleCategory === catKey;
                  return (
                    <button
                      key={catKey}
                      type="button"
                      onClick={() => setVehicleCategory(catKey)}
                      className={`p-3.5 text-left border-2 transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#ffc400] bg-[#1E2022] shadow-[3px_3px_0px_#ffc400]'
                          : 'border-[#333537] bg-[#141618] hover:border-[#4f4632]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-headline text-base uppercase font-bold text-white">
                          {cat.label}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-[#ffc400]" />}
                      </div>
                      <span className="text-[11px] text-[#c3c6cf] block leading-tight">
                        {cat.subtitle}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Services Multi-select */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-headline text-sm uppercase tracking-wider text-[#ffc400] font-bold">
                  2. Elige los servicios a realizar
                </label>
                <span className="text-xs text-[#c3c6cf] font-mono">
                  {selectedServiceIds.length} seleccionada(s)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {WORKSHOP_SERVICES.map((serv) => {
                  const isChecked = selectedServiceIds.includes(serv.id);
                  const isTire = serv.id === 'neumaticos-paralelo';

                  return (
                    <div
                      key={serv.id}
                      onClick={() => toggleService(serv.id)}
                      className={`p-3 border transition-all cursor-pointer flex flex-col justify-between select-none ${
                        isChecked
                          ? 'border-[#ffc400] bg-[#1E2022]'
                          : 'border-[#26292D] bg-[#141618] hover:border-[#3A3E45]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-4 h-4 border flex items-center justify-center shrink-0 ${
                              isChecked
                                ? 'bg-[#ffc400] border-[#ffc400] text-[#111315]'
                                : 'border-[#4f4632]'
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5 font-bold" />}
                          </div>
                          <span className="font-headline text-sm uppercase font-bold text-white leading-tight">
                            {serv.title}
                          </span>
                        </div>
                        <span className="font-headline text-xs text-[#ffc400] font-bold shrink-0">
                          {serv.basePrice === 0
                            ? '0 RD$'
                            : `RD$ ${Math.round(serv.basePrice * currentFactor).toLocaleString('es-DO')}`}
                        </span>
                      </div>

                      {/* Tire count sub-control */}
                      {isTire && isChecked && (
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className="mt-2 pt-2 border-t border-[#333537] flex items-center justify-between"
                        >
                          <label htmlFor={tireCountId} className="text-xs text-[#c3c6cf]">Cantidad de gomas:</label>
                          <div className="flex items-center gap-1">
                            {[1, 2, 4].map((count) => (
                              <button
                                key={count}
                                type="button"
                                onClick={() => setTireCount(count)}
                                className={`px-2 py-0.5 text-xs font-mono font-bold ${
                                  tireCount === count
                                    ? 'bg-[#ffc400] text-[#111315]'
                                    : 'bg-[#0B0C0E] text-[#c3c6cf] hover:text-white'
                                }`}
                              >
                                {count}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Technical Quote Breakdown Sheet */}
          <div className="lg:col-span-5 bg-[#111315] border-2 border-[#ffc400] p-6 sm:p-8 shadow-[8px_8px_0px_#000000] relative">
            <div className="flex items-center justify-between pb-4 border-b border-[#26292D] mb-6">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#ffc400]" />
                <span className="font-headline text-lg uppercase font-bold text-white">
                  Cotización Técnica Estimada
                </span>
              </div>
              <span className="font-mono text-xs bg-[#1E2022] text-[#ffc400] px-2 py-0.5 border border-[#4f4632]">
                ITBIS (18%) INCLUIDO
              </span>
            </div>

            {/* Breakdown lines */}
            <div className="space-y-3 mb-6 font-mono text-xs text-[#c3c6cf]">
              <div className="flex justify-between py-1 border-b border-[#1E2022]">
                <span>Categoría:</span>
                <span className="text-white font-sans font-bold">
                  {categoryMultipliers[vehicleCategory].label}
                </span>
              </div>

              <div className="flex justify-between py-1 border-b border-[#1E2022]">
                <span>Servicios seleccionados:</span>
                <span className="text-white">{selectedServiceIds.length} ítems</span>
              </div>

              <div className="flex justify-between py-1 border-b border-[#1E2022]">
                <span>Repuestos de calidad + Mano de obra:</span>
                <span className="text-white font-bold">RD$ {basePriceRound.toLocaleString('es-DO')}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-[#1E2022]">
                <span>ITBIS Legal DGII (18%):</span>
                <span className="text-white">RD$ {itbisAmount.toLocaleString('es-DO')}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-[#1E2022]">
                <span className="flex items-center gap-1 text-[#ffc400]">
                  <Clock className="w-3.5 h-3.5" />
                  Tiempo estimado en taller:
                </span>
                <span className="text-[#ffc400] font-bold">{durationString}</span>
              </div>
            </div>

            {/* Total Display */}
            <div className="bg-[#181A1D] border border-[#333537] p-4 mb-6">
              <span className="font-headline text-xs uppercase tracking-widest text-[#c3c6cf] block mb-1">
                PRESUPUESTO ESTIMADO TOTAL (CERO SORPRESAS)
              </span>
              <div className="flex items-baseline justify-between">
                <span className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#ffc400]">
                  {selectedServiceIds.length > 0 ? `RD$ ${totalWithItbis.toLocaleString('es-DO')}` : '0 RD$'}
                </span>
                <span className="text-xs text-[#22C55E] flex items-center gap-1 font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  Garantía 12 meses
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <button
              type="button"
              onClick={handleApplyToBooking}
              disabled={selectedServiceIds.length === 0}
              className="w-full bg-[#ffc400] text-[#111315] font-headline text-base sm:text-lg uppercase py-3.5 font-bold flex items-center justify-center gap-2 hover:bg-[#ffdf99] transition-all shadow-[4px_4px_0px_#000000] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
            >
              <span>TRANSFERIR A SOLICITUD DE RESERVA</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="mt-4 pt-4 border-t border-[#1E2022] text-[11px] text-[#c3c6cf] flex items-start gap-2 leading-relaxed">
              <AlertTriangle className="w-4 h-4 text-[#ffc400] shrink-0 mt-0.5" />
              <span>
                * Si al subir el vehículo al elevador observamos piezas con desgaste secundario
                (rodamientos zumbando o guardapolvos rotos), nunca cambiamos nada sin enviarte antes
                foto y cotización formal por WhatsApp.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
