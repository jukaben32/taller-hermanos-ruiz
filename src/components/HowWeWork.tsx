import React from 'react';
import { WORKSHOP_INFO } from '../data/workshopData';
import { MessageSquare, FileCheck2, KeyRound } from 'lucide-react';

export const HowWeWork: React.FC = () => {
  return (
    <section className="w-full bg-[#111315] py-20 sm:py-24 px-4 sm:px-6 lg:px-12 border-t border-[#26292D]" id="como-trabajamos">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 sm:mb-16">
          <span className="font-headline text-xs sm:text-sm uppercase tracking-widest text-[#ffc400] bg-[#1E2022] px-3 py-1 inline-block mb-3 font-bold border border-[#333537]">
            02 // MÉTODO DE TRABAJO · SIN LETRA CHIQUITA
          </span>
          <h2 className="font-headline text-3xl sm:text-5xl lg:text-[64px] uppercase tracking-tight text-[#e2e2e5] leading-none font-extrabold">
            TRANSPARENCIA PASO A PASO
          </h2>
          <p className="text-sm sm:text-base text-[#c3c6cf] mt-3 max-w-xl">
            Cero sorpresas. Tú siempre tienes el control sobre lo que se repara y cuánto cuesta.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {/* Connecting line between cards on desktop */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-20 left-24 right-24 h-0.5 bg-[#26292D] z-0"
          />

          {/* STEP 01 */}
          <div className="bg-[#181A1D] border-2 border-[#26292D] p-6 sm:p-8 relative z-10 hover:border-[#ffc400] transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-headline text-5xl sm:text-6xl leading-none font-extrabold text-[#ffc400]">
                  01
                </span>
                <MessageSquare className="w-8 h-8 text-[#c3c6cf]" />
              </div>

              <h3 className="font-headline text-2xl uppercase text-[#e2e2e5] mb-3 font-bold">
                Pides cita en 1 minuto
              </h3>

              <p className="text-sm text-[#c3c6cf] leading-relaxed">
                Escríbenos por WhatsApp o llámanos. Nos dices qué le notas al vehículo, nos das la
                placa y te reservamos un turno exacto para que no pierdas tiempo en tapones ni en esperas
                innecesarias.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#26292D] text-xs font-mono text-[#9c8f78] uppercase">
              Sin costo · Respuesta directa por mecánico
            </div>
          </div>

          {/* STEP 02 (Featured with yellow border and shadow) */}
          <div className="bg-[#181A1D] border-2 border-[#ffc400] p-6 sm:p-8 relative z-10 shadow-[6px_6px_0px_#000000] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-headline text-5xl sm:text-6xl leading-none font-extrabold text-[#ffc400]">
                  02
                </span>
                <FileCheck2 className="w-8 h-8 text-[#ffc400]" />
              </div>

              <h3 className="font-headline text-2xl uppercase text-[#e2e2e5] mb-3 font-bold">
                Presupuesto cerrado antes de empezar
              </h3>

              <p className="text-sm text-[#c3c6cf] leading-relaxed">
                Subimos el vehículo al elevador, diagnosticamos la avería real y te enviamos por WhatsApp
                la cotización formal con repuestos y mano de obra desglosada. Ni un solo peso de más sin tu
                aprobación expresa.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#26292D] text-xs font-mono text-[#ffc400] uppercase font-bold">
              Compromiso Ruiz: Cero sorpresas en factura
            </div>
          </div>

          {/* STEP 03 */}
          <div className="bg-[#181A1D] border-2 border-[#26292D] p-6 sm:p-8 relative z-10 hover:border-[#ffc400] transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-headline text-5xl sm:text-6xl leading-none font-extrabold text-[#ffc400]">
                  03
                </span>
                <KeyRound className="w-8 h-8 text-[#c3c6cf]" />
              </div>

              <h3 className="font-headline text-2xl uppercase text-[#e2e2e5] mb-3 font-bold">
                Te avisamos cuando esté listo
              </h3>

              <p className="text-sm text-[#c3c6cf] leading-relaxed">
                Te mandamos foto o video de la pieza sustituida vieja. Pagas con tarjeta, transferencia
                bancaria (Popular, Banreservas, BHD) o efectivo, te entregamos tu factura formal con
                Comprobante Fiscal (NCF) e ITBIS y tu garantía sellada por escrito.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#26292D] text-xs font-mono text-[#9c8f78] uppercase">
              Garantía de 12 meses o 20,000 km
            </div>
          </div>
        </div>

        {/* Real Tool Bench photo card */}
        <div className="mt-12 bg-[#181A1D] border border-[#26292D] p-4 sm:p-5 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-56 h-36 shrink-0 bg-[#0B0C0E] overflow-hidden border border-[#333537]">
            <img
              className="w-full h-full object-cover"
              src={WORKSHOP_INFO.images.toolBench}
              alt="Banco de herramientas y mecánico ajustando disco de freno con torquímetro en Santo Domingo"
            />
          </div>
          <div className="flex-1">
            <span className="font-headline text-xs sm:text-sm uppercase tracking-widest text-[#ffc400] font-bold block mb-1">
              OFICIO Y HERRAMIENTA HOMOLOGADA
            </span>
            <p className="text-xs sm:text-sm text-[#c3c6cf] leading-relaxed">
              [FOTO REAL: Banco de herramientas y operario ajustando disco de freno]. Cada apriete se
              realiza con torquímetro / llave dinamométrica calibrada al torque exacto especificado por el
              fabricante automotriz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
