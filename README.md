# Café Nómada Template

Template base para crear menús digitales modernos, responsive y adaptables para cafeterías,
bares y restaurantes.

La demo incluye una landing comercial de **Café Nómada** con menú por categorías, información
del local, CTAs, diseño mobile-first, imágenes con fallback local y configuración lista para
deploy en Netlify o Vercel.

## Stack

- React
- Vite
- JavaScript
- SCSS Modules
- Oxlint

## Desarrollo local

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev      # servidor de desarrollo
npm run lint     # validación estática
npm run build    # build de producción
npm run preview  # previsualización del build
```

## Personalización

La información editable del negocio está centralizada en:

```text
src/data/menu.js
```

Desde allí se pueden reemplazar el nombre del local, horarios, contacto, categorías, productos
y textos de la experiencia sin modificar la estructura visual principal.

La imagen principal utiliza una fotografía de Unsplash y cuenta con un fallback local en
`src/assets/coffee-placeholder.svg`.

## Deploy

### Netlify

El proyecto incluye `netlify.toml`. Al importar el repositorio, Netlify utilizará:

```text
Build command: npm run build
Publish directory: dist
```

### Vercel

Seleccionar el preset **Vite**, usar `npm run build` como comando de build y `dist` como
directorio de salida.
