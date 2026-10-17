import React from 'react';
import { WORKSHOP_REVIEWS, WORKSHOP_INFO } from '../data/workshopData';
import { Star, ExternalLink } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F3EE] text-[#111315] py-20 sm:py-24 px-4 sm:px-6 lg:px-12 border-t-2 border-[#D8D5CC]" id="opiniones">
      <div className="max-w-7xl mx-auto">
        {/* Header with Google badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b-2 border-[#D8D5CC] gap-4">
          <div>
            <span className="font-headline text-xs sm:text-sm uppercase tracking-widest text-[#6D5300] bg-[#FFC400]/25 px-3 py-1 inline-block mb-3 font-bold">
              03 // LO QUE DICEN NUESTROS CLIENTES
            </span>
            <h2 className="font-headline text-3xl sm:text-5xl lg:text-[64px] uppercase tracking-tight text-[#111315] leading-none font-extrabold">
              CONFIANZA GANADA DÍA A DÍA
            </h2>
          </div>

          <div className="flex items-center gap-3 bg-white border border-[#D8D5CC] px-4 py-2.5 shadow-sm">
            <span className="font-headline text-2xl font-bold text-[#111315]">
              {WORKSHOP_INFO.googleRating} / 5.0
            </span>
            <div className="flex text-[#ffc400]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#ffc400] text-[#ffc400]" />
              ))}
            </div>
            <span className="font-headline text-xs uppercase text-[#575753] font-bold">
              ({WORKSHOP_INFO.googleReviewCount} reseñas)
            </span>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {WORKSHOP_REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-[#D8D5CC] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#111315] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#ffc400]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#ffc400] text-[#ffc400]" />
                    ))}
                  </div>
                  <span className="font-headline text-xs text-[#575753] uppercase font-semibold">
                    {review.date}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#111315] italic mb-6 leading-relaxed">
                  «{review.text}»
                </p>
              </div>

              <div className="pt-4 border-t border-[#EBE9E4] flex items-center gap-3">
                <div className="w-10 h-10 bg-[#111315] text-[#F5F3EE] flex items-center justify-center font-headline text-lg font-bold">
                  {review.initial}
                </div>
                <div>
                  <div className="font-headline text-lg uppercase text-[#111315] leading-none font-bold">
                    {review.name}
                  </div>
                  <div className="text-xs text-[#575753] mt-0.5">
                    {review.role} ({review.vehicle})
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* External Google reviews anchor */}
        <div className="text-center">
          <a
            className="inline-flex items-center gap-2 font-headline text-sm sm:text-base uppercase text-[#111315] hover:text-[#775a00] border-b-2 border-[#111315] pb-1 tracking-wider transition-colors font-bold"
            href={`https://www.google.com/maps/search/?api=1&query=Taller+Mecanico+Hermanos+Ruiz+Ensanche+La+Fe+Santo+Domingo`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Ver las 142 opiniones completas en nuestro perfil de Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
