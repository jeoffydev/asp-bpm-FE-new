
import HeaderSectionComponent from '../../header/HeaderSectionComponent';
import AddIcon from '@mui/icons-material/Add';
import { useIntl } from 'react-intl';
import * as msg from '../../../../utils/messages'; 
import BodyPortalComponent from '../common/BodyPortalComponent';



const AddPropertyComponent = ()  => {
    const intl = useIntl();

    return (
         <>
            <HeaderSectionComponent message='' showButton={false} handleClick={()=>{}} >
                <AddIcon />
            </HeaderSectionComponent>

            <BodyPortalComponent pageTitle={intl.formatMessage(msg.orgPortal.addProperty)}>
                 ADD PROPERTY!
            </BodyPortalComponent>
            
         </>               
    )
}

export default AddPropertyComponent;