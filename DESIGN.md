# DESIGN.md — Sistema visual del portafolio

> El *cómo se ve* y *cómo se mueve*. Fuente de verdad de la estética. Impeccable puede
> re-emitir este archivo con `/impeccable document`; si lo hace, conserva el concepto,
> la paleta turquesa y los guardarriles de accesibilidad de abajo.

---

## 1. Concepto: "Ascenso a la nube"

El sitio es un **ascenso**. El scroll lleva a la persona *hacia arriba*, atravesando
capas de atmósfera, desde el suelo (Hero) hasta sobre las nubes (galería/contacto).
El fondo usa **imágenes reales de nubes** (las provee Fernando) en capas con parallax
a distintas velocidades. Sobre ellas flotan **paneles de Liquid Glass**.

Es una metáfora deliberada: el ascenso al cloud (su meta de carrera, AWS) y la idea de
que cada sección es una altitud mayor. Motivo recurrente sugerido: un **indicador de
altitud** lateral que sube con el scroll (ej. `0 m → summit`), que además funciona como
progreso de lectura.

**Dirección tonal recomendada: cielo de crepúsculo (twilight), no día pleno.** Base
oscura teal-navy. Razones: el Liquid Glass y el brillo turquesa resaltan mucho más
sobre fondo oscuro, y el contraste de texto es más fácil de garantizar (AA). Las nubes
se ven retroiluminadas/moody. Cerca de la cima, la atmósfera aclara ligeramente. Si
Fernando quiere un cielo más claro/diurno, se puede, pero cuidar el contraste (§6).

---

## 2. Paleta (turquesa como color de sistema)

```css
:root {
  /* Cielo / fondo — se oscurece abajo, aclara hacia la cima */
  --sky-abyss:      #04141A;   /* base del Hero (suelo) */
  --sky-deep:       #072A33;
  --sky-mid:        #0B3D45;
  --sky-high:       #12525C;   /* cerca de la cima */

  /* Turquesa — acento del sistema */
  --tq-400:         #5EEAD4;   /* brillo / bordes especulares del vidrio */
  --tq-500:         #2DD4BF;   /* acento primario */
  --tq-600:         #14B8A6;   /* acento profundo / hover */
  --tq-glow:        rgba(45, 212, 191, 0.35);

  /* Liquid Glass */
  --glass-fill:     rgba(255, 255, 255, 0.06);   /* tinte del panel */
  --glass-fill-2:   rgba(20, 184, 166, 0.05);    /* variante con leve tinte turquesa */
  --glass-border:   rgba(255, 255, 255, 0.14);   /* borde base */
  --glass-specular: rgba(94, 234, 212, 0.45);    /* highlight superior (el "filo" del vidrio) */
  --glass-blur:     16px;                          /* backdrop-filter (ver §6, con techo) */

  /* Texto */
  --text-primary:   #EAF6F4;   /* blanco cálido */
  --text-secondary: #A7C4C0;   /* teal-gris apagado */
  --text-muted:     #6E8B88;

  /* Acento de contraste (SOLO para CTAs; opcional) */
  --cta:            #FF9E6D;   /* coral cálido que rompe el turquesa; si prefieres monocromático, usa --tq-500 */
  --cta-ink:        #2A1206;   /* texto sobre el CTA */
}
```

Uso de color: turquesa para acentos, enlaces, líneas y filos del vidrio; el coral **solo**
en botones de acción principales (máximo uno por vista), para que resalten. El resto es
neutro (cielo + texto). No introducir más colores.

---

## 3. Tipografía

Tres roles. Escoger de aquí (todas gratuitas, vía `next/font`):

- **Display / títulos**: `Satoshi` o `Space Grotesk` — geométrica con carácter.
- **Cuerpo**: `Manrope` (Fernando ya la usa y le gusta) o `Inter`.
- **Mono / etiquetas técnicas**: `JetBrains Mono` — para el indicador de altitud,
  etiquetas de proyecto, y detalles "de dev" (encaja con su identidad y el motivo del ascenso).

Reglas: jerarquía por tamaño y peso, no por color chillón. Títulos grandes y aireados.
Cuerpo con `line-height` cómodo (~1.6). Sentence case, nunca ALL CAPS salvo micro-labels
mono (ej. `ALT · 1200M`).

---

## 4. Liquid Glass — cómo se hace bien

El vidrio son superficies clave (nav, tarjetas de proyecto/cert, panel de contacto), no
todo. Anatomía de un panel:

```css
.glass {
  background: var(--glass-fill);
  backdrop-filter: blur(var(--glass-blur)) saturate(1.2);
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(1.2);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  /* filo especular: un highlight sutil en el borde superior */
  box-shadow:
    inset 0 1px 0 var(--glass-specular),
    0 8px 32px rgba(0, 0, 0, 0.25);
}
```

- **Filo especular** (`inset 0 1px 0`): es lo que lo hace ver "líquido/cristal" y no un
  simple blur. No lo omitas.
- **Legibilidad**: si el texto queda sobre nubes claras, sube la opacidad del `--glass-fill`
  o añade un scrim interno; nunca dejes texto flotando sin base suficiente (§6).
- **Capas de vidrio limitadas**: máximo 2–3 superficies con `backdrop-filter` visibles a
  la vez. Es caro para la GPU.

---

## 5. Motion (lo manda Emil — `emil-design-eng`)

Principios: intención sobre decoración; rápido y con resortes (spring), no lento y lineal;
todo respeta `prefers-reduced-motion`.

Motion tokens sugeridos:
```css
--dur-fast: 150ms; --dur-base: 300ms; --dur-slow: 600ms;
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-spring: /* usar spring de Motion, no bezier, para paneles y botones */;
```

Interacciones clave:
- **Parallax de nubes**: capas de fondo a distintas velocidades con el scroll (`useScroll`).
- **Ensamblado por sección**: al entrar en viewport, los paneles de vidrio aparecen con
  fade + leve translate-y + escala (stagger de hijos). "El sistema se ensambla al ascender."
- **Indicador de altitud**: sube con el progreso de scroll; número mono que cuenta.
- **Botones magnéticos** y micro-feedback (hover/press) en CTAs y tarjetas.
- **Filo del vidrio** que reacciona sutil al hover/puntero (el highlight se desplaza).
- **Cursor/hover en tarjetas de proyecto**: leve tilt o brillo, sin exagerar.

Regla: pasar `review-animations` de Emil antes de cerrar la fase de motion. Si una
animación no comunica nada, se corta.

---

## 6. Accesibilidad y rendimiento (no negociable)

El Liquid Glass y el parallax son caros y frágiles. Guardarriles:

- **`prefers-reduced-motion: reduce`** → desactivar parallax y animaciones de entrada;
  dejar el contenido estático y legible. Probarlo de verdad.
- **`backdrop-filter`**: techo de blur razonable (~16px), máximo 2–3 capas visibles.
  Fallback sólido (`background` opaco) donde no haya soporte o en `reduce`.
- **Contraste AA**: todo el texto sobre vidrio/nubes debe cumplir WCAG AA. Si una nube
  clara compromete el texto, sube opacidad del panel o mete scrim. Legibilidad > estética.
- **Imágenes de nubes**: `next/image`, AVIF/WebP, `placeholder="blur"`, tamaños
  responsivos. Nada de PNGs de varios MB al vuelo. La galería, lazy.
- **Móvil**: baja intensidad de parallax y de vidrio; menos capas. Probar en gama media.
- **Foco visible**, HTML semántico, `alt` descriptivo, navegación por teclado.

---

## 7. Narrativa del scroll (secciones = altitud)

| Altitud | Sección | Idea visual |
| --- | --- | --- |
| Suelo | Hero | Nubes bajas; placa de vidrio con nombre/rol se ensambla al cargar |
| ↑ | Sobre mí | Se empieza a subir; bio en panel de vidrio |
| ↑↑ | Habilidades | Duras + blandas en tarjetas de vidrio; chips turquesa |
| ↑↑↑ | Certificados | Agrupados por área; más altura, atmósfera aclara un poco |
| Pico | Proyectos | El clímax: tarjetas grandes de vidrio (GymTracker, AlfaMascotas, …) |
| Cima | Galería | Sobre las nubes; fotos |
| Horizonte | Contacto | Panel de vidrio con formulario + email ofuscado + redes |

El indicador de altitud lateral acompaña todo el recorrido.

---

## 8. Contacto (implementación y seguridad)

- **Formulario real** con Web3Forms (POST del cliente; key en `NEXT_PUBLIC_WEB3FORMS_KEY`).
  Validación en cliente, estados de carga/éxito/error, honeypot antispam.
- **Email ofuscado**: no lo pongas en texto plano en el HTML. Usa hipervínculo `mailto:`
  construido en runtime (o data-attributes + JS) para dificultar el scraping.
- **Redes**: LinkedIn y GitHub como hipervínculos con íconos SVG.
- **Sin teléfono** en el sitio.
