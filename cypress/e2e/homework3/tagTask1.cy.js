/// <reference types="cypress" />
describe('regression', () => {
    it('Test running tags @regression', () => {
        // tag: regression
        cy.visit('https://www.saucedemo.com/');
        cy.title().should('eq', 'Swag Labs');
    });
});