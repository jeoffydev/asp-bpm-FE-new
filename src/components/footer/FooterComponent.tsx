
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useIntl } from 'react-intl';
import * as msg from '../../utils/messages'; 

const GridFooter = styled(Grid)(() => ({
     
    textAlign: 'center',
    fontSize: '0.875rem'
    
}));

const FooterContainer = styled(Grid)(() => ({
     padding: '2rem 0'
    
}));
function FooterComponent() {
    const intl = useIntl();

  return (
    <FooterContainer>
        <GridFooter container spacing={2}>
            <Grid item xs={12}>
                {intl.formatMessage(msg.footerMessage.footer)}
            </Grid>
        </GridFooter>
    </FooterContainer>
  );
}

export default FooterComponent;
