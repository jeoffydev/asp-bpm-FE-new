
import {  IOwnerEditSubmit, IOwnerRegister, useGetOwnerIdQuery, useUpdateOwnerMutation } from '../services/owner/ownerSliceApi';

import LoadingComponent from '../global/LoadingComponent';
import BodyContainerComponent from '../global/BodyContainerComponent';
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { colours, ownerUrl } from '../utils/Helper';
import FloatingErrorComponent from '../global/FloatingErrorComponent';
import useHookErrorFieldResponse from '../hooks/useHookErrorFieldResponse';
import EditUserFormComponent from '../global/EditUserFormComponent';
import { useParams, useNavigate } from "react-router-dom";

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const BackIcon = styled(KeyboardBackspaceIcon)(()=> ({
    color: colours.primaryBlue,
    marginRight: '1rem',
    cursor: 'pointer'
}));

function OwnerEditComponent() {
    const navigate = useNavigate(); 
    const [editId, setEditId] = useState(0);
    let { id } = useParams();
    const [openError, setOpenError] = useState(false);

    useEffect(()=> {
        if ( id ) {
            const ownerId: number = parseInt(id as string);
            setEditId(ownerId);
        }
    },[
        id
    ])


    const { data: dataOwnerIdDetails, isLoading: ownerIdLoading, isError: ownerIdError }= useGetOwnerIdQuery( editId );

    const [updateOwner, responseUpdateOwner] = useUpdateOwnerMutation();
    const [errors, ] = useHookErrorFieldResponse({ response:  responseUpdateOwner });
   
    useEffect(()=> {
        if(responseUpdateOwner?.isSuccess) {
            navigate(`${ownerUrl}/owners`)
        }
        if( responseUpdateOwner?.isError ) {
            setOpenError(true);
          }
    },[
        responseUpdateOwner,
        navigate
    ]);

    


    const onSubmitEdit = (data: IOwnerRegister) => {

        var activeBool = (data.active === "true");
        const dataFilter: IOwnerEditSubmit = {
            id: editId,
            fullName: data.fullName,
            roleId: Number(data.roleId),
            active: activeBool,
            password: data.password,
            confirmPassword: data.confirmPassword
        }
        updateOwner(dataFilter);
  }

  const handleCloseError = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenError(false);
  };



return (
   <BodyContainerComponent>

    {
        ownerIdLoading && <LoadingComponent isLoading={ownerIdLoading} />
     }   
     {
        openError && (
            <>
              <FloatingErrorComponent open={
                  openError
                } 
                errors={errors} 
                handleCloseError={handleCloseError}
              />
            </>
        )
     }
     
     <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={{ xs: 6, md: 12 }}>
            <Grid item   xs={3}></Grid>
            <Grid item   xs={6}>
                <Typography variant="h5" gutterBottom>
                    <BackIcon onClick={()=>navigate(-1)} />  Edit {dataOwnerIdDetails?.data?.fullName}
                </Typography>
            </Grid>
            <Grid item   xs={3}></Grid>
        </Grid>
      <Grid container spacing={2} columns={{ xs: 6, md: 12 }}>
        <Grid item   xs={3}></Grid>
        <Grid item   xs={6}>
            <EditUserFormComponent editDetails={dataOwnerIdDetails?.data} onSubmitEdit={onSubmitEdit} />
        </Grid>
        <Grid item   xs={3}></Grid>
      </Grid>
    </Box>

   </BodyContainerComponent>
  );
}

export default OwnerEditComponent;
