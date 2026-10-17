import React, { useState } from 'react';
import { WORKSHOP_FAQS } from '../data/workshopData';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#181A1D] py-20 sm:py-24 px-4 sm:px-6 lg:px-12 border-t border-[#26292D]" id="faq">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-14 text-center">
          <span className="font-headline text-xs sm:text-sm uppercase tracking-widest text-[#ffc400] bg-[#111315] px-3 py-1 inline-block mb-3 font-bold border border-[#333537]">
            05 // PREGUNTAS FRECUENTES
          </span>
          <h2 className="font-headline text-3xl sm:text-5xl lg:text-[60px] uppercase tracking-tight text-[#e2e2e5] leading-none font-extrabold">
            RESPUESTAS CLARAS, SIN RODEOS
          </h2>
          <p className="text-sm sm:text-base text-[#c3c6cf] mt-2 max-w-lg mx-auto">
            Sin tecnicismos ni letra chiquita sobre nuestra forma de trabajar y facturación con Comprobante Fiscal (NCF).
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {WORKSHOP_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`bg-[#111315] border transition-colors ${
                  isOpen ? 'border-[#ffc400]' : 'border-[#26292D] hover:border-[#3A3E45]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer select-none group"
                >
                  <span
                    className={`font-headline text-lg sm:text-xl uppercase font-bold transition-colors pr-4 ${
                      isOpen ? 'text-[#ffc400]' : 'text-[#e2e2e5] group-hover:text-white'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-none border border-[#333537] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#ffc400] text-[#111315]' : 'text-[#ffc400]'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-sm sm:text-base text-[#c3c6cf] border-t border-[#1E2022] leading-relaxed animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
