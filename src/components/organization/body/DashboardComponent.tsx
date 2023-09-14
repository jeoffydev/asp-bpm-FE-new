import  { ReactNode, FC } from 'react';
import HeaderSectionComponent from '../header/HeaderSectionComponent';
import AddIcon from '@mui/icons-material/Add';
import { useIntl } from 'react-intl';
import * as msg from '../../../utils/messages'; 

type Props = { 
    children?: ReactNode;
}

const DashboardComponent: FC<Props> = (props)  => {
    const { children  } = props;
    const intl = useIntl();

    const handleClick = () => {
        console.log("CLICKED!")
    }
    
    return (
         <>
            <HeaderSectionComponent message={intl.formatMessage(msg.orgPortal.addProject)} handleClick={handleClick}>
                <AddIcon />
            </HeaderSectionComponent>

            Dashboard!
         </>               
    )
}

export default DashboardComponent;