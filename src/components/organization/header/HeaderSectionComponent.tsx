import  { ReactNode, FC } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import HeaderButtonComponent from './HeaderButtonComponent';
import HeaderJobCountComponent from './HeaderJobCountComponent';
import HeaderSearchComponent from './HeaderSearchComponent';

const GridHeader  = styled(Grid)(() => ({
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'right',
    margin: '0.5rem 0 0',
    gap: '1rem',
    '@media only screen and (max-width: 600px)': {
        gap: '0.2rem',
    },
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
                             <HeaderSearchComponent handleClick={()=>{}} />
                             <HeaderJobCountComponent count={5} handleClick={()=>{}} />
                             <HeaderButtonComponent message={message} handleClick={handleClick}> {  children } </HeaderButtonComponent>
                        </GridHeader>
        </Grid> 
    )
}

export default HeaderSectionComponent;