# CLAUDE.md — Portafolio de Fernando Castro

> Memoria del proyecto para Claude Code. Léelo completo antes de tocar código.
> Complementa a `PRODUCT.md` (el brief) y `DESIGN.md` (el sistema visual). No repitas
> aquí lo que ya viven en esos archivos: enlázalos.

---

## Qué es este proyecto

Portafolio web personal de **Jesús Fernando Castro Hernández** (se le llama *Fernando*),
estudiante de TSU en Desarrollo de Software en el Instituto Tecnológico de Software
(Mérida, Yucatán). Objetivo del sitio: conseguir colocación en el programa dual
(inicia en septiembre) y presentarse ante la industria de software local e
internacional como un desarrollador **backend/cloud + automatización** que entiende
arquitectura y lleva cosas a producción, no solo a demos.

Concepto creativo y estética: **"Ascenso a la nube"** con **Liquid Glass**. Todo el
detalle visual está en `DESIGN.md`. No improvises la estética: sigue ese archivo.

---

## Stack

| Capa | Decisión | Nota |
| --- | --- | --- |
| Framework | **Next.js (App Router) + TypeScript** | SSG/estático; no hace falta backend propio |
| Estilos | **Tailwind CSS** + tokens CSS de `DESIGN.md` | Los `--tokens` de `DESIGN.md` son la fuente de verdad |
| Motion | **Motion** (`motion` / ex-Framer Motion) | Scroll-driven y micro-interacciones |
| Imágenes | `next/image` | AVIF/WebP, `placeholder="blur"`, lazy por defecto |
| Fuentes | `next/font` | Ver tipografía en `DESIGN.md` |
| Formulario | **Web3Forms** (POST cliente) | Sin servidor; key en env (ver abajo) |
| Deploy | **GitHub → Vercel** | Import del repo; sin config extra |

**No** metas librerías de UI pesadas (MUI, Chakra) ni plantillas de portafolio. Todo
se construye a mano sobre Tailwind + los tokens de `DESIGN.md`.

---

## Skills instaladas y cuándo usarlas

Este repo trabaja con dos skills de diseño ya instaladas. Úsalas, no las ignores.

- **Impeccable** (primaria, sistema de diseño). Comandos relevantes:
  - `/impeccable document` → formaliza/actualiza `DESIGN.md` (formato Stitch) si hace falta.
  - `/typeset`, `/colorize`, `/animate`, `/polish` → aplícalos sobre piezas concretas, no sobre todo a ciegas.
  - `npx impeccable detect src/` → cázalo antes de cada commit grande: busca "slop", gradientes AI, contraste roto del vidrio.
- **Emil Kowalski** (motion). Es la autoridad de animación:
  - `emil-design-eng` → construir las animaciones scroll-driven y micro-interacciones.
  - `review-animations` → **QA obligatorio** de motion antes de cerrar cada fase con animación.

Regla de oro: la estética general la manda Impeccable + `DESIGN.md`; el **motion** lo
manda Emil. Si hay conflicto de opinión sobre una animación, gana Emil.

---

## Convenciones (estilo de Fernando)

- **Commits atómicos** con mensajes descriptivos. Un cambio lógico por commit.
- **Trabajo por fases con confirmación.** No avances de fase sin cerrar la anterior
  (ver `KICKOFF.md`). Fernando prefiere entender el *por qué* antes de ver el código.
- Prosa/comunicación en **español**; código, nombres y términos técnicos en **inglés**.
- **Cero emojis decorativos.** Íconos SVG (ej. Lucide) si hacen falta. 
- Accesibilidad no es opcional: contraste AA, `prefers-reduced-motion`, foco visible,
  `alt` en imágenes, HTML semántico.
- Contenido en archivos de datos (`/content` o `/data` como TS/JSON), **no** hardcodeado
  dentro de los componentes, para que Fernando lo edite sin tocar JSX.

---

## Comandos

```bash
npm install
npm run dev      # desarrollo local
npm run build    # build de producción (debe pasar limpio antes de deploy)
npm run lint
npx impeccable detect src/   # gate de slop antes de commitear
```

---

## Datos y secretos

- **Fuentes de contenido** (Fernando las coloca en el repo):
  - CV: `Resume_Fernando_CV.pdf`
  - Certificados: carpeta `content/certificates/` (los del zip, ver `PRODUCT.md`)
  - Imágenes/galería: carpeta `public/images/`
  - Proyectos: datos en `content/projects.ts` (2 confirmados; faltan más)
- **Nunca** publiques el teléfono personal en el sitio. Solo email (ofuscado), LinkedIn,
  GitHub y el formulario. (Ver `PRODUCT.md` → Contacto.)
- **Web3Forms**: la access key va en `.env.local` como `NEXT_PUBLIC_WEB3FORMS_KEY`.
  Es una key pública por diseño (viaja al cliente); la protección antispam la da
  Web3Forms. Aun así, no la hardcodees en el JSX.
- Ningún secreto real se versiona. `.env.local` va en `.gitignore`.

---

## Deploy

1. Push a GitHub (`main`).
2. Import del repo en Vercel (detecta Next.js solo).
3. Cargar `NEXT_PUBLIC_WEB3FORMS_KEY` en las Environment Variables de Vercel.
4. Verificar build limpio y `prefers-reduced-motion` en el preview antes de promover.

---

## No hacer

- No plantillas de portafolio ni componentes genéricos "de catálogo".
- No gradientes morados, glassmorphism cliché, ni "neon".
- No animar todo por animar: cada motion debe tener intención (lo valida Emil).
- No romper contraste por estética del vidrio: legibilidad primero.
- No avanzar de fase sin la confirmación de Fernando.
