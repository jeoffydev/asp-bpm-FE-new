
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useForm, SubmitHandler } from "react-hook-form"
import { styled } from '@mui/material/styles'; 
import { useAddOwnerMutation } from '../services/owner/ownerSliceApi';
import useAuthenticationUser from '../hooks/useAuthenticationUser';
import OwnerFooterComponent from './common/OwnerFooterComponent';
import FloatingErrorComponent from '../global/FloatingErrorComponent';
import useHookErrorFieldResponse from '../hooks/useHookErrorFieldResponse';


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

    const {
        register,
        handleSubmit,
        formState: { errors: errorForm },
      } = useForm<Inputs>();
      const [addOwner, responseAddOwner] = useAddOwnerMutation();
      console.log("responseAddOwner ", responseAddOwner)
      const [errors, ] = useHookErrorFieldResponse({ response: responseAddOwner});
      useAuthenticationUser({ 
        responseAuth: responseAddOwner?.data?.data,
        responseSuccess: responseAddOwner?.isSuccess
    });
     
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        addOwner(data);
    }

   
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>
                    <h3>Service Provider Login</h3>

                   
                    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                        <input type='email'  {...register("email", { required: true })} />
                        {errorForm.email && <span>Email field is required</span>}
                        {/* include validation with required or other standard HTML validation rules */}
                        <input type='password' {...register("password", { required: true })} />
                        {errorForm.password && <span>Password field is required</span>}
                        <input type="submit" value={'Enter'} />
                    </FormWrapper>

                </Grid>
                <Grid item xs={4}>
                </Grid>
            </Grid>

            <OwnerFooterComponent />

            <FloatingErrorComponent open={responseAddOwner.isError} errors={errors} />
          
        </Box>
    )
}

export default OwnerLoginComponent;