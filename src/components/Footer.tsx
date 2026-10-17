import React, { useState } from 'react';
import { WORKSHOP_INFO } from '../data/workshopData';
import { HazardStripe } from './HazardStripe';
import { SocialLinks } from './SocialLinks';
import { MapPin, Clock, Phone, X, Share2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<string | null>(null);

  return (
    <>
      <footer className="w-full bg-[#0c0e10] border-t border-[#333537] text-[#c3c6cf] pb-24 md:pb-12">
        <HazardStripe height="h-2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Col 1: Brand */}
            <div>
              <div className="font-headline text-2xl uppercase text-white mb-3 font-bold">
                {WORKSHOP_INFO.shortName}
              </div>
              <p className="text-xs sm:text-sm text-[#c3c6cf] mb-4 leading-relaxed">
                Mecánica general, escaneo computarizado, tren delantero, frenos y aire acondicionado.
                Más de 26 años de servicio ininterrumpido en Santo Domingo y el Distrito Nacional.
              </p>
              <div className="inline-flex items-center gap-2 border border-[#4f4632] px-3 py-1.5 bg-[#141618]">
                <span className="w-2 h-2 bg-[#ffc400]" />
                <span className="font-headline text-xs uppercase text-white font-bold tracking-wider">
                  Garantía 12 meses certificada
                </span>
              </div>
            </div>

            {/* Col 2: Ubicación */}
            <div>
              <div className="font-headline text-sm uppercase text-white mb-3 tracking-wider font-bold flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#ffc400]" />
                Ubicación
              </div>
              <p className="text-xs sm:text-sm text-[#c3c6cf] leading-relaxed">
                {WORKSHOP_INFO.address}
                <br />
                {WORKSHOP_INFO.city}, {WORKSHOP_INFO.district}
                <br />
                República Dominicana
                <br />
                Metro Línea 1 (Estación Pedro Livio Cedeño / Peña Batlle)
              </p>
            </div>

            {/* Col 3: Horario */}
            <div>
              <div className="font-headline text-sm uppercase text-white mb-3 tracking-wider font-bold flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#ffc400]" />
                Horario Taller
              </div>
              <div className="text-xs sm:text-sm text-[#c3c6cf] leading-relaxed space-y-1">
                <div>
                  <span className="text-[#9c8f78] block">Lunes a Viernes:</span>
                  <span className="text-white font-medium">{WORKSHOP_INFO.hours.weekdays}</span>
                </div>
                <div>
                  <span className="text-[#9c8f78] block">Sábados:</span>
                  <span className="text-white font-medium">{WORKSHOP_INFO.hours.saturday}</span>
                </div>
                <div>
                  <span className="text-[#9c8f78] block">Domingos:</span>
                  <span className="text-[#9c8f78]">Cerrado (Asistencia WhatsApp)</span>
                </div>
              </div>
            </div>

            {/* Col 4: Contacto Directo */}
            <div>
              <div className="font-headline text-sm uppercase text-white mb-3 tracking-wider font-bold flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[#ffc400]" />
                Contacto Directo
              </div>
              <div className="text-xs sm:text-sm text-[#c3c6cf] space-y-2">
                <div>
                  Fijo Taller:{' '}
                  <a
                    href={`tel:${WORKSHOP_INFO.phoneClean}`}
                    className="text-white font-bold hover:text-[#ffc400] transition-colors"
                  >
                    {WORKSHOP_INFO.phone}
                  </a>
                </div>
                <div>
                  WhatsApp / Celular:{' '}
                  <a
                    href={`https://wa.me/${WORKSHOP_INFO.whatsappClean}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ffc400] font-bold hover:underline"
                  >
                    {WORKSHOP_INFO.whatsapp}
                  </a>
                </div>
                <div>
                  Correo Electrónico:{' '}
                  <a
                    href={`mailto:${WORKSHOP_INFO.email}`}
                    className="text-white hover:text-[#ffc400] transition-colors"
                  >
                    {WORKSHOP_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Showcase Banner */}
          <div className="my-8 pt-8 pb-4 border-t border-[#26292D]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-[#ffc400]" />
                <span className="font-headline text-base uppercase text-white font-bold tracking-wider">
                  Síguenos en Nuestras Redes Sociales
                </span>
                <span className="hidden sm:inline-block text-xs text-[#9c8f78] font-mono">
                  · Consejos de mantenimiento, videos y novedades
                </span>
              </div>
              <span className="text-xs font-mono text-[#ffc400] uppercase font-bold">
                @hermanosruizrd
              </span>
            </div>

            <SocialLinks showLabels={true} variant="footer" />
          </div>

          {/* Legal Bar */}
          <div className="pt-6 border-t border-[#26292D] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9c8f78]">
            <p className="text-center md:text-left">
              {WORKSHOP_INFO.cif} · {WORKSHOP_INFO.industrialReg} · © 1998 - 2026 Hermanos Ruiz
              Taller Mecánico S.R.L. · Santo Domingo, República Dominicana
            </p>

            <div className="flex items-center gap-4 uppercase font-headline">
              <button
                onClick={() => setLegalModal('aviso')}
                className="hover:text-[#ffc400] transition-colors cursor-pointer"
              >
                Aviso Legal
              </button>
              <button
                onClick={() => setLegalModal('privacidad')}
                className="hover:text-[#ffc400] transition-colors cursor-pointer"
              >
                Privacidad
              </button>
              <button
                onClick={() => setLegalModal('garantia')}
                className="hover:text-[#ffc400] transition-colors cursor-pointer"
              >
                Garantía Pro Consumidor
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal for Legal Documents */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#181A1D] border-2 border-[#ffc400] max-w-lg w-full p-6 text-left shadow-[8px_8px_0px_#000000]">
            <div className="flex items-center justify-between pb-3 border-b border-[#26292D] mb-4">
              <h4 className="font-headline text-xl uppercase font-bold text-white">
                {legalModal === 'aviso'
                  ? 'Aviso Legal e Identificación Fiscal (DGII)'
                  : legalModal === 'privacidad'
                  ? 'Política de Privacidad y Tratamiento de Datos'
                  : 'Certificado de Garantía Automotriz (Ley 358-05)'}
              </h4>
              <button
                onClick={() => setLegalModal(null)}
                className="text-[#c3c6cf] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs sm:text-sm text-[#c3c6cf] space-y-3 max-h-80 overflow-y-auto pr-2 leading-relaxed font-sans">
              {legalModal === 'aviso' && (
                <>
                  <p>
                    En conformidad con las leyes de la República Dominicana y las disposiciones de la
                    Dirección General de Impuestos Internos (DGII), se hace constar que este portal
                    pertenece a <strong>Hermanos Ruiz Servicios Mecánicos S.R.L.</strong>, entidad
                    registrada con el <strong>{WORKSHOP_INFO.cif}</strong> y domicilio en{' '}
                    {WORKSHOP_INFO.address}, {WORKSHOP_INFO.city}, Distrito Nacional.
                  </p>
                  <p>
                    Emitimos Comprobantes Fiscales válidos para crédito fiscal (Factura B01) y consumidor
                    final (Factura B02) con el ITBIS (18%) legalmente desglosado.
                  </p>
                </>
              )}

              {legalModal === 'privacidad' && (
                <>
                  <p>
                    En virtud de la Ley No. 172-13 sobre Protección Integral de los Datos Personales de
                    la República Dominicana, los datos personales, telefónicos y placas suministrados
                    a través de nuestra plataforma se utilizan estrictamente para fines de agenda de
                    taller, contacto técnico y elaboración de cotizaciones.
                  </p>
                  <p>
                    No comercializamos ni transferimos información a terceros. Puedes solicitar la
                    actualización o eliminación de tu expediente escribiendo a {WORKSHOP_INFO.email}.
                  </p>
                </>
              )}

              {legalModal === 'garantia' && (
                <>
                  <p>
                    En pleno cumplimiento de la <strong>Ley General de Protección de los Derechos del
                    Consumidor o Usuario No. 358-05 (Pro Consumidor)</strong>, todas nuestras
                    reparaciones mayores y mantenimientos cuentan con una garantía por escrito de{' '}
                    <strong>12 meses o 20,000 kilómetros</strong>.
                  </p>
                  <p>
                    La garantía cubre tanto repuestos certificados instalados como la mano de obra
                    especializada indicada en la factura formal.
                  </p>
                </>
              )}
            </div>

            <div className="mt-5 pt-3 border-t border-[#26292D] text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="bg-[#ffc400] text-[#111315] font-headline text-sm uppercase px-4 py-2 font-bold cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
