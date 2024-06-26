import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useForm, SubmitHandler } from "react-hook-form"
import { styled } from '@mui/material/styles'; 
import {  useCheckOwnerEmailLoginMutation } from '../services/owner/ownerSliceApi';
import OwnerFooterComponent from './common/OwnerFooterComponent';
import FloatingErrorComponent from '../global/FloatingErrorComponent';
import useHookErrorFieldResponse from '../hooks/useHookErrorFieldResponse';
import { useLoginEmailTemplate } from './EmailTemplate/useLoginEmailTemplate';
import EmailSentMsgComponent from '../components/common/EmailSentMsgComponent';

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
    const [emailTo, setEmailto] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors: errorForm },
      } = useForm<Inputs>();
      const [checkOwnerEmail, responsecheckOwnerEmail] = useCheckOwnerEmailLoginMutation();

      const [errors, ] = useHookErrorFieldResponse({ response: responsecheckOwnerEmail});

     // Temp hold off for email account 
    //   useLoginEmailTemplate({
    //     secretKey: responsecheckOwnerEmail?.data?.data,
    //     ifSuccess: responsecheckOwnerEmail?.isSuccess,
    //     emailTo: emailTo,
    //      templateCode: 'template_7mv0non'
    //   })
      
      console.log("REMOVE THIS CONSOLE WHEN IN PROD ", responsecheckOwnerEmail?.isSuccess && responsecheckOwnerEmail?.data?.data)
    
    
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        setEmailto(data.email)
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
                               <EmailSentMsgComponent />
                            </>
                        ) : (
                            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                                <input type='email' data-testid="loginEmailInitOwner" {...register("email", { required: true })} />
                                {errorForm.email && <span>Email field is required</span>}
                                <input type="submit" value={'Email a login link'} data-test-id="loginOwnerInitBtn" />
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