
// 📌 Proyecto DVS - Pruebas Automatizadas con Cypress

describe('Home Page', () => {
  it('Debería mostrar el título del colegio', () => {
    cy.visit('/')
    cy.contains('Colegio Secundario DVS').should('be.visible')
  })

  it('Debería mostrar el widget de clima', () => {
    cy.get('[data-testid="widget-clima"]').should('be.visible')
  })
})

describe('Contacto', () => {
  it('Debería enviar formulario con datos válidos', () => {
    cy.visit('/contacto')
    cy.get('input[name="nombre"]').type('Juan Pérez')
    cy.get('input[name="email"]').type('juan@test.com')
    cy.get('textarea[name="mensaje"]').type('Consulta de prueba')
    cy.get('button[type="submit"]').click()
    cy.contains('Gracias por tu mensaje').should('be.visible')
  })

  it('Debería mostrar error si se envía vacío', () => {
    cy.visit('/contacto')
    cy.get('button[type="submit"]').click()
    cy.contains('El campo nombre es obligatorio').should('be.visible')
  })
})

describe('Comisión', () => {
  it('Debería filtrar integrantes por año', () => {
    cy.visit('/comision')
    cy.get('select[name="anio"]').select('2024')
    cy.contains('Integrantes gestión 2024').should('be.visible')
  })

  it('Debería mostrar proyectos en proceso', () => {
    cy.get('[data-testid="proyectos-proceso"]').should('be.visible')
  })
})

describe('Meteorología', () => {
  it('Debería mostrar datos actuales del clima', () => {
    cy.visit('/meteorologia')
    cy.contains('Temperatura').should('be.visible')
    cy.contains('Viento').should('be.visible')
    cy.contains('Lluvia').should('be.visible')
  })

  it('Debería mostrar mapa zonal con muestreos', () => {
    cy.get('[data-testid="mapa-zonal"]').should('be.visible')
  })
})
