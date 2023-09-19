import  { ReactNode, FC } from 'react';
import { styled } from '@mui/material/styles'; 
import { themeColours } from '../../../../utils/Helper';
import TitlePageComponent from './TitlePageComponent';


const BodyPortal = styled('div')(() => ({
     border: `1px solid ${themeColours.black}`,
     margin: '1rem 0',
     borderRadius: '1.3rem',
     minHeight: '65vh',
     height: 'auto'
   }));

const BodyPadding = styled('div')(() => ({
    padding: '1.5rem',
  })); 

type Props = { 
    children?: ReactNode;
    pageTitle?: string;
}

const BodyPortalComponent: FC<Props> = (props)  => {
    const { children, pageTitle  } = props;
  
    
    return (
         <BodyPortal>
            {
                pageTitle && (
                    <TitlePageComponent>
                           {pageTitle}
                    </TitlePageComponent>
                )
            }
            <BodyPadding>
                {children}
            </BodyPadding>
         </BodyPortal>               
    )
}

export default BodyPortalComponent;