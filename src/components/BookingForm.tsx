import React, { useState, useEffect } from 'react';
import { WORKSHOP_INFO } from '../data/workshopData';
import { SocialLinks } from './SocialLinks';
import { ArrowRight, Phone, MessageSquare, Clock, Share2 } from 'lucide-react';

export interface BookingData {
  nombre: string;
  telefono: string;
  matricula: string;
  servicio: string;
  fecha: string;
  turno: string;
  comentario: string;
}

interface BookingFormProps {
  initialService?: string;
  initialNotes?: string;
  onBookingSubmitted: (data: BookingData, whatsappUrl: string) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialService,
  initialNotes,
  onBookingSubmitted,
}) => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [matricula, setMatricula] = useState('');
  const [servicio, setServicio] = useState('Cambio de Aceite y Filtro (desde RD$ 2,850)');
  const [fecha, setFecha] = useState('');
  const [turno, setTurno] = useState('Mañana (08:00 AM a 01:00 PM)');
  const [comentario, setComentario] = useState('');

  // Sync when initial values change (e.g. from service cards, promotions, or budget calculator)
  useEffect(() => {
    if (initialService) {
      setServicio(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    if (initialNotes) {
      setComentario(initialNotes);
    }
  }, [initialNotes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMatricula = matricula.trim() ? matricula.trim().toUpperCase() : 'Sin especificar';
    const cleanFecha = fecha || 'Lo antes posible';

    const bookingPayload: BookingData = {
      nombre,
      telefono,
      matricula: formattedMatricula,
      servicio,
      fecha: cleanFecha,
      turno,
      comentario: comentario || 'Sin detalles extra',
    };

    const whatsappText = encodeURIComponent(
      `*SOLICITUD DE CITA / CONSULTA - HERMANOS RUIZ (SANTO DOMINGO)*\n\n` +
      `▪ *Cliente:* ${nombre}\n` +
      `▪ *Teléfono:* ${telefono}\n` +
      `▪ *Placa:* ${formattedMatricula}\n` +
      `▪ *Servicio:* ${servicio}\n` +
      `▪ *Fecha preferida:* ${cleanFecha} (${turno})\n` +
      `▪ *Avería o síntoma:* ${comentario || 'Revisión y cotización en Ensanche La Fe'}\n\n` +
      `¿Tienen disponibilidad para darme presupuesto y turno de taller? Gracias.`
    );

    const whatsappUrl = `https://wa.me/${WORKSHOP_INFO.whatsappClean}?text=${whatsappText}`;

    // Callback opens modal and dispatches
    onBookingSubmitted(bookingPayload, whatsappUrl);
  };

  return (
    <section className="w-full bg-[#111315] py-20 sm:py-24 px-4 sm:px-6 lg:px-12 border-t-2 border-[#26292D]" id="pedir-cita">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-14">
          <span className="font-headline text-xs sm:text-sm uppercase tracking-widest text-[#ffc400] bg-[#1E2022] px-3 py-1 inline-block mb-3 font-bold border border-[#333537]">
            04 // AGENDA TU CITA DIRECTA
          </span>
          <h2 className="font-headline text-3xl sm:text-5xl lg:text-[64px] uppercase tracking-tight text-[#e2e2e5] leading-none font-extrabold">
            RESERVA O CONSULTA EN EL ACTO
          </h2>
          <p className="text-sm sm:text-base text-[#c3c6cf] mt-2 max-w-xl">
            Completa estos datos y nos llegará al instante a la pantalla de recepción del taller en Ensanche La Fe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Interactive Booking Form */}
          <div className="lg:col-span-7 bg-[#181A1D] border-2 border-[#ffc400] p-6 sm:p-10 shadow-[8px_8px_0px_#000000]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-headline text-xs uppercase text-[#c3c6cf] tracking-wider mb-2 font-bold">
                    Nombre y Apellidos *
                  </label>
                  <input
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ej. Carlos Martínez"
                    className="w-full bg-[#0B0C0E] border border-[#3A3E45] px-4 py-3 text-sm text-[#e2e2e5] placeholder:text-[#575753] focus:outline-none focus:border-[#ffc400] rounded-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-headline text-xs uppercase text-[#c3c6cf] tracking-wider mb-2 font-bold">
                    Teléfono Celular *
                  </label>
                  <input
                    type="tel"
                    required
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="Ej. (809) 555-1234"
                    className="w-full bg-[#0B0C0E] border border-[#3A3E45] px-4 py-3 text-sm text-[#e2e2e5] placeholder:text-[#575753] focus:outline-none focus:border-[#ffc400] rounded-none transition-colors"
                  />
                </div>
              </div>

              {/* Dominican Republic License Plate format */}
              <div>
                <label className="block font-headline text-xs uppercase text-[#c3c6cf] tracking-wider mb-2 font-bold">
                  Placa del Vehículo (Formato Dominicano)
                </label>
                <div className="flex items-stretch border-2 border-[#3A3E45] bg-[#0B0C0E] focus-within:border-[#ffc400] max-w-sm">
                  {/* Dominican Republic band */}
                  <div className="w-12 bg-[#002D62] flex flex-col items-center justify-center p-1 border-r border-[#CE1126] shrink-0">
                    <span className="text-[#CE1126] text-[10px] font-black leading-none">DOM</span>
                    <span className="text-white text-[8px] font-bold leading-none mt-0.5">RD</span>
                  </div>
                  <input
                    type="text"
                    value={matricula}
                    onChange={(e) => setMatricula(e.target.value.toUpperCase())}
                    placeholder="A-123456 / G-123456"
                    className="w-full bg-transparent px-4 py-3 font-headline text-xl uppercase tracking-widest text-white focus:outline-none font-bold"
                  />
                </div>
              </div>

              {/* Service Required */}
              <div>
                <label className="block font-headline text-xs uppercase text-[#c3c6cf] tracking-wider mb-2 font-bold">
                  Servicio Requerido *
                </label>
                <select
                  required
                  value={servicio}
                  onChange={(e) => setServicio(e.target.value)}
                  className="w-full bg-[#0B0C0E] border border-[#3A3E45] px-4 py-3 text-sm text-[#e2e2e5] focus:outline-none focus:border-[#ffc400] rounded-none transition-colors cursor-pointer"
                >
                  <option value="Cambio de Aceite y Filtro (desde RD$ 2,850)">
                    Cambio de Aceite y Filtro (desde RD$ 2,850)
                  </option>
                  <option value="Frenos y Pastillas / Bandas (desde RD$ 3,400)">
                    Frenos y Pastillas / Bandas (desde RD$ 3,400)
                  </option>
                  <option value="Gomas, Alineación y Balanceo (desde RD$ 1,200/goma)">
                    Gomas, Alineación y Balanceo (desde RD$ 1,200/goma)
                  </option>
                  <option value="Inspección Marbete y Emisiones (RD$ 1,800)">
                    Inspección Marbete y Emisiones (RD$ 1,800)
                  </option>
                  <option value="Escaneo Computarizado OBD2 (RD$ 1,500)">
                    Escaneo Computarizado OBD2 (RD$ 1,500)
                  </option>
                  <option value="Aire Acondicionado y Carga de Gas (desde RD$ 3,200)">
                    Aire Acondicionado y Carga de Gas (desde RD$ 3,200)
                  </option>
                  <option value="Banda de Distribución y Clutch (desde RD$ 14,500)">
                    Banda de Distribución y Clutch (desde RD$ 14,500)
                  </option>
                  <option value="Tren Delantero, Amortiguadores y Suspensión">
                    Tren Delantero, Amortiguadores y Suspensión
                  </option>
                  <option value="Presupuesto Estimado Personalizado (RD$)">
                    Presupuesto Estimado Personalizado (RD$)
                  </option>
                  <option value="Otra consulta técnica">Otra consulta técnica</option>
                </select>
              </div>

              {/* Date & Shift */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-headline text-xs uppercase text-[#c3c6cf] tracking-wider mb-2 font-bold">
                    Día Preferido
                  </label>
                  <input
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    className="w-full bg-[#0B0C0E] border border-[#3A3E45] px-4 py-3 text-sm text-[#e2e2e5] focus:outline-none focus:border-[#ffc400] rounded-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-headline text-xs uppercase text-[#c3c6cf] tracking-wider mb-2 font-bold">
                    Turno Preferido
                  </label>
                  <select
                    value={turno}
                    onChange={(e) => setTurno(e.target.value)}
                    className="w-full bg-[#0B0C0E] border border-[#3A3E45] px-4 py-3 text-sm text-[#e2e2e5] focus:outline-none focus:border-[#ffc400] rounded-none transition-colors cursor-pointer"
                  >
                    <option value="Mañana (08:00 AM a 01:00 PM)">Mañana (08:00 AM a 01:00 PM)</option>
                    <option value="Tarde (01:30 PM a 06:30 PM)">Tarde (01:30 PM a 06:30 PM)</option>
                    <option value="Indiferente / Lo antes posible">
                      Indiferente / Lo antes posible
                    </option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block font-headline text-xs uppercase text-[#c3c6cf] tracking-wider mb-2 font-bold">
                  Comentario breve sobre la avería, ruido o síntoma
                </label>
                <textarea
                  rows={3}
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}
                  placeholder="Ej. Vibra el guía al frenar a 80 km/h o suena un chillido en las poleas al encender..."
                  className="w-full bg-[#0B0C0E] border border-[#3A3E45] px-4 py-3 text-sm text-[#e2e2e5] placeholder:text-[#575753] focus:outline-none focus:border-[#ffc400] rounded-none transition-colors"
                />
              </div>

              {/* Giant Yellow Action Button */}
              <button
                type="submit"
                className="w-full bg-[#ffc400] text-[#111315] font-headline text-xl sm:text-2xl uppercase py-4 font-extrabold flex items-center justify-center gap-3 hover:bg-[#ffdf99] transition-colors shadow-[4px_4px_0px_#000000] cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
              >
                <span>ENVIAR SOLICITUD POR WHATSAPP</span>
                <ArrowRight className="w-6 h-6 stroke-[3]" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#9c8f78] uppercase text-center">
                <span className="inline-block w-2 h-2 bg-[#ffc400]" />
                Respuesta media en menos de 15 minutos en horario laboral
              </div>
            </form>
          </div>

          {/* Right: Direct Workshop Contacts & Reception Photo */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="bg-[#181A1D] border border-[#26292D] p-6 sm:p-8">
              <h3 className="font-headline text-2xl uppercase text-[#e2e2e5] mb-6 border-b border-[#26292D] pb-3 font-bold">
                ATENCIÓN DIRECTA DE TALLER
              </h3>

              <div className="space-y-6">
                {/* Landline */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0B0C0E] border border-[#ffc400] flex items-center justify-center text-[#ffc400] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-headline text-xs uppercase text-[#c3c6cf] font-semibold">
                      Teléfono Fijo Taller
                    </div>
                    <a
                      href={`tel:${WORKSHOP_INFO.phoneClean}`}
                      className="font-headline text-2xl text-white hover:text-[#ffc400] transition-colors font-bold"
                    >
                      {WORKSHOP_INFO.phone}
                    </a>
                    <div className="text-xs text-[#c3c6cf]">Recepción directa en oficina de Ensanche La Fe</div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0B0C0E] border border-[#ffc400] flex items-center justify-center text-[#ffc400] shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-headline text-xs uppercase text-[#c3c6cf] font-semibold">
                      WhatsApp Técnico &amp; Fotos
                    </div>
                    <a
                      href={`https://wa.me/${WORKSHOP_INFO.whatsappClean}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-headline text-2xl text-[#ffc400] hover:underline font-bold"
                    >
                      {WORKSHOP_INFO.whatsapp}
                    </a>
                    <div className="text-xs text-[#c3c6cf]">
                      Envíanos notas de voz de ruidos o fotos de la matrícula
                    </div>
                  </div>
                </div>

                {/* Schedule */}
                <div className="flex items-start gap-4 pt-4 border-t border-[#26292D]">
                  <div className="w-10 h-10 bg-[#0B0C0E] border border-[#3A3E45] flex items-center justify-center text-[#c3c6cf] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-headline text-xs uppercase text-[#c3c6cf] font-semibold">
                      Horario de Entrega y Recepción
                    </div>
                    <div className="text-sm text-white font-medium">
                      Lunes a Viernes: 08:00 AM a 06:30 PM (Corrido)
                    </div>
                    <div className="text-xs text-[#c3c6cf] mt-0.5">
                      Sábados: 08:30 AM a 02:00 PM (Mantenimientos rápidos)
                    </div>
                    <div className="text-xs text-[#9c8f78] mt-0.5">
                      Domingos: Cerrado (Asistencia de urgencias por WhatsApp)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reception Photo */}
            <div className="bg-[#181A1D] border border-[#26292D] p-3">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0B0C0E]">
                <img
                  className="w-full h-full object-cover"
                  src={WORKSHOP_INFO.images.reception}
                  alt="Interior de recepción de clientes del taller Hermanos Ruiz en Santo Domingo"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-[#111315]/95 px-3 py-1.5 border-l-2 border-[#ffc400]">
                  <span className="font-headline text-[11px] uppercase tracking-wider text-[#c3c6cf]">
                    [HUECO FOTO: Recepción de clientes y mostrador con escáner de diagnóstico]
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media channels */}
            <div className="bg-[#181A1D] border border-[#26292D] p-5">
              <div className="flex items-center gap-2 mb-3">
                <Share2 className="w-4 h-4 text-[#ffc400]" />
                <h4 className="font-headline text-sm uppercase text-white font-bold tracking-wider">
                  Canales Oficiales y Redes
                </h4>
              </div>
              <p className="text-xs text-[#c3c6cf] mb-3">
                Encuéntranos en todas las plataformas para ver tutoriales mecánicos, fotos del taller y ofertas:
              </p>
              <SocialLinks variant="compact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
