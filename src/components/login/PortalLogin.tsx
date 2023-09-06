import * as React from 'react';

import { useIntl } from 'react-intl';
import * as msg from '../../utils/messages'; 
import { useForm, SubmitHandler } from "react-hook-form"
import { ErrorLogin, InputLogin, ButtonLogin } from './ContractorLogin';



   type Inputs = {
    email: string
  }
  
export default function PortalLogin() {
  const intl = useIntl();

  const {
    register,
    handleSubmit,
    formState:  { errors: errorForm },
  } = useForm<Inputs>();


  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("PORTAL ADMIN LOGIN ", data)
}



  return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputLogin type='email' placeholder='Email Address' data-testid="emailPortalLogin" data-cy="emailPortalLogin" {...register("email", { required: true })} />
            {errorForm.email && <ErrorLogin> {intl.formatMessage(msg.validationMessage.emailRequired)} </ErrorLogin>}
            <ButtonLogin type='submit' className='theme-button' variant="contained"> {intl.formatMessage(msg.loginMessage.loginBtn)} </ButtonLogin>
        </form>
     
  );
}