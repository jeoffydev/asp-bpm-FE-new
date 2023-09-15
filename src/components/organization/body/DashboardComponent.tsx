import  { ReactNode, FC } from 'react';
import HeaderSectionComponent from '../header/HeaderSectionComponent';
import AddIcon from '@mui/icons-material/Add';
import { useIntl } from 'react-intl';
import * as msg from '../../../utils/messages'; 
import BodyPortalComponent from './common/BodyPortalComponent';
import BannerComponent from '../../common/BannerComponent';
import { styled } from '@mui/material/styles'; 



const GridCenter = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',

  }));

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

            <BodyPortalComponent>
                <GridCenter>
                    <BannerComponent firstWord='Create.' secondWord='Manage.' thirdWord='Operate' />
                </GridCenter>
            </BodyPortalComponent>
            
         </>               
    )
}

export default DashboardComponent;