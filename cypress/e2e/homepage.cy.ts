import { Homepage, OwnerLoginPage } from "./cy_constants"


beforeEach(() =>
{
  cy.visit('http://localhost:3000')
})


describe('Homepage spec', () => {
  
  

  it('Login button, logo and call to action exist', () => {
    cy.get(Homepage.logoLink).should('exist');
    cy.get(Homepage.loginLink).should('exist');
    cy.contains('Build.Assign.Track').should('exist');
  })

  it('Login button click and redirect to login page', () => {
    cy.get(Homepage.loginLink).click({ force: true});
    cy.wait(500);
    cy.contains('Contractor').should('exist');
    cy.contains('Portal').should('exist');

  })

  it('Contractor Tab', () => {
    cy.get(Homepage.loginLink).click({ force: true});
    cy.wait(500);
    cy.get('button').contains('Verify').click({ force: true});
    cy.contains('Job number is required').should('exist');

  })

  it('Portal Tab', () => {
    cy.get(Homepage.loginLink).click({ force: true});
    cy.wait(500);
    cy.get('button').contains('Portal').click({ force: true});
    cy.get(Homepage.emailAddressLogin).should('exist');
  })
 
})