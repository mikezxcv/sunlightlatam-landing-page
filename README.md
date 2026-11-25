# Sunlight

Sitio estático en español para Sunlight, desarrollado con Astro y Tailwind CSS.

## Desarrollo

Requiere Node.js 22.23.4 o posterior.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

El resultado de producción se genera en `dist/`.

## Configuración y contenido

- Edita `src/data/business.json` para actualizar el nombre, correo, teléfono internacional, cobertura, idioma y descripción.
- `src/assets/` agrupa los archivos por uso en `marca/`, `portada/` y `galeria/`. El orden y los textos alternativos de la galería se editan en `src/data/gallery.ts`.
- `src/data/` centraliza los datos del negocio, la navegación, los servicios y la galería. `src/styles/global.css` define los colores y estilos compartidos.
- `src/components/` contiene las secciones reutilizables y `src/layouts/BaseLayout.astro` reúne la estructura común.
- `blog/` contiene los artículos en Markdown. Astro valida sus campos mediante `src/content.config.ts` y genera las páginas estáticas de cada artículo.


## SEO y dominio público

Configura `siteUrl` en `src/data/business.json` con el origen HTTPS oficial y recompila. También puedes definir `SITE_URL` en el entorno de compilación. Astro genera las URLs canónicas, las imágenes sociales absolutas y el sitemap enlazado desde robots.txt a partir de ese origen.

Cada artículo vive en `blog/<slug>/index.md` junto a su fotografía. El nombre de la carpeta define la URL. En el encabezado del Markdown, `hero` apunta al archivo relativo, `heroAlt` describe la imagen y `heroCaption` permite añadir un pie de foto. Inicio, Blog y la página del artículo usan esa misma fotografía.
