export const restaurant = {
  name: 'Monet Coffee & Bar',
  shortName: 'MONET',
  slogan: 'Un lugar para disfrutar lo cotidiano',
  description:
    'Café, brunch y buenos encuentros en un espacio luminoso, cálido y lleno de detalles.',
  schedule: 'Horarios a confirmar',
  phone: 'Reservas por Instagram',
  instagram: 'https://www.instagram.com/monet.cafeybar/',
  instagramHandle: '@monet.cafeybar',
  branches: [
    {
      name: 'Monet Yerba Buena',
      address: 'Av. Aconquija 750',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Monet+Coffee+Bar+Av.+Aconquija+750+Tucum%C3%A1n',
    },
    {
      name: 'Monet Centro',
      address: '25 de Mayo 517',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Monet+Coffee+Bar+25+de+Mayo+517+Tucum%C3%A1n',
    },
    {
      name: 'Monet Av. Perón',
      address: 'Av. Perón 1870',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Monet+Coffee+Bar+Av.+Per%C3%B3n+1870+Tucum%C3%A1n',
    },
  ],
};

export const highlights = [
  {
    title: 'Cocina fresca',
    value: 'Todo el día',
    description: 'Platos coloridos, abundantes y preparados para disfrutar sin apuro.',
  },
  {
    title: 'Café & bar',
    value: 'Con identidad',
    description: 'Cafés, licuados y tragos para acompañar cada momento del día.',
  },
  {
    title: 'Tres sucursales',
    value: 'Cerca tuyo',
    description: 'Encontrá tu Monet en Aconquija, 25 de Mayo o Av. Perón.',
  },
];

export const menuSections = [
  {
    id: 'brunch',
    title: 'Brunch y desayunos',
    description: 'Clásicos de Monet para arrancar el día con algo rico.',
    items: [
      {
        name: 'Tostada Azul',
        description: 'Pan tostado, toppings frescos y una presentación que invita a compartir.',
        price: 'Consultar',
        tags: ['Favorita', 'Fresca'],
      },
      {
        name: 'Croissant Monet',
        description: 'Croissant dorado, mantecoso y recién servido para acompañar tu café.',
        price: 'Consultar',
        tags: ['Clásico'],
      },
      {
        name: 'Huevos y palta',
        description: 'Palta, huevo y pan artesanal en una combinación simple y abundante.',
        price: 'Consultar',
        tags: ['Brunch'],
      },
      {
        name: 'Bowl de frutas',
        description: 'Frutas de estación, granola y una base cremosa para una pausa liviana.',
        price: 'Consultar',
        tags: ['Ligero'],
      },
    ],
  },
  {
    id: 'plates',
    title: 'Platos y ensaladas',
    description: 'Opciones frescas y completas para almorzar o compartir.',
    items: [
      {
        name: 'Ensalada Monet',
        description: 'Hojas verdes, vegetales de estación y toppings crocantes.',
        price: 'Consultar',
        tags: ['Fresca', 'Colorida'],
      },
      {
        name: 'Wrap de pollo',
        description: 'Pollo, vegetales y aderezo suave envueltos en una tortilla dorada.',
        price: 'Consultar',
        tags: ['Abundante'],
      },
      {
        name: 'Carne Monet',
        description: 'Corte de carne con guarnición y una presentación de autor.',
        price: 'Consultar',
        tags: ['Especialidad'],
      },
      {
        name: 'Bowl de pollo',
        description: 'Proteína, vegetales y una base sabrosa para un almuerzo completo.',
        price: 'Consultar',
        tags: ['Completo'],
      },
    ],
  },
  {
    id: 'coffee',
    title: 'Cafetería',
    description: 'Cafés y bebidas para una mañana tranquila o una tarde de charla.',
    items: [
      {
        name: 'Café con leche',
        description: 'Clásico, cremoso y perfecto para acompañar algo dulce.',
        price: 'Consultar',
        tags: ['Clásico'],
      },
      {
        name: 'Licuado natural',
        description: 'Frutas, hielo y frescura en un vaso lleno de color.',
        price: 'Consultar',
        tags: ['Natural'],
      },
      {
        name: 'Limonada Monet',
        description: 'Cítrica, fresca y servida para esos días que piden una pausa.',
        price: 'Consultar',
        tags: ['Refrescante'],
      },
      {
        name: 'Café frío',
        description: 'Una preparación suave y refrescante para disfrutar sin apuro.',
        price: 'Consultar',
        tags: ['Frío'],
      },
    ],
  },
  {
    id: 'sweet',
    title: 'Dulces y meriendas',
    description: 'Algo rico para cerrar la visita con el espíritu Monet.',
    items: [
      {
        name: 'Tostado dulce',
        description: 'Pan dorado con una combinación dulce para acompañar el café.',
        price: 'Consultar',
        tags: ['Merienda'],
      },
      {
        name: 'Croissant relleno',
        description: 'Capas crocantes, relleno suave y el toque justo de dulzura.',
        price: 'Consultar',
        tags: ['Popular'],
      },
      {
        name: 'Frutas con crema',
        description: 'Frutas frescas con una base cremosa y toppings crocantes.',
        price: 'Consultar',
        tags: ['Fresco'],
      },
      {
        name: 'Dulce del día',
        description: 'Una opción de pastelería para descubrir en cada visita.',
        price: 'Consultar',
        tags: ['Del día'],
      },
    ],
  },
];

export const experience = [
  {
    title: 'Un espacio que inspira',
    text: 'Luz natural, plantas, madera y rincones pensados para que una salida simple se convierta en un buen recuerdo.',
  },
  {
    title: 'De la mañana a la noche',
    text: 'Monet acompaña desayunos, almuerzos, meriendas y encuentros con una carta flexible y cercana.',
  },
  {
    title: 'Momentos para compartir',
    text: 'Platos abundantes, bebidas frescas y una energía relajada para venir solo, en pareja o con amigos.',
  },
];
