describe('Atividade 2 - UOL', () => {
  Cypress.on('uncaught:exception', () => false);

  it('Navega da Home até a data de atualização', () => {
    cy.visit('https://www.uol.com.br');

    cy.contains('a', /segurança e privacidade/i)
      .invoke('removeAttr', 'target')
      .click({ force: true });

    cy.origin('https://sobreuol.noticias.uol.com.br', () => {
      cy.contains('Atualização:', { timeout: 30000 })
        .should('be.visible')
        .parent()
        .invoke('text')
        .then((texto) => {
          const data = texto.replace('Atualização:', '').trim();
          cy.log('DATA ENCONTRADA: ' + data);
        });
    });
  });
});