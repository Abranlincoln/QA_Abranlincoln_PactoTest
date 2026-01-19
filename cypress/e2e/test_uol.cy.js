describe('Atividade 2 - UOL', () => {
  Cypress.on('uncaught:exception', () => false);

  it('Navega da Home até a data de atualização', () => {
    cy.visit('https://www.uol.com.br');

    cy.contains('a', /segurança e privacidade/i)
      .scrollIntoView()
      .invoke('removeAttr', 'target')
      .click({ force: true });

    cy.contains('strong', /Atualização/i, { timeout: 30000 })
      .scrollIntoView()
      .should('be.visible')
      .parent()
      .then(($el) => {
        const data = $el.text().replace(/Atualização:?/i, '').trim();
        cy.log('DATA ENCONTRADA: ' + data);
        cy.wrap($el).screenshot('data-atualização-completa');
      });
  });
});