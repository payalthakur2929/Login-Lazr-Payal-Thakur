describe('Lazr Login Page Tests', () => {

    it('should log in with valid credentials', () => {
      const user1 = Cypress.env('user1');
      cy.login(user1.email, user1.password);
      cy.assertLoginSuccess();
    });
  
    it('should show error message with invalid credentials', () => {
      const user2 = Cypress.env('user2');
      cy.login(user2.email, user2.password);
      cy.assertLoginFailure();
    });
  
  });