
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useIntl } from 'react-intl';
import * as msg from '../../utils/messages'; 
import BannerComponent from '../common/BannerComponent';
import Button from '@mui/material/Button';
import WeekendIcon from '@mui/icons-material/Weekend';
import BoxComponent from '../common/BoxComponent';
import ThemePageComponent from '../ThemePageComponent';

const GridError = styled(Grid)(() => ({
    textAlign: 'center',
    fontSize: '0.875rem'
    
}));

const ErrorContainer = styled(Grid)(() => ({
     padding: '2rem 0'
    
}));

const ButtonHome = styled(Button)(() => ({
   marginLeft: '1rem'
}));


function ErrorPageComponent() {
    const intl = useIntl();
    const navigate = useNavigate();

  return (
    <>
    <ThemePageComponent>   
        <ErrorContainer>
            <GridError container spacing={2}>
                <Grid item xs={1} md={3}>
                    &nbsp;
                </Grid>
                <Grid item xs={10} md={6}>
                    <BoxComponent>

                        <BannerComponent firstWord='Ooops.' secondWord='Lost?' mobileTextWhite={false} >
                            {intl.formatMessage(msg.generalMessage.errorHome)} 
                            <ButtonHome variant="outlined" startIcon={<WeekendIcon />} onClick={()=>navigate('/')}>
                                Home
                            </ButtonHome>
                        </BannerComponent>

                    </BoxComponent>
                    
                </Grid>
                <Grid item xs={1} md={3}>
                    &nbsp;
                </Grid>
            </GridError>
        </ErrorContainer>
    </ThemePageComponent>
    </>
    
  );
}

export default ErrorPageComponent;
