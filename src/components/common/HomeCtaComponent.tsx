
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import { themeColours } from '../../utils/Helper';
import MasksIcon from '@mui/icons-material/Masks';
import { useIntl } from 'react-intl';
import * as msg from '../../utils/messages'; 

const IconOneWrapper = styled(AutoAwesomeMotionIcon)(() => ({
    color: themeColours.yellow,
    fontSize: '4.375rem',
    '@media only screen and (max-width: 600px)': {
        fontSize: '2.8rem',
    },
}));

const IconTwoWrapper = styled(MasksIcon)(() => ({
    color: themeColours.yellow,
    fontSize: '4.375rem',
    position: 'relative',
    top: '-0.3rem',
    '@media only screen and (max-width: 600px)': {
        fontSize: '2.8rem',
    },
}));

const TextWrap = styled('span')(() => ({
    paddingTop: '0.7rem',
    display: 'block',
    '@media only screen and (max-width: 600px)': {
        padding: '0.7rem',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '0.74rem',
    },
}));


 
type Props = { 
    marginTop?: string
}


const HomeCtaComponent = (props: Props)  => {
    const { marginTop } = props;
    const intl = useIntl();
  return (
    <Grid container spacing={1} marginTop={marginTop}>
            <Grid item  xs={2} md={2}>
                <IconOneWrapper />
            </Grid>
            <Grid item xs={9} md={8}>
                <TextWrap>
                    {intl.formatMessage(msg.ctaMessage.ctaIconOne)}
                </TextWrap>
            </Grid>
            <Grid item  xs={1} md={2}>
                &nbsp;
            </Grid>
            <Grid item  xs={2} md={2}>
                <IconTwoWrapper />
            </Grid>
            <Grid item xs={9} md={8}>
                <TextWrap>
                    {intl.formatMessage(msg.ctaMessage.ctaIconTwo)}
                </TextWrap>
            </Grid>
            <Grid item  xs={1} md={2}>
                &nbsp;
            </Grid>
        </Grid>
  );
}

export default HomeCtaComponent;
