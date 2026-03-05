///<reference types="cypress" />
import { faker } from '@faker-js/faker';
import CadastroPage from '../support/pages/cadastro-pages';



describe('Funcionalidade de Criar Conta', () => {
  const cadastroPage = new CadastroPage();

  before(() => {
    cy.visit('register.html')
  })


  it('Deve criar conta com sucesso', () => {
    let name = faker.person.fullName();
    let senha = faker.internet.password(8, true);

    cadastroPage.preencherFormularioCadastro(name, faker.internet.email(),
      faker.phone.number('119########'), senha, senha)
    cy.url().should('contain', 'dashboard.html')
    cy.get('#user-name').should('contain', name).and('be.visible')
  })

});
