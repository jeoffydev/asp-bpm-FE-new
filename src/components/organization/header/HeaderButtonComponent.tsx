import  { ReactNode, FC } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
 
export const HeaderButton = styled(Button)(() => ({
    fontSize: '1.5rem',
    borderRadius: '5px',
    boxShadow: "none",
    textTransform: 'uppercase',
    padding: '0.2rem 2rem',
    fontWeight: '600',
    '@media only screen and (max-width: 600px)': {
        fontSize: '0.85rem',
        padding: '0.2rem 0.5rem',
    },
   }));

 
type Props = { 
    children?: ReactNode;
    message: string;
    handleClick: ()=>void
}

const HeaderButtonComponent: FC<Props> = (props)  => {
    const { children, message, handleClick } = props;
    
    return (
         <HeaderButton type='button' data-testid="test-header-button" className='theme-button' variant="contained" onClick={handleClick}> {children} {message} </HeaderButton>               
    )
}

export default HeaderButtonComponent;