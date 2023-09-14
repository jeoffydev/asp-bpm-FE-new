import  { ReactNode, FC } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import HeaderButtonComponent from './HeaderButtonComponent';

 

   const GridHeader  = styled(Grid)(() => ({
    textAlign: 'right'
}));

type Props = { 
    children?: ReactNode;
    message: string;
    handleClick: ()=>void
}

const HeaderSectionComponent: FC<Props> = (props)  => {
    const { children, message, handleClick } = props;
    return (
        <Grid container spacing={1}>
                        <GridHeader item xs={12} md={12}>
                             <HeaderButtonComponent message={message} handleClick={handleClick}> {  children } </HeaderButtonComponent>
                        </GridHeader>
        </Grid> 
    )
}

export default HeaderSectionComponent;