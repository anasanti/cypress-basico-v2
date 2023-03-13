// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {//Describe -> define a suite do teste
  beforeEach(function() {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', function() {
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', function() {
    const longTest = 'Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! '

    cy.get('[id="firstName"]')
      .click()
      .type('Ana Carolina')
      .should('have.value', 'Ana Carolina')
      
    cy.get('[id="lastName"]')
      .click()
      .type('Santi')
      .should('have.value', 'Santi')
      
    cy.get('[id="email"]')
      .click()
      .type('acpsfun@gmail.com')
      .should('have.value', 'acpsfun@gmail.com')
      
    cy.get('[id="open-text-area"]')
      .click()
      .type(longTest, {delay:0})
      .should('have.value', longTest)
      
    cy.contains('button','Enviar')
      .click()
    cy.get('.success')
      .should('be.visible')

  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {

    const longTest = 'Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! '

    cy.get('[id="firstName"]')
      .click()
      .type('Ana Carolina')
      .should('have.value', 'Ana Carolina')

    cy.get('[id="lastName"]')
      .click()
      .type('Santi')
      .should('have.value', 'Santi')
      
    cy.get('[id="email"]')
      .click()
      .type('acpsfun@gmail,com')
      .should('have.value', 'acpsfun@gmail,com')
      
    cy.get('[id="open-text-area"]')
      .click()
      .type(longTest, {delay:0})
      .should('have.value', longTest)
      
    cy.contains('button','Enviar')
      .click()
     cy.get('.error')
     .should('be.visible')
  
  })

  it('Campo telefone vazio quando não apresenta valor numerico', function() {
  
    cy.get('[id="phone"]')
      .click()
      .type('Ana Carolina')
      .should('have.value', '')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
  
    const longTest = 'Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! '

    cy.get('[id="firstName"]')
      .click()
      .type('Ana Carolina')
      .should('have.value', 'Ana Carolina')
        
    cy.get('[id="lastName"]')
      .click()
      .type('Santi')
      .should('have.value', 'Santi')
        
    cy.get('[id="email"]')
      .click()
      .type('acpsfun@gmail.com')
      .should('have.value', 'acpsfun@gmail.com')

   cy.get('[id="phone-checkbox"]')
    .click()
        
   cy.get('[id="open-text-area"]')
      .click()
      .type(longTest, {delay:0})
      .should('have.value', longTest)

   cy.contains('button','Enviar')
     .click()
   cy.get('.error')
     .should('be.visible')

  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
    
    const longTest = 'Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! '

    cy.get('[id="firstName"]')
      .click()
      .type('Ana Carolina')
      .should('have.value', 'Ana Carolina')
      .clear()
      .should('have.value', '')
        
    cy.get('[id="lastName"]')
      .click()
      .type('Santi')
      .should('have.value', 'Santi')
      .clear()
      .should('have.value', '')
        
    cy.get('[id="email"]')
      .click()
      .type('acpsfun@gmail.com')
      .should('have.value', 'acpsfun@gmail.com')
      .clear() 
      .should('have.value', '')

    cy.get('[id="phone"]')
      .click()
      .type('980464145')
      .should('have.value', '980464145')
      .clear()
      .should('have.value', '')

    cy.get('[id="phone-checkbox"]')
      .click()
        
    cy.get('[id="open-text-area"]')
      .click()
      .type(longTest, {delay:0})
      .should('have.value', longTest)
      .clear()
      .should('have.value', '')
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
    
    cy.contains('button','Enviar').click()

    cy.get('.error').should('be.visible')

  })

  it('seleciona um produto (YouTube) por seu texto', function() {
    
    cy.get('[id="product"]')
      .select('youtube')
      .should('have.value', 'youtube')

  })

  it('seleciona um produto (Mentoria) por seu valor (value)', function() {
    
    cy.get('[id="product"]')
      .select('mentoria')
      .should('have.value', 'mentoria')

  })

  it('seleciona um produto (Blog) por seu índice', function() {
    
    cy.get('[id="product"]')
      .select(1)
      .should('have.value', 'blog')

  })

  it('marca o tipo de atendimento "Feedback"', function() {
    
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should('have.value', 'feedback')
  })

  it('marca cada tipo de atendimento', function() {
    
    cy.get('input[type="radio"]')
      .should('have.length', 3)
      .each(function($radio) {
        cy.wrap($radio).check()
        cy.wrap($radio).should('be.checked')
      })
  })

  it('marca ambos checkboxes, depois desmarca o último', function() {
    cy.get('input[type="checkbox"]')
      .check()
      .last()
      .uncheck()
      .should('not.be.checked')

  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
    const longTest = 'Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! Blá blá blá! '

    cy.get('[id="firstName"]')
      .click()
      .type('Ana Carolina')
      .should('have.value', 'Ana Carolina')
        
    cy.get('[id="lastName"]')
      .click()
      .type('Santi')
      .should('have.value', 'Santi')
          
    cy.get('[id="email"]')
      .click()
      .type('acpsfun@gmail.com')
      .should('have.value', 'acpsfun@gmail.com')

    cy.get('[id="phone-checkbox"]')
      .check()
      .should('be.checked')
          
    cy.get('[id="open-text-area"]')
      .click()
      .type(longTest, {delay:0})
      .should('have.value', longTest)

    cy.contains('button','Enviar')
      .click()
    cy.get('.error')
      .should('be.visible')
  })

  it('seleciona um arquivo da pasta fixtures', function() {
    cy.get('[id="file-upload"]')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/example.json')
      .should(function($input){
        console.log($input)
        expect($input[0].files[0].name).to.equal('example.json')
      })
  })

  it('seleciona um arquivo simulando um drag-and-drop' , function() {
    cy.get('[id="file-upload"]')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'})
      .should(function($input){
        console.log($input)
        expect($input[0].files[0].name).to.equal('example.json')
      })
  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias' , function() {
    cy.fixture('example.json').as('sampleFile')
    cy.get('[id="file-upload"]')
      .should('not.have.value')
      .selectFile('@sampleFile')
      .should(function($input){
        console.log($input)
        expect($input[0].files[0].name).to.equal('example.json')
      })
  })

  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique' , function() {
    cy.get('a[href="privacy.html"]')
      .should('have.attr', 'target', '_blank')
    
  })

  it('acessa a página da política de privacidade removendo o target e então clicando no link' , function() {
    cy.get('a[href="privacy.html"]')
      .invoke('removeAttr', 'target')
      .click()

    cy.contains('Talking About Testing')
      .should('be.visible')
  })

})
