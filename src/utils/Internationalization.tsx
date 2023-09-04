import React, { FC,  ReactNode } from 'react';
import { IntlProvider } from 'react-intl'; 

type Props = { children: ReactNode }

export const Internationalization: FC<Props> = ({ children }) => (
    <IntlProvider
        locale={'en-NZ'} 
        defaultLocale={'en-NZ'}
    >
        {children}
    </IntlProvider>
);