import  {  FC } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { themeColours } from '../../../utils/Helper';
import HomeIcon from '@mui/icons-material/Home';

export const HomeButton = styled(Button)(() => ({
   border: `1px solid ${themeColours.black}`,
    borderRadius: '5px',
    padding: '0.2rem 1rem',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    ':hover': {
        backgroundColor: 'transparent',
    },
    '@media only screen and (max-width: 600px)': {
        padding: '0.2rem 0.4rem',
        minWidth: '0'
    },

}));

const HomeColourIcon  = styled(HomeIcon)(() => ({
    color: themeColours.yellow,
    width:'2rem',
    height: 'auto',
    '@media only screen and (max-width: 600px)': {
        width:'1.5rem',
    },
}));





type Props = { 
    handleClick: ()=>void
}

const HeaderHomeButtonComponent: FC<Props> = (props)  => {
    const {  handleClick  } = props;
    return (
        
                            <HomeButton data-testid="test-header-home" type='button' variant="contained" onClick={handleClick}> 
                                    <HomeColourIcon />  
                            </HomeButton>
    )
}

export default HeaderHomeButtonComponent;