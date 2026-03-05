/// <reference types="cypress" />

import catalogo from '../fixtures/livros.json'


describe('Funcionalidade de Busca de Produtos', () => {

  beforeEach(() => {
cy.visit('catalog.html')
  })  

it('Deve buscar o livro do arquivo de massa de dados', () => {
    cy.get('#search-input').type(catalogo[1].titulo)
    cy.get('.card-title').should('contain', catalogo[1].titulo).and('be.visible')
  });

  it('Deve clicar em todos botões de adicionar a cesta', () => {
    cy.get('.btn-primary').click({ multiple: true })
    cy.get('#cart-count').should('contain', '12')
  });
  })