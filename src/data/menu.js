export const restaurant = {
  name: 'Café Nómada',
  slogan: 'Café para viajar sin salir del barrio',
  schedule: 'Lun - Dom · 8:00 - 22:00',
  address: 'Av. Córdoba 1432, Palermo',
  phone: '+54 11 4832-1045',
};

export const highlights = [
  {
    title: 'Café de especialidad',
    value: '12 variedades',
    description: 'Orígenes seleccionados para una taza equilibrada y aromática.',
  },
  {
    title: 'Brunch completo',
    value: 'Desde $6.800',
    description: 'Platos pensados para reuniones, pausas y encuentros de trabajo.',
  },
  {
    title: 'Ambiente cálido',
    value: 'Todo el día',
    description: 'Luz natural, madera y una energía relajada para quedarse un rato.',
  },
];

export const menuSections = [
  {
    id: 'coffee',
    title: 'Café de especialidad',
    description: 'Preparaciones con tostados locales y cortes de espresso cuidadosamente controlados.',
    items: [
      {
        name: 'Latte de vainilla',
        description: 'Espresso, leche cremosa y vainilla casera.',
        price: '$4.800',
        tags: ['Popular', 'Cremoso'],
      },
      {
        name: 'Flat white',
        description: 'Espresso intenso con leche microespumada y cuerpo sedoso.',
        price: '$4.500',
        tags: ['Fuerte', 'Suave'],
      },
      {
        name: 'Cold brew',
        description: 'Infusión fría de 12 horas, balance dulce y cítrico.',
        price: '$4.200',
        tags: ['Frío', 'Refrescante'],
      },
      {
        name: 'Cappuccino',
        description: 'Espresso, leche y espuma con un toque de canela.',
        price: '$4.300',
        tags: ['Clásico'],
      },
    ],
  },
  {
    id: 'brunch',
    title: 'Brunch y platos',
    description: 'Desde tostadas caseras hasta opciones más contundentes para mediodía.',
    items: [
      {
        name: 'Tostado de palta',
        description: 'Pan de masa madre, aguacate, semillas y limonera.',
        price: '$6.500',
        tags: ['Fit'],
      },
      {
        name: 'Bagel con salmón',
        description: 'Bagel horneado, salmón, queso crema y cebollino.',
        price: '$7.900',
        tags: ['Premium'],
      },
      {
        name: 'Sándwich de pollo',
        description: 'Pollo grillado, rúcula, tomate y alioli casero.',
        price: '$7.200',
        tags: ['Relleno'],
      },
      {
        name: 'Avo toast crocante',
        description: 'Pavé de aguacate con huevo, chile y tostadas.',
        price: '$6.900',
        tags: ['Esencial'],
      },
    ],
  },
  {
    id: 'sweet',
    title: 'Repostería',
    description: 'Dulces hechos en el día para acompañar mejor cada taza.',
    items: [
      {
        name: 'Alfajores de maicena',
        description: 'Textura suave y dulce con relleno de dulce de leche.',
        price: '$2.200',
        tags: ['Clásico'],
      },
      {
        name: 'Medialuna de manteca',
        description: 'Crocante, dorada y con manteca de calidad.',
        price: '$1.800',
        tags: ['Matutina'],
      },
      {
        name: 'Cheesecake de limón',
        description: 'Base de galleta con crema cítrica y final fresco.',
        price: '$3.800',
        tags: ['Ligero'],
      },
      {
        name: 'Brownie casero',
        description: 'Chocolate intenso con nueces y centro cremoso.',
        price: '$3.200',
        tags: ['Máximo'],
      },
    ],
  },
  {
    id: 'drinks',
    title: 'Bebidas y vinos',
    description: 'Opciones para cerrar un encuentro o prolongar una sobremesa.',
    items: [
      {
        name: 'Limonada de menta',
        description: 'Refrescante y aromática con un toque cítrico.',
        price: '$3.200',
        tags: ['Verde'],
      },
      {
        name: 'Chai latte',
        description: 'Bebida especiada con leche cremosa y notas cálidas.',
        price: '$4.100',
        tags: ['Caliente'],
      },
      {
        name: 'Vino tinto de la casa',
        description: 'Selección de la bodega para acompañar platos y postres.',
        price: '$5.600',
        tags: ['Bodega'],
      },
      {
        name: 'Spritz de naranja',
        description: 'Espumante con cítricos y un final dulce y limpio.',
        price: '$3.900',
        tags: ['Brunch'],
      },
    ],
  },
];

export const experience = [
  {
    title: 'El foco está en la taza',
    text: 'Cada preparación se sirve con una atención especial al equilibrio y al aroma, para que cada sorbo se disfrute completo.',
  },
  {
    title: 'Diseñado para quedarse',
    text: 'La propuesta combina energía de café y tranquilidad para reuniones informales, trabajo creativo o una pausa entre tareas.',
  },
  {
    title: 'Todo el día',
    text: 'Un menú pensado para desayunos, pausas, brunch y sobremesas sin perder una identidad clara ni una experiencia casual.',
  },
];
