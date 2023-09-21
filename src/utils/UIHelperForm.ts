import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { themeColours } from './Helper';


export const TextFieldTheme = styled(TextField)(() => ({
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '0.7rem',
    color: themeColours.black,
    '& > div': {
        width: '100%'
    },
    '& input': {
        background: themeColours.white
    },
    '& fieldset': {
        borderColor: `${themeColours.black}`
    }
}));