
import * as React from 'react';
import Typography from '@mui/material/Typography';

import { useIntl } from 'react-intl';
import * as msg from '../../utils/messages'; 

type Props = { 
    messageOne?: string,
    messageTwo?: string
}


const EmailSentMsgComponent = (props: Props) => {
    const { messageOne, messageTwo }= props;
    const intl = useIntl();
    return (
        <>
                    <Typography variant="h2" gutterBottom  textAlign={'center'}>
                        { messageOne ? messageOne :  intl.formatMessage(msg.loginMessage.emailSent)}
                    </Typography>
                    <Typography variant="h6" gutterBottom  textAlign={'center'}>
                        { messageTwo ? messageTwo :  intl.formatMessage(msg.loginMessage.checkInbox) }
                        
                    </Typography> 
        </>
    )
}

export default EmailSentMsgComponent;