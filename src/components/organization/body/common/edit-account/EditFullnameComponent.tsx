import  { useState, useEffect } from 'react';
import BoxThemeComponent from '../BoxThemeComponent';
import { TextFieldTheme } from '../../../../../utils/UIHelperForm';
import { useIntl } from 'react-intl';
import * as msg from '../../../../../utils/messages'; 
import {  useUpdateUserDetailsMutation } from '../../../../../services/organization/administrator/orgAdministratorSliceApi';
import useHookErrorFieldResponse from '../../../../../hooks/useHookErrorFieldResponse';
import LoadingComponent from '../../../../../global/LoadingComponent';
import ErrorListDisplayComponent from '../../../../common/ErrorListDisplayComponent';
import CheckIcon from '@mui/icons-material/Check';


const EditFullnameComponent = () => {
    const intl = useIntl();
    const [fullName, setFullName] = useState('');
    const [openError, setOpenError] = useState(false);
    const [updateUserDetails, responseUpdateUserDetails] = useUpdateUserDetailsMutation();
    const [errors, ] = useHookErrorFieldResponse({ response:  responseUpdateUserDetails });

    useEffect(()=> {
        if( responseUpdateUserDetails?.isSuccess ) {
            setFullName('');
        }
        if( responseUpdateUserDetails?.isError ) {
            setOpenError(true);
        }
    },[
        responseUpdateUserDetails?.isSuccess,
        responseUpdateUserDetails?.isError
    ]);

    const handleEdit = () => {
        updateUserDetails({
            fullName
        });
    }

  return (
    <>
        <BoxThemeComponent buttonText={intl.formatMessage(msg.formMessage.updateDetails)} handleClick={handleEdit}>
            {
                    responseUpdateUserDetails?.isLoading && <LoadingComponent isLoading={responseUpdateUserDetails?.isLoading} />
            } 
             {
                openError && (
                        <>
                           <ErrorListDisplayComponent errors={errors}  />
                        </>
                        )
            }
            {
                responseUpdateUserDetails?.isSuccess && (
                    <>
                        <CheckIcon color='success' /> {intl.formatMessage(msg.formMessage.updateDetailsDone)} 
                    </>
                )
            }
            <form>
                <TextFieldTheme required={true} value={fullName} onChange={(e)=>setFullName(e.target.value)} data-testid="fullname-edit" id="outlined-basic" label={intl.formatMessage(msg.formMessage.fullName)} variant="outlined" />
            </form>
        </BoxThemeComponent>
    </>
  );
}

export default EditFullnameComponent;
