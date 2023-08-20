import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useForm, SubmitHandler } from "react-hook-form"
import { styled } from '@mui/material/styles'; 
import {  useCheckOwnerEmailLoginMutation } from '../services/owner/ownerSliceApi';
import OwnerFooterComponent from './common/OwnerFooterComponent';
import FloatingErrorComponent from '../global/FloatingErrorComponent';
import useHookErrorFieldResponse from '../hooks/useHookErrorFieldResponse';
import { useCookies } from 'react-cookie';
import { cookiesAuth_bpm } from '../auth/authHelper';
import Typography from '@mui/material/Typography';

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

const OwnerLoginInitComponent = () => {
    const [openError, setOpenError] = useState(false);
    const [cookies, ] = useCookies([cookiesAuth_bpm]);

    const {
        register,
        handleSubmit,
        formState: { errors: errorForm },
      } = useForm<Inputs>();
      const [checkOwnerEmail, responsecheckOwnerEmail] = useCheckOwnerEmailLoginMutation();

      const [errors, ] = useHookErrorFieldResponse({ response: responsecheckOwnerEmail});
      
      console.log("REMOVE THIS CONSOLE WHEN IN PROD ", responsecheckOwnerEmail?.isSuccess && responsecheckOwnerEmail?.data?.data)
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        checkOwnerEmail(data); 
    }

    useEffect(()=> {
        if( responsecheckOwnerEmail?.isError ) {
            setOpenError(true);
        }
       
    },[
        responsecheckOwnerEmail
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
                    <h3>Service Provider</h3>
                    
                    {
                        responsecheckOwnerEmail?.isSuccess ? (
                            <>
                                <Typography variant="h4" gutterBottom  textAlign={'center'}>
                                    Email Sent
                                </Typography>
                                <Typography variant="h6" gutterBottom  textAlign={'center'}>
                                    Please check your inbox for the sign in link or sometimes this can land in SPAM!. If it doesn't arrive in a minute or three, please check again.
                                </Typography> 
                            </>
                        ) : (
                            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                                <input type='email' data-testid="loginEmailOwner" {...register("email", { required: true })} />
                                {errorForm.email && <span>Email field is required</span>}
                                <input type="submit" value={'Email a login link'} data-test-id="loginOwnerBtn" />
                            </FormWrapper>
                        )
                    }
                    

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
                        customMessage={'No email found'}
                    />
                </>
                )
            }
          
        </Box>
    )
}

export default OwnerLoginInitComponent;