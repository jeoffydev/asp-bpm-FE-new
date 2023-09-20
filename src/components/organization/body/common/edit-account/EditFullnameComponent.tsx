import  { ReactNode, FC } from 'react';
import BoxThemeComponent from '../BoxThemeComponent';
import { TextFieldTheme } from '../../../../../utils/UIHelperForm';
import { useIntl } from 'react-intl';
import * as msg from '../../../../../utils/messages'; 


type Props = { 
   
}

const EditFullnameComponent = (props: Props) => {
    const intl = useIntl();
    const handleEdit = () => {
        console.log("UPDATE NAME! ")
    }

  return (
    <>
        <BoxThemeComponent buttonText={intl.formatMessage(msg.formMessage.updateDetails)} handleClick={handleEdit}>
            <form>
                <TextFieldTheme data-testid="fullname-edit" id="outlined-basic" label={intl.formatMessage(msg.formMessage.fullName)} variant="outlined" />
            </form>
        </BoxThemeComponent>
    </>
  );
}

export default EditFullnameComponent;
