# Ajustes de contenido y presentación — noviembre de 2026

Rama: `codex/ajustes-contenido-responsive`.
Referencia: documento «recortes - pagina santuario.md» proporcionado por el cliente. Sus textos y capturas se usan como requisitos de esta revisión.

## Estrategia

Mantener el sitio estático en Astro y sus componentes compartidos. Reutilizar `@lucide/astro` (licencia ISC), instalado en el proyecto, sin añadir dependencias, backend ni infraestructura. Los iconos se renderizan como SVG locales; no se cargan desde un CDN.

1. Inicio: párrafo y botón principal, eliminación de textos redundantes y carrusel de imágenes existentes con contenido superpuesto.
2. Categorías: seis resúmenes breves e iconos minimalistas verde claro. Conservar enlaces y slugs.
3. Nosotros: historia completa, misión, visión, tarjetas breves y sustitución de mascotas ambientales.
4. Navegación: eliminar Líneas de producto y Contacto del menú superior y móvil, según la captura. Las secciones de Inicio y los enlaces del pie siguen disponibles.
5. Información del sitio: aviso provisional accesible desde el pie y documentación de datos legales pendientes.
6. Entrega local: reiniciar el servidor para revisión manual del cliente.

## Decisiones de implementación

- El checkout original no tenía carrusel. Se añadió un componente aislado con avance manual y seis imágenes existentes, sin temporizadores. El primer fondo permanece visible sin JavaScript y los controles se habilitan cuando está disponible.
- Texto y botón permanecen sobre los fondos; una veladura clara facilita la lectura. Altura determinada por contenido, tipografía fluida y ajustes específicos para tableta y móvil.
- Categorías en tres columnas, dos en tableta y filas con icono lateral en móvil. Los ejes ambientales pasan a una columna en móvil.
- Se mantienen enlaces externos con `noopener noreferrer`, SVG decorativos ocultos a lectores de pantalla, botones etiquetados y foco visible.
- La misión y visión del documento estaban mezcladas y duplicadas. Se reunieron las frases completas bajo sus respectivos títulos, corrigiendo concordancia y repeticiones. El cliente revisará esta reconstrucción editorial.
- El logo brillante se toma directamente de la captura del documento mediante un encuadre SVG, conservando los píxeles originales sin regenerar el diseño. Se utiliza en cabecera, pie y favicon. El nombre y el lema permanecen iguales. La fuente completa está en `src/assets/logo-referencia-documento.png` y el encuadre autónomo en `src/assets/logo-santuario.svg`.

## Información legal provisional — antecedente sustituido el 8 de noviembre

Por indicación del cliente, queda pendiente completar y aprobar la política formal. La página `/informacion-legal/` comunica únicamente el funcionamiento actual y este estado provisional; no sustituye la política de tratamiento de datos.

Antes de activar el formulario o cerrar la publicación se necesitan: razón social y NIT del responsable, correo y área de atención de solicitudes, dirección exacta confirmada, finalidades y condiciones reales de conservación, procedimiento de atención y aprobación de la política. El borrador interno `politica-tratamiento-datos-borrador.md` sigue sin publicarse. El formulario continúa deshabilitado.

## Revisión manual y despliegue

Por instrucción del cliente no se ejecutan pruebas, build ni comprobaciones en navegador en esta fase. La adaptación responsive está implementada en CSS; su validación visual queda pendiente.

Revisión sugerida del cliente: Inicio, Nosotros e Información del sitio a 320, 390, 768 y 1440 px; lectura del texto sobre los seis fondos; controles con teclado; menú móvil; enlaces de categorías y WhatsApp. Cuando se decida preparar la publicación, ejecutar `npm run check` y `npm run build`, publicar `dist/` con HTTPS y revisar datos comerciales y política aprobada.

Riesgos pendientes: encuadre de imágenes existentes en pantallas estrechas, redacción final de misión/visión, resolución del logo procedente del documento y datos legales incompletos. No se realiza publicación remota en esta fase.

## Corrección del carrusel — 8 de noviembre

- Se consultó el documento original `Downloads/recortes - pagina santuario.md` y se preservaron el párrafo completo de presentación y el CTA «Conoce nuestros productos».
- Se sustituyeron los seis recortes de campaña del carrusel por tres escenas ilustrativas nuevas de empaques, alimentos y envases. Sus originales y prompts están en `src/assets/inicio/`. No representan fotografías del local ni inventario confirmado. Astro genera WebP en tres tamaños.
- Composición inspirada en la referencia de Darnel proporcionada: banner amplio, texto a la izquierda, producto a la derecha, flechas laterales e indicadores inferiores. En móvil se reserva espacio para las imágenes debajo del texto.
- Se conserva el avance manual, sin temporizador. El cambio de imagen utiliza fundido y desplazamiento lateral de 24 px durante 650 ms mediante CSS. El texto permanece fijo. Se desactiva el movimiento con `prefers-reduced-motion`.
- Se eliminó el bloque «Aliados para tu negocio / Un aliado para cada momento de tu operación», junto con sus reglas y selector de animación. El lema de cabecera y pie se conserva.
- Esta revisión incluye comprobaciones técnicas y visuales; las notas anteriores de validación pendiente corresponden a la fase previa. Se mantiene la entrega local, sin publicación remota.
- Validación: `npm run check` sin errores, advertencias ni sugerencias; `npm run build` correcto. Revisión en navegador a 320, 390, 768, 1280 y 1440 px, sin desbordamiento horizontal. Comprobados flechas, indicadores y vuelta de la tercera a la primera imagen mediante teclado. La preferencia de movimiento reducido se contempla en CSS; no se simuló en el navegador.
- Servidor Astro iniciado fuera del sandbox a petición del cliente, con respuesta HTTP 200 en `http://127.0.0.1:4321/`.

## Finalización del contenido legal — 8 de noviembre

Por solicitud del cliente, se sustituyó la información provisional por términos y condiciones del sitio y del formulario en `/informacion-legal/` y una política de tratamiento en `/politica-tratamiento-datos/`. Se mantienen las rutas y se enlazan ambas desde el pie y desde el formulario, incluso mientras sus controles están deshabilitados.

Datos aportados por el cliente: PLASTICOS SANTUARIO CAUCASIA S.A.S., NIT 901725680-9, extracto informativo de RUES suministrado en el chat (no verificado independientemente en RUES); Carrera 20 # 28-00 confirmada expresamente; teléfono 3214287719; correo de referencia plasticossantuario@gmail.com. El correo aparece resaltado con aviso de posible actualización, sin considerarlo definitivo.

Se utiliza Administración de la sociedad como área funcional de atención en el texto. La designación operativa de personal y la recepción efectiva del correo no fueron confirmadas por el cliente y deben asegurarse en la operación del negocio. Los plazos escritos y los derechos no quedan satisfechos únicamente por añadir textos a la web.

Los términos preservan el carácter informativo y los derechos del consumidor, describen la consulta sin equipararla a un pedido y no incluyen exclusiones generales de responsabilidad. La política contempla responsable, datos, finalidades, autorización, derechos, procedimiento y plazos, conservación por necesidad y obligaciones legales, seguridad, mapas y terceros, vigencia y cambios. La autorización del formulario se limita a la consulta, sin publicidad, y sigue desmarcada y deshabilitada.

Fuentes oficiales consultadas:

- Ley 1581 de 2012: https://apps.procuraduria.gov.co/normograma/compilacion/docs/ley_1581_2012.htm
- Decreto 1074 de 2015, artículos 2.2.2.25.2.4, 2.2.2.25.2.5, 2.2.2.25.2.8 y 2.2.2.25.3.1 a 2.2.2.25.3.3: https://relatoria.colombiacompra.gov.co/normativa/decreto-1074-de-2015/
- Ley 1480 de 2011: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=44306
- Ley 2300 de 2023: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=213990

Configuración: `business.email` y datos de contacto en `src/data/site.ts`; sociedad, NIT, dirección confirmada, área y versión en `src/data/legal.ts`. Al cambiar el correo, actualizar `business.email`; retirar el resaltado de referencia cuando proceda mediante `legal.emailIsReference`. El borrador anterior queda identificado como histórico.

La integración de envío del formulario no forma parte de esta finalización editorial. Antes de activarlo deben existir recepción segura, validación en servidor y evidencia consultable de la autorización (texto/versión, fecha y manifestación), además de un procedimiento operativo para los derechos de los titulares. Debe comprobarse el hosting definitivo, sus registros y los acuerdos con proveedores; no se presenta esta revisión de contenido como una certificación integral de cumplimiento de la empresa.

Verificación de esta entrega: `npm run check` sin errores, advertencias ni sugerencias (31 archivos) y `npm run build` correcto (12 páginas). En navegador se comprobaron ambos documentos y sus enlaces a 390 y 1440 px, sin desbordamiento horizontal. El correo tiene fondo amarillo y enlace `mailto:`; el teléfono utiliza `tel:+573214287719`. Se comprobó la navegación desde el formulario a la política y que su casilla continúa requerida, desmarcada y deshabilitada, sin campos de envío habilitados. No se enviaron datos ni se probó recepción en Gmail o WhatsApp.
