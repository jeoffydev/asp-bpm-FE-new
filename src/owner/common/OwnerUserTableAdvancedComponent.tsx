

import * as React from 'react';
import Box from '@mui/material/Box';
import { IOwnerTypeView  } from '../../services/owner/ownerSliceApi';
import { DataGrid, GridRowsProp, GridColDef, GridToolbar, GridRowParams, GridColumnVisibilityModel } from '@mui/x-data-grid';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteConfirmationComponent from '../../global/DeleteConfirmationComponent';
import { useNavigate } from 'react-router-dom';
import { ownerUrl } from '../../utils/Helper';
import { IAdminTypeView } from '../../services/owner/administratorSliceApi';

const GridButtons = styled(Grid)({ 
   marginBottom: '1rem',
   '& button': {
    marginRight: '1rem'
   }
  });  

  const DivBox = styled('div')({
    width: '100%', 
    overflow: 'auto',
    '@media only screen and (max-width: 600px)': {
       maxWidth: '370px'
    },
  });

type IProps = {
    users: IOwnerTypeView[] | IAdminTypeView[],
    columns: GridColDef[],
    visibility?: GridColumnVisibilityModel,
    confirmDeleteId: (id: number) => void,
    editUrl?: string
}


export default function OwnerUseTableAdvancedComponent (props: IProps)  {
    const navigate = useNavigate();
    const { users, columns, visibility, confirmDeleteId, editUrl } = props;
    const rows: GridRowsProp = users;
    const [editButton, setEditButton] = React.useState(false);
    const [editId, setEditId] = React.useState<number | undefined>(undefined);
    const [openDialog, setOpenDialog] = React.useState(false);

 
  
  
 
  const handleClick = (id: number) => {
    setEditButton(true);
    setEditId(id);
  }

  const confirmDelete = () => {
    if(editId ) {
        confirmDeleteId(editId);
    }
    setOpenDialog(false);
  }

  const editTools = () => {
    const url = editUrl ? editUrl : 'owner';
    return (
        <>
            <Button color='primary' variant="contained" onClick={()=>navigate(`${ownerUrl}/${url}/${editId as number}`)} startIcon={<EditIcon />}>
                Edit
            </Button>
            <Button color='error' variant="contained" onClick={()=>setOpenDialog(true)} startIcon={<DeleteIcon />}>
                Delete
            </Button>
        </>
    )
  }

  return (
    <DivBox>
        <Box sx={{ height: 350, width: 1 }}>
            
                    {(editId && editButton) && (
                        <>
                            <GridButtons container spacing={2} columns={{ xs: 6, md: 12 }}>
                                <Grid item   xs={12} >
                                    {editTools()}
                                </Grid>
                            </GridButtons>
                            <DeleteConfirmationComponent handleDelete={confirmDelete} handleClose={()=>setOpenDialog(false)} openDialog={openDialog} message={editId} />
                        </>
                    )}
            
            <DataGrid
                columns={columns}
                rows={rows}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: { debounceMs: 500 },
                    },
                }}
                pagination
                initialState={{
                        pagination: {
                            paginationModel: {
                            pageSize: 25,
                            },
                        },
                        columns: {
                            columnVisibilityModel: visibility ? visibility : {}
                          },
                }}
                pageSizeOptions={[5, 10, 25]}
                isRowSelectable={(params: GridRowParams) => params.row?.email !== 'jeoffy_hipolito@yahoo.com'}
                onRowSelectionModelChange={(newRowSelectionModel) => {
                    
                    handleClick(newRowSelectionModel[0] as number)
                }}
               
            />
        </Box>
    </DivBox>
  );
}