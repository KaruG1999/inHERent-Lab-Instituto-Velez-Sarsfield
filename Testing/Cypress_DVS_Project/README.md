# 📌 Proyecto DVS - Pruebas Automatizadas con Cypress

Este proyecto contiene pruebas automatizadas para el sistema web del Colegio Secundario DVS.

## 🚀 Requisitos previos
- Node.js instalado
- Cypress instalado globalmente o como dependencia del proyecto

## ⚙️ Instalación
```bash
npm init -y
npm install cypress --save-dev
```

## ▶️ Ejecución de pruebas
Abrir la interfaz interactiva de Cypress:
```bash
npx cypress open
```

Ejecutar en modo consola:
```bash
npx cypress run
```

## 📂 Estructura
- `cypress/integration/dvs_tests.spec.js` → Contiene los casos de prueba automatizados

## 🧪 Casos incluidos
1. **Home**: Verifica título y widget de clima
2. **Contacto**: Validación de formulario (datos válidos y vacíos)
3. **Comisión**: Filtrado por año e información de proyectos
4. **Meteorología**: Datos climáticos actuales y mapa zonal
