import  { ReactNode, FC } from 'react';
import { styled } from '@mui/material/styles';
import { themeColours } from '../../utils/Helper';
import Box from '@mui/material/Box';


const BoxWrapper = styled(Box,  {
    shouldForwardProp: (prop) => prop !== "marginTop",
  })<{ marginTop?: string, backgroundColor?: string, maxWidth?: string, width?: string   }>(({ marginTop, backgroundColor, maxWidth, width }) => ({
    padding: '1.8rem',
    borderRadius: '1.25rem',
    border: `1px solid ${themeColours.black}`,
    marginTop: marginTop ?? '',
    backgroundColor: backgroundColor ?? themeColours.white,
    width: width ?? '',
    maxWidth: maxWidth ?? ''
}));


type Props = { 
    children?: ReactNode ,
    marginTop?: string,
    backgroundColor?: string,
    maxWidth?: string,
    width?: string
}

const BoxComponent : FC<Props> = (props) => {
    const { children, marginTop, backgroundColor, maxWidth, width } = props;

  return (
    <BoxWrapper marginTop={marginTop} backgroundColor={backgroundColor} maxWidth={maxWidth} width={width}>
       {children}
    </BoxWrapper>
  );
}

export default BoxComponent;
