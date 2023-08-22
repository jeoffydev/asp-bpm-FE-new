import React from 'react'; 
import BodyContainerComponent from '../global/BodyContainerComponent';


import LoadingComponent from '../global/LoadingComponent';
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
import { IOrgRegister, IOrgRegisterSubmit, IOrgTypeView, useGetOrgByIdQuery, useUpdateOrgMutation } from '../services/owner/organizationSliceApi';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EditOrgFormComponent from './globalOwner/EditOrgFormComponent';

const BackIcon = styled(KeyboardBackspaceIcon)(()=> ({
    color: colours.primaryBlue,
    marginRight: '1rem',
    cursor: 'pointer'
}));

function OwnerCustomerEditComponent() {

    const navigate = useNavigate(); 
    const [editId, setEditId] = useState(0);
    let { id } = useParams();
    const [openError, setOpenError] = useState(false);

    const { data, isLoading, isError }= useGetOrgByIdQuery( editId );
    const dataCompany: IOrgTypeView = data?.data;


    const [updateOrg, responseUpdateOrg] = useUpdateOrgMutation();
    const [errors, ] = useHookErrorFieldResponse({ response:  responseUpdateOrg });

    useEffect(()=> {
        if ( id ) {
            const orgId: number = parseInt(id as string);
            setEditId(orgId);
        }
    },[
        id
    ])

    useEffect(()=> {
        if(responseUpdateOrg?.isSuccess) {
            navigate(`${ownerUrl}/customers`)
        }
        if( responseUpdateOrg?.isError ) {
            setOpenError(true);
          }
    },[
        responseUpdateOrg,
        navigate
    ]);

    const handleCloseError = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenError(false);
      };

      const onSubmitEdit = (data: IOrgRegister) => {
        var activeBool = (data.active === "true");
        const dataFilter: IOrgTypeView = {
            id: editId,
            companyName: data.companyName,
            businessDetails: data.businessDetails,
            address: data.address,
            contactEmail: data.contactEmail,
            contactPerson: data.contactPerson,
            mobileNumber: data.mobileNumber,
            phoneNumber: data.phoneNumber,
            website: data.website,
            active: activeBool
        }
        updateOrg(dataFilter);
    }

  return (
   <BodyContainerComponent>
        {
            isLoading && <LoadingComponent isLoading={isLoading} />
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
        <Typography variant="h5" gutterBottom>
                    <BackIcon onClick={()=>navigate(-1)} />  Edit { dataCompany?.companyName}
        </Typography>
        <Grid container spacing={2} columns={{ xs: 6, md: 12 }}>
            <Grid item   xs={3}></Grid>
            <Grid item   xs={6}>
                <EditOrgFormComponent editDetails={dataCompany} onSubmitEdit={onSubmitEdit} />
            </Grid>
            <Grid item   xs={3}></Grid>
        </Grid>
    </BodyContainerComponent>
  );
}

export default OwnerCustomerEditComponent;
