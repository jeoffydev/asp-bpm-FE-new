import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { themeColours } from './Helper';


export const TextFieldTheme = styled(TextField)(() => ({
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '0.7rem',
    '& > div': {
        width: '100%'
    },
    '& fieldset': {
        borderColor: `${themeColours.black}`
    }
}));