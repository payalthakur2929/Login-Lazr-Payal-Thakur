PROJECT STRUCTURE:
cypress/
├─ e2e/login.cy.js         # Login tests
├─ Pages/loginPage.js      # Page Object for login page
├─ support/commands.js     # Reusable Cypress commands
cypress.env.json           # User credentials

LOGIN FLOW:
1.Visit /signin and accept cookies.
2.Enter email and password (from environment variables).
3.Click Sign in.

ASSERTIONS:
Valid login:  elements visible, URL changed.
Invalid login: error message visible, URL remains /signin.

RESUABLE COMMANDS:
cy.login(email, password) – performs full login.
cy.assertLoginSuccess() – checks dashboard elements.
cy.assertLoginFailure() – checks error message.

ENV VARIABLES:
cypress.env.json
{
  "user1": { "email": "dev+test3@lazr.io", "password": "10203040" },
  "user2": { "email": "wrong@example.com", "password": "invalid123" }
}