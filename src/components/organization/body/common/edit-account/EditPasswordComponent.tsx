import  { useState, useEffect } from 'react';
import BoxThemeComponent from '../BoxThemeComponent';
import { TextFieldTheme } from '../../../../../utils/UIHelperForm';
import { useIntl } from 'react-intl';
import * as msg from '../../../../../utils/messages'; 
import { useUpdateUserPasswordMutation } from '../../../../../services/organization/administrator/orgAdministratorSliceApi';
import useHookErrorFieldResponse from '../../../../../hooks/useHookErrorFieldResponse';
import LoadingComponent from '../../../../../global/LoadingComponent';
import ErrorListDisplayComponent from '../../../../common/ErrorListDisplayComponent';
import GppGoodIcon from '@mui/icons-material/GppGood';

const EditPasswordComponent = () => {
    const intl = useIntl();
    const [passwordOne, setPasswordOne] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');
    const [openError, setOpenError] = useState(false);

    const [updateUserPassword, responseUpdateUserPassword] = useUpdateUserPasswordMutation();
    const [errors, ] = useHookErrorFieldResponse({ response:  responseUpdateUserPassword });

    useEffect(()=> {
        if( responseUpdateUserPassword?.isSuccess ) {
            setPasswordOne('');
            setPasswordTwo('');
        }
        if( responseUpdateUserPassword?.isError ) {
            setOpenError(true);
        }
    },[
        responseUpdateUserPassword?.isSuccess,
        responseUpdateUserPassword?.isError
    ]);
    const handleEdit = () => {
        updateUserPassword({
            password: passwordOne,
            confirmPassword: passwordTwo
        })
    }

  return (
    <>
        <BoxThemeComponent buttonText={intl.formatMessage(msg.formMessage.updatePassword)} handleClick={handleEdit}>
            {
                    responseUpdateUserPassword?.isLoading && <LoadingComponent isLoading={responseUpdateUserPassword?.isLoading} />
            } 
             {
                openError && (
                        <>
                           <ErrorListDisplayComponent errors={errors}  />
                        </>
                        )
            }
            {
                responseUpdateUserPassword?.isSuccess && (
                    <>
                        <GppGoodIcon color='success' /> {intl.formatMessage(msg.formMessage.updatePasswordDone)} 
                    </>
                )
            }
            <form>
                <TextFieldTheme required={true} value={passwordOne} onChange={(e)=>setPasswordOne(e.target.value)} data-testid="pw-edit1" type='password' id="outlined-pw1" label={intl.formatMessage(msg.formMessage.password)} variant="outlined" />
                <TextFieldTheme required={true} value={passwordTwo} onChange={(e)=>setPasswordTwo(e.target.value)} data-testid="pw-edit2" type='password' id="outlined-pw2" label={intl.formatMessage(msg.formMessage.confirmPassword)} variant="outlined" />
            </form>
        </BoxThemeComponent>
    </>
  );
}

export default EditPasswordComponent;
