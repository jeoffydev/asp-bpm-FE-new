
import { useState, useEffect } from 'react'
import ThemePageComponent from '../ThemePageComponent';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import BoxComponent from '../common/BoxComponent';
import { useIntl } from 'react-intl';
import * as msg from '../../utils/messages'; 
import { useForm, SubmitHandler } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Typography } from '@mui/material';
import { GridCheckIcon } from '@mui/x-data-grid';
import { useForgotUserPasswordSubmitMutation, useForgotUserPasswordVerifyQuery, useLoginOrgUserMutation } from '../../services/organization/administrator/orgAdministratorSliceApi';
import useHookErrorFieldResponse from '../../hooks/useHookErrorFieldResponse';
import LoadingComponent from '../../global/LoadingComponent';
import ErrorListDisplayComponent from '../common/ErrorListDisplayComponent';
import { ErrorLogin, InputLogin, ButtonLogin } from './ContractorLogin';

type Inputs = {
    email: string
    password: string,
    confirmPassword: string,
  }

function ForgotPasswordFinalComponent() {
    const intl = useIntl();
    const [openError, setOpenError] = useState(false);
    const navigate = useNavigate(); 
    let { secret } = useParams();
    const [editId, setEditId] = useState('');
    const [skipFetch, setSkipFetch] = useState(false);


    useEffect(()=> {
        if ( secret ) {
            const ownerSecret: string = secret;
            setEditId(ownerSecret);
        }
       
    },[
        secret,
        navigate      
    ])

    const {
        register,
        handleSubmit,
        formState: { errors: errorForm },
      } = useForm<Inputs>();



    const { data, isLoading, }= useForgotUserPasswordVerifyQuery( editId, { refetchOnMountOrArgChange: true, skip: skipFetch } );

    const [resetPassword, responseResetPassword] = useForgotUserPasswordSubmitMutation();

    const [errors, ] = useHookErrorFieldResponse({ response: responseResetPassword});

    const onSubmit: SubmitHandler<Inputs> = (dataLogin) => {
        setSkipFetch(true);
        const resetData = {
            userId: data?.data?.userId,
            password: dataLogin?.password,
            confirmPassword: dataLogin?.confirmPassword,
            secretKey: editId
        }
        resetPassword(resetData);
    }

    useEffect(()=> {
        if( responseResetPassword?.isError ) {
            setOpenError(true);
          }
    },[
        responseResetPassword
    ]);


    return (
    <>
         
        <ThemePageComponent>
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={1} md={3}>
                    &nbsp;
                </Grid>
                <Grid item xs={10} md={6}>
                    <BoxComponent>

                    {
                            isLoading ? <LoadingComponent isLoading={isLoading} /> : (

                                <>
                                    {
                                        data?.success && (
                                            <>
                                                {
                                                    openError && (
                                                    <>
                                                    <ErrorListDisplayComponent errors={errors}  />
                                                    </>
                                                    )
                                                }
                                                {
                                                    responseResetPassword.isSuccess ? (
                                                        <Typography variant="body1" gutterBottom  textAlign={'left'}>
                                                            <GridCheckIcon color='success' /> {intl.formatMessage(msg.validationMessage.passwordResetSuccessfully)} <Button onClick={()=>navigate('/login')}>{intl.formatMessage(msg.loginMessage.loginAgain)}</Button> 
                                                        </Typography>
                                                    ) : (

                                                        <>
                                                            <Typography variant="body1" gutterBottom  textAlign={'left'}>
                                                                <GridCheckIcon color='success' /> {intl.formatMessage(msg.loginMessage.emailVerified)}
                                                            </Typography>
                                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                                <InputLogin type='password'  data-testid="passwordOneForgot" data-cy="passwordOneForgot" {...register("password", { required: true })} />
                                                                {errorForm.password && <ErrorLogin> {intl.formatMessage(msg.validationMessage.pwOneRequired)} </ErrorLogin>}
                                                                <InputLogin type='password'  data-testid="passwordTwoForgot" data-cy="passwordTwoForgot" {...register("confirmPassword", { required: true })} />
                                                                {errorForm.confirmPassword && <ErrorLogin> {intl.formatMessage(msg.validationMessage.pwTwoRequired)} </ErrorLogin>}
                                                                <ButtonLogin type='submit' data-cy="pwdBtn" className='theme-button' variant="contained"> {intl.formatMessage(msg.loginMessage.resetPassword)} </ButtonLogin>
                                                            </form>
                                                        </>

                                                    )
                                                }
                                                
                                            </>
                                        ) 
                                    }
                                </>

                            )
                    }  
                    
                    
                    {
                        !data?.success && !isLoading &&  (
                            <>
                                <Typography variant="h6" gutterBottom  textAlign={'left'}>
                                   {intl.formatMessage(msg.loginMessage.invalidVerification)}  
                                </Typography> 
                                
                            </>
                        )
                    }
                    </BoxComponent>
                </Grid>
                <Grid item xs={1} md={3}>
                    &nbsp;
                </Grid>
            </Grid>
        </Container> 
        </ThemePageComponent>
    </>
    );
}

export default ForgotPasswordFinalComponent;
