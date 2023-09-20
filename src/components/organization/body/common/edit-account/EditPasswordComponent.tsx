import  { ReactNode, FC } from 'react';
import BoxThemeComponent from '../BoxThemeComponent';
import { TextFieldTheme } from '../../../../../utils/UIHelperForm';
import { useIntl } from 'react-intl';
import * as msg from '../../../../../utils/messages'; 


type Props = { 
   
}

const EditPasswordComponent = (props: Props) => {
    const intl = useIntl();
    const handleEdit = () => {
        console.log("UPDATE Password! ")
    }

  return (
    <>
        <BoxThemeComponent buttonText={intl.formatMessage(msg.formMessage.updatePassword)} handleClick={handleEdit}>
            <form>
                <TextFieldTheme data-testid="pw-edit1" type='password' id="outlined-pw1" label={intl.formatMessage(msg.formMessage.password)} variant="outlined" />
                <TextFieldTheme data-testid="pw-edit2" type='password' id="outlined-pw2" label={intl.formatMessage(msg.formMessage.confirmPassword)} variant="outlined" />
            </form>
        </BoxThemeComponent>
    </>
  );
}

export default EditPasswordComponent;
