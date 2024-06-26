export  class OwnerLoginPage
{
    static loginInBtn = '[data-test-id="loginOwnerInitBtn"]';
    static loginBtn = '[data-test-id="loginOwnerBtn"]';
    static emailField = 'input[type=email]';
    static pwField = 'input[type=password]';
    static localhostLinkCypress = 'http://localhost:3000/owner/cypress';
    static localhostLinkOwners = 'http://localhost:3000/owner/dashboard/owners';
}

export  class OrgUserLoginPage
{
    static loginBtn = '[data-test-id="loginOrgBtn"]';
    static emailField = 'input[type=email]';
    static pwField = 'input[type=password]';
    static localhostLinkOrgUserCypress = 'http://localhost:3000/login/cypress';
    static localhostLinkOrgUsers = 'http://localhost:3000/portal/dashboard';
    static sidebarMenu = '[data-testid="MenuIcon"]';
    static sideBarComponent = '[data-testid="sidebar-dashboard"]';
    static sidebarAvatar = '[data-testid="avatar-account"]';
}

export  class OrgUserForgotPasswordPage
{
    static emailField = 'input[type=email]';
    static forgotBtn = '[data-testid="forgotPwBtn"]';
    static emailForgotField = '[data-testid="emailForgotOne"]';
    static alreadyHaveLogin = '[data-testid="forgot-already-have-login"]';
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

export class Homepage
{
    static logoLink = '[data-cy="logo-link"]';
    static loginLink = '[data-cy="login-link"]';
    static emailAddressLogin = '[data-cy="emailPortalLogin"]'
}