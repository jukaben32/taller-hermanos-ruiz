import React from 'react';
import { WORKSHOP_INFO } from '../data/workshopData';
import { Phone, MessageSquare } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0c0e10]/95 backdrop-blur-md border-t-2 border-[#ffc400] p-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.8)] pb-safe">
      <div className="max-w-[420px] mx-auto grid grid-cols-2 gap-2.5">
        {/* Call button */}
        <a
          href={`tel:${WORKSHOP_INFO.phoneClean}`}
          className="h-12 py-2.5 px-3 bg-[#121416] border border-[#3A3E45] text-white font-headline text-base uppercase flex items-center justify-center gap-2 font-bold active:bg-[#1E2022] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#ffc400]" />
          <span>LLAMAR</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={`https://wa.me/${WORKSHOP_INFO.whatsappClean}?text=Hola%20Hermanos%20Ruiz%2C%20necesito%20consulta%20o%20cita%20de%20taller%20en%20Santo%20Domingo`}
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 py-2.5 px-3 bg-[#ffc400] text-[#111315] font-headline text-base uppercase font-extrabold flex items-center justify-center gap-2 shadow-[2px_2px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 transition-all"
        >
          <MessageSquare className="w-4 h-4 fill-[#111315]" />
          <span>WHATSAPP</span>
        </a>
      </div>
    </div>
  );
};
