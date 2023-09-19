
import HeaderSectionComponent from '../header/HeaderSectionComponent';
import AddIcon from '@mui/icons-material/Add';
import { useIntl } from 'react-intl';
import * as msg from '../../../utils/messages'; 
import BodyPortalComponent from './common/BodyPortalComponent';
import { useNavigate } from "react-router-dom";
import { portalUrl } from '../../../utils/Helper';


const EditAccountComponent = ()  => {
    const intl = useIntl();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`${portalUrl}/add-property`);
    }
    
    return (
         <>
            <HeaderSectionComponent message={intl.formatMessage(msg.orgPortal.addProperty)} showButton={true} handleClick={handleClick}>
                <AddIcon />
            </HeaderSectionComponent>

            <BodyPortalComponent pageTitle={intl.formatMessage(msg.orgPortal.editAccount)}>
                 EDITXXX
            </BodyPortalComponent>
            
         </>               
    )
}

export default EditAccountComponent;