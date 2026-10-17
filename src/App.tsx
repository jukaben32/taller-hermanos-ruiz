import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HazardStripe } from './components/HazardStripe';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { ServicesGrid } from './components/ServicesGrid';
import { BudgetCalculator } from './components/BudgetCalculator';
import { HowWeWork } from './components/HowWeWork';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingForm, BookingData } from './components/BookingForm';
import { BookingModal } from './components/BookingModal';
import { FaqSection } from './components/FaqSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { WorkshopService } from './data/workshopData';
import { PromoOffer } from './components/PromoBanner';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  
  // Promotional banner visibility state (defaults to visible)
  const [promoVisible, setPromoVisible] = useState(true);

  // States forwarded from service cards, promotions, or budget calculator to the booking form
  const [selectedServiceForForm, setSelectedServiceForForm] = useState<string | undefined>(undefined);
  const [formNotes, setFormNotes] = useState<string | undefined>(undefined);

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: WorkshopService) => {
    setSelectedServiceForForm(`${service.title} (${service.priceLabel})`);
    scrollToElement('pedir-cita');
  };

  const handleOpenBooking = () => {
    scrollToElement('pedir-cita');
  };

  const handleOpenCalculator = () => {
    scrollToElement('calculadora');
  };

  const handleClaimPromoOffer = (offer: PromoOffer) => {
    setSelectedServiceForForm(offer.targetService);
    setFormNotes(`[${offer.badge}] ${offer.initialNotes}`);
    scrollToElement('pedir-cita');
  };

  const handleTransferFromCalculator = (summary: {
    serviceName: string;
    vehicleCategory: string;
    estimatedTotal: number;
    estimatedDuration: string;
    details: string;
  }) => {
    setSelectedServiceForForm(`Presupuesto Calculado: ${summary.serviceName}`);
    setFormNotes(summary.details);
    scrollToElement('pedir-cita');
  };

  const handleBookingSubmitted = (data: BookingData, url: string) => {
    setBookingData(data);
    setWhatsappUrl(url);
    setModalOpen(true);

    // Try to open WhatsApp in a new tab; if popup blocked, modal has direct trigger button
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch {
      // Ignored - modal handles manual click
    }
  };

  return (
    <div className="min-h-screen bg-[#121416] text-[#e2e2e5] flex flex-col font-body selection:bg-[#ffc400] selection:text-[#111315]">
      {/* Fixed Navigation with Integrated Brand Yellow Promotional Banner */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onClaimOffer={handleClaimPromoOffer}
        promoVisible={promoVisible}
        onTogglePromo={setPromoVisible}
      />

      {/* Main Content Area (padding-top adjusts smoothly if banner is shown or dismissed) */}
      <main
        className={`w-full flex-grow transition-[padding] duration-200 ${
          promoVisible ? 'pt-[118px] sm:pt-[122px]' : 'pt-20'
        }`}
      >
        {/* Top Industrial Hazard Bar */}
        <HazardStripe height="h-2" />

        {/* Section 1: Hero */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* Section 2: Technical Trust Strip */}
        <TrustStrip />

        {/* Section 3: Services & Rates */}
        <ServicesGrid
          onSelectService={handleSelectService}
          onOpenCalculator={handleOpenCalculator}
        />

        {/* Section 4: Interactive Budget Calculator */}
        <BudgetCalculator onTransferToBooking={handleTransferFromCalculator} />

        {/* Section 5: How We Work */}
        <HowWeWork />

        {/* Section 6: Verified Google Reviews */}
        <ReviewsSection />

        {/* Section 7: Booking Form & Immediate Workshop Contact */}
        <BookingForm
          initialService={selectedServiceForForm}
          initialNotes={formNotes}
          onBookingSubmitted={handleBookingSubmitted}
        />

        {/* Section 8: FAQs Accordion */}
        <FaqSection />

        {/* Section 9: Location & Interactive Map */}
        <LocationSection />

        {/* Bottom Closing Hazard Bar */}
        <HazardStripe height="h-2" />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bar for quick Call & WhatsApp */}
      <MobileStickyBar />

      {/* In-App Confirmation Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        bookingData={bookingData}
        whatsappUrl={whatsappUrl}
      />
    </div>
  );
}
