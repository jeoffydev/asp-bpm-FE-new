import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

type IProps = {
    errors: any[],
    open: boolean,
    handleCloseError?: ()=> void
}

const FloatingErrorComponent = (props: IProps) => {
    const { errors, open, handleCloseError } = props;
    return (
        <Snackbar open={open} autoHideDuration={2000} onClose={handleCloseError}>
                <Alert severity="error" onClose={handleCloseError} sx={{ width: '100%' }}>
                {
                    errors.map((e)=><li key={e}>{e}</li>)
                }
                </Alert>
        </Snackbar>
    )
}

export default FloatingErrorComponent;