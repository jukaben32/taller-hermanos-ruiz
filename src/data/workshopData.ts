export interface WorkshopService {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  priceLabel: string;
  basePrice: number;
  duration: string;
  iconName: string;
  popular?: boolean;
}

export const WORKSHOP_SERVICES: WorkshopService[] = [
  {
    id: 'aceite-filtros',
    number: '01',
    title: 'Cambio de Aceite y Filtro',
    shortDesc: 'Sustitución de lubricante sintético 5W30/0W20 homologado y filtro de aceite de primer equipo (OEM).',
    priceLabel: 'Desde RD$ 2,850',
    basePrice: 2850,
    duration: '~45 min',
    iconName: 'oil_barrel',
    popular: true,
  },
  {
    id: 'frenos-pastillas',
    number: '02',
    title: 'Frenos y Pastillas / Bandas',
    shortDesc: 'Revisión de discos, rectificado, cambio de pastillas cerámicas y purga de líquido DOT4 con test de ebullición.',
    priceLabel: 'Desde RD$ 3,400',
    basePrice: 3400,
    duration: '~1 hora',
    iconName: 'disc_full',
    popular: true,
  },
  {
    id: 'neumaticos-paralelo',
    number: '03',
    title: 'Gomas, Alineación y Balanceo',
    shortDesc: 'Montaje de neumáticos nuevos, balanceo computarizado de alta precisión y alineación láser de tren delantero.',
    priceLabel: 'Desde RD$ 1,200/goma',
    basePrice: 1200,
    duration: '~40 min',
    iconName: 'adjust',
  },
  {
    id: 'pre-itv-gases',
    number: '04',
    title: 'Inspección Marbete y Emisiones',
    shortDesc: 'Chequeo preventivo de 40 puntos para Revista / INTRANT, prueba de opacidad, luces, frenos y emisión de gases.',
    priceLabel: 'Tarifa fija RD$ 1,800',
    basePrice: 1800,
    duration: '~50 min',
    iconName: 'fact_check',
    popular: true,
  },
  {
    id: 'diagnosis-electronica',
    number: '05',
    title: 'Escaneo y Diagnóstico Computarizado',
    shortDesc: 'Conexión con escáner profesional multimarca OBD2, detección de Check Engine, borrado de fallas y calibración de sensores.',
    priceLabel: 'Tarifa fija RD$ 1,500',
    basePrice: 1500,
    duration: '~30 min',
    iconName: 'terminal',
  },
  {
    id: 'climatizacion-gas',
    number: '06',
    title: 'Aire Acondicionado y Carga de Gas',
    shortDesc: 'Detección de fugas con contraste UV, sustitución de filtro de cabina y carga garantizada de gas ecológico R134a/R1234yf.',
    priceLabel: 'Desde RD$ 3,200',
    basePrice: 3200,
    duration: '~50 min',
    iconName: 'ac_unit',
  },
  {
    id: 'distribucion-embrague',
    number: '07',
    title: 'Banda de Distribución y Clutch',
    shortDesc: 'Kit de tiempo completo, tensores, bomba de agua y kit de embrague con plato, disco y collarín garantizados.',
    priceLabel: 'Desde RD$ 14,500',
    basePrice: 14500,
    duration: '~1 día',
    iconName: 'settings',
  },
  {
    id: 'mecanica-suspension',
    number: '08',
    title: 'Tren Delantero y Suspensión',
    shortDesc: 'Catres, terminales de dirección, muñones, amortiguadores, cremallera, barras estabilizadoras y cajas de cambio.',
    priceLabel: 'Diagnóstico previo 0 RD$',
    basePrice: 0,
    duration: 'A determinar',
    iconName: 'handyman',
  },
];

export const WORKSHOP_REVIEWS = [
  {
    name: 'Manuel Gómez',
    role: 'Cliente en Ensanche Quisqueya',
    vehicle: 'Honda CR-V 2.4 i-VTEC',
    date: 'Hace 2 semanas',
    rating: 5,
    initial: 'M',
    text: 'Llevo mi CR-V a los Hermanos Ruiz desde hace más de 7 años. En otros talleres me querían cambiar la cremallera entera por un juego en el tren delantero; ellos solo me cambiaron los terminales y bujes. Honradez pura en Santo Domingo.',
  },
  {
    name: 'Elena Santana',
    role: 'Santo Domingo Este / Naco',
    vehicle: 'Hyundai Tucson 2.0',
    date: 'Hace 1 mes',
    rating: 5,
    initial: 'E',
    text: 'Se me prendió la luz del Check Engine antes de viajar a Samaná un fin de semana. Llegué al taller, le metieron el escáner computarizado de una vez, era un sensor de oxígeno sucio y en la tarde me entregaron la yipeta perfecta.',
  },
  {
    name: 'Javier Morales',
    role: 'Comerciante Independiente',
    vehicle: 'Daihatsu Delta / Camión Liviano',
    date: 'Hace 2 meses',
    rating: 5,
    initial: 'J',
    text: 'Vivo del reparto de mercancías en el Gran Santo Domingo. En Ruiz me hicieron el clutch completo y frenos en 24 horas para no perder días de trabajo. Presupuesto cerrado al peso sin inventos.',
  },
];

export const WORKSHOP_FAQS = [
  {
    question: '1. ¿Cobran por realizar la revisión y presupuesto inicial?',
    answer: 'No cobramos nada. La inspección visual en rampa y el levantamiento de presupuesto para averías estándar es 100% gratuito y sin compromiso. Si la falla requiere desmontar partes complejas de motor o transmisión interna, te cotizamos la mano de obra previa antes de aflojar una tuerca.',
  },
  {
    question: '2. ¿Mantienen la garantía de fábrica si mi vehículo es nuevo?',
    answer: 'Sí. Trabajamos con repuestos originales de fábrica (OEM) o piezas de calidad equivalente certificada internacionalmente, respetando las especificaciones de mantenimiento por kilometraje recomendadas por el fabricante (Toyota, Honda, Hyundai, Kia, Nissan, Ford, etc.).',
  },
  {
    question: '3. ¿Muestran las piezas viejas que fueron cambiadas?',
    answer: 'Siempre. Es parte innegociable de nuestra política de honestidad. Las piezas sustituidas se entregan en una caja en el baúl de tu vehículo o te enviamos fotos y videos explicativos por WhatsApp en el momento de la extracción.',
  },
  {
    question: '4. ¿Disponen de vehículo de cortesía mientras se repara el mío?',
    answer: 'Disponemos de 2 vehículos de cortesía para clientes que requieran reparaciones mayores de más de 48 horas en taller, previa reserva y disponibilidad.',
  },
  {
    question: '5. ¿Cuánto tardan en asignar un turno para taller?',
    answer: 'Para servicios de mantenimiento rápido (cambio de aceite, frenos, escaneo o aire acondicionado) damos cita para el mismo día o en un plazo de 24 horas. Para emergencias mecánicas o remolques en grúa, te recibimos de inmediato en nuestro acceso.',
  },
  {
    question: '6. ¿Qué formas de pago aceptan?',
    answer: 'Aceptamos transferencias bancarias locales inmediatas (Banco Popular Dominicano, Banreservas, Banco BHD), tarjetas de crédito y débito (Visa, Mastercard) y efectivo. Entregamos siempre factura legal formal con Comprobante Fiscal (NCF) con ITBIS (18%) desglosado.',
  },
];

export const WORKSHOP_INFO = {
  name: 'Taller Mecánico Hermanos Ruiz S.R.L.',
  shortName: 'Hermanos Ruiz',
  subtitle: 'Taller Automotriz · Santo Domingo, D.N.',
  tagline: 'Mecánica honesta, escaneo computarizado y tren delantero en Santo Domingo desde 1998',
  address: 'Calle San Cristóbal #14, Ensanche La Fe',
  postalCode: '10514',
  city: 'Santo Domingo',
  district: 'Distrito Nacional (Próximo a Av. San Martín y Av. Máximo Gómez)',
  phone: '(809) 567-8210',
  phoneClean: '18095678210',
  whatsapp: '(829) 644-1234',
  whatsappClean: '18296441234',
  email: 'taller@hermanosruiz.do',
  cif: 'RNC: 1-31-82947-1',
  industrialReg: 'Reg. Mercantil Santo Domingo Nº 102482-SD',
  currencySymbol: 'RD$',
  googleRating: 4.8,
  googleReviewCount: 142,
  yearsInBusiness: 26,
  hours: {
    weekdays: '08:00 AM a 06:30 PM (Horario corrido)',
    saturday: '08:30 AM a 02:00 PM (Mantenimientos rápidos)',
    sunday: 'Cerrado por descanso (Asistencia de emergencias vía WhatsApp)',
  },
  transit: {
    metro: 'Línea 1 del Metro de Santo Domingo (Estación Pedro Livio Cedeño o Peña Batlle) a solo 4 minutos caminando.',
    bus: 'Rutas OMSA y corredores de la Av. San Martín, Av. John F. Kennedy y Av. Máximo Gómez.',
    car: 'Fácil acceso directo desde la Av. 27 de Febrero, Av. John F. Kennedy y Expreso Quinto Centenario.',
  },
  images: {
    logo: 'https://lh3.googleusercontent.com/aida/AEtjO1XhIaCsI3LaOkBWELFRHbSGuIi5qe3Qgp59-PFEHbkotkLjq2LRe-ICmDS1_h_asx6wwBtEoT9DbLJpDdmDnVVp4BHYwDIXzymzqS94kwLHmOr96bI4IgqVsAw_nwKxi0iIz_h-pN2lp16GoTNjAsMU7OzMRB9sW0zLy2cmfiK00MG4rr60-RXLEbnGQ33rsjug5e9BnfQ7yQRLN9zpNECiI2yfcBeno-LCsi8jpZw-kX9w78r6jpi2b4M',
    heroBoxes: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3Ko2kJJFSBSkX1Lm7wjr-RBfct40j4W4NTyMK5juipBsRseUP_usyjn9w6lsbvfQAY3zRTeQ9Y1I09vX02576i_RTCC8SI0bXUA12-BCNuhacuH023lt1CgGUVyGvGlx615TqxDteUWAuNG07fGbGUobAUQTLx1xW7uQqiNkwm3y4BTxd-l9Uc5AS-348NLTPxfDPAyBaN0HhbDXRuUNcFr3CQ8fWUoA6pLzphFdJSq3Yu6oNVgNH',
    toolBench: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvZS6YAiSIBXZWHIG83Z4cGE06lmRABCozhZq6nfj58lMyfMc3qhKHmzgO0KTdr10CTKiE64J1YMmmE-KIkF5uD8hTIRbLE6HrpuE46_bGRJU5TgCXsomHAIUhcVGkOZTSzefub99POJ5C5BJbZr7teB64b7p70wGY65mEggizdxmR1jAR6DyVCZRv0HZlf4aniza1nSs4xa3KpHDE4j6eU9rrUdZt_d1Ul-yoaEmdGDPYThVexMzh',
    reception: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASEUj8UtIUx1R48G-i-CtIzqFjmoCILj-OEFBFktcODLuATWK_pPupg6XjFcvBDiCHzJxrZBlMxzNavBsH6wU5kOXz10zIBmSBGPjxyyMQY6xI2tuo2f2k252KM4mHMunZe10UxD5epQmnf8xu4HrxsYcmv2mbCxaYKyg0jElkOk3JoEcSKf9aeAa6IQLjME4XQMM6O0Fmrq5RjjhZP87shiQvNAvdACRGd8W_HOxi_45y59SJD4U_',
    workshopEntrance: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATOD1CSzjcZi7oRSSVrZOo6AFntEu3mWNwQHGoZcI_MuUwUkhOAys86zK0DWOoi2zXpSxfM-geTsDHsqfpqFcsMTOjumaYlwW0F--HqFh57OIqFyWGIetzKvVn9pD6N51EmWIa1_iOHvqUZV01LVCXQD5CZ2vriDRVJn2fi-mpjesGpuh6O3x-d7kY4PwNhSGn6rYqKf-9cD0ghPrqXdYgq2TSp9M8Q2wSDVr6XudotklB1pLpp9pI',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHs-NKWUzGiVocw8mJcVOZsF1jcfb-p8fsRFTns7n_yZoQwMTlRvgefhBg9C2g6rGgoWk_l7WJmPiwFtD1Be1woppmqQW045ZhMy-AVfH_uXYw-bUB5b_P1m4FuyRV39-mcs7z60pGxn1uB66H_mAeFWKmuTtm0iiYoWNwvqLzjuPpciTZZEDCC75tzfgZMg5YKTcAI7TWHlNa_mYqFo-Pjh91ZUIvmPQP1Gh6qcEX55OOPy1H8jcu',
  },
};

/**
 * Returns dynamic workshop open status based on Dominican Republic time (America/Santo_Domingo)
 */
export function getWorkshopStatus(): {
  isOpen: boolean;
  statusText: string;
  subText: string;
} {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const time = hour + minute / 60;

  // Sunday
  if (day === 0) {
    return {
      isOpen: false,
      statusText: 'CERRADO HOY',
      subText: 'Abre lunes a las 08:00 AM',
    };
  }

  // Saturday: 08:30 AM - 02:00 PM
  if (day === 6) {
    if (time >= 8.5 && time < 14) {
      return {
        isOpen: true,
        statusText: 'ABIERTO AHORA',
        subText: 'Cierra a las 02:00 PM',
      };
    }
    return {
      isOpen: false,
      statusText: 'CERRADO AHORA',
      subText: 'Abre lunes a las 08:00 AM',
    };
  }

  // Monday to Friday: 08:00 AM - 06:30 PM (Corrido)
  if (time >= 8 && time < 18.5) {
    return {
      isOpen: true,
      statusText: 'ABIERTO AHORA',
      subText: 'Cierra a las 06:30 PM',
    };
  }

  return {
    isOpen: false,
    statusText: 'CERRADO AHORA',
    subText: 'Abre mañana a las 08:00 AM',
  };
}
