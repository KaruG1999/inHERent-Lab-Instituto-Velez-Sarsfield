# Resumen de la propuesta

**Objetivo:** tener la Landing del colegio y la App del Clima (una ciudad — la del colegio) diseñadas en Figma y completamente implementadas en **Next.js + Tailwind** en 8 semanas (~2 meses).

**Método:** cada sesión (2h) combina teoría + demo práctica: la persona que prepara la clase trae un componente parcial ya hecho y lo explica; luego todas integran/ajustan.

**Datos de la estación:** durante el desarrollo se usa un _mock JSON_; al final se sustituye por la API real de la estación (o por tu backend) sin cambiar componentes.

---

## Parte A — Diseño en Figma (entregable: archivo Figma listo para handoff)

### Qué hacer en Figma (pasos claros)

- **Crear el proyecto:** `ColegioXYZ - Web` → crear página “Landing” y página “Clima”.
- **Define tokens / estilos globales (Design Tokens):**
  - Colores primario/secundario, grays, success/warn.
  - Tipografías (heading, body), tamaños y espaciados.
  - Sombras y radios.
- **Auto-layout y componentes:** usar _Auto Layout_ para que todo sea responsive.
- **Crear componentes atómicos:** Buttons, Card, Input, Badge, Icon. Usar _Variants_ para estados (hover, disabled).
- **Diseñar pantallas completas (Desktop y Mobile):**
  - **Landing:** Header, Hero, Sobre, Noticias (cards estáticas), Materias grid, Footer.
  - **Clima:** Header, ClimaCard (temp + icon + hora), DetalleCard (humedad, viento), _Optional:_ mini-forecast (3 días).
- **Prototipo interactivo:** link entre Landing → Clima para simular navegación.
- **Handoff:** export tokens y componentes (nombres claros), preparar especificaciones (spacing, font-size, color hex).
- **Checklist de Figma entregable:** frames responsive, componentes con variants, assets optimizados (svgs), layer names limpios.

### Quién hace qué en Figma (sugerencia)

- **Clase 1 (setup):** alguien crea el file y tokens.
- **Clase 2–3:** una diseña el Hero + Header; otra diseña Cards/Grids; otra diseña ClimaCard.
- **Al final:** revisar consistencia y generar handoff.

---

## Parte B — Implementación: mapping Figma → React + Tailwind

### Stack recomendado

- **Next.js** (routing, optimizaciones, fácil deploy en Vercel)
- **Tailwind CSS** (utility-first, rápido para clases)
- **Storybook (opcional)** para desarrollar/mostrar componentes de forma aislada — muy útil para enseñar

### Estructura sugerida (ejemplo)

```bash
/repo
  /components
    Header.jsx
    Hero.jsx
    ClimaCard.jsx
    DetailCard.jsx
    NewsCard.jsx
    GridSubjects.jsx
    Footer.jsx
  /pages
    index.jsx      // landing
    clima.jsx      // app del tiempo
  /styles
    globals.css    // tailwind import
  /data
    mock/clima.json
  /utils
    fetcher.js
```

### Mapeo componente → responsabilidades

- **Header.jsx**

  - Props: `{ logoSrc }`
  - Logo, nav links (Home, Clima).

- **Hero.jsx**

  - Props: `{ title, subtitle, ctaText, ctaHref }`

- **NewsCard.jsx**

  - Props: `{ title, date, excerpt, imageUrl }`
  - Usar `loading="lazy"` en imágenes.

- **GridSubjects.jsx**

  - Renderiza tarjetas con materias.

- **ClimaCard.jsx**

  - Props/data: `{ city, tempC, condition, updatedAt }` o usar `useClima()` hook.
  - Estados: `loading` / `error` / `data`.

- **DetailCard.jsx**

  - Props: `{ label, value, unit }` (humedad, viento).

- **Footer.jsx**
  - Texto simple y año dinámico.

### Hooks / utils

- `useClima(url = '/data/mock/clima.json')` → fetch, loading, error.
- `fetcher.js` → wrapper de fetch con timeouts y parseo JSON.

---

## Flujo recomendado de trabajo (clases / sesiones)

- 8 semanas (16 sesiones). Cada sesión 2h:
  - La persona que prepara trae un componente parcial y lo explica 20–40 min.
  - Resto de la sesión: integración práctica y pequeñas tareas.

**Entrega final:** Landing + App del Clima implementadas y desplegadas (Vercel), con `useClima()` apuntando a `mock/clima.json`. Handoff para conectar a la API real al finalizar.

---

## Notas sobre integración con la estación meteorológica

- **Durante desarrollo:** usar `data/mock/clima.json` con la estructura mínima:

```json
{
  "station_id": "colegio-1",
  "city": "La Plata",
  "ts_utc": "2025-08-21T14:00:00Z",
  "temp_c": 21.4,
  "humidity": 65
}
```

-Al final (hito del mes 3): cambiar useClima() para apuntar a https://mi-backend/api/clima/actual.

- Nota de seguridad: no exponer keys en frontend; la estación POSTea a backend protegido; frontend sólo GET público.

# Parte E — Reglas prácticas para las que preparan la clase

- **Traer código y Figma listo (al menos 50% implementado).**

- **Explicar en 20–30 min**:

  - Por qué diseñaste el componente así.
  - Qué `props` recibe y cómo se usan.
  - Consideraciones de accesibilidad (aria, roles, foco).
  - Qué decisiones de Tailwind usaste (breakpoints, utilidades clave, variantes).

- **Traer ejercicio práctico**:
  - Un pequeño reto que el resto complete en 30–60 min (p. ej. agregar estado a un componente, hacerlo responsive, añadir una variante de estilo, o escribir un test unitario pequeño).

---

# Parte F — Acceptance criteria / Checklist por componente

- **Header**

  - Logo correcto.
  - Navegación funciona (link a `/clima`).
  - Accesible (`<nav>` con `aria-label`, focus visible en enlaces).

- **Hero**

  - Responsive en móvil/tablet/desktop.
  - CTA visible y keyboard-focusable.
  - Texto correcto y semántica (h1/h2).

- **NewsCard**

  - Muestra imagen (optimizada), fecha, título y excerpt.
  - Imagen con `loading="lazy"` y `alt` descriptivo.
  - Diseño consistente con Figma (padding, tipografía).

- **ClimaCard**

  - Muestra temperatura en **°C**.
  - Muestra icono del estado climático.
  - Muestra la **ciudad fija** (nombre del colegio).
  - Muestra texto `Última actualización: hh:mm` con formato legible.
  - Tiene estados: **loading spinner** y **mensaje de error** (user-friendly).

- **DetailCard**

  - Muestra `label` + `value` + `unit` (ej.: Humedad • 65 %).
  - Layout responsivo y accesible (roles/labels si aplica).

- **Deploy**
  - Sitio accesible en Vercel (o hosting elegido).
  - HTTPS activo (candado).
  - Smoke test pasando: abrir `/clima` carga datos (mock o API) y no lanza errores críticos en consola.
