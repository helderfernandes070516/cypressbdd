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

const nome = ''

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

Cypress.Commands.add('getByTestId', (id) => cy.get(`[data-testid=${id}]`));
Cypress.Commands.add('checkMessageToastify', (message) =>
    cy
    .get('.Toastify__toast-container')
    .should('contain', message)
    .and('be.visible')
);

Cypress.Commands.add('generateUserInformations', () =>
    cy.request({
      method: 'POST',
      url: 'https://www.4devs.com.br/ferramentas_online.php',
      form: true,
      body: {
        acao: 'gerar_pessoa',
        sexo: 'M',
        pontuacao: 'N',
        txt_qtde: '1'
      }
    }).then((response) => {
      Cypress.env('nome', response.body.nome)
    })
);
