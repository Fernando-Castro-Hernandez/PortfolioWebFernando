# PRODUCT.md — Brief del portafolio

> El brief que Impeccable lee antes de diseñar. Responde *qué* construimos y *para quién*.
> El *cómo se ve* está en `DESIGN.md`; el *cómo se trabaja* en `CLAUDE.md`.

---

## Registro

**Brand** (no product UI). Es una pieza de marca personal / landing, no un dashboard.
Las decisiones de diseño se rigen por reglas de marca, no de producto.

---

## Quién es

Jesús Fernando Castro Hernández — "Fernando". Estudiante de TSU en Desarrollo de
Software (Instituto Tecnológico de Software, Mérida, Yucatán), encargado de tienda en
AlfaMascotas. Autodidacta, orientado a arquitectura, backend/cloud y automatización con
IA. Fortalezas: Java, C#/.NET, PostgreSQL, arquitectura de software, automatización
(n8n + IA), y camino a AWS.

## Para quién es el sitio (audiencia)

- **Reclutadores y líderes técnicos** de la industria de software en Mérida (Ksquare,
  Accenture, Softtek, Plenumsoft, SoldAI, National Soft, etc.) y empresas remotas.
- **Coordinadores del programa dual** que evalúan su colocación (inicia en septiembre).

Leen rápido, y deciden en segundos si vale la pena seguir. El
sitio debe transmitir seriedad técnica y capacidad de ejecución **antes** de que
terminen el primer scroll.

## Qué debe lograr

1. Que en 10 segundos quede claro: *qué hace, en qué es bueno, y que ya construyó cosas reales*.
2. Llevar a la persona a los **proyectos** (la evidencia) y al **contacto**.
3. Diferenciarlo del portafolio de estudiante genérico: aquí hay arquitectura, tests,
   despliegue a producción y automatización con IA, no solo "sé HTML y CSS".

## Voz / tono

Seguro, técnico y aterrizado. Bilingüe: **idioma principal inglés** (el CV está en
inglés y apunta a empresas "forward-thinking"), con posible toggle ES/EN más adelante.
Nada de humo. Frases directas que dicen qué construyó y qué decidió, no adjetivos
vacíos. Muestra criterio (trade-offs, decisiones), no solo tecnologías.

## Anti-referencias (lo que NO queremos)

- Plantillas de portafolio de estudiante genéricas.
- Gradientes morados, glassmorphism como cliché sin propósito, "neon", mesh backgrounds.
- Emojis decorativos (cero).
- "Passionate about coding", "I love to learn" y relleno motivacional vacío.
- Muros de badges de tecnologías sin contexto.
- Animaciones por decorar: si no comunica, se corta.

---

## Secciones (orden = ascenso; ver narrativa en `DESIGN.md`)

1. **Hero** — nombre, rol ("Software Development Student · Backend & Cloud"), tagline, CTAs.
2. **Sobre mí** — bio (base: el "About Me" del CV, pulido; sin el relleno).
3. **Habilidades** — Duras: Java, C#, Python, SQL · .NET, Spring Boot · Git, GitHub,
   Docker, IntelliJ, VSCode · AWS · PostgreSQL. Blandas: análisis y resolución de
   problemas, aprendizaje continuo, gestión del tiempo, adaptabilidad, trabajo
   colaborativo.
4. **Certificados** — agrupados por área (no lista plana):
   - *Cloud*: AWS Academy Graduate — Cloud Foundations.
   - *Bases de datos / SQL*: Intermediate SQL, Introduction to SQL (DataCamp), Sololearn Introduction to SQL.
   - *DevOps / herramientas*: Introduction to Docker, Intermediate Git, Introduction to GitHub Concepts (DataCamp).
   - *Redes / Python*: Network Technician Career Path (Cisco), Python Essentials 1 (Cisco).
   - *Datos*: PADAT-CPF Propedéutico Análisis de Datos.
   - *Membresía*: IEEE Membership.
5. **Proyectos** — la evidencia. Ver fichas abajo.
6. **Galería** — fotos (las coloca Fernando en `public/images/`).
7. **Contacto** — formulario Web3Forms + email ofuscado + redes. **Sin teléfono.**

## Milestones / logros (para el Hero o una tira aparte)

Participación en Global Game Jam · Invent For The Planet · Miembro IEEE · Encargado de
tienda en AlfaMascotas (operación de 4 sucursales) · Programa dual (próximo).

---

## Proyectos confirmados (2 destacados; faltan más)

### 1. GymTracker — proyecto insignia
- **Qué es**: bitácora de entrenamiento con sobrecarga progresiva. App web full-stack.
- **Stack**: ASP.NET Core 10 MVC, EF Core, PostgreSQL 16 (Docker), Identity, Bootstrap 5, Chart.js.
- **Lo que lo hace fuerte** (destacar esto, no solo el stack):
  - Arquitectura en capas con 4 proyectos separados + ADRs.
  - Coach IA + chatbot con contexto: pipeline de LLM (retrieval SQL + poda, guardarriles, prompt caching, observabilidad de tokens/latencia). Fallback Claude→Gemini.
  - Catálogo de +1300 ejercicios con GIFs (seed local, patrón cache-aside).
  - 123 pruebas xUnit + CI con GitHub Actions.
  - Desplegado en **AWS** (EC2 + RDS PostgreSQL, ECR, Terraform IaC, OIDC, deploy encadenado a las pruebas).
- **Repo**: https://github.com/Fernando-Castro-Hernandez/GymTracker
- **Etiquetas**: .NET · PostgreSQL · AWS · Terraform · IA · Arquitectura · Testing/CI

### 2. AlfaMascotas — Verificador automático de transferencias
- **Qué es**: automatización que verifica transferencias bancarias en tiempo real con IA; elimina 2+ horas de trabajo manual diario en una cadena de 4 tiendas.
- **Stack**: n8n (self-hosted, Docker, VPS Ubuntu) · Bot de Telegram · Claude Vision (OCR) · IMAP (verificación contra el banco) · Google Sheets.
- **Lo que lo hace fuerte**: problema real de negocio resuelto; 16 nodos; respuesta < 30 s; verificación real contra el banco (no asume validez); construido con planeación (CLAUDE.md de contexto) antes que con prompts sueltos.
- **Métrica destacada**: verificación de 5–15 min → < 30 s; 2+ h/día → 0 h.
- **Repo**: https://github.com/Fernando-Castro-Hernandez/alfamascotas-verificacion-transferencias
- **Etiquetas**: Automatización · n8n · Claude Vision · Telegram · IA aplicada

> Faltan más proyectos (Fernando los enviará). Diseña la sección de proyectos para
> **escalar a N tarjetas** sin rediseñar: layout de cards con capacidad para 4–8.
