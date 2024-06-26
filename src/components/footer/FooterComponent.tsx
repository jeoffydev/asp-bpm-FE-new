
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useIntl } from 'react-intl';
import * as msg from '../../utils/messages'; 

const GridFooter = styled(Grid)(() => ({
     
    textAlign: 'center',
    fontSize: '0.875rem'
    
}));

const FooterContainer = styled(Grid, {  shouldForwardProp: (prop) => prop !== "paddingTop",
})<{ paddingTop?: string }>(({ paddingTop })  => ({
     padding: paddingTop ? `${paddingTop} 0` : '0'
}));
interface IProps {
    paddingTop?: string 
}
function FooterComponent(props: IProps) {
    const intl = useIntl();
    const { paddingTop } = props;

  return (
    <FooterContainer>
        <GridFooter container spacing={2} paddingTop={paddingTop}>
            <Grid item xs={12}>
                {intl.formatMessage(msg.footerMessage.footer)}
            </Grid>
        </GridFooter>
    </FooterContainer>
  );
}

export default FooterComponent;
