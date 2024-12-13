require('cypress-xpath');
describe('Buttons', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/')
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('Script error')) {
            // Handle specific error message or type if needed
            return false;
        }
        // Optionally log the error to console if you want
        console.error(err);
        return false;
    });
    it('Should click on elements to navigate me to second page', () => {
        cy.get('.category-cards > :nth-child(1)').click();
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-4 > .text').click();
        cy.get('#doubleClickBtn').dblclick();
        cy.get('#doubleClickMessage').should('be.visible');
    });
    it ('should right click the button', () => {
        cy.get('#rightClickBtn').rightclcik();
        cy.contains('You have done a right click').should('be.visible');
    })
});
