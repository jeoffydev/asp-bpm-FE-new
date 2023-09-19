import  { ReactNode, FC } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import HeaderButtonComponent from './HeaderButtonComponent';
import HeaderJobCountComponent from './HeaderJobCountComponent';
import HeaderSearchComponent from './HeaderSearchComponent';
import HeaderHomeButtonComponent from './HeaderHomeButtonComponent';
import { useNavigate } from "react-router-dom";
import { portalUrl } from '../../../utils/Helper';

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
    handleClick: ()=>void;
    showButton?: boolean;
    homeButton?: boolean;
}

const HeaderSectionComponent: FC<Props> = (props)  => {
    const { children, message, handleClick, showButton, homeButton } = props;
    const navigate = useNavigate();

    const handleClickHome = () => navigate(`${portalUrl}`);
    return (
        <Grid container spacing={1}>
                        <GridHeader item xs={12} md={12}>
                             <HeaderSearchComponent handleClick={()=>{}} />
                             <HeaderJobCountComponent count={5} handleClick={()=>{}} />
                             { homeButton && <HeaderHomeButtonComponent handleClick={handleClickHome} />}
                             { showButton && <HeaderButtonComponent message={message} handleClick={handleClick}> {  children } </HeaderButtonComponent>}

                        </GridHeader>
        </Grid> 
    )
}

export default HeaderSectionComponent;