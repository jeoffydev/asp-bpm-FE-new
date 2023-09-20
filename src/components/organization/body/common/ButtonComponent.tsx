import  { ReactNode, FC } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { themeColours } from '../../../../utils/Helper';

export const StyledButton = styled(Button)(() => ({
    border: `1px solid ${themeColours.black}`,
    borderRadius: '5px',
    padding: '0.2rem 1rem',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    color: themeColours.black,
    fontSize: '0.85rem',
    fontWeight: '700',
    position: 'relative',
    top: '0.2rem',
    marginRight: '0.3rem',
    '& svg': {
        color: themeColours.yellow,
        marginRight: '0.4rem'
    },
    ':hover': {
        backgroundColor: 'transparent',
    },
    '@media only screen and (max-width: 600px)': {
        padding: '0.2rem 0.4rem',
        minWidth: '0',
        marginRight: '0.2rem',
         fontSize: '0.80rem',
        '& svg': {
            marginRight: '0.2rem'
        },
    },

}));


type Props = { 
    children?: ReactNode,
    handleClick: ()=>void
}

const ButtonComponent: FC<Props> = (props)  => {
    const {  handleClick, children  } = props;
    return (
        
                            <StyledButton data-testid="test-header-home" type='button' variant="contained" onClick={handleClick}> 
                                     {children}
                            </StyledButton>
    )
}

export default ButtonComponent;