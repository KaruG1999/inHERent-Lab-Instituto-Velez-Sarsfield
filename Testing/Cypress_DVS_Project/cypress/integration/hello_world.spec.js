describe('Hello World Test', () => {
    it('should load the application', () => {
        cy.visit('/');
        cy.contains('Welcome'); // Adjust this to match your application's content
    });
});