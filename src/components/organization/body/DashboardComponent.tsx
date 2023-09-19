
import HeaderSectionComponent from '../header/HeaderSectionComponent';
import AddIcon from '@mui/icons-material/Add';
import { useIntl } from 'react-intl';
import * as msg from '../../../utils/messages'; 
import BodyPortalComponent from './common/BodyPortalComponent';
import BannerComponent from '../../common/BannerComponent';
import { styled } from '@mui/material/styles'; 
import BoxThemeComponent from './common/BoxThemeComponent';
import { Grid, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { ownerEmailAddress, portalUrl, themeColours } from '../../../utils/Helper';
import { useNavigate } from "react-router-dom";

const GridCenter = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    '@media only screen and (max-width: 600px)': {
        '& .banner-titles': {
            fontSize: '0.95rem'
        }
    }
  }));

  const GridMiddleWrapper = styled(Grid)(() => ({
   margin: '1.8rem 0'
  }));

  
const GridCenterBoxes = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '1rem',
    '& .MuiBox-root':{
        flexGrow: '4',
        minHeight: '4rem'
    },
    '@media only screen and (max-width: 600px)': {
        flexDirection: 'column',
     },
  }));

  const TitleTypography = styled(Typography)(() => ({
    fontWeight: '700'
   }));

   const LinkEmail = styled(Link)(() => ({
     color: themeColours.blue,
     display: 'inline-block',
     marginLeft: '0.5rem'
   }));



const DashboardComponent = ()  => {
    const intl = useIntl();

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`${portalUrl}/add-property`);
    }
    
    return (
         <>
            <HeaderSectionComponent message={intl.formatMessage(msg.orgPortal.addProperty)} showButton={true} handleClick={handleClick}>
                <AddIcon />
            </HeaderSectionComponent>

            <BodyPortalComponent>
                <GridCenter>
                    
                            <BannerComponent firstWord='Create.' secondWord='Manage.' thirdWord='Operate' />
                            <GridMiddleWrapper  container spacing={0}>
                                <Grid item xs={12} md={3}>
                                    &nbsp;
                                </Grid>
                                <GridCenterBoxes item xs={12} md={6}>
                                    <BoxThemeComponent buttonText='View Projects' handleClick={()=>{}}>
                                        This is the box body
                                    </BoxThemeComponent>
                                    <BoxThemeComponent buttonText='Active Jobs' handleClick={()=>{}}>
                                        This is the box body
                                    </BoxThemeComponent>
                                </GridCenterBoxes>
                                <Grid item xs={12} md={3}>
                                    &nbsp;
                                </Grid>
                            </GridMiddleWrapper>  
                            <TitleTypography variant="h2" gutterBottom>
                                {intl.formatMessage(msg.orgPortalDashboard.needHelp)}
                            </TitleTypography>
                            <Typography variant="body1" gutterBottom>
                                {intl.formatMessage(msg.orgPortalDashboard.supportContact)} 
                                <LinkEmail
                                        to='#'
                                        onClick={(e) => {
                                            window.location.href = `mailto:${ownerEmailAddress}`;
                                            e.preventDefault();
                                        }}
                                    >
                                          {intl.formatMessage(msg.orgPortalDashboard.getInTouch)}
                                </LinkEmail>
                            </Typography>
                    
                    
                </GridCenter>
            </BodyPortalComponent>
            
         </>               
    )
}

export default DashboardComponent;