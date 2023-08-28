import OwnerLoginPage from "./cy_constants"


beforeEach(() =>
{
  cy.visit('http://localhost:3000')
})


describe('Owner spec', () => {
  
  beforeEach(() =>
  {
    cy.visit('http://localhost:3000/owner')
  })

  //@ts-ignore
  Cypress.Commands.add('loginOwner', (email: string, pw: string) => {
    cy.visit(`http://localhost:3000/owner/cypress/${Cypress.env('LOGINLINK')}`)
    cy.get(OwnerLoginPage.emailField).type(email);
    cy.get(OwnerLoginPage.pwField).type(pw);
  })

  it('passes with button and input', () => {
    cy.get(OwnerLoginPage.loginInBtn).should('exist');
    cy.get(OwnerLoginPage.emailField).should('exist');
  })

  it('click button without email value', () => {
    cy.get(OwnerLoginPage.loginInBtn).click({ force: true})
    cy.contains('Email field is required').should('exist');
  })
  
  it('add value in email', () => {
    cy.get(OwnerLoginPage.loginInBtn).type(Cypress.env('EMAILOWNER'));
  })

  it('Submit login link to email', () => {
    cy.get(OwnerLoginPage.loginInBtn).type(Cypress.env('EMAILOWNER'));
    cy.get(OwnerLoginPage.loginInBtn).click({ force: true})
    cy.contains('Email Sent').should('exist');
  })

  it('Go to fake/duplicate login for Cypress', () => {
    //@ts-ignore
    cy.loginOwner(Cypress.env('EMAILOWNER'), Cypress.env('PWOWNER'))
    cy.get(OwnerLoginPage.loginBtn).click({ force: true})
    cy.contains('Welcome').should('exist');
  })

  it('Loggedin User inside Owner dashboard', () => {
    //@ts-ignore
    cy.loginOwner(Cypress.env('EMAILOWNER'), Cypress.env('PWOWNER'))
    cy.get(OwnerLoginPage.loginBtn).click({ force: true})
    cy.get(`[aria-label="menu"]`).click();
    cy.contains('Providers').should('exist');

  })
})