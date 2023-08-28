import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useForm, SubmitHandler } from "react-hook-form"
import { styled } from '@mui/material/styles'; 
import { useAddOwnerMutation } from '../services/owner/ownerSliceApi';
import useAuthenticationUser from '../hooks/useAuthenticationUser';
import OwnerFooterComponent from './common/OwnerFooterComponent';
import FloatingErrorComponent from '../global/FloatingErrorComponent';
import useHookErrorFieldResponse from '../hooks/useHookErrorFieldResponse';
import { useCookies } from 'react-cookie';
import { cookiesAuth_bpm } from '../auth/authHelper';

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

const OwnerLoginComponent = () => {
    const [openError, setOpenError] = useState(false);
    const [cookies, ] = useCookies([cookiesAuth_bpm]);
    console.log("Check owner logged ", cookies?.bpm_app_auth?._isAuthenticated)

    const {
        register,
        handleSubmit,
        formState: { errors: errorForm },
      } = useForm<Inputs>();
      const [addOwner, responseAddOwner] = useAddOwnerMutation();
      const [errors, ] = useHookErrorFieldResponse({ response: responseAddOwner});
      useAuthenticationUser({ 
        responseAuth: responseAddOwner?.data?.data,
        responseSuccess: responseAddOwner?.isSuccess
    });
     
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        addOwner(data);
    }

    useEffect(()=> {
        if( responseAddOwner?.isError ) {
            setOpenError(true);
          }
    },[
        responseAddOwner
    ]);

    const handleCloseError = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenError(false);
      };

   
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>
                    <h3>Service Provider Login</h3>

                   
                    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                        <input type='email' data-testid="loginEmailOwner" data-cy="loginEmailOwner" {...register("email", { required: true })} />
                        {errorForm.email && <span>Email field is required</span>}
                        {/* include validation with required or other standard HTML validation rules */}
                        <input type='password' data-testid="loginPwOwner" data-cy="loginPwOwner"  {...register("password", { required: true })} />
                        {errorForm.password && <span>Password field is required</span>}
                        <input type="submit" value={'Enter'} data-test-id="loginOwnerBtn" />
                    </FormWrapper>

                </Grid>
                <Grid item xs={4}>
                </Grid>
            </Grid>

            <OwnerFooterComponent />

            {
                openError && (
                <>
                    <FloatingErrorComponent open={
                        openError
                        } 
                        errors={errors} 
                        handleCloseError={handleCloseError}
                    />
                </>
                )
            }
          
        </Box>
    )
}

export default OwnerLoginComponent;