import { useState, useEffect } from 'react'
import { useIntl } from 'react-intl';
import * as msg from '../../utils/messages'; 
import { useForm, SubmitHandler } from "react-hook-form"
import { ErrorLogin, InputLogin, ButtonLogin } from './ContractorLogin';
import useHookErrorFieldResponse from '../../hooks/useHookErrorFieldResponse';
import { useCheckAdminEmailLoginMutation } from '../../services/organization/administrator/orgAdministratorSliceApi';
import { useLoginEmailTemplate } from '../../owner/EmailTemplate/useLoginEmailTemplate';
import ErrorListDisplayComponent from '../common/ErrorListDisplayComponent';
import LoadingComponent from '../../global/LoadingComponent';
import EmailSentMsgComponent from './../common/EmailSentMsgComponent';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import { themeColours } from '../../utils/Helper';

const LinkWrapper = styled(Link)(() => ({
   fontSize: '1rem',
   display: 'block',
   marginTop: '0.5rem',
   color: themeColours.blue,
   textDecoration: 'none',
   cursor: 'pointer'
}));

   type Inputs = {
    email: string
  }
  
export default function PortalLogin() {
    const intl = useIntl();
    const navigate = useNavigate();
    const [openError, setOpenError] = useState(false);
    const [emailTo, setEmailto] = useState('');

    const [checkAdminEmail, responsecheckAdminEmail] = useCheckAdminEmailLoginMutation();

    const [errors, ] = useHookErrorFieldResponse({ response: responsecheckAdminEmail});

    
    // useLoginEmailTemplate({
    //     secretKey: responsecheckAdminEmail?.data?.data,
    //     ifSuccess: responsecheckAdminEmail?.isSuccess,
    //     emailTo: emailTo,
    //     templateCode: 'template_gcvqnio'
    // })

       console.log("REMOVE THIS CONSOLE WHENIN ADMIN PROD ", responsecheckAdminEmail?.isSuccess && responsecheckAdminEmail?.data?.data)

    const {
        register,
        handleSubmit,
        formState:  { errors: errorForm },
    } = useForm<Inputs>();

    useEffect(()=> {
        if( responsecheckAdminEmail?.isError ) {
            setOpenError(true);
        }
        
        },[
            responsecheckAdminEmail
    ]);


    const onSubmit: SubmitHandler<Inputs> = (data) => {
        setEmailto(data.email);
        checkAdminEmail(data);
    }

  return (
        <>
        {
            responsecheckAdminEmail?.isSuccess ? (
                <>
                    <EmailSentMsgComponent />
                    {responsecheckAdminEmail?.data?.data}
                </>
                
            ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                    {
                        openError && (
                            <ErrorListDisplayComponent errors={errors} customMessage='Email address not found.' />
                        )
                    }
                    {
                        responsecheckAdminEmail?.isLoading && <LoadingComponent isLoading={responsecheckAdminEmail?.isLoading} />
                    }
                    <InputLogin disabled={responsecheckAdminEmail?.isLoading} type='email' placeholder='Email Address' data-testid="emailPortalLogin" data-cy="emailPortalLogin" {...register("email", { required: true })} />
                    {errorForm.email && <ErrorLogin> {intl.formatMessage(msg.validationMessage.emailRequired)} </ErrorLogin>}
                    <ButtonLogin type='submit' className='theme-button' variant="contained"> {intl.formatMessage(msg.loginMessage.loginBtn)} </ButtonLogin>
                    <LinkWrapper
                        variant="body2" 
                        onClick={()=>navigate('/forgot-password')}
                    >
                        {intl.formatMessage(msg.loginMessage.forgotPassword)}
                    </LinkWrapper>
                </form>
            )
        }
        </>
        
  );
}