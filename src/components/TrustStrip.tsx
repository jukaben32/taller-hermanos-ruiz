import React from 'react';
import { ShieldCheck, FileText, Car, Handshake } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="w-full bg-[#191B1F] border-y-2 border-[#ffc400] relative overflow-hidden">
      {/* Diagonal hazard textures at borders */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-6 h-full bg-[repeating-linear-gradient(45deg,#ffc400,#ffc400_4px,#191B1F_4px,#191B1F_8px)] opacity-30 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-6 h-full bg-[repeating-linear-gradient(-45deg,#ffc400,#ffc400_4px,#191B1F_4px,#191B1F_8px)] opacity-30 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Item 1 */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 shrink-0 bg-[#0B0C0E] border border-[#ffc400] flex items-center justify-center text-[#ffc400]">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="font-headline text-lg sm:text-xl uppercase text-[#e2e2e5] font-bold">
                26 AÑOS EN SANTO DOMINGO
              </div>
              <p className="text-xs sm:text-sm text-[#c3c6cf] mt-1 leading-snug">
                Atendiendo a tres generaciones de familias en Ensanche La Fe y el Distrito Nacional.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 shrink-0 bg-[#0B0C0E] border border-[#ffc400] flex items-center justify-center text-[#ffc400]">
              <FileText className="w-7 h-7" />
            </div>
            <div>
              <div className="font-headline text-lg sm:text-xl uppercase text-[#e2e2e5] font-bold">
                GARANTÍA POR ESCRITO
              </div>
              <p className="text-xs sm:text-sm text-[#c3c6cf] mt-1 leading-snug">
                12 meses o 20,000 km certificados con factura formal e ITBIS desglosado.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 shrink-0 bg-[#0B0C0E] border border-[#ffc400] flex items-center justify-center text-[#ffc400]">
              <Car className="w-7 h-7" />
            </div>
            <div>
              <div className="font-headline text-lg sm:text-xl uppercase text-[#e2e2e5] font-bold">
                TODAS LAS MARCAS
              </div>
              <p className="text-xs sm:text-sm text-[#c3c6cf] mt-1 leading-snug">
                Multimarca experto: carros sedán, yipetas (SUVs), camionetas y camiones de carga.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 shrink-0 bg-[#0B0C0E] border border-[#ffc400] flex items-center justify-center text-[#ffc400]">
              <Handshake className="w-7 h-7" />
            </div>
            <div>
              <div className="font-headline text-lg sm:text-xl uppercase text-[#e2e2e5] font-bold">
                SIN COMPROMISO
              </div>
              <p className="text-xs sm:text-sm text-[#c3c6cf] mt-1 leading-snug">
                No cobramos por mirar y decirte la verdad técnica de tu vehículo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
