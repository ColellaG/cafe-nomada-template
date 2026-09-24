import nabuLogo from '../assets/nabu-logo.jpg'

const nobuCafe = {
  id: 'nobu-cafe',
  name: 'nabu.cafe',
  shortName: 'NABU',
  theme: {
    page: '#68775b',
    ink: '#fffdf4',
    inkSoft: 'rgba(255, 253, 244, 0.78)',
    cream: '#fffdf4',
    paper: '#f7f3df',
    accent: '#c0a036',
    accentSoft: '#fbf3cd',
    line: 'rgba(255, 253, 244, 0.28)',
  },
  restaurant: {
    slogan: 'Un café pensado con calma, para disfrutar sin prisa 🍃',
    description: 'Una pausa cercana, con sabores simples, café rico y una atmósfera que invita a quedarse.',
    schedule: 'Lun a sáb · 08:00 a 20:00',
    phone: '+54 9 3814 16-4471',
    instagram: 'https://www.instagram.com/nabu.cafe/',
    instagramHandle: '@nabu.cafe',
    branches: [
      { name: 'nabu.cafe', address: 'Virgen de la Merced 665', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=nabu.cafe+Virgen+de+la+Merced+665' },
    ],
  },
  content: {
    eyebrow: 'Café de especialidad · calma · encuentros',
    heroTitle: 'Una pausa pensada',
    heroAccent: 'con calma',
    heroDescription: 'Vení a conocer una propuesta cercana, con sabores simples, café rico y una atmósfera que invita a quedarse.',
    visualBadge: '☕ especialidad de la casa',
    visualTitle: 'Una pausa nabu',
    visualMeta: 'Calma · café · algo rico',
    menuEyebrow: 'Menú',
    menuTitle: 'Una carta para disfrutar',
    menuDescription: 'Desayunos, brunch, café y algo dulce para acompañar cada momento.',
    experienceEyebrow: 'Experiencia',
    experienceTitle: 'Mucho más que un café',
    experienceDescription: 'La identidad de nabu vive en los detalles, la calma y las ganas de quedarse un rato más.',
    visitEyebrow: 'Encontrá nabu',
    visitTitle: 'Tu pausa empieza en nabu.',
    visitDescription: 'Consultá horarios, disponibilidad y novedades desde Instagram antes de tu visita.',
    branchLabel: 'Punto nabu',
    branchNamePrefix: 'nabu.cafe',
    heroAlt: 'Plato fresco de brunch servido en nabu.cafe',
  },
  assets: {
    logo: nabuLogo,
    hero: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85',
    fallback: 'coffee',
  },
  highlights: [
    { title: 'Café de especialidad', value: 'Con calma', description: 'Preparaciones cuidadas para disfrutar sin apuro.' },
    { title: 'Algo rico', value: 'Hecho cerca', description: 'Sabores simples y una carta para acompañar tu pausa.' },
    { title: 'Un lugar nabu', value: 'Para quedarse', description: 'Una atmósfera cálida para conversar, trabajar o desconectar.' },
  ],
  menuSections: [
    {
      id: 'breakfast',
      title: 'Desayunos y brunch',
      description: 'Opciones frescas para empezar el día con calma.',
      items: [
        { name: 'Tostada de palta', description: 'Pan artesanal, palta, huevo y toppings de estación.', price: 'Consultar', tags: ['Favorita'] },
        { name: 'Bowl de frutas', description: 'Frutas frescas, granola y una base cremosa.', price: 'Consultar', tags: ['Fresco'] },
      ],
    },
    {
      id: 'coffee',
      title: 'Café y bebidas',
      description: 'Clásicos preparados para una pausa tranquila.',
      items: [
        { name: 'Flat white', description: 'Espresso y leche texturizada en una taza equilibrada.', price: 'Consultar', tags: ['Especialidad'] },
        { name: 'Limonada natural', description: 'Cítrica, fresca y perfecta para los días cálidos.', price: 'Consultar', tags: ['Refrescante'] },
      ],
    },
  ],
  experience: [
    { title: 'Un espacio que inspira', text: 'Luz suave, materiales naturales y rincones pensados para disfrutar con calma.' },
    { title: 'Hecho sin prisa', text: 'Cada detalle de nabu busca que una salida simple se convierta en un buen recuerdo.' },
    { title: 'Momentos para compartir', text: 'Café, algo rico y una energía relajada para venir solo o acompañado.' },
  ],
}

export default nobuCafe
