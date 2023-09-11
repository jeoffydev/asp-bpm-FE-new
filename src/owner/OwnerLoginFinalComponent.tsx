import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useForm, SubmitHandler } from "react-hook-form"
import { styled } from '@mui/material/styles'; 
import { useAddOwnerMutation, useFinalizeLoginQuery } from '../services/owner/ownerSliceApi';
import useAuthenticationUser from '../hooks/useAuthenticationUser';
import OwnerFooterComponent from './common/OwnerFooterComponent';
import FloatingErrorComponent from '../global/FloatingErrorComponent';
import useHookErrorFieldResponse from '../hooks/useHookErrorFieldResponse';
import { useCookies } from 'react-cookie';
import { cookiesAuth_bpm } from '../auth/authHelper';
import { useParams, useNavigate } from "react-router-dom";
import LoadingComponent from '../global/LoadingComponent';
import { Button, Typography } from '@mui/material';
import { GridCheckIcon } from '@mui/x-data-grid';
import { ownerUrl } from '../utils/Helper';

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

const OwnerLoginFinalComponent = () => {
    const [openError, setOpenError] = useState(false);
    const navigate = useNavigate(); 
    let { secret } = useParams();
    const [editId, setEditId] = useState('');
    const [skipFetch, setSkipFetch] = useState(false);

    const [cookies, ] = useCookies([cookiesAuth_bpm]);
    console.log("Check owner logged ", cookies?.bpm_app_auth?._isAuthenticated)

    const {
        register,
        handleSubmit,
        formState: { errors: errorForm },
      } = useForm<Inputs>();

  
      const { data, isLoading, }= useFinalizeLoginQuery( editId, { refetchOnMountOrArgChange: true, skip: skipFetch } );


    const [addOwner, responseAddOwner] = useAddOwnerMutation();
    const [errors, ] = useHookErrorFieldResponse({ response: responseAddOwner});
    useAuthenticationUser({ 
          responseAuth: responseAddOwner?.data?.data,
          responseSuccess: responseAddOwner?.isSuccess,
          cookiesAuth: cookiesAuth_bpm,
          redirectUrl: ownerUrl
    });

      useEffect(()=> {
        if ( secret ) {
            const ownerSecret: string = secret;
            setEditId(ownerSecret);
        }
       
    },[
        secret,
        data,
        navigate      
    ])
    
    useEffect(()=> {
        if( responseAddOwner?.isError ) {
            setOpenError(true);
          }
    },[
        responseAddOwner
    ]);
     
     
    const onSubmit: SubmitHandler<Inputs> = (dataLogin) => {
        setSkipFetch(true);
        const loginData = {
            email: data.data.email,
            password: dataLogin?.password
        }
        addOwner(loginData);
    }


    const handleCloseError = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenError(false);
      };

   
    return (
        <Box sx={{ flexGrow: 1 }}>
             {
                isLoading && <LoadingComponent isLoading={isLoading} />
            }   
            <Grid container spacing={2}>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>
                    <h3>Service Provider Login Verification</h3>

                    {
                        data?.success && (
                            <>
                                 <Typography variant="body1" gutterBottom  textAlign={'left'}>
                                   <GridCheckIcon color='success' /> Email verified. Please enter your password below.
                                </Typography>
                                <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                                    <label>Password</label>
                                    <input type='password' data-testid="loginPwOwner"  {...register("password", { required: true })} />
                                    {errorForm.password && <span>Password field is required</span>}
                                    <input type="submit" value={'Login'} data-test-id="loginOwnerBtn" />
                                </FormWrapper>
                            </>
                        ) 
                    }

                    {
                        !data?.success && !isLoading &&  (
                            <Typography variant="h6" gutterBottom  textAlign={'left'}>
                                   Invalid verification! <Button onClick={()=>navigate('/owner')}>Please login again.</Button> 
                            </Typography> 
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
                    />
                </>
                )
            }
          
        </Box>
    )
}

export default OwnerLoginFinalComponent;