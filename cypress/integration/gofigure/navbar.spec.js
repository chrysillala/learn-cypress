/// <reference types="cypress" />

const navElement = 'nav';

function visitNavLink(menuTitle, expectedUrl) {
  cy.get(navElement).contains(menuTitle).click();
  cy.url().should('include', expectedUrl);
}

describe('navigation menu', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders navigation menu', () => {
    cy.get(navElement).should('be.visible');
  });

  it('clicks Episode link', () => {
    visitNavLink('Episode', '/episode');
  });

  it('clicks Transcript link', () => {
    visitNavLink('Transcript', '/transcript');
  });

  it('clicks Contact Us link', () => {
    visitNavLink('Contact Us', '/#home-contact-us');
  });

  it('inverses the nav menu color on scroll', () => {
    cy.scrollTo('0%', '10%');
    cy.get(navElement).should('have.class', 'inverse');
  });
});