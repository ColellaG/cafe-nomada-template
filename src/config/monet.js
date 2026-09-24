import monetLogo from '../assets/monet-logo.png'

const monet = {
  id: 'monet',
  name: 'Monet Coffee & Bar',
  shortName: 'MONET',
  theme: {
    page: '#fffaf0',
    ink: '#173c3a',
    inkSoft: '#315958',
    cream: '#fffaf0',
    paper: '#f8f1e4',
    accent: '#e7b94e',
    accentSoft: '#f4d98b',
    line: 'rgba(23, 60, 58, 0.14)',
  },
  restaurant: {
    slogan: 'Un lugar para disfrutar lo cotidiano',
    description: 'Café, brunch y buenos encuentros en un espacio luminoso, cálido y lleno de detalles.',
    schedule: 'Horarios a confirmar',
    phone: 'Reservas por Instagram',
    instagram: 'https://www.instagram.com/monet.cafeybar/',
    instagramHandle: '@monet.cafeybar',
    branches: [
      { name: 'Monet Yerba Buena', address: 'Av. Aconquija 750', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Monet+Coffee+Bar+Av.+Aconquija+750+Tucum%C3%A1n' },
      { name: 'Monet Centro', address: '25 de Mayo 517', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Monet+Coffee+Bar+25+de+Mayo+517+Tucum%C3%A1n' },
      { name: 'Monet Av. Perón', address: 'Av. Perón 1870', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Monet+Coffee+Bar+Av.+Per%C3%B3n+1870+Tucum%C3%A1n' },
    ],
  },
  content: {
    eyebrow: 'Café · brunch · bar · encuentros',
    heroTitle: 'Lo cotidiano se disfruta',
    heroAccent: 'en Monet',
    heroDescription: 'Encontrá tu Monet en Aconquija, 25 de Mayo o Av. Perón. Vení a conocer una propuesta gastronómica cercana, con platos frescos y una atmósfera que invita a quedarse.',
    visualBadge: '☕ especialidad de la casa',
    visualTitle: 'Brunch en Monet',
    visualMeta: 'Fresco · abundante · para compartir',
    menuEyebrow: 'Menú',
    menuTitle: 'Una carta para disfrutar',
    menuDescription: 'Sabores frescos, platos abundantes y bebidas para acompañar cada momento.',
    experienceEyebrow: 'Experiencia',
    experienceTitle: 'Mucho más que un café',
    experienceDescription: 'La identidad de Monet vive en sus espacios, su carta y esos momentos que dan ganas de repetir.',
    visitEyebrow: 'Encontrá tu Monet',
    visitTitle: 'Tres direcciones, la misma forma de disfrutar.',
    visitDescription: 'Consultá horarios, disponibilidad y novedades desde Instagram antes de tu visita.',
    branchLabel: 'Sucursal Monet',
    branchNamePrefix: 'Sucursal Monet',
    heroAlt: 'Plato fresco de brunch servido en Monet Coffee and Bar',
  },
  assets: {
    logo: monetLogo,
    hero: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85',
    fallback: 'coffee',
  },
  highlights: [
    { title: 'Cocina fresca', value: 'Todo el día', description: 'Platos coloridos, abundantes y preparados para disfrutar sin apuro.' },
    { title: 'Café & bar', value: 'Con identidad', description: 'Cafés, licuados y tragos para acompañar cada momento del día.' },
    { title: 'Tres sucursales', value: 'Cerca tuyo', description: 'Encontrá tu Monet en Aconquija, 25 de Mayo o Av. Perón.' },
  ],
  menuSections: [
    {
      id: 'brunch',
      title: 'Brunch y desayunos',
      description: 'Clásicos de Monet para arrancar el día con algo rico.',
      items: [
        { name: 'Tostada Azul', description: 'Pan tostado, toppings frescos y una presentación que invita a compartir.', price: 'Consultar', tags: ['Favorita', 'Fresca'] },
        { name: 'Croissant Monet', description: 'Croissant dorado, mantecoso y recién servido para acompañar tu café.', price: 'Consultar', tags: ['Clásico'] },
        { name: 'Huevos y palta', description: 'Palta, huevo y pan artesanal en una combinación simple y abundante.', price: 'Consultar', tags: ['Brunch'] },
      ],
    },
    {
      id: 'plates',
      title: 'Platos y ensaladas',
      description: 'Opciones frescas y completas para almorzar o compartir.',
      items: [
        { name: 'Ensalada Monet', description: 'Hojas verdes, vegetales de estación y toppings crocantes.', price: 'Consultar', tags: ['Fresca', 'Colorida'] },
        { name: 'Wrap de pollo', description: 'Pollo, vegetales y aderezo suave envueltos en una tortilla dorada.', price: 'Consultar', tags: ['Abundante'] },
      ],
    },
    {
      id: 'coffee',
      title: 'Cafetería',
      description: 'Cafés y bebidas para una mañana tranquila o una tarde de charla.',
      items: [
        { name: 'Café con leche', description: 'Clásico, cremoso y perfecto para acompañar algo dulce.', price: 'Consultar', tags: ['Clásico'] },
        { name: 'Limonada Monet', description: 'Cítrica, fresca y servida para esos días que piden una pausa.', price: 'Consultar', tags: ['Refrescante'] },
      ],
    },
  ],
  experience: [
    { title: 'Un espacio que inspira', text: 'Luz natural, plantas, madera y rincones pensados para que una salida simple se convierta en un buen recuerdo.' },
    { title: 'De la mañana a la noche', text: 'Monet acompaña desayunos, almuerzos, meriendas y encuentros con una carta flexible y cercana.' },
    { title: 'Momentos para compartir', text: 'Platos abundantes, bebidas frescas y una energía relajada para venir solo, en pareja o con amigos.' },
  ],
}

export default monet
