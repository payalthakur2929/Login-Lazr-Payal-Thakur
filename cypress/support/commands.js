import LoginPage from '../Pages/loginPage';

const loginPage = new LoginPage();

// Command for logging in
Cypress.Commands.add('login', (email, password) => {
  loginPage.visit();
  loginPage.cookiepolicy();
  loginPage.login(email, password);
});

// Command for asserting successful login
Cypress.Commands.add('assertLoginSuccess', () => {
  cy.contains('Shipping Details', { timeout: 10000 }).should('be.visible');
  cy.contains('Marketplace', { timeout: 10000 }).should('be.visible');
});

// Command for asserting failed login
Cypress.Commands.add('assertLoginFailure', () => {
  loginPage.getErrorMessage().should('be.visible');
});