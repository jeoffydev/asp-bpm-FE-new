import  { ReactNode, FC, useState  } from 'react';
import { styled } from '@mui/material/styles';
import { themeColours } from '../../utils/Helper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';

const FormWrapper = styled('div', {
    shouldForwardProp: (prop) => prop !== "marginTop",
  })<{ marginTop?: string }>(({ marginTop }) => ({
   display: 'flex',
   flexDirection: 'column',
   marginTop: marginTop ?? '',
   padding: '1rem 0 1rem',
}));
 

const SubTitle = styled('div')(() => ({
    fontWeight: '400',
    fontSize: '1.125rem',
    marginBottom:'0.5rem',
    '@media only screen and (max-width: 600px)': {
        color: themeColours.white,
        fontSize: '1rem',
    },
}));

const SubFormWrapper = styled('div')(() => ({
    borderRadius: '0.74rem',
    border: `1px solid ${themeColours.black}`,
    padding: '0.8rem',
    maxWidth: '20rem',
    '@media only screen and (max-width: 600px)': {
       backgroundColor: 'rgba(255, 255, 255, 0.5)',
       maxWidth: '18rem',
    },
}));

const TextFieldEmail = styled(TextField)(() => ({
    fontSize: '0.875rem',
    width: '16.5rem',
    '& div': {
        borderRadius: '0.6rem',
    },
    '& fieldset': {
        border: `1px solid ${themeColours.black}`,
    },
    '& input:-internal-autofill-selected': {
        backgroundColor: `${themeColours.white}`
    },
    '@media only screen and (max-width: 600px)': {
        width: '13rem',
    },
  
}));

const SendIconButton = styled(SendIcon)(() => ({
    position: 'relative',
    top: '4px',
    left: '0.5rem',
    fontSize: '3rem',
    color: themeColours.blue,
}));

type Props = { 
    children?: ReactNode ,
    marginTop?: string
}

const GetStartedFormComponent: FC<Props> = (props)  => {
    const { children,  marginTop } = props;
    const [inputValue, setInputValue] = useState('');

    const handleChange = () => {
        if(!inputValue) return;
        
        console.log("Send to email! ", inputValue);
    }
   
   
  return (
    <>
    <FormWrapper marginTop={marginTop}>
        {children && <SubTitle>{children}</SubTitle>}
        <SubFormWrapper>
            <Box
                component="form"
                noValidate
                autoComplete="off"
            >
                <TextFieldEmail  type='email' required={true}  onChange={(e)=>setInputValue(e.target.value)} id="outlined-basic" label="Email Address" variant="outlined" />
                <SendIconButton onClick={handleChange} />
            </Box>
        </SubFormWrapper>
    </FormWrapper>
    </>
  );
}

export default GetStartedFormComponent;
