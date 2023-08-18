
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

type IProps = {
    openDialog: boolean,
    handleClose?: () => void,
    handleDelete?: () => void,
    message?: string | number
}

const DeleteConfirmationComponent = (props: IProps) => {
    const { openDialog, handleClose, handleDelete, message } = props;

  return (
    <div>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
                Are you sure you want to delete <b>{message}</b>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus>
                Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteConfirmationComponent;