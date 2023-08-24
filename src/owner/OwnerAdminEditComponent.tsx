
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
import { useParams, useNavigate } from "react-router-dom";

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { IAdminEditSubmit, IAdminRegister,  useGetAdminIdQuery, useUpdateAdminMutation } from '../services/owner/administratorSliceApi';
import EditAdminFormComponent from './globalOwner/EditAdminFormComponent';

const BackIcon = styled(KeyboardBackspaceIcon)(()=> ({
    color: colours.primaryBlue,
    marginRight: '1rem',
    cursor: 'pointer'
}));

function OwnerAdminEditComponent() {
    const navigate = useNavigate(); 
    const [editId, setEditId] = useState(0);
    let { id } = useParams();
    const [openError, setOpenError] = useState(false);

    useEffect(()=> {
        if ( id ) {
            const adminId: number = parseInt(id as string);
            setEditId(adminId);
        }
    },[
        id
    ])


    const { data: dataAdminIdDetails, isLoading: adminIdLoading, }= useGetAdminIdQuery( editId );

    const [updateAdmin, responseUpdateAdmin] = useUpdateAdminMutation();
    const [errors, ] = useHookErrorFieldResponse({ response:  responseUpdateAdmin });
 
    useEffect(()=> {
        if(responseUpdateAdmin?.isSuccess) {
            navigate(`${ownerUrl}/customers/${responseUpdateAdmin?.originalArgs?.organizationId}`)
        }
        if( responseUpdateAdmin?.isError ) {
            setOpenError(true);
          }
    },[
        responseUpdateAdmin,
        navigate,
        editId
    ]);

    


    const onSubmitEdit = (data:  IAdminRegister) => {

        var activeBool = (data.active === "true");
        const dataFilter: IAdminEditSubmit = {
            id: editId,
            fullName: data.fullName,
            mobile: data.mobile,
            phone: data.phone,
            roleId: Number(data.roleId),
            organizationId: Number(data.organizationId),
            active: activeBool,
            password: data.password,
            confirmPassword: data.confirmPassword
        }
        updateAdmin(dataFilter);
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
        adminIdLoading && <LoadingComponent isLoading={adminIdLoading} />
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
                    <BackIcon onClick={()=>navigate(-1)} />  Edit {dataAdminIdDetails?.data?.fullName}
                </Typography>
            </Grid>
            <Grid item   xs={3}></Grid>
        </Grid>
      <Grid container spacing={2} columns={{ xs: 6, md: 12 }}>
        <Grid item   xs={3}></Grid>
        <Grid item   xs={6}>
            <EditAdminFormComponent editDetails={dataAdminIdDetails?.data} onSubmitEdit={onSubmitEdit} />
        </Grid>
        <Grid item   xs={3}></Grid>
      </Grid>
    </Box>

   </BodyContainerComponent>
  );
}

export default OwnerAdminEditComponent;
