export  class OwnerLoginPage
{
    static loginInBtn = '[data-test-id="loginOwnerInitBtn"]';
    static loginBtn = '[data-test-id="loginOwnerBtn"]';
    static emailField = 'input[type=email]';
    static pwField = 'input[type=password]';
    static localhostLinkCypress = 'http://localhost:3000/owner/cypress';
    static localhostLinkOwners = 'http://localhost:3000/owner/dashboard/owners';
}

export class OwnerRegisterPage
{
    static regNameOwner = '[data-test-id="regNameOwner"]';
    static regEmailOwner = '[data-test-id="regEmailOwner"]';
    static regPw1Owner = '[data-test-id="regPw1Owner"]';
    static regPw2Owner = '[data-test-id="regPw2Owner"]';
    static regButton = '[data-test-id="regSubmitOwner"]';
    static deleteIcon = '[data-test-id="DeleteIcon"]';
}