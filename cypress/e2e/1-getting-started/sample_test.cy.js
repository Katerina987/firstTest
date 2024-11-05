describe('Sample Website', () => {
    it('should load the homepage and check the title', () => {
        cy.visit('https://qa-1.climedo.de');
        cy.url().should('include', 'qa-1.climedo.de');
    });
});