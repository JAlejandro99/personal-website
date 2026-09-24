# jesusdominguezr.com

Sitio web personal / portafolio de **Jesús Alejandro Domínguez Reyes** — React + Vite.

- Bilingüe (EN / ES) con detección automática del idioma del navegador
- Modo oscuro / claro
- Responsive (móvil, tablet, escritorio)
- Secciones: Hero, Sobre mí, Experiencia, Proyectos (con ilustraciones SVG propias), Stack tecnológico (logos), Educación, Contacto
- Botón de descarga del CV, enlaces a LinkedIn y GitHub, formulario de contacto (abre el correo)
- SEO: meta tags, Open Graph (vista previa en LinkedIn/WhatsApp), JSON-LD, sitemap, robots.txt

## Requisitos

- Node.js 20 o superior → https://nodejs.org

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Generar versión de producción

```bash
npm run build     # genera la carpeta dist/
npm run preview   # para probar el build
```

## Editar contenido

Todo el texto está en **`src/data/content.js`** (experiencia, proyectos, skills, contacto, etc.), en inglés y español.

- **Foto de perfil:** coloca tu foto como `public/profile.jpg` y en `content.js` agrega `photo: "/profile.jpg",` dentro de `profile`.
- **CV:** reemplaza `public/Jesus_Dominguez_Reyes_Software_Engineer_CV.pdf` con la versión nueva (mismo nombre).
- **Nuevo proyecto:** agrega un objeto al arreglo `projects`. El campo `art` elige la ilustración (`secure`, `data`, `fintech`, `micro`, `fingerprint`, `vitals`).

## Publicar con tu dominio (recomendado: Vercel, gratis)

1. Sube este proyecto a un repositorio de GitHub (p. ej. `JAlejandro99/jesusdominguezr-web`).
2. Entra a https://vercel.com, inicia sesión con GitHub → **Add New → Project** → importa el repo.
   Vercel detecta Vite automáticamente (build: `npm run build`, output: `dist`). Clic en **Deploy**.
3. En el proyecto: **Settings → Domains** → agrega `jesusdominguezr.com` y `www.jesusdominguezr.com`.
4. En el panel del proveedor donde compraste el dominio, configura los DNS que Vercel te indique. Normalmente:

   | Tipo  | Nombre | Valor                  |
   |-------|--------|------------------------|
   | A     | @      | 76.76.21.21            |
   | CNAME | www    | cname.vercel-dns.com   |

   (Usa siempre los valores exactos que muestre Vercel en ese momento.)
5. Espera la propagación (minutos a unas horas). Vercel emite el certificado HTTPS solo.

Cada `git push` a `main` vuelve a publicar el sitio automáticamente.

### Alternativas

- **Netlify:** mismo flujo (build `npm run build`, publish `dist`), luego *Domain management*.
- **GitHub Pages:** el archivo `public/CNAME` ya contiene el dominio; publica `dist/` con una GitHub Action de Pages y apunta los registros A de GitHub Pages en tu DNS.
