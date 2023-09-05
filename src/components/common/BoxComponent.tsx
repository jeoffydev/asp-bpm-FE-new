import  { ReactNode, FC } from 'react';
import { styled } from '@mui/material/styles';
import { themeColours } from '../../utils/Helper';
import Box from '@mui/material/Box';


const BoxWrapper = styled(Box,  {
    shouldForwardProp: (prop) => prop !== "marginTop",
  })<{ marginTop?: string, backgroundColor?: string,   }>(({ marginTop, backgroundColor }) => ({
    padding: '1.8rem',
    borderRadius: '1.25rem',
    border: `1px solid ${themeColours.black}`,
    marginTop: marginTop ?? '',
    backgroundColor: backgroundColor ?? themeColours.white,
}));


type Props = { 
    children?: ReactNode ,
    marginTop?: string,
    backgroundColor?: string,

}

const BoxComponent : FC<Props> = (props) => {
    const { children, marginTop, backgroundColor } = props;

  return (
    <BoxWrapper marginTop={marginTop} backgroundColor={backgroundColor} >
       {children}
    </BoxWrapper>
  );
}

export default BoxComponent;
