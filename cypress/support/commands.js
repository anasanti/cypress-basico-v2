// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    const longTest = 'Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! '

    cy.get('[id="firstName"]').click()
      .type('Ana Carolina')
      .should('have.value', 'Ana Carolina')
  
    cy.get('[id="lastName"]').click()
      .type('Santi')
      .should('have.value', 'Santi')
  
    cy.get('[id="email"]').click()
      .type('acpsfun@gmail.com')
      .should('have.value', 'acpsfun@gmail.com')
  
    cy.get('[id="open-text-area"]').click()
      .type(longTest, {delay:0})
      .should('have.value', longTest)
  
    cy.get('button[type="submit"]').click()
  
})
