import  { ReactNode, FC } from 'react';
import { styled } from '@mui/material/styles'; 
import { themeColours } from '../../../../utils/Helper';


const BodyPortal = styled('div')(() => ({
     border: `1px solid ${themeColours.black}`,
     margin: '1rem 0',
     borderRadius: '1.3rem',
     padding: '1.5rem',
     minHeight: '65vh',
     height: 'auto'
   }));

type Props = { 
    children?: ReactNode;
}

const BodyPortalComponent: FC<Props> = (props)  => {
    const { children  } = props;
  
    
    return (
         <BodyPortal>
            {children}
         </BodyPortal>               
    )
}

export default BodyPortalComponent;