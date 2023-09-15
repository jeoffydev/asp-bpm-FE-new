import  {  FC } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { themeColours } from '../../../utils/Helper';
import SearchIcon from '@mui/icons-material/Search';

export const SearchButton = styled(Button)(() => ({
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
    },

}));

const SearchColourIcon  = styled(SearchIcon)(() => ({
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

const HeaderSearchComponent: FC<Props> = (props)  => {
    const {  handleClick  } = props;
    return (
        
                            <SearchButton data-testid="test-header-search" type='button' variant="contained" onClick={handleClick}> 
                                    <SearchColourIcon />  
                            </SearchButton>
    )
}

export default HeaderSearchComponent;