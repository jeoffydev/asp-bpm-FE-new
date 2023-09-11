import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useForm, SubmitHandler } from "react-hook-form"
import { styled } from '@mui/material/styles'; 
import useAuthenticationUser from '../../hooks/useAuthenticationUser';
import useHookErrorFieldResponse from '../../hooks/useHookErrorFieldResponse';
import { useCookies } from 'react-cookie';
import { cookiesAuth_bpm } from '../../auth/authHelper';
import { portalUrl } from '../../utils/Helper';
import { cookiesOrgAuth_bpm } from '../../auth/authHelper';
import { useLoginOrgUserMutation } from '../../services/organization/administrator/orgAdministratorSliceApi';

const FormWrapper = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    '& input': {
        height: '2rem',
        padding: '0.5rem',
        border: '1px solid #333',
        borderRadius: '0.3rem',
        marginBottom: '0.3rem'
    },
    '& span': {
        fontSize: '0.8rem',
        fontStyle: 'italic',
        display: 'block',
        marginBottom: '0.4rem'
    }
 });



type Inputs = {
    email: string
    password: string
  }

const OrgLoginComponent = () => {
    const [openError, setOpenError] = useState(false);
    const [cookies, ] = useCookies([cookiesOrgAuth_bpm]);

    const {
        register,
        handleSubmit,
        formState: { errors: errorForm },
      } = useForm<Inputs>();
      const [loginUser, responseLoginUser] = useLoginOrgUserMutation();
      const [errors, ] = useHookErrorFieldResponse({ response: responseLoginUser});
      useAuthenticationUser({ 
        responseAuth: responseLoginUser?.data?.data,
        responseSuccess: responseLoginUser?.isSuccess,
        cookiesAuth: cookiesOrgAuth_bpm,
        redirectUrl: portalUrl
    });
     
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        loginUser(data);
    }

    useEffect(()=> {
        if( responseLoginUser?.isError ) {
            setOpenError(true);
          }
    },[
        responseLoginUser
    ]);

 
   
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>
                    <h3>Org Cypress Login</h3>
                
                    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                        <input type='email' data-testid="loginEmailOrg" data-cy="loginEmailOrg" {...register("email", { required: true })} />
                        {errorForm.email && <span>Email field is required</span>}
                        {/* include validation with required or other standard HTML validation rules */}
                        <input type='password' data-testid="loginPwOrg" data-cy="loginPwOrg"  {...register("password", { required: true })} />
                        {errorForm.password && <span>Password field is required</span>}
                        <input type="submit" value={'Enter'} data-test-id="loginOrgBtn" />
                    </FormWrapper>

                </Grid>
                <Grid item xs={4}>
                </Grid>
            </Grid> 
          
        </Box>
    )
}

export default OrgLoginComponent;