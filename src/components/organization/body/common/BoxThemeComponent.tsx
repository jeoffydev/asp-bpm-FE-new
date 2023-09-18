import  { ReactNode, FC } from 'react';
import { styled } from '@mui/material/styles'; 
import { themeColours } from '../../../../utils/Helper';
import BoxComponent from '../../../common/BoxComponent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const BoxWrapper = styled(Box,  {
    shouldForwardProp: (prop) => prop !== "marginTop",
  })<{ marginTop?: string, backgroundColor?: string, maxWidth?: string, width?: string   }>(({ marginTop, backgroundColor, maxWidth, width }) => ({
     
    borderRadius: '1.25rem',
    border: `1px solid ${themeColours.black}`,
    marginTop: marginTop ?? '',
    backgroundColor: backgroundColor ?? themeColours.beige,
    width: width ?? '',
    maxWidth: maxWidth ?? ''
}));

const InsideBox= styled('div')(() => ({
    padding: '1.8rem',
    minHeight: '4rem',
    
}));

const BottomBox= styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderBottomLeftRadius: '1.25rem',
    borderBottomRightRadius: '1.25rem',
    backgroundColor: themeColours.blue,
    color: themeColours.white,
    '& button': {
        color: themeColours.white,
        fontWeight: '600',
        textTransform: 'uppercase'
    },
    
}));


type Props = { 
    children?: ReactNode ,
    marginTop?: string,
    backgroundColor?: string,
    maxWidth?: string,
    width?: string
    handleClick?: ()=>void,
    buttonText?: string
}

const BoxThemeComponent: FC<Props> = (props)  => {
    const { children,  marginTop, backgroundColor, maxWidth, width, handleClick, buttonText   } = props;
  
    
    return (
         <BoxWrapper backgroundColor={themeColours.beige}   maxWidth={maxWidth} width={width}>
            <InsideBox data-testid="box-theme-component-test">
                {children}
            </InsideBox>
            {
                buttonText && (
                <BottomBox>
                    <Button variant="text" onClick={handleClick}>{buttonText}</Button>
                </BottomBox>
                )
            }
         </BoxWrapper>               
    )
}

export default BoxThemeComponent;