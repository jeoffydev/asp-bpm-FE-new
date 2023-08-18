import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

type IProps = {
    errors: any[],
    open: boolean
}

const FloatingErrorComponent = (props: IProps) => {
    const { errors, open } = props;
    return (
        <Snackbar open={open} autoHideDuration={2000}>
                <Alert severity="error" sx={{ width: '100%' }}>
                {
                    errors.map((e)=><li key={e}>{e}</li>)
                }
                </Alert>
        </Snackbar>
    )
}

export default FloatingErrorComponent;