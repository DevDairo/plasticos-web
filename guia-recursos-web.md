# Recursos visuales y rendimiento — criterios para integración

Esta guía define cómo incorporar después las ilustraciones, la mascota y las imágenes de campaña sin modificar por anticipado las tarjetas que se revisarán individualmente.

## Estado actual

- La web carga localmente Bricolage Grotesque y Manrope; los iconos de interfaz vienen de `@lucide/astro`, y WhatsApp se dibuja como SVG. El logo usa `astro:assets` a 48 × 48 px.
- Las imágenes de campaña y mascota todavía no se sirven desde las páginas. Los PNG originales de las seis líneas pesan aproximadamente 1,9–2,3 MiB cada uno; no deben colocarse directamente en tarjetas o pantallas móviles.
- El mapa de Google de Inicio carga con `loading="lazy"`. El mapa de Cobertura requiere conexión a OpenStreetMap. Las familias tipográficas se sirven desde el paquete local, sin consulta a Google Fonts.

## Reglas de incorporación

1. Conservar intactos los originales y trabajar con copias aprobadas para la web. Verificar derechos de uso, versión de marca, recortes, texto incorporado y transparencia de cada archivo antes de integrarlo.
2. Ajustar cada imagen a su tamaño de uso real; exportar variantes para móvil y escritorio. Usar AVIF o WebP cuando el contenido lo permita; mantener PNG solo si la transparencia o el arte lo exige. No ampliar una imagen pequeña para cubrir una sección grande.
3. Procesar imágenes de contenido con `astro:assets` y entregar `width`/`height` o proporción conocida para evitar saltos de diseño. Usar `srcset` y `sizes` cuando el mismo recurso se muestre a distintos anchos. Verificar el peso final generado: como objetivo inicial, hasta ~200 KiB para una imagen de tarjeta y ~350 KiB para una imagen principal; ajustar según evidencia visual y medición real.
4. Cargar de forma diferida las imágenes bajo la primera pantalla. Una imagen principal visible al abrir la página debe cargarse de manera prioritaria; no aplicar `lazy` al elemento que determine el LCP. Evitar fondos CSS pesados que impidan controlar el recurso adaptable.
5. Escribir texto alternativo que describa el contenido útil. Si la imagen solo decora y el texto adyacente ya comunica lo mismo, usar `alt=""`. No repetir nombres de productos o claims que la imagen no demuestre.
6. Mantener las animaciones suaves y respetar `prefers-reduced-motion`. Evitar videos automáticos, librerías visuales adicionales y efectos que bloqueen la lectura o la navegación por teclado.
7. Antes de publicar cada recurso, revisar 320, 390, 768 y 1440 px, carga de red moderada y el peso transferido en la página real. Corregir recortes de producto, contraste, foco, texto incrustado y desplazamiento horizontal.

## Punto de decisión pendiente

La selección y ubicación de las seis ilustraciones se hará durante la revisión individual de tarjetas. Su integración exige validar el arte final de cada línea y que el contenido del PNG corresponda al texto aprobado de Caucasia. La mascota se incorporará solo cuando se indique su uso y variante final.
