import { OrgUserForgotPasswordPage, OrgUserLoginPage } from "./cy_constants"


beforeEach(() =>
{
  cy.visit('http://localhost:3000')
})


describe('Org User spec', () => {
  
  beforeEach(() =>
  {
    cy.visit('http://localhost:3000/forgot-password')
  })

  
  
  it('Go to forgot password page', () => {
     cy.get(OrgUserForgotPasswordPage.emailField).should('exist');
     cy.get(OrgUserForgotPasswordPage.forgotBtn).should('exist');
     cy.get(OrgUserForgotPasswordPage.alreadyHaveLogin).should('exist');

  })

  it('Forgot password form ', () => {
    //@ts-ignore
    cy.get(OrgUserForgotPasswordPage.forgotBtn).click({ force: true})
    cy.wait(2500)
    cy.contains(/email address is required/i).should('exist');
    cy.get(OrgUserForgotPasswordPage.emailField).type('impossible_cypress_test@cypresstest.com');
    cy.get(OrgUserForgotPasswordPage.forgotBtn).click({ force: true})
    cy.wait(2500)
    cy.contains(/email address not found/i).should('exist');
    // cy.visit('http://localhost:3000/portal/dashboard')
    // cy.location('pathname').should('eq', '/portal/dashboard')
  })

})