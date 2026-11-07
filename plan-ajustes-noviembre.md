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

## Información legal provisional

Por indicación del cliente, queda pendiente completar y aprobar la política formal. La página `/informacion-legal/` comunica únicamente el funcionamiento actual y este estado provisional; no sustituye la política de tratamiento de datos.

Antes de activar el formulario o cerrar la publicación se necesitan: razón social y NIT del responsable, correo y área de atención de solicitudes, dirección exacta confirmada, finalidades y condiciones reales de conservación, procedimiento de atención y aprobación de la política. El borrador interno `politica-tratamiento-datos-borrador.md` sigue sin publicarse. El formulario continúa deshabilitado.

## Revisión manual y despliegue

Por instrucción del cliente no se ejecutan pruebas, build ni comprobaciones en navegador en esta fase. La adaptación responsive está implementada en CSS; su validación visual queda pendiente.

Revisión sugerida del cliente: Inicio, Nosotros e Información del sitio a 320, 390, 768 y 1440 px; lectura del texto sobre los seis fondos; controles con teclado; menú móvil; enlaces de categorías y WhatsApp. Cuando se decida preparar la publicación, ejecutar `npm run check` y `npm run build`, publicar `dist/` con HTTPS y revisar datos comerciales y política aprobada.

Riesgos pendientes: encuadre de imágenes existentes en pantallas estrechas, redacción final de misión/visión, resolución del logo procedente del documento y datos legales incompletos. No se realiza publicación remota en esta fase.
