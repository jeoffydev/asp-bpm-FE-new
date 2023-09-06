import * as React from 'react';
import { styled } from '@mui/material/styles';
import { themeColours } from '../../utils/Helper';

import Button from '@mui/material/Button';
import { useIntl } from 'react-intl';
import * as msg from '../../utils/messages'; 
import { useForm, SubmitHandler } from "react-hook-form"





 export const ButtonLogin = styled(Button)(() => ({
    width: '100%',
    borderRadius: '5px',
    boxShadow: "none",
    margin: '1.8rem 0 0',
   }));


   export const InputLogin = styled('input')(() => ({
        width: '95.6%',
        border: `1px solid ${themeColours.black}`,
        height: '2.8rem',
        borderRadius: '0.3125rem',
        margin: '0.6rem 0 0',
        padding: '0.3rem 0.7rem',
        fontSize: '1.375rem',
        '@media only screen and (max-width: 600px)': {
            width: '91%',
        },
   }));  

   
export const ErrorLogin = styled('span')(() => ({
    width: '100%',
    margin: '0.2rem 0',
    color: themeColours.violet,
    fontStyle: 'italic',
    fontSize: '0.75rem'
   }));

   type Inputs = {
    beimsValue: string
  }
  
export default function ContractorLogin() {
  const intl = useIntl();

  const {
    register,
    handleSubmit,
    formState:  { errors: errorForm },
  } = useForm<Inputs>();


  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("CONTRACTOR LOGIN ", data)
}



  return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputLogin type='text' placeholder='Enter Job Number' data-testid="beimsValueContractor" data-cy="beimsValueContractor" {...register("beimsValue", { required: true })} />
            {errorForm.beimsValue && <ErrorLogin> {intl.formatMessage(msg.validationMessage.jobNumberRequired)} </ErrorLogin>}
            <ButtonLogin type='submit' className='theme-button' variant="contained"> {intl.formatMessage(msg.loginMessage.contractorBtn)} </ButtonLogin>
        </form>
     
  );
}