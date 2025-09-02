# Plan de Testing QA Manual - Instituto Vélez Sársfield
## Fase 1: Landing + App del Tiempo

---

## 1. METODOLOGÍA Y ENFOQUE

### Testing Manual
Utilizaremos **testing manual** para este proyecto debido a:
- Primera fase del proyecto con componentes nuevos
- Necesidad de validación visual y UX detallada
- Recursos limitados para automatización inicial
- Funcionalidades front-end que requieren evaluación humana

### Metodología Ágil
Implementaremos **metodología ágil** porque:
- Permite iteraciones rápidas y feedback continuo
- Facilita la adaptación a cambios de requerimientos
- Integra testing en cada sprint
- Mejora la comunicación entre equipos de desarrollo y QA
- Entrega valor incremental al cliente

---

## 2. ESTRUCTURA DE DOCUMENTACIÓN

### 2.1 Requerimientos con Tabla de Requerimientos

**Pasos:**
1. Identificar épicas del proyecto
2. Desglosar features por épica
3. Crear user stories detalladas
4. Definir criterios de aceptación funcional
5. Establecer criterios de aceptación no funcional
6. Documentar escenarios de error handling

**Contenido:**
- **Épica:** Funcionalidades macro del sistema (ej: Sistema Institucional)
- **Features:** Componentes principales (ej: Landing Page, App Clima)
- **User Stories:** Necesidades específicas del usuario en formato estándar
- **Aceptación Funcional:** Qué debe hacer el sistema (comportamiento)
- **Aceptación No Funcional:** Cómo debe funcionar (performance, usabilidad)
- **Error Handling:** Cómo manejar situaciones de falla

**Datos utilizados:** Documentación de producto, mockups de Figma, especificaciones técnicas

---

### 2.2 Plan de Pruebas

**Pasos:**
1. Definir alcance del testing
2. Establecer objetivos claros
3. Seleccionar estrategias de prueba
4. Asignar recursos necesarios
5. Crear cronograma tentativo

**Contenido:**
- **Alcance:** Qué se va a probar y qué no (inclusiones/exclusiones)
- **Objetivo:** Metas específicas del plan de testing
- **Estrategias:** Tipos de pruebas a realizar (funcional, responsive, compatibilidad)
- **Recursos:** Equipos, dispositivos, herramientas necesarias
- **Cronograma:** Timeline de actividades de testing

**Datos utilizados:** Requerimientos del proyecto, recursos disponibles, timeline de desarrollo

---

### 2.3 Casos de Prueba con Tabla de Casos de Prueba

**Pasos:**
1. Crear casos de prueba por user story
2. Incluir precondiciones y pasos detallados
3. Definir resultados esperados
4. Asignar prioridades y categorías
5. Revisar y aprobar casos de prueba

**Contenido:**
- **ID del caso:** Identificador único (TC-001)
- **Descripción:** Qué se está probando
- **Precondiciones:** Estado inicial requerido
- **Pasos:** Acciones específicas a realizar
- **Resultado esperado:** Comportamiento correcto esperado
- **Prioridad:** Alta/Media/Baja

**Datos utilizados:** User stories, criterios de aceptación, mockups de diseño

---

### 2.4 Ejecución de Pruebas

**Pasos:**
1. Ejecutar casos de prueba según cronograma
2. Documentar resultados (Pass/Fail/Blocked)
3. Reportar defectos encontrados
4. Validar testing responsive en múltiples dispositivos
5. Consolidar resultados de ejecución

**Contenido:**
- **Tabla de Ejecución:** Estado de cada caso de prueba ejecutado
- **Tabla de Responsividad:** Resultados de testing en diferentes dispositivos/resoluciones
- **Tester asignado:** Responsable de cada ejecución
- **Fecha/hora:** Timestamp de ejecución
- **Comentarios:** Observaciones adicionales

**Datos utilizados:** Casos de prueba definidos, entornos de testing, dispositivos de prueba

---

### 2.5 Gestión de Defectos

**Pasos:**
1. Configurar proceso de reporte en Jira
2. Definir workflow de estados del bug
3. Establecer criterios de severidad/prioridad
4. Crear plantillas de bug reports
5. Implementar ciclo de vida completo

**Contenido:**
- **Proceso de Reporte:** Cómo y cuándo reportar bugs
- **Ciclo de Vida:** Estados del bug (Open→In Progress→Resolved→Closed)
- **Jira/Zephyr:** Configuración de herramientas
- **Tabla de Bug Reports:** Estructura de reportes de defectos
- **Ejemplo BUG-001:** Caso real documentado paso a paso

**Datos utilizados:** Defectos encontrados, herramientas Jira/Zephyr, procesos del equipo

---

### 2.6 Métricas y Cobertura

**Pasos:**
1. Definir métricas clave a medir
2. Establecer criterios de cobertura
3. Recopilar datos durante ejecución
4. Analizar resultados obtenidos
5. Proponer mejoras basadas en datos

**Contenido:**
- **Tabla de Métricas:** KPIs de testing (% cobertura, defectos encontrados, etc.)
- **Cobertura de Testing:** Qué porcentaje del sistema fue probado
- **Interpretación:** Análisis de los resultados obtenidos
- **Propuestas de Mejora:** Recomendaciones basadas en métricas

**Datos utilizados:** Resultados de ejecución, defectos reportados, tiempo de testing

---

### 2.7 Configuración Jira y Zephyr

**Pasos:**
1. Configurar proyecto en Jira
2. Instalar y configurar Zephyr para test management
3. Crear workflows personalizados
4. Establecer permisos y roles
5. Integrar con proceso de desarrollo

**Contenido:**
- **Setup de Jira:** Configuración del proyecto de testing
- **Configuración Zephyr:** Test cycles, folders, dashboards
- **Workflows:** Flujos de trabajo para bugs y test cases
- **Roles y Permisos:** Quién puede hacer qué en el sistema
- **Integración:** Conexión con proceso de desarrollo

**Datos utilizados:** Estructura del proyecto, roles del equipo, proceso de desarrollo existente

---

## 3. CRONOGRAMA DE IMPLEMENTACIÓN

| Fase | Documentos | Duración Estimada |
|------|------------|-------------------|
| 1 | Requerimientos | 2-3 días |
| 2 | Plan de Pruebas | 1-2 días |
| 3 | Casos de Prueba | 3-4 días |
| 4 | Ejecución | 5-7 días |
| 5 | Gestión de Defectos | Continuo |
| 6 | Métricas y Análisis | 1-2 días |
| 7 | Setup Jira/Zephyr | 1 día |

---

## 4. ENTREGABLES ESPERADOS

Cada sección generará documentos específicos que servirán como base para:
- Comunicación con stakeholders
- Seguimiento del progreso de testing
- Mejora continua del proceso
- Evidencia de calidad para el cliente
- Base para futuras fases del proyecto

---

**Próximos pasos:** Solicitar desarrollo detallado de cada sección según necesidades del proyecto.
