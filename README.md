# Hermanos Ruiz · Taller Mecánico Santo Domingo

Aplicación web moderna y de alto rendimiento para **Hermanos Ruiz**, taller automotriz de mecánica general, escaneo computarizado, tren delantero, frenos y aire acondicionado con más de 26 años de servicio en el Ensanche La Fe, Santo Domingo, Distrito Nacional (República Dominicana).

Diseñada con una estética industrial utilitaria de alta fidelidad: superficies oscuras en grafito técnico (`#111315`, `#181A1D`), papel técnico de alta visibilidad (`#F5F3EE`), acentos de seguridad en amarillo de marca (`#FFC400`), tipografías técnicas (*Barlow Condensed* y *DM Sans*), y un flujo de reserva directa hacia WhatsApp con confirmación interactiva dentro de la app.

---

## 🛠️ Tecnologías Utilizadas

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Empaquetador**: [Vite](https://vitejs.dev/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconografía**: [Lucide React](https://lucide.react.dev/) y SVGs vectoriales oficiales
- **Backend / Proxy (Opcional)**: [Express](https://expressjs.com/) y Node.js

---

## 🚀 Características Principales

1. **Localización para República Dominicana**:
   - Precios y tarifas en Pesos Dominicanos (**RD$**).
   - Dirección en Santo Domingo: *Calle San Cristóbal #14, Ensanche La Fe, D.N.*
   - Rutas de acceso en transporte público (Línea 1 del Metro de Santo Domingo, OMSA y vías principales).
   - Teléfono fijo `(809) 567-8210` y WhatsApp técnico `(829) 644-1234`.
   - Garantía legal bajo la **Ley 358-05 de Pro Consumidor** y facturación formal DGII con ITBIS.

2. **Banner Promocional Estacional**:
   - Notificación superior en amarillo de marca con selector interactivo de ofertas activas.
   - Posibilidad de reclamar el descuento con un clic, pasando el cupón al formulario de reserva.

3. **Calculadora Interactiva de Presupuestos**:
   - Estimación instantánea según el tipo de vehículo (Turismo, SUV / Yipeta o Camión / Furgoneta comercial).
   - Selección múltiple de servicios y desglose de mano de obra, repuestos y tiempo estimado.
   - Transferencia automática del presupuesto calculado al formulario de citas.

4. **Flujo de Cita & Despacho a WhatsApp**:
   - Formulario de reserva con validación de placa dominicana y selección de turno (mañana/tarde).
   - Generación de mensaje técnico formateado listo para enviar a WhatsApp.
   - Modal de confirmación en la app con número de referencia y opción de copia en portapapeles.

5. **Presencia en Redes Sociales**:
   - Integración de iconos vectoriales para YouTube, Facebook, Instagram, TikTok, Twitter (X), LinkedIn y Pinterest.

---

## 📦 Instalación y Uso Local

### Prerrequisitos
- Node.js (versión 18 o superior)
- Gestor de paquetes npm o yarn

### Pasos

1. **Clonar o descargar el repositorio**:
   ```bash
   git clone https://github.com/jukaben32/taller-mecanico-hermanos-ruiz.git
   cd taller-mecanico-hermanos-ruiz
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:3000` (o el puerto configurado por Vite).

4. **Compilar para producción**:
   ```bash
   npm run build
   ```
   Los archivos estáticos listos para producción se generarán en la carpeta `dist/`.

---

## 🌐 Despliegue

Este proyecto puede desplegarse en cualquier servicio de hosting estático o contenedor:
- **Vercel / Netlify**: Conecta tu repositorio de GitHub directamente; el comando de build es `npm run build` y el directorio de salida es `dist`.
- **GitHub Pages**: Configura la acción de GitHub para publicar el contenido de `dist`.
- **Google Cloud Run / Docker**: Utiliza el servidor Express incluido (`server.ts`) o sirve el build estático.

---

## 📄 Licencia

© 1998 - 2026 Hermanos Ruiz Taller Mecánico S.R.L. Todos los derechos reservados.
