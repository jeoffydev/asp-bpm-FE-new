import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

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
                <Stack sx={{ width: '100%' }} spacing={2}>
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
                </Stack>
            ) 
        }
    </>
  );
}

export default ErrorListDisplayComponent;
