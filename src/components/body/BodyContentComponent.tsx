import React from 'react'; 
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import BannerComponent from '../common/BannerComponent';
import { styled } from '@mui/material/styles';
import GetStartedFormComponent from '../common/GetStartedFormComponent';
import HomeCtaComponent from '../common/HomeCtaComponent';
import ProductBannerComponent from '../common/ProductBannerComponent';
import { useIntl } from 'react-intl';
import * as msg from '../../utils/messages'; 

const GridContent = styled(Grid)(() => ({
    position: 'relative'
 }));

 const ContainerWrapper = styled(Container)(() => ({
    paddingBottom: '3rem'
 }));
 

function BodyContentComponent() {
    const intl = useIntl();
  return (
    <ContainerWrapper>
        <Grid container spacing={2}>
            <GridContent item  xs={12} md={7}>
                <BannerComponent 
                    firstWord={intl.formatMessage(msg.ctaMessage.build)} 
                    secondWord={intl.formatMessage(msg.ctaMessage.assign)} 
                    thirdWord={intl.formatMessage(msg.ctaMessage.track)}
                    marginTop={'3rem'}
                    >
                    {intl.formatMessage(msg.ctaMessage.subtitle)}
                </BannerComponent>
                <GetStartedFormComponent marginTop={'2rem'}>
                    {intl.formatMessage(msg.ctaMessage.ctaGetStarted)}
                </GetStartedFormComponent>

                <HomeCtaComponent marginTop={'2rem'} />

            </GridContent>
            <GridContent item xs={12} md={5}>
                <ProductBannerComponent marginTop='2.5rem' />
            </GridContent>
        </Grid>
    </ContainerWrapper>
  );
}

export default BodyContentComponent;
