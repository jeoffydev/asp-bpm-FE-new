
import { useState, useEffect } from 'react'
import ThemePageComponent from '../ThemePageComponent';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import BoxComponent from '../common/BoxComponent';
import { useIntl } from 'react-intl';
import * as msg from '../../utils/messages'; 
import { useForm, SubmitHandler } from "react-hook-form";
import { useCookies } from 'react-cookie';
import { cookiesOrgAuth_bpm } from '../../auth/authHelper';
import { useParams, useNavigate } from "react-router-dom";
import { Button, Typography } from '@mui/material';
import { GridCheckIcon } from '@mui/x-data-grid';
import { useFinalizeLoginQuery, useLoginOrgUserMutation } from '../../services/organization/administrator/orgAdministratorSliceApi';
import useHookErrorFieldResponse from '../../hooks/useHookErrorFieldResponse';
import LoadingComponent from '../../global/LoadingComponent';
import ErrorListDisplayComponent from '../common/ErrorListDisplayComponent';
import { ErrorLogin, InputLogin, ButtonLogin } from './ContractorLogin';
import useAuthenticationUser from '../../hooks/useAuthenticationUser';
import { portalUrl } from '../../utils/Helper';

type Inputs = {
    email: string
    password: string
  }

function LoginPageFinalComponent() {
    const intl = useIntl();
    const [openError, setOpenError] = useState(false);
    const navigate = useNavigate(); 
    let { secret } = useParams();
    const [editId, setEditId] = useState('');
    const [skipFetch, setSkipFetch] = useState(false);

    const [cookies, ] = useCookies([cookiesOrgAuth_bpm]);
    console.log("Check Org Auth logged ", cookies?.bpm_app_org_auth?._isAuthenticated)


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



      const { data, isLoading, }= useFinalizeLoginQuery( editId, { refetchOnMountOrArgChange: true, skip: skipFetch } );

      const [loginOrgUser, responseLoginOrgUser] = useLoginOrgUserMutation();

      const [errors, ] = useHookErrorFieldResponse({ response: responseLoginOrgUser});

      useAuthenticationUser({
        responseAuth: responseLoginOrgUser?.data?.data,
        responseSuccess: responseLoginOrgUser?.isSuccess,
        cookiesAuth: cookiesOrgAuth_bpm,
        redirectUrl: portalUrl
      })

    const onSubmit: SubmitHandler<Inputs> = (dataLogin) => {
        setSkipFetch(true);
        const loginData = {
            email: data.data.email,
            password: dataLogin?.password
        }
        loginOrgUser(loginData)
    }

    useEffect(()=> {
        if( responseLoginOrgUser?.isError ) {
            setOpenError(true);
          }
    },[
        responseLoginOrgUser
    ]);

    return (
    <>
        {
                isLoading && <LoadingComponent isLoading={isLoading} />
        }   
        <ThemePageComponent>
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={1} md={3}>
                    &nbsp;
                </Grid>
                <Grid item xs={10} md={6}>
                    <BoxComponent>
                    {
                        openError && (
                        <>
                           <ErrorListDisplayComponent errors={errors}  />
                        </>
                        )
                    }
                    {
                        data?.success && (
                            <>
                                 <Typography variant="body1" gutterBottom  textAlign={'left'}>
                                   <GridCheckIcon color='success' /> {intl.formatMessage(msg.loginMessage.emailVerified)}
                                </Typography>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <InputLogin disabled={responseLoginOrgUser?.isLoading} type='password'  data-testid="passwordPortalLogin" data-cy="passwordPortalLogin" {...register("password", { required: true })} />
                                    {errorForm.email && <ErrorLogin> {intl.formatMessage(msg.validationMessage.emailRequired)} </ErrorLogin>}
                                    <ButtonLogin type='submit' data-cy="pwdBtn" className='theme-button' variant="contained"> {intl.formatMessage(msg.loginMessage.login)} </ButtonLogin>
                                </form>
                            </>
                        ) 
                    }
                    {
                        !data?.success && !isLoading &&  (
                            <>
                                <Typography variant="h6" gutterBottom  textAlign={'left'}>
                                   {intl.formatMessage(msg.loginMessage.invalidVerification)} <Button onClick={()=>navigate('/login')}>{intl.formatMessage(msg.loginMessage.loginAgain)}</Button> 
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

export default LoginPageFinalComponent;
