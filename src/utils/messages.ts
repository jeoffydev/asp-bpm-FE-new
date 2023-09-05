import { defineMessages } from 'react-intl';

const prefix = {
    generalId: 'generalText',
    loginId: 'loginText',
    ctaId: 'ctaText',
    footerId:  'footerText'
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
        defaultMessage: `Contractor Login`
    },
    adminLogin: {
        id: `${prefix.loginId}.title.adminLogin`,
        defaultMessage: `Portal  Login`
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
    notExist: {
        id: `${prefix.loginId}.title.notExist`,
        defaultMessage: `Page doesn't Exist`
    }
});

let d = new Date();

export const footerMessage = defineMessages({
    footer: {
        id: `${prefix.footerId}.title.footer`,
        defaultMessage: `© ${d.getFullYear()} BPM. All Rights Reserved.`
    }
});