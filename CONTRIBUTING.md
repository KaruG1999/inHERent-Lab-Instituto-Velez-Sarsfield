# 🤝 Guía para Colaboradores - Instituto DVS Web

## 🎯 Filosofía: "Documentación como Código"

La documentación evoluciona junto al proyecto, es versionada y siempre actualizada para facilitar el **onboarding rápido** y **handoff fluido** entre equipos.

## 📁 Estructura del Proyecto

```
instituto-web/
├── 📄 README.md                        # Overview principal del proyecto
├── 📄 CONTRIBUTING.md                   # Esta guía
├── 📄 TEAM-GUIDE.md                     # Roles y metodología
│
├── 📁 docs/
│   ├── 📁 planning/                     # 📋 Documentación de análisis y planificación
│   │   ├── historias-usuario.md         # Historias de usuario completadas
│   │   ├── fundamentos-hu.md            # Fundamentos y análisis de usuarios
│   │   ├── arquitectura-tecnica.md      # Decisiones técnicas del proyecto
│   │   ├── plan-testing.md              # Estrategia de pruebas y QA
│   │   └── cronograma-desarrollo.md     # Sprints, timeline y milestones
│   │
│   ├── 📁 content/                      # ✏️ Desarrollo textual y copywriting
│   │   ├── content-strategy.md          # Estrategia general de contenidos
│   │   ├── landing-page.md              # Textos para landing institucional
│   │   ├── clima-page.md                # Textos para página del clima
│   │   ├── copy-guidelines.md           # Tono de voz y estilo de redacción
│   │   └── assets/                      # Imágenes y recursos por página
│   │
│   ├── 📁 design/                       # 🎨 Documentación de diseño y UX/UI
│   │   ├── figma-guide.md               # → Link y guía práctica de Figma
│   │   ├── design-system.md             # Design tokens y componentes
│   │   ├── accessibility.md             # Guidelines WCAG 2.1 AA
│   │   ├── component-specs.md           # Mapping Figma → React
│   │   ├── ux-principles.md             # Principios UX educativo accesible
│   │   └── assets/                      # Screenshots, wireframes, user flows
│   │
│   └── 📁 technical/                    # ⚙️ Documentación técnica específica
│       ├── api-documentation.md         # Documentación de APIs
│       ├── deployment-guide.md          # Guía de despliegue
│       └── maintenance.md               # Guía de mantenimiento
│
├── 📁 design-assets/                    # 🎨 Assets y exportaciones de diseño
│   ├── 📁 figma-exports/               # Exportaciones directas de Figma
│   │   ├── icons/                       # SVGs optimizados
│   │   ├── images/                      # Assets gráficos
│   │   └── design-tokens.json          # Tokens exportados
│   │
│   └── 📁 brand/                       # Elementos de marca e identidad
│       ├── logos/                       # Versiones del logo institucional
│       ├── typography/                  # Fuentes y especificaciones
│       └── colors/                      # Paleta de colores institucional
│
└── 📁 src/                             # 💻 Código fuente (cuando se implemente)
    ├── components/                      # Componentes React
    ├── pages/                          # Páginas principales
    ├── styles/                         # Estilos globales y tokens CSS
    └── utils/                          # Utilidades y helpers
```

## 📋 Cómo Contribuir por Área

### 📝 **Contenido Textual**

**¿Dónde va?** → `docs/content/`

- **Nuevos textos de página:** `docs/content/[nombre-pagina].md`
- **Imágenes de contenido:** `docs/content/assets/[categoria]/`
- **Guías de estilo:** `docs/content/copy-guidelines.md`

**Antes de escribir:**

1. Revisa `copy-guidelines.md` para tono de voz
2. Considera las audiencias: estudiantes, padres, docentes
3. Prioriza claridad y accesibilidad

### 🎨 **Diseño y UX/UI**

**¿Dónde va?** → `docs/design/` y `design-assets/`

- **Documentación de diseño:** `docs/design/`
- **Assets exportados:** `design-assets/figma-exports/`
- **Screenshots y wireframes:** `docs/design/assets/`

**Workflow de diseño:**

1. Diseñar en Figma siguiendo `design-system.md`
2. Exportar assets a `design-assets/figma-exports/`
3. Documentar componentes en `component-specs.md`
4. Verificar accesibilidad con `accessibility.md`

### 💻 **Desarrollo y Código**

**¿Dónde va?** → `src/` y `docs/technical/`

- **Código fuente:** `src/`
- **Documentación técnica:** `docs/technical/`

**Antes de codificar:**

1. Revisa `component-specs.md` para mapping Figma → React
2. Consulta `design-system.md` para tokens CSS
3. Valida accesibilidad según `accessibility.md`

### 📊 **Planning y Análisis**

**¿Dónde va?** → `docs/planning/`

- **Análisis de usuarios:** Ya completado ✅
- **Cronogramas:** `cronograma-desarrollo.md`
- **Testing:** `plan-testing.md`

## 🔗 Referencias del Proyecto

### **Recursos Clave**

- **Instagram Oficial:** [@inst_dvs](https://www.instagram.com/inst_dvs?igsh=YzljYTk1ODg3Zg==)
- **Paleta de Colores:** [Propuesta inicial](https://claude.ai/public/artifacts/f2ac2f09-dad0-4c39-beb7-794c07aa81bc)
- **Documentación completa:** Ver `docs/` para cada área específica

### **Benchmarks UX/UI**

- **RAE:** [rae.es](https://www.rae.es/) - Diseño institucional
- **Worcester Academy:** [worcesteracademy.org](https://www.worcesteracademy.org/about)
- **Maristas Luján:** [maristaslujan.edu.ar](https://maristaslujan.edu.ar/)

## 📝 Convenciones de Nomenclatura

### **Archivos**

- Usar kebab-case: `landing-page.md`, `design-system.md`
- Incluir extensión apropiada: `.md`, `.json`, `.svg`
- Nombres descriptivos y específicos

### **Carpetas**

- Usar nombres en inglés para consistencia técnica
- Agrupar por funcionalidad, no por tipo de archivo
- Mantener estructura plana cuando sea posible

## ✅ Checklist Antes de Contribuir

- [ ] **Ubicación correcta:** Archivo en la carpeta apropiada según tipo
- [ ] **Nomenclatura:** Siguiendo convenciones establecidas
- [ ] **Referencias:** Links y assets funcionando correctamente
- [ ] **Documentación:** Actualizar índices si es necesario
- [ ] **Audiencia:** Considerar estudiantes, padres y docentes

## 🎯 Principios de Comodidad del Usuario

Cada contribución debe considerar nuestras **audiencias críticas:**

- **👧🧒 Estudiantes (12-18 años):** Mobile-first, navegación simple
- **👨‍👩‍👧 Padres/Tutores (35-50 años):** Claridad e información confiable
- **👩‍🏫 Docentes (25-65 años):** Eficiencia y herramientas funcionales

**La comodidad del usuario es el éxito del proyecto educativo.**

## 🚀 Próximos Pasos

1. **Explora la estructura** - Familiarízate con cada carpeta
2. **Revisa documentación existente** - En `docs/planning/` tienes la base
3. **Identifica tu área** - Contenido, diseño o desarrollo
4. **Consulta las guías específicas** - Cada `docs/` tiene su documentación
5. **Contribuye** - Siguiendo esta estructura y principios

## 📞 Dudas y Consultas

Si tienes preguntas sobre dónde ubicar algo o cómo estructurar una contribución, revisa primero la documentación en `docs/` de la área correspondiente.

**¡Gracias por contribuir al proyecto educativo del Instituto DVS!** 🏫
