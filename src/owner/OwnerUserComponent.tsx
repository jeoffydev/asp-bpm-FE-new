
import {  IOwnerRegister, IOwnerRegisterSubmit, useGetAdminUserListQuery, useGetOwnerUserListQuery, useRegisterOwnerMutation } from '../services/owner/ownerSliceApi';
import { useSelector } from 'react-redux';
import { selectUserToken } from '../store/selectors';
import LoadingComponent from '../global/LoadingComponent';
import BodyContainerComponent from '../global/BodyContainerComponent';
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import OwnerUseTableAdvancedComponent from './common/OwnerUserTableAdvancedComponent';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import { colours, createTableGridColumns } from '../utils/Helper';
import RegisterUserFormComponent from '../global/RegisterUserFormComponent';
import FloatingErrorComponent from '../global/FloatingErrorComponent';
import DialogSimpleComponent from '../global/DialogSimpleComponent';
import { GridColDef } from '@mui/x-data-grid';
import useHookErrorFieldResponse from '../hooks/useHookErrorFieldResponse';

const ButtonFab = styled(Fab)({ 
  backgroundColor: colours.primaryBlue,
  color: colours.white,
});  

function OwnerUserComponent() {

const getToken = useSelector(selectUserToken);   
const [openModal, setOpenModal] = useState(false);
const [isEdit, setIsEdit] = useState(false);

const [registerOwner, responseRegisterOwner] = useRegisterOwnerMutation();
const [errors, ] = useHookErrorFieldResponse({ response:  responseRegisterOwner});


const checkToken = getToken ? true : false;
const { data: dataOwners, isLoading: ownerLoading, isError: ownerError } =  useGetOwnerUserListQuery( { checkToken }, { refetchOnMountOrArgChange: true });
const { data: dataAdmins, isLoading: adminLoading, isError: adminError } =  useGetAdminUserListQuery( { checkToken }, { refetchOnMountOrArgChange: true });

const loading: boolean = ownerLoading || adminLoading;

    useEffect(()=>{
        if( responseRegisterOwner.isSuccess ) {
            setOpenModal(false);
        }

    },[
        responseRegisterOwner
    ])

  const handleClose = () => {
    setOpenModal(false);
  };

  const onSubmitHandle = (data: IOwnerRegister) => {
    var activeBool = (data.active === "true");
    const dataFilter: IOwnerRegisterSubmit = {
        fullName: data.fullName,
        roleId: Number(data.roleId),
        active: activeBool,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword
    }
    registerOwner(dataFilter);
  }

  const editHandle = (id: number) => {
    console.log("EDIT HANDLE ", id)
  }


return (
   <BodyContainerComponent>

    {
        loading && <LoadingComponent isLoading={loading} />
     }   
     {
        (responseRegisterOwner?.isError && !responseRegisterOwner?.isSuccess) && (
            <>
            <FloatingErrorComponent open={responseRegisterOwner.isError || !openModal} errors={errors} />
            </>
        )
     }
     
     <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={{ xs: 6, md: 12 }}>
            <Grid item   xs={6}>
                <Typography variant="h5" gutterBottom>
                    Providers
                </Typography>
            </Grid>
            <Grid item   xs={6} textAlign={"right"}>
                <ButtonFab onClick={()=>setOpenModal(true)} color='info'  aria-label="add" variant="extended">
                    <AddIcon /> Add Owner
                </ButtonFab>
            </Grid>
        </Grid>
      <Grid container spacing={2} columns={{ xs: 6, md: 12 }}>
        <Grid item   xs={12}>
            { dataOwners?.data && <OwnerUseTableAdvancedComponent editHandle={editHandle} users={dataOwners?.data} columns={createTableGridColumns(dataOwners?.data) as GridColDef[]} /> }
          
        </Grid>
      </Grid>
    </Box>

       <DialogSimpleComponent 
            heading='Add Owner' 
            handleClose={handleClose} 
            openModal={openModal}
        >
            <RegisterUserFormComponent isEdit={isEdit} onSubmitHandle={onSubmitHandle} />
       </DialogSimpleComponent>
   </BodyContainerComponent>
  );
}

export default OwnerUserComponent;
