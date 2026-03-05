///<reference types="cypress" />
import login from '../fixtures/login.json'

describe('Funcionalidade de Login', () => {

  before(() => {
    cy.visit('login.html')
  })

  it('Deve fazer login com sucesso', () => {
    cy.login(login.email, login.senha)
    cy.url().should('contain', 'dashboard.html')
    cy.get('#user-name').should('contain', 'Usuário Padrão').and('be.visible')
  })
})