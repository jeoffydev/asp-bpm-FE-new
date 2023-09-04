import { defineMessages } from 'react-intl';

const prefix = {
    navigationId: 'navigationText',
   
};

export const navigationMessage = defineMessages({
    product: {
        id: `${prefix.navigationId}.title.product`,
        defaultMessage: 'Product'
    },
    solution: {
        id: `${prefix.navigationId}.title.solution`,
        defaultMessage: 'Solution'
    },
    getStarted: {
        id: `${prefix.navigationId}.title.getStarted`,
        defaultMessage: 'Get Started'
    },
    login: {
        id: `${prefix.navigationId}.title.login`,
        defaultMessage: 'Login'
    },
});
