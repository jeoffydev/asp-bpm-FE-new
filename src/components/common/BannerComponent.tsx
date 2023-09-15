import  { ReactNode, FC } from 'react';
import { styled } from '@mui/material/styles';
import { themeColours } from '../../utils/Helper';


const BannerTitle = styled('div', {
    shouldForwardProp: (prop) => prop !== "marginTop",
  })<{ marginTop?: string, fontSize?: string }>(({ marginTop, fontSize }) => ({
   fontSize: fontSize ?? '3.5rem',
   fontWeight: '900',
   display: 'flex',
   flexDirection: 'row',
   marginTop: marginTop ?? '',
   '@media only screen and (max-width: 600px)': {
        fontSize: '1.6rem',
    },

}));
 

const SubTitle = styled('div', {
    shouldForwardProp: (prop) => prop !== "mobileTextWhite",
  })<{ mobileTextWhite?: boolean }>(({ mobileTextWhite })  => ({
    display: 'flex',
    flexDirection: 'row',
    fontWeight: '400',
    fontSize: '1.65rem',
    marginTop: '0.2rem',
    '@media only screen and (max-width: 600px)': {
        fontSize: '1rem',
        color: mobileTextWhite ? themeColours.white : ''
    },
}));
const FirstWord = styled('span')(() => ({
   display: 'inline-block',
   color: themeColours.black
}));
const SecondWord = styled('span')(() => ({
    display: 'inline-block',
    color: themeColours.blue,
    '@media only screen and (max-width: 600px)': {
        color: themeColours.yellow
    },
}));
const ThirdWord = styled('span')(() => ({
    display: 'inline-block',
    color: themeColours.pink
}));

type Props = { 
    children?: ReactNode ,
    firstWord?: string,
    secondWord?: string,
    thirdWord?: string,
    marginTop?: string,
    fontSize?: string,
    mobileTextWhite?: boolean
}

const BannerComponent: FC<Props> = (props)  => {
    const { children, firstWord, secondWord, thirdWord, marginTop, fontSize, mobileTextWhite } = props;
  return (
    <>
    <BannerTitle marginTop={marginTop} fontSize={fontSize} className={'banner-titles'}>
        {firstWord && <FirstWord data-testid="firstWord">{firstWord}</FirstWord>}
        {secondWord && <SecondWord>{secondWord}</SecondWord>}
        {thirdWord && <ThirdWord data-testid="thirdWord">{thirdWord}</ThirdWord>}
    </BannerTitle>
    {children && <SubTitle data-testid="subTitle" mobileTextWhite={mobileTextWhite}>{children}</SubTitle>}
    </>
  );
}

export default BannerComponent;
