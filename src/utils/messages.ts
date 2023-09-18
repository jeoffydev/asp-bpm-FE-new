import { defineMessages } from 'react-intl';

const prefix = {
    generalId: 'generalText',
    loginId: 'loginText',
    ctaId: 'ctaText',
    footerId:  'footerText',
    validationId: 'validationtext',
    orgDashboardId: 'orgDashboardText'
};

export const generalMessage = defineMessages({
    loading: {
        id: `${prefix.generalId}.title.loading`,
        defaultMessage: 'Loading...'
    },
    errorHome: {
        id: `${prefix.generalId}.title.home`,
        defaultMessage: 'There is no place like '
    },
});

export const orgPortal = defineMessages({
    addProject: {
        id: `${prefix.orgDashboardId}.title.addProject`,
        defaultMessage: 'Add Project'
    },
});

export const orgPortalDashboard = defineMessages({
    needHelp: {
        id: `${prefix.orgDashboardId}.title.needHelp`,
        defaultMessage: 'Need Support?'
    },
    supportContact: {
        id: `${prefix.orgDashboardId}.title.supportContact`,
        defaultMessage: 'Got a question or need some help?'
    },
    getInTouch: {
        id: `${prefix.orgDashboardId}.title.getInTouch`,
        defaultMessage: 'Get in touch'
    }
});



export const ctaMessage = defineMessages({
    build: {
        id: `${prefix.ctaId}.title.build`,
        defaultMessage: 'Build.'
    },
    assign: {
        id: `${prefix.ctaId}.title.assign`,
        defaultMessage: 'Assign.'
    },
    track: {
        id: `${prefix.ctaId}.title.track`,
        defaultMessage: 'Track'
    },
    subtitle:  {
        id: `${prefix.ctaId}.title.subtitle`,
        defaultMessage: 'The perfect solution for every contract job'
    },
    ctaGetStarted:  {
        id: `${prefix.ctaId}.title.ctaGetStarted`,
        defaultMessage: 'Unlock the full power and get started!'
    },
    ctaIconOne:  {
        id: `${prefix.ctaId}.title.ctaIconOne`,
        defaultMessage: 'Get organize and find more effective ways to to keep your facility running smoothly.'
    },
    ctaIconTwo:  {
        id: `${prefix.ctaId}.title.ctaIconTwo`,
        defaultMessage: 'Implement health and safety, operational cost and maintenance plan'
    },
});

export const loginMessage = defineMessages({
    contractorLogin: {
        id: `${prefix.loginId}.title.contractorLogin`,
        defaultMessage: `Contractor`
    },
    adminLogin: {
        id: `${prefix.loginId}.title.adminLogin`,
        defaultMessage: `Portal`
    },
    contractorBtn: {
        id: `${prefix.loginId}.title.contractorBtn`,
        defaultMessage: `Verify`
    },
    loginBtn: {
        id: `${prefix.loginId}.title.btnLogin`,
        defaultMessage: `Email a login link`
    },
    emailSent: {
        id: `${prefix.loginId}.title.emailSent`,
        defaultMessage: `Email Sent`
    },
    checkInbox: {
        id: `${prefix.loginId}.title.checkInbox`,
        defaultMessage: `Please check your inbox for the sign in link or sometimes this can land in SPAM!. If it doesn't arrive in a minute or three, please check again.`
    },
    emailVerified: {
        id: `${prefix.loginId}.title.emailVerified`,
        defaultMessage: `Email verified. Please enter your password below.`
    },
    userName: {
        id: `${prefix.loginId}.title.username`,
        defaultMessage: `Email Address`
    },
    password: {
        id: `${prefix.loginId}.title.password`,
        defaultMessage: `Password`
    },
    login: {
        id: `${prefix.loginId}.title.login`,
        defaultMessage: `Login`
    },
    logout: {
        id: `${prefix.loginId}.title.logout`,
        defaultMessage: `Logout`
    },
     editAccount: {
        id: `${prefix.loginId}.title.editAccount`,
        defaultMessage: `Edit Account`
    },
    notExist: {
        id: `${prefix.loginId}.title.notExist`,
        defaultMessage: `Page doesn't Exist`
    },
    invalidVerification: {
        id: `${prefix.loginId}.title.invalidVerification`,
        defaultMessage: `Invalid Verification.`
    },
    loginAgain: {
        id: `${prefix.loginId}.title.loginAgain`,
        defaultMessage: `Please login again.`
    }
    
});

export const validationMessage = defineMessages({
    jobNumberRequired: {
        id: `${prefix.validationId}.title.jobNumber`,
        defaultMessage: `Job number is required`
    },
    emailRequired: {
        id: `${prefix.validationId}.title.emailRequired`,
        defaultMessage: `Email Address is required`
    },
});

let d = new Date();


export const footerMessage = defineMessages({
    footer: {
        id: `${prefix.footerId}.title.footer`,
        defaultMessage: `© ${d.getFullYear()} BPM. All Rights Reserved.`
    }
});