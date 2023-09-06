
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import { themeColours } from '../../utils/Helper';
import { useNavigate } from "react-router-dom";
import { useIntl } from 'react-intl';
import * as msg from '../../utils/navigation'; 

const GridHeader = styled(Grid)(() => ({
    padding: '0.75rem 0 0.75rem',
    position: 'relative',
    '& .leftSection button, .rightSection button': {
        padding: '0.75rem 1.5rem 0.75rem',
        verticalAlign: 'middle',
        textDecoration: 'none',
        fontWeight: 'bold',
        color: themeColours.black
    },
    '&  .rightSection': {
        textAlign: 'right',
        '& button': {
            color: themeColours.white,
        },
        '& .theme-button': {
            paddingLeft: '2rem',
            paddingRight: '2rem',
            borderRadius: '5px'
        },
       
    },
    '@media only screen and (max-width: 600px)': {
           '.leftSection button, .mobile-hide': {
                display: 'none'
           }
    },
    
}));

const Logo = styled('div')(() => ({
    border: '1px solid red',
    display: 'block',
    width: '46px',
    height: '46px',
    backgroundColor: '#e5e5e5',
    borderRadius: '49%',
}));

function HeaderComponent() {
    const navigate = useNavigate();
    const intl = useIntl();

  return (
    <Container>
        <GridHeader container spacing={2} columnSpacing={{ xs: 1, sm: 4, md: 3 }}>
            <Grid item xs={1}>
                <Link 
                     component="button"
                     variant="body2"
                     onClick={()=>navigate('/')}
                     data-cy="logo-link"
                ><Logo></Logo></Link>
            </Grid>
            <Grid item xs={5} className='leftSection'>
                <Link
                    component="button"
                    variant="body2"
                    onClick={()=>navigate('/product')}
                    >
                    {intl.formatMessage(msg.navigationMessage.product)}
                </Link>
                <Link
                    component="button"
                    variant="body2"
                    onClick={()=>navigate('/solution')}
                    
                    >
                    Solution
                </Link>
            </Grid>
            <Grid item xs={6} className='rightSection'>
                <Link
                    component="button"
                    variant="body2"
                    onClick={()=>navigate('/get-started')}
                    className='mobile-hide'
                    >
                    Get Started
                </Link>
                <Link
                    component="button"
                    variant="body2"
                    onClick={()=>navigate('/login')}
                    className='theme-button'
                    data-cy="login-link"
                    >
                    Login
                </Link>
            </Grid>
        </GridHeader>
    </Container>
  );
}

export default HeaderComponent;
