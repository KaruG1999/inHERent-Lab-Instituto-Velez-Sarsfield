# Guía de Figma del Proyecto

## 📋 Información General

### Enlaces Principales

- **Archivo de Figma:** [Link al proyecto](https://figma.com/file/tu-proyecto)
- **Prototipo Interactivo:** [Link al prototipo](https://figma.com/proto/tu-prototipo)
- **Especificaciones para Desarrollo:** [Dev Mode](https://figma.com/dev-mode/tu-proyecto)

### Equipo y Permisos

- **Owner:** Nombre del propietario
- **Editores:** Lista de personas con permisos de edición
- **Visualizadores:** Equipo con acceso de solo lectura
- **Desarrolladores:** Acceso a Dev Mode

---

## 🎨 Estructura del Proyecto

### Organización de Páginas

1. **🎯 Cover** - Portada e información del proyecto
2. **🎨 Design System** - Componentes, colores, tipografías
3. **📱 Mobile Screens** - Diseños para dispositivos móviles
4. **💻 Desktop Screens** - Diseños para escritorio
5. **🔄 User Flows** - Flujos de usuario y wireframes
6. **📚 Archive** - Versiones anteriores y exploraciones

### Convenciones de Nomenclatura

- **Frames:** `[Plataforma] - [Pantalla] - [Estado]`

  - Ejemplo: `Mobile - Login - Default`
  - Ejemplo: `Desktop - Dashboard - Loading`

- **Componentes:** `[Categoría]/[Nombre]`

  - Ejemplo: `Button/Primary`
  - Ejemplo: `Card/Product`

- **Variantes:** `[Estado] / [Tamaño] / [Tipo]`
  - Ejemplo: `Default / Large / Primary`

---

## 🎯 Design System

### Colores

- **Primary:** `#[código hex]` - Color principal de la marca
- **Secondary:** `#[código hex]` - Color secundario
- **Success:** `#[código hex]` - Estados exitosos
- **Warning:** `#[código hex]` - Advertencias
- **Error:** `#[código hex]` - Estados de error
- **Neutral:** Escala de grises para textos y fondos

### Tipografía

- **Font Family:** [Nombre de la fuente]
- **Heading 1:** 32px / 40px line-height / Bold
- **Heading 2:** 24px / 32px line-height / Bold
- **Body Large:** 18px / 28px line-height / Regular
- **Body:** 16px / 24px line-height / Regular
- **Caption:** 14px / 20px line-height / Regular

### Espaciado

- **Sistema de 8px:** 8, 16, 24, 32, 40, 48, 56, 64px
- **Margins:** Exteriores de componentes
- **Paddings:** Interiores de componentes
- **Gaps:** Entre elementos relacionados

### Componentes Principales

- **Buttons:** Primary, Secondary, Tertiary, Icon
- **Inputs:** Text, Email, Password, Search, Select
- **Cards:** Product, User, Article, Summary
- **Navigation:** Header, Sidebar, Breadcrumbs, Tabs
- **Modals:** Dialog, Drawer, Tooltip, Popover

---

## 📱 Responsive Design

### Breakpoints

- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px - 1439px
- **Large Desktop:** 1440px+

### Consideraciones

- Layout flexible con CSS Grid/Flexbox
- Imágenes y iconos escalables
- Texto legible en todos los tamaños
- Touch targets mínimo 44px en móvil

---

## 🔄 Flujos de Usuario

### Flujos Principales

1. **Onboarding:** Registro → Verificación → Configuración inicial
2. **Autenticación:** Login → Dashboard / Recuperar contraseña
3. **Funcionalidad Principal:** [Describir flujo core del producto]
4. **Checkout/Conversión:** [Si aplica]

### Estados de UI

- **Loading States:** Spinners, skeletons, progress bars
- **Empty States:** Sin datos, búsquedas vacías
- **Error States:** Errores de red, validación, 404
- **Success States:** Confirmaciones, completado

---

## 👩‍💻 Para Desarrolladores

### Dev Mode

- Activar Dev Mode para inspeccionar propiedades CSS
- Exportar assets en formatos SVG, PNG, JPG
- Copiar códigos de color y medidas exactas
- Revisar especificaciones de spacing y typography

### Exports y Assets

- **Iconos:** SVG, 24x24px base
- **Imágenes:** PNG/JPG, múltiples resoluciones (@1x, @2x, @3x)
- **Logo:** SVG vectorial + PNG fallback

### Tokens de Diseño

```css
/* Ejemplo de tokens CSS */
:root {
  --color-primary: #[hex];
  --color-secondary: #[hex];
  --font-family: "[Nombre de fuente]", sans-serif;
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
}
```

---

## 📋 Proceso de Trabajo

### Workflow

1. **Exploración:** Wireframes y ideas iniciales
2. **Diseño:** Aplicar design system
3. **Review:** Feedback interno y stakeholders
4. **Prototipado:** Interacciones y transiciones
5. **Handoff:** Especificaciones para desarrollo
6. **QA Visual:** Revisión de implementación

### Comentarios y Feedback

- Usar comentarios en Figma para feedback específico
- Etiquetar a personas relevantes con @mention
- Marcar comentarios como resueltos
- Documentar decisiones importantes

### Versionado

- Duplicar archivo antes de cambios mayores
- Nombrar versiones: `v1.0`, `v1.1`, etc.
- Documentar changelog en la página Cover

---

## 🔧 Herramientas y Plugins

### Plugins Recomendados

- **Content Reel:** Contenido placeholder realista
- **Unsplash:** Imágenes de stock
- **Iconify:** Biblioteca de iconos
- **Auto Layout:** Mejora de auto layout
- **Design System Organizer:** Organización de componentes

### Integraciones

- **Slack:** Notificaciones de actualizaciones
- **Jira/Asana:** Vinculación con tickets
- **Zeplin/Avocode:** Handoff adicional si necesario

---
