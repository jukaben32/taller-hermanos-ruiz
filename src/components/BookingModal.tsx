import React, { useState } from 'react';
import { BookingData } from './BookingForm';
import { WORKSHOP_INFO } from '../data/workshopData';
import { CheckCircle2, MessageSquare, Phone, Copy, Check, X } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: BookingData | null;
  whatsappUrl: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  bookingData,
  whatsappUrl,
}) => {
  const [copied, setCopied] = useState(false);
  const ticketId = React.useMemo(() => `HR-SD-${Math.floor(1000 + Math.random() * 9000)}`, [isOpen]);

  if (!isOpen || !bookingData) return null;

  const handleCopyMessage = () => {
    const rawText = decodeURIComponent(whatsappUrl.split('text=')[1] || '');
    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenWhatsApp = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#181A1D] border-2 border-[#ffc400] max-w-lg w-full p-6 sm:p-8 shadow-[10px_10px_0px_#000000] relative text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#c3c6cf] hover:text-white p-1 hover:bg-[#26292D]"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 bg-[#22C55E]/15 border border-[#22C55E] flex items-center justify-center text-[#22C55E] shrink-0">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#ffc400] font-bold block">
              REGISTRO DE ENTRADA {ticketId}
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl uppercase font-bold text-white leading-none">
              SOLICITUD ENVIADA
            </h3>
          </div>
        </div>

        <p className="text-sm text-[#c3c6cf] mb-5 leading-relaxed">
          Hemos preparado la orden de taller para los mecánicos de <strong className="text-white">Hermanos Ruiz (Santo Domingo)</strong>.
          Si tu navegador no abrió WhatsApp automáticamente, pulsa el botón a continuación para enviar los datos directamente.
        </p>

        {/* Booking Summary Box */}
        <div className="bg-[#111315] border border-[#26292D] p-4 mb-6 font-mono text-xs space-y-2 text-[#c3c6cf]">
          <div className="flex justify-between border-b border-[#1E2022] pb-1.5">
            <span>Cliente:</span>
            <span className="text-white font-bold">{bookingData.nombre}</span>
          </div>
          <div className="flex justify-between border-b border-[#1E2022] pb-1.5">
            <span>Placa:</span>
            <span className="text-[#ffc400] font-bold">{bookingData.matricula}</span>
          </div>
          <div className="flex justify-between border-b border-[#1E2022] pb-1.5">
            <span>Servicio:</span>
            <span className="text-white truncate max-w-[200px]">{bookingData.servicio}</span>
          </div>
          <div className="flex justify-between">
            <span>Preferencia:</span>
            <span className="text-white">{bookingData.fecha} ({bookingData.turno})</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleOpenWhatsApp}
            className="w-full bg-[#ffc400] text-[#111315] font-headline text-lg uppercase py-3.5 font-bold flex items-center justify-center gap-2 hover:bg-[#ffdf99] transition-all shadow-[3px_3px_0px_#000000] cursor-pointer"
          >
            <MessageSquare className="w-5 h-5" />
            <span>ABRIR WHATSAPP AHORA</span>
          </button>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleCopyMessage}
              className="bg-[#111315] border border-[#3A3E45] text-white hover:border-[#ffc400] py-2.5 px-3 font-headline text-xs uppercase font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#22C55E]" />
                  <span>Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#ffc400]" />
                  <span>Copiar Mensaje</span>
                </>
              )}
            </button>

            <a
              href={`tel:${WORKSHOP_INFO.phoneClean}`}
              className="bg-[#111315] border border-[#3A3E45] text-white hover:border-[#ffc400] py-2.5 px-3 font-headline text-xs uppercase font-semibold flex items-center justify-center gap-1.5 transition-colors text-center"
            >
              <Phone className="w-4 h-4 text-[#ffc400]" />
              <span>{WORKSHOP_INFO.phone}</span>
            </a>
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-[#26292D] text-center">
          <button
            onClick={onClose}
            className="text-xs text-[#c3c6cf] hover:text-[#ffc400] underline font-headline uppercase tracking-wider cursor-pointer"
          >
            Volver a la página web
          </button>
        </div>
      </div>
    </div>
  );
};
