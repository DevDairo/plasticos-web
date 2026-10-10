# Plásticos Santuario — sitio informativo

Sitio multipágina desarrollado con Astro, TypeScript y Tailwind CSS. La entrega actual incluye Inicio con las Líneas de producto, seis subpáginas de línea, Quiénes somos y Ubicación y cobertura. El contacto está integrado en Inicio. Se genera como sitio estático para publicarlo en un hosting web o VPS.

## Desarrollo local

```powershell
npm install
npm run dev
```

Para verificar la entrega:

```powershell
npm run check
npm run build
npm run preview
```

El resultado publicable se genera en `dist/`. El servidor debe publicar ese directorio, servir las rutas internas y disponer de HTTPS. El dominio definitivo se configurará cuando esté confirmado.

## Contenido y recursos

- Los datos compartidos del negocio y los resúmenes de las seis líneas están en `src/data/site.ts`. El contenido largo de cada línea está en `src/data/lineContent.json` y se muestra con la plantilla `src/pages/lineas/[slug].astro`. `contenidos-web-caucasia.md` sirve como referencia factual para una redacción comercial propia; no se publican sus notas editoriales. Sin una lista vigente, cada línea invita a consultar precio y disponibilidad por WhatsApp.
- El logo original permanece en la raíz del proyecto y se procesa con `astro:assets`.
- La lámina de mascotas facilitada por el cliente se conserva en `src/assets/mascotas-lineas.png`; seis poses se separaron sin redibujarlas en `src/assets/lineas/`. Astro genera versiones WebP para Inicio. Las imágenes de campaña no se han integrado.
- Inicio contiene el texto íntegro que tenía la página general de Líneas de producto, junto con las seis ilustraciones individuales enlazadas a sus subpáginas. La antigua ruta `/lineas/` redirige a `/#lineas` para conservar los enlaces existentes. La Home también resume la historia y la cobertura con enlaces a vistas ampliadas e integra las opciones de contacto. No se presenta inventario, precio ni disponibilidad en tiempo real.
- La página Quiénes somos incluye misión y visión como textos institucionales definitivos, según la indicación recibida en esta fase.
- Las poblaciones a las que se realizan envíos están centralizadas en `src/data/site.ts`; las condiciones de entrega se consultan con el negocio.
- La sección Contacto de Inicio muestra WhatsApp, teléfono, horario, dirección y el enlace de Instagram confirmado por el cliente (`@plasticossantuariocaucasia`).
- Inicio incorpora el iframe de la ficha de Caucasia proporcionado por el cliente, en un bloque compacto antes del texto de visita. La dirección textual sigue siendo la del cuestionario (Carrera 20 # 28-00); la ficha de Google muestra Cra. 20 #28-09. Confirmar el número exacto antes de publicar.
- Cobertura muestra en un único mapa la referencia de Caucasia y las 14 poblaciones indicadas por el cliente. Los marcadores representan centros poblados de referencia, no sedes ni puntos de entrega. El mapa usa Leaflet y teselas de OpenStreetMap con su atribución; las coordenadas se consultaron una sola vez en Nominatim y quedaron guardadas en `src/data/site.ts`, sin geocodificación desde el navegador.
- La referencia de Jardín está ubicada provisionalmente en el sector Jardín de Cáceres, por cercanía a los demás destinos. El cliente aún no confirmó si corresponde a ese lugar o al municipio de Jardín del Suroeste. Puerto Clavel figura como Puerto Claver en el mapa. Ambas referencias se distinguen visualmente y requieren confirmación antes de publicar.
- El mapa de Inicio carga de forma diferida y usa `referrerpolicy="strict-origin-when-cross-origin"`. El mapa de Cobertura desactiva el zoom con la rueda para facilitar el desplazamiento de la página.
- Las condiciones de domicilios sin costo requieren confirmación antes de publicarse.
- Los criterios de formatos, tamaños, texto alternativo, carga y revisión responsive están en `guia-recursos-web.md`. Las imágenes de campaña se revisarán línea por línea en una fase posterior.

## Estado de las fases generales

| Área | Estado | Verificación o siguiente dato |
| --- | --- | --- |
| Contenido y navegación | Implementados | Inicio contiene las seis líneas completas y enlaza a sus subpáginas; `/lineas/` redirige a esa sección. También están Nosotros y Cobertura. |
| Contacto | Enlaces a WhatsApp, Instagram y teléfono; mapa embebido y formulario maquetado como vista previa | El formulario está deshabilitado y no recibe datos. Su mecanismo de envío pertenece a la fase final. |
| Recursos e imágenes | Ilustraciones de línea integradas | Seis poses separadas y optimizadas con Astro; las imágenes de campaña permanecen para una fase posterior. |
| Protección de datos | Borrador interno preparado | `politica-tratamiento-datos-borrador.md` **no se publica**: faltan razón social del responsable, correo, dirección exacta, área de atención y condiciones reales de conservación. |
| Publicación en hosting | Proyecto estático preparado | Publicar `dist/` con HTTPS. Validar dominio, rutas, mapas, WhatsApp y datos comerciales confirmados antes de abrir al público. |

La vista previa del formulario incluye la casilla de aceptación, pero todo el conjunto de campos está deshabilitado. Al activar el formulario, la casilla deberá enlazar la política **publicada y aprobada**, comenzar desmarcada, impedir el envío sin aceptación y conservar prueba verificable de la autorización. El sitio actual no presenta un formulario que recoja datos directamente.

Verificación técnica del 9 de octubre de 2026: `npm run check` terminó con 0 errores y 0 advertencias; `npm run build` generó 9 páginas de contenido más la redirección de `/lineas/`. Se comprobaron 205 enlaces internos, sin rutas faltantes. Las seis ilustraciones optimizadas conservan la transparencia y suman 224 KiB. Esta comprobación no sustituye la validación visual, de datos comerciales, mapas y servicios externos en el dominio final.

La maqueta del formulario usa dos columnas en pantallas amplias y una columna hasta 540 px; los campos, la aceptación y el botón permanecen deshabilitados. La revisión visual en navegador de 320, 390, 768 y 1440 px está pendiente: el servidor local no pudo iniciarse en esta sesión por permisos.

## Mapa local del código

Graphify 0.9.81 está instalado de forma aislada en `.tools/graphify/`. El grafo generado en `graphify-out/` se excluye de Git. Para ubicar relaciones entre archivos sin leer toda la base:

```powershell
.\.tools\graphify\Scripts\graphify.exe query "Qué archivos usan business" --budget 500
.\.tools\graphify\Scripts\graphify.exe explain "SiteHeader.astro"
```

Después de cambiar el código, actualiza el grafo con `.\.tools\graphify\Scripts\graphify.exe update .`. Graphify no forma parte del sitio desplegado.

## Próximas fases

Completar y aprobar la política de datos con la información faltante, publicarla y enlazarla desde el formulario. Revisar cada tarjeta e integrar los recursos visuales aprobados siguiendo la guía. La lógica del formulario se definirá en la fase final. Hasta entonces, el contacto activo es WhatsApp.
