
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactNode, FC } from 'react';
import { useTheme } from '@mui/material/styles';

type IProps = {
    children?: ReactNode,
    openModal: boolean,
    handleClose: ()=>void,
    heading: string
}

const DialogSimpleComponent: FC<IProps> = ({ openModal, handleClose, heading, children }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Dialog
            open={openModal}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullScreen={fullScreen}
        >
        <DialogTitle id="alert-dialog-title">
            {heading}
        </DialogTitle>
        <DialogContent>
         
                 { children }
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    )
}

export default DialogSimpleComponent;