export const business = {
  name: 'Plásticos Santuario',
  tagline: 'Aliados para tu negocio',
  whatsapp: '573214287719',
  phoneDisplay: '321 428 7719',
  address: 'Carrera 20 # 28-00, Caucasia, Antioquia',
  socialHandle: '@plasticossantuariocaucasia',
  instagramUrl: 'https://www.instagram.com/plasticossantuariocaucasia/',
  facebookUrl: 'https://www.facebook.com/plasticossantuario',
  hours: [
    { days: 'Lunes a sábado', time: '7:00 a. m. – 6:00 p. m.', note: 'Jornada continua' },
    { days: 'Domingos', time: '7:00 a. m. – 12:00 m.' },
  ],
} as const;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const caucasiaMapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5000!2d-75.1996654!3d7.9934257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5b6f564b6cb921%3A0x2533766073b22eca!2sPl%C3%A1sticos%20Santuario!5e0!3m2!1ses-419!2sco!4v1791506184610!5m2!1ses-419!2sco';
export const coverageMapEmbedUrl = 'https://www.google.com/maps/d/u/2/embed?mid=1l7hSRndha09nL8mroC82xcuMnD1RFdI&ehbc=2E312F&ll=7.7688847%2C-75.1788438&z=9';

export const productLines = [
  {
    name: 'Biodegradables',
    slug: 'biodegradables',
    detail: 'Explora portacomidas y platos de bagazo de caña, además de otras alternativas que vale la pena evaluar según tu producto. Conoce sus usos y consulta la composición de cada referencia antes de elegir.',
    icon: 'leaf',
  },
  {
    name: 'Desechables',
    slug: 'desechables',
    detail: 'Vasos, platos, cubiertos y contenedores para atender con practicidad en el punto de venta, en eventos o en domicilios. Encuentra familias y formatos para distintas formas de servir.',
    icon: 'cup',
  },
  {
    name: 'Empaques y bolsas',
    slug: 'empaques-y-bolsas',
    detail: 'Bolsas para comercio, alimentos y entregas, junto con opciones de papel, plástico y presentaciones resellables. Descubre cómo buscar según el producto, el tamaño y la forma de entrega.',
    icon: 'bag',
  },
  {
    name: 'Cajas para alimentos',
    slug: 'cajas-para-alimentos',
    detail: 'Desde cajas para pizza y comidas rápidas hasta empaques para cupcakes y bandejas para preparados. Da a cada producto una presentación acorde con su viaje hasta el cliente.',
    icon: 'box',
  },
  {
    name: 'Coctelería y repostería',
    slug: 'cocteleria-y-reposteria',
    detail: 'Presenta postres, sirve bebidas y cuida los detalles de cada creación con vasos, domos, cajas y complementos de bar. Explora opciones para que tu producto se disfrute desde el primer vistazo.',
    icon: 'sparkles',
  },
  {
    name: 'Botellas y frascos',
    slug: 'botellas-y-frascos',
    detail: 'La presentación también cuenta cuando vendes bebidas, salsas, conservas o productos artesanales. Conoce frascos, botellas y saleros en distintas formas y consulta la referencia adecuada para tu uso.',
    icon: 'bottle',
  },
] as const;

// Referencias de centros poblados obtenidas de OpenStreetMap/Nominatim.
// Representan destinos de envío, no sedes ni direcciones de entrega.
export const coverageDestinations = [
  { name: 'El Bagre', lat: 7.5989686, lng: -74.8046507 },
  { name: 'Zaragoza', lat: 7.4925154, lng: -74.8682314 },
  { name: 'Nechí', lat: 8.0938077, lng: -74.7751988 },
  { name: 'Jardín', lat: 7.7288475, lng: -75.2796279, note: 'Referencia provisional: sector Jardín en Cáceres; confirmar con el negocio.' },
  { name: 'Tarazá', lat: 7.5804751, lng: -75.3998498 },
  { name: 'Montelíbano', lat: 7.9800534, lng: -75.4167198 },
  { name: 'La Apartada', lat: 8.0484697, lng: -75.3336510 },
  { name: 'Ayapel', lat: 8.3116711, lng: -75.1445022 },
  { name: 'Cáceres', lat: 7.5770890, lng: -75.3514383 },
  { name: 'Puerto Libertador', lat: 7.8900299, lng: -75.6695487 },
  { name: 'Puerto Clavel', lat: 7.7099652, lng: -74.7506847, note: 'Figura como Puerto Claver en el mapa; confirmar denominación con el negocio.' },
  { name: 'Puerto López', lat: 7.4371604, lng: -74.6881388 },
  { name: 'Segovia', lat: 7.0816790, lng: -74.7009089 },
  { name: 'Remedios', lat: 7.0285327, lng: -74.6951910 },
] as const;

export const caucasiaCoveragePoint = { name: 'Caucasia', lat: 7.9877579, lng: -75.1983745 } as const;
