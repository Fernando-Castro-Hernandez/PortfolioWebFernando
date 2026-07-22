# KICKOFF.md — Plan por fases para Claude Code

> Cómo arrancar el portafolio con Claude Code. Trabaja **por fases, con confirmación de
> Fernando entre cada una**. Lee primero `CLAUDE.md`, `PRODUCT.md` y `DESIGN.md`.

---

## Antes de empezar (setup que hace Fernando una vez)

1. **Node 22.12+** (requisito de Impeccable).
2. Instalar skills:
   - Impeccable: en Claude Code, añade el marketplace y en `/plugin` instala Impeccable.
   - Emil: `npx skills add emilkowalski/skill`
3. Colocar el contenido en el repo:
   - `Resume_Fernando_CV.pdf` en la raíz o `content/`.
   - Certificados en `content/certificates/`.
   - Imágenes de nubes y fotos en `public/images/` (nubes en `public/images/clouds/`).
   - `.env.local` con `NEXT_PUBLIC_WEB3FORMS_KEY=...`
4. Copiar `CLAUDE.md`, `PRODUCT.md`, `DESIGN.md` a la raíz del repo.

---

## Fases

### Fase 0 — Fundación
- Scaffolding Next.js (App Router) + TypeScript + Tailwind + Motion.
- Cargar los tokens de `DESIGN.md` (paleta turquesa, glass, tipografía vía `next/font`).
- Estructura de carpetas: `app/`, `components/`, `content/` (datos), `public/images/`.
- Verificar Impeccable y Emil disponibles. Opcional: `/impeccable document` para
  reconciliar `DESIGN.md` al formato Stitch (conservando concepto y guardarriles).
- **Salida**: proyecto que compila, tokens aplicados, página en blanco temática.
- ⏸️ Confirmar con Fernando.

### Fase 1 — Estructura y esqueleto
- Layout global, navegación de vidrio, fondo de nubes en capas (aún sin parallax fino).
- Todas las secciones en orden de ascenso (`DESIGN.md §7`), con datos **reales** pero
  sin pulir motion: Hero, Sobre mí, Habilidades, Certificados, Proyectos, Galería, Contacto.
- Componente de tarjeta de proyecto que **escala a N** (para los proyectos que faltan).
- Indicador de altitud lateral (estático por ahora).
- **Salida**: sitio navegable de arriba a abajo con contenido real.
- ⏸️ Confirmar.

### Fase 2 — Contenido fino
- Llenar cada sección desde `content/` (CV pulido, certificados agrupados por área,
  fichas de GymTracker y AlfaMascotas con sus puntos fuertes de `PRODUCT.md`).
- Galería con `next/image` optimizado.
- Formulario Web3Forms funcional + email ofuscado + redes (`DESIGN.md §8`).
- **Salida**: todo el contenido correcto y el formulario enviando.
- ⏸️ Confirmar.

### Fase 3 — Motion (con Emil)
- `emil-design-eng`: parallax de nubes, ensamblado por sección, indicador de altitud
  animado, botones magnéticos, micro-interacciones del vidrio.
- `review-animations`: QA de todo el motion.
- Pasar `prefers-reduced-motion` de verdad.
- **Salida**: el "ascenso" se siente fluido y con intención.
- ⏸️ Confirmar.

### Fase 4 — Pulido y gate de calidad
- `/polish`, `/typeset`, `/colorize` sobre piezas concretas que lo pidan.
- `npx impeccable detect src/`: cero slop; arreglar lo que marque.
- Auditoría de contraste AA sobre vidrio, y rendimiento en móvil (capas de blur, peso de imágenes).
- **Salida**: listo para deploy.
- ⏸️ Confirmar.

### Fase 5 — Deploy
- Push a GitHub → import en Vercel → cargar env vars → verificar build y preview.

---

## Prompt de arranque (para pegar en Claude Code al iniciar la Fase 0)

> Vamos a construir mi portafolio personal. Antes de escribir código, lee `CLAUDE.md`,
> `PRODUCT.md` y `DESIGN.md` en la raíz: contienen el stack, el brief y el sistema visual
> completo (concepto "ascenso a la nube" con Liquid Glass y turquesa).
>
> Trabajamos por fases con confirmación entre cada una, según `KICKOFF.md`. Empieza por
> la **Fase 0 (Fundación)**: scaffolding Next.js (App Router) + TypeScript + Tailwind +
> Motion, y aplica los tokens de `DESIGN.md`. Usa Impeccable para la estética y Emil para
> el motion cuando toque. No avances a la Fase 1 sin mi visto bueno.
>
> Antes de escribir nada, explícame tu plan para la Fase 0 y qué decisiones vas a tomar,
> para confirmar. Recuerda: cero emojis decorativos, commits atómicos, y accesibilidad
> desde el inicio.

---

## Pendiente de Fernando
- Enviar el resto de proyectos (repos/capturas/demos) para la sección de proyectos.
- Confirmar idioma del sitio (recomendado: inglés principal, con toggle ES/EN opcional a futuro).
- Colocar las imágenes de nubes y las fotos de la galería en `public/images/`.
