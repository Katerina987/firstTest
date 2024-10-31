describe('Sample Website', () => {
    it('should load the homepage and check the title', () => {
        cy.visit('https://https://qa-1.climedo.de');
        cy.title().should('include', 'qa-1');
    });
});