import React from 'react'; 
import BodyContainerComponent from '../global/BodyContainerComponent';


import LoadingComponent from '../global/LoadingComponent';
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { colours, createTableGridColumns  } from '../utils/Helper';
import { useParams, useNavigate } from "react-router-dom";
import { IOrgTypeView, useGetOrgByIdQuery } from '../services/owner/organizationSliceApi';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import OwnerUseTableAdvancedComponent from './common/OwnerUserTableAdvancedComponent';
import { GridColDef } from '@mui/x-data-grid';
import DialogSimpleComponent from '../global/DialogSimpleComponent';
import RegisterAdminFormComponent from './globalOwner/RegisterAdminFormComponent';
import { IAdminRegister, IAdminRegisterSubmit, IAdminTypeView, useDeleteAdminMutation, useGetAdminByOrgIdQuery, useRegisterAdminMutation } from '../services/owner/administratorSliceApi';
import useHookErrorFieldResponse from '../hooks/useHookErrorFieldResponse';
import FloatingErrorComponent from '../global/FloatingErrorComponent';
import { useDispatch } from 'react-redux';

const BackIcon = styled(KeyboardBackspaceIcon)(()=> ({
    color: colours.primaryBlue,
    marginRight: '1rem',
    cursor: 'pointer'
}));

const ButtonFab = styled(Fab)({ 
    backgroundColor: colours.primaryBlue,
    color: colours.white,
  });  

function OwnerCustomerDetailsComponent() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const [editId, setEditId] = useState(0);
    let { id } = useParams();
    const [openModal, setOpenModal] = useState(false);
    const [openError, setOpenError] = useState(false);

    const { data: orgData, isLoading: orgLoading, isError: orgError }= useGetOrgByIdQuery( editId );

    const { data: adminDatas, isLoading: adminLoading, isError: adminError }= useGetAdminByOrgIdQuery( editId );

    const dataCompany: IOrgTypeView = orgData?.data;
    const dataAdmins: IAdminTypeView[] = adminDatas?.data;

    const [registerAdmin, responseRegisterAdmin] = useRegisterAdminMutation();

    const [errors, ] = useHookErrorFieldResponse({ response:  responseRegisterAdmin });

    const [deleteAdmin, ] = useDeleteAdminMutation()


    console.log("dataAdmins[] ", dataAdmins)
    console.log("orgData ", dataCompany)
  

    useEffect(()=>{
        if( responseRegisterAdmin?.isSuccess) {
            setOpenModal(false);
        }

        if( responseRegisterAdmin?.isError ) {
          setOpenError(true);
        }
        if ( id ) {
            const orgId: number = parseInt(id as string);
            setEditId(orgId);
        }

    },[
        responseRegisterAdmin,
        id,
    ])

    const confirmDelete = (id: number) => {
        deleteAdmin({
            id
        });
      }

      const handleCloseError = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenError(false);
      };

      const handleClose = () => {
        setOpenModal(false);
      };

      const onSubmitHandle = (data: IAdminRegister) => {
    
        var activeBool = (data.active === "true");
        const dataFilter: IAdminRegisterSubmit = {
            fullName: data.fullName,
            mobile: data.mobile,
            phone: data.phone,
            roleId: Number(data.roleId),
            organizationId: Number(data.organizationId),
            active: activeBool,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword
        }
        registerAdmin(dataFilter);

    }

  return (
   <BodyContainerComponent>
        {
            (orgLoading || adminLoading) && <LoadingComponent isLoading={orgLoading || adminLoading} />
        }   

        {
            openError && (
                <>
                <FloatingErrorComponent open={
                    openError || !openModal
                    } 
                    errors={errors} 
                    handleCloseError={handleCloseError}
                />
                </>
            )
        }
     

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={{ xs: 6, md: 12 }}>
                <Grid item   xs={6}>
                    <Typography variant="h5" gutterBottom>
                        <BackIcon onClick={()=>navigate(-1)} />  { dataCompany?.companyName}
                    </Typography>
                </Grid>
                <Grid item   xs={6} textAlign={"right"}>
                    <ButtonFab onClick={()=>setOpenModal(true)} color='info'  aria-label="add" variant="extended">
                        <AddIcon /> Add Administrator User
                    </ButtonFab>
                </Grid>
            </Grid>
            <Grid container spacing={2} columns={{ xs: 6, md: 12 }}>
                <Grid item   xs={12}>
                    { dataAdmins && dataAdmins.length > 0 && 
                        <OwnerUseTableAdvancedComponent 
                            confirmDeleteId={confirmDelete}
                            users={dataAdmins} 
                            columns={createTableGridColumns(dataAdmins) as GridColDef[]} 
                            visibility={
                                {
                                    organizationId: false,
                                    organizationName: false,
                                    secretKey: false
                                }
                            }    
                        />

                    }

                    { adminDatas?.data?.length === 0 && !adminLoading && (
                        <Typography variant="body1" gutterBottom textAlign={'center'}>
                            No Records...
                        </Typography>
                        )
                    }
                
                </Grid>
            </Grid>
        </Box>
        
        <DialogSimpleComponent 
            heading= { 'Add Administrator' }
            handleClose={handleClose} 
            openModal={openModal}
        >
           <RegisterAdminFormComponent onSubmitHandle={onSubmitHandle} orgId={dataCompany?.id} />
       </DialogSimpleComponent>
    </BodyContainerComponent>
  );
}

export default OwnerCustomerDetailsComponent;
