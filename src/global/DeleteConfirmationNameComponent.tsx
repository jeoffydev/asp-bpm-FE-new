
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { colours } from '../utils/Helper';

const DeleteSpan = styled('span')({ 
        display: 'block',
        '& b': {
            color: colours.danger
        }
  });  


interface IMsg {
    id: number,
    name: string
}

type IProps = {
    openDialog: boolean,
    handleClose: () => void,
    handleDelete: (id: number) => void,
    message: IMsg
}

const DeleteConfirmationNameComponent = (props: IProps) => {
    const { openDialog, handleClose, handleDelete, message } = props;
    const [name, setName] = useState('');

    const handleDeleteId = (id: number) => {
            handleDelete(id);
    }

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
                <DeleteSpan>
                    Are you sure you want to delete <b>{message.name}</b>? <br />
                    Please type the company name to confirm:
                </DeleteSpan>
                <input type={'text'} onChange={(e)=>setName(e.target.value)} name='name' />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {
            name === message.name && (
                <Button onClick={()=>handleDeleteId(message.id)} autoFocus>
                    Delete
                </Button>
            )
          }
          
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteConfirmationNameComponent;