const cafeNomada = {
  id: 'cafe-nomada',
  selectorLabel: 'BASE DEMO',
  name: 'Café Nómada',
  shortName: 'NÓMADA',
  layout: 'accordion',
  theme: {
    page: '#f7f2ee',
    ink: '#3d2922',
    inkSoft: '#765d50',
    cream: '#fffaf5',
    paper: '#f2e4d7',
    accent: '#b8794f',
    accentSoft: '#e9c7ad',
    line: 'rgba(61, 41, 34, 0.16)',
  },
  restaurant: {
    slogan: 'Café rico, lugares para quedarse',
    description: 'Una mesa cálida para descubrir sabores simples y buenos momentos.',
    schedule: 'Lun a sáb · 08:00 a 21:00',
    phone: '+54 9 381 555 0101',
    instagram: 'https://www.instagram.com/',
    instagramHandle: '@cafenomada',
    branches: [
      {
        name: 'Café Nómada',
        address: 'Tucumán, Argentina',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cafe+Nomada+Tucuman',
      },
    ],
  },
  content: {
    eyebrow: 'Café de especialidad · calma · encuentros',
    heroTitle: 'Una pausa pensada',
    heroAccent: 'con cariño',
    heroDescription:
      'Un menú digital de muestra para cafeterías que quieren ofrecer una experiencia clara, cálida y fácil de consultar.',
    visualBadge: '☕ especialidad de la casa',
    visualTitle: 'Una pausa nómada',
    visualMeta: 'Café · algo rico · buenos encuentros',
    menuEyebrow: 'Menú',
    menuTitle: 'Una carta para acompañar',
    menuDescription: 'Opciones simples y ricas para cada momento del día.',
    experienceEyebrow: 'Experiencia',
    experienceTitle: 'Diseñado para quedarse',
    experienceDescription: 'Una identidad cercana que convierte una visita cotidiana en un recuerdo.',
    visitEyebrow: 'Conocé el proyecto',
    visitTitle: 'Una experiencia lista para tu negocio.',
    visitDescription: 'Esta demo puede adaptarse a la identidad, carta y sucursales de cada local.',
    branchLabel: 'Punto de encuentro',
    branchNamePrefix: 'Café',
    heroAlt: 'Café y pastelería servidos en una mesa cálida',
  },
  assets: {
    logo: null,
    hero: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85',
    fallback: 'coffee',
  },
  highlights: [
    { title: 'Menú claro', value: 'A tu medida', description: 'Una carta fácil de explorar desde cualquier celular.' },
    { title: 'Identidad propia', value: '100% adaptable', description: 'Colores, textos y contenido alineados con tu marca.' },
    { title: 'Experiencia simple', value: 'Sin fricciones', description: 'Información útil para que tus clientes decidan rápido.' },
  ],
  menuSections: [
    {
      id: 'coffee',
      title: 'Café y desayunos',
      description: 'Clásicos para empezar el día con algo rico.',
      items: [
        { name: 'Café filtrado', description: 'Aromático, suave y preparado al momento.', price: 'Consultar', tags: ['Especialidad'] },
        { name: 'Tostada de masa madre', description: 'Pan artesanal, queso crema y mermelada casera.', price: 'Consultar', tags: ['Favorita'] },
      ],
    },
    {
      id: 'sweet',
      title: 'Dulces y meriendas',
      description: 'Pastelería artesanal para acompañar la charla.',
      items: [
        { name: 'Budín de estación', description: 'Húmedo, casero y recién horneado.', price: 'Consultar', tags: ['Casero'] },
        { name: 'Roll de canela', description: 'Capas suaves, especias y glaseado sutil.', price: 'Consultar', tags: ['Dulce'] },
      ],
    },
  ],
  experience: [
    { title: 'Una mesa cálida', text: 'Materiales nobles y una atmósfera tranquila para trabajar, conversar o simplemente hacer una pausa.' },
    { title: 'Hecho con intención', text: 'Cada detalle de la carta y la interfaz está pensado para comunicar cercanía.' },
    { title: 'Listo para crecer', text: 'Una base flexible que puede acompañar nuevas sucursales y propuestas.' },
  ],
}

export default cafeNomada
