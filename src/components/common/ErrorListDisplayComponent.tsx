import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles'; 
import { themeColours } from '../../utils/Helper';


const StackWrapper = styled(Stack)({
    marginBottom: '0.5rem',
    '& .MuiPaper-root': {
        border: `1px solid ${themeColours.black}`,
        backgroundColor: themeColours.lightGrey,
        borderRadius: '1.2rem',
    }
    
 });

type Props = { 
    errors?: any[],
    customMessage? : string
}

const ErrorListDisplayComponent  = (props: Props) => {
    const { errors, customMessage} = props;

  return (
    <>
        {
            (errors && errors.length > 0) && (
                <StackWrapper sx={{ width: '100%' }} spacing={1}>
                        <Alert severity="error">
                            {
                                customMessage ? customMessage : 
                                (
                                    <ul>
                                        {
                                            errors.map((e)=><li key={e}>{e}</li>)
                                        }
                                    </ul>
                                )
                            }
                            
                        </Alert>
                </StackWrapper>
            ) 
        }
    </>
  );
}

export default ErrorListDisplayComponent;
