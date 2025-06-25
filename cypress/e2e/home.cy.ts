describe('Home page', () => {
    it('Visits the initial project page', () => {
        cy.visit('/');
    });

    it('Displays the navbar and footer', () => {
        cy.visit('/');
        cy.get('nav').should('exist');
        cy.get('footer').should('exist');
    });
});