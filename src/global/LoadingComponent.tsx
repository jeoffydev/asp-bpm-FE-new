
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

type IProps = {
    isLoading: boolean
}

const LoadingComponent = (props: IProps) => {
    const { isLoading } = props;
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    )
}

export default LoadingComponent;