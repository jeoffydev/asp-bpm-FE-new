import { OrgUserLoginPage } from "./cy_constants"


beforeEach(() =>
{
  cy.visit('http://localhost:3000')
})


describe('Org User spec', () => {
  
  beforeEach(() =>
  {
    cy.visit('http://localhost:3000/login/cypress')
  })

  //@ts-ignore
  Cypress.Commands.add('loginOrgUser', (email: string, pw: string) => {
    cy.visit(`${OrgUserLoginPage.localhostLinkOrgUserCypress}/${Cypress.env('LOGINLINK')}`)
    cy.get(OrgUserLoginPage.emailField).type(email);
    cy.get(OrgUserLoginPage.pwField).type(pw);
  })
  
  it('Go to Dashboard org user and test the sidebar', () => {
    //@ts-ignore
    cy.loginOrgUser(Cypress.env('EMAILADMIN'), Cypress.env('PWADMIN'))
    cy.get(OrgUserLoginPage.loginBtn).click({ force: true})
    cy.wait(2500)
    cy.visit('http://localhost:3000/portal/dashboard');
    cy.get(OrgUserLoginPage.sidebarMenu).click({ force: true})
    cy.wait(2500)
    cy.get(OrgUserLoginPage.sideBarComponent).should('exist');
   
  })

  it('Go to Dashboard org user and test the sidebar avatar', () => {
    //@ts-ignore
    cy.loginOrgUser(Cypress.env('EMAILADMIN'), Cypress.env('PWADMIN'))
    cy.get(OrgUserLoginPage.loginBtn).click({ force: true})
    cy.wait(2500)
    cy.visit('http://localhost:3000/portal/dashboard');
    cy.get(OrgUserLoginPage.sidebarMenu).click({ force: true})
    cy.wait(2500)
    cy.get(OrgUserLoginPage.sidebarAvatar).click({ force: true})
    cy.wait(1500)
    cy.contains('Logout').should('exist');
   
  })

})