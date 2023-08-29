import { OwnerLoginPage,  OwnerRegisterPage } from "./cy_constants"



describe('Providers spec', () => {

    //@ts-ignore
    Cypress.Commands.add('loginOwner', (email: string, pw: string) => {
      cy.visit(`${OwnerLoginPage.localhostLinkCypress}/${Cypress.env('LOGINLINK')}`)
      cy.get(OwnerLoginPage.emailField).type(email);
      cy.get(OwnerLoginPage.pwField).type(pw);
    })
  
    Cypress.Commands.add('loggedInOwner', () => {
      cy.loginOwner(Cypress.env('EMAILOWNER'), Cypress.env('PWOWNER'))
      cy.get(OwnerLoginPage.loginBtn).click({ force: true})
    })

    Cypress.Commands.add('addUser', () => {
        cy.loggedInOwner();
        cy.wait(2500)
        cy.visit(`${OwnerLoginPage.localhostLinkOwners}`);
        cy.wait(1500)
        cy.get(`[aria-label="add"]`).click({ force: true});
        cy.wait(1500)
    })
  
    it('Loggedin User - Providers page', () => {
      //@ts-ignore
      cy.loggedInOwner();
      cy.wait(1500)
      cy.get(`[aria-label="menu"]`).click();
      cy.get(`[role="button"]`).contains('Providers').click({ force: true});
    })

    it('Loggedin User - Providers Add User', () => {
        //@ts-ignore
        cy.loggedInOwner();
        cy.wait(2500)
        cy.visit(`${OwnerLoginPage.localhostLinkOwners}`)
        cy.wait(2500)
        cy.get(`[aria-label="add"]`).click({ force: true});
      })

      it('Loggedin User - Providers Add User validation', () => {
        //@ts-ignore
        cy.loggedInOwner();
        cy.wait(2500)
        cy.visit(`${OwnerLoginPage.localhostLinkOwners}`);
        cy.wait(1500)
        cy.get(`[aria-label="add"]`).click({ force: true});
        cy.wait(1500)
        cy.get(`input[type=submit]`).click({ force: true});
        cy.wait(1500)
        cy.contains('Email field is required').should('exist');
        cy.contains('Name field is required').should('exist');
        cy.contains('Password is required').should('exist');
        cy.contains('Confirm Password is required').should('exist');
        cy.wait(1500)
        cy.get(`button.MuiButton-text`).contains('Cancel').click({ force: true});
      })

     
      it('Loggedin User - Providers Add User with incorrect unmatched password', () => {
        //@ts-ignore
        cy.addUser();
        cy.get('input[name=fullName]').type('Member Name');
        cy.get('input[name=email]').type('member@owner.com');
        cy.get('input[name=password]').type('passwordMember');
        cy.get('input[name=confirmPassword]').type('passwordMember1');
        cy.get(`input[type=submit]`).click({ force: true});
        cy.wait(1500)
        cy.get('[role=alert]').should('exist');
        cy.wait(1000)
      })

      it('Loggedin User - Providers Add User with  correct data', () => {
        //@ts-ignore
        cy.addUser();
        cy.get('input[name=fullName]').type('Member Name');
        cy.get('input[name=email]').type('member@owner.com');
        cy.get('input[name=password]').type('passwordMember');
        cy.get('input[name=confirmPassword]').type('passwordMember');
        cy.get(`input[type=submit]`).click({ force: true});
        cy.wait(1500);
      })
      it('Loggedin User - Providers Added Member Name user and delete', () => {
        //@ts-ignore
        cy.loggedInOwner();
        cy.wait(2500)
        cy.visit(`${OwnerLoginPage.localhostLinkOwners}`);
        cy.wait(1500);
        cy.get('div[title="Member Name"]').should('exist');
        cy.get('div[title="Member Name"]').click({ force: true});
        cy.wait(1500);
        cy.get('button').contains('Delete').should('exist');
        cy.get('button').contains('Delete').click({ force: true});
        cy.wait(1500);
        cy.contains('Are you sure you want to delete ').should('exist');
        cy.get('[aria-labelledby="alert-dialog-title"] button').contains('Delete').click({ force: true});
        cy.wait(1500);
      })
  })