/// <reference types="cypress" />

// describe = test suite
describe('search', () => {
  beforeEach(() => {
    cy.visit('/episode');
    cy.get('#desktop-search-toggle').click();
  });

  // test case
  it('renders search menu', () => {
    cy.get('#desktop-search-menu')
      .should('be.visible');
  });

  it('inputs keyword', () => {
    cy.get('#desktop-search-input')
      .type('tech')
      .should('have.value', 'tech');
  });

  it('searches keyword on desktop view', () => {
    cy.get('#desktop-search-input')
      .type('tech');
    cy.get('#desktop-search-menu .btn-gofigure[type="submit"]')
      .click();
    cy.url().should('include', '/search/?q=tech');
  });

  it('closes desktop search menu', () => {
    cy.get('#desktop-search-close-btn').click();
    cy.get('#desktop-search-menu')
      .should('be.hidden');
  });
});