import  { ReactNode, FC } from 'react';
import { styled } from '@mui/material/styles'; 
import { themeColours } from '../../../../utils/Helper';

const TitleWrapper= styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    color: themeColours.purple,
    fontSize: '1.5rem',
    fontWeight: '700',
    padding: '0.5rem 1.5rem',
    borderBottom: `1px solid ${themeColours.black}`
}));


type Props = { 
    children?: ReactNode
}

const TitlePageComponent: FC<Props> = (props)  => {
    const { children  } = props;
  
    
    return (
         <TitleWrapper>
            {children}
         </TitleWrapper>               
    )
}

export default TitlePageComponent;