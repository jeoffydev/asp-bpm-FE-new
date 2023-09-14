import  { ReactNode, FC } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
 
export const HeaderButton = styled(Button)(() => ({
    fontSize: '1.5rem',
    borderRadius: '5px',
    boxShadow: "none",
    textTransform: 'uppercase',
    padding: '0.2rem 2rem',
    fontWeight: '600'
   }));

 
type Props = { 
    children?: ReactNode;
    message: string;
    handleClick: ()=>void
}

const HeaderButtonComponent: FC<Props> = (props)  => {
    const { children, message, handleClick } = props;
    
    return (
         <HeaderButton type='button' className='theme-button' variant="contained" onClick={handleClick}> {children} {message} </HeaderButton>               
    )
}

export default HeaderButtonComponent;