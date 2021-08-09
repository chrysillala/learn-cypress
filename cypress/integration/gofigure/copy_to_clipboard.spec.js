/// <reference types="cypress" />

const clipboardBtn = '#btn-copy-clipboard';

describe('clipboard', () => {
  it('copies episode url to clipboard', () => {
    cy.visit('/episode/growing-pains-of-becoming-a-decacorn');
    cy.get(clipboardBtn)
      .click();
    cy.window().its('navigator.clipboard')
      .invoke('readText')
      .should('equal', 'https://gofigure.gojek.com/episode/growing-pains-of-becoming-a-decacorn')
  })
})