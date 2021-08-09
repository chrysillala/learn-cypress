/// <reference types="cypress" />

describe('episode pagination', () => {

  it('has active button class on current page', () => {
    const currentPage = '3';
    cy.visit(`/episode/?page=${currentPage}`);
    cy.get('.pagination-nav > .pagination-nav__item > .btn').contains(currentPage)
      .should('have.class', 'btn__secondary-outline--active');
  });

  it('clicks next page', () => {
    cy.visit('/episode');
    cy.get('.pagination-nav__item')
      .contains('2')
      .click();
    cy.location().should((loc) => {
      expect(loc.search).to.eq('?page=2');
    });
  });
});