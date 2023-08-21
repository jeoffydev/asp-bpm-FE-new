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
import { IOrgTypeView, useGetOrgByIdQuery } from '../services/owner/organizationSliceApi';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const BackIcon = styled(KeyboardBackspaceIcon)(()=> ({
    color: colours.primaryBlue,
    marginRight: '1rem',
    cursor: 'pointer'
}));

function OwnerCustomerDetailsComponent() {

    const navigate = useNavigate(); 
    const [editId, setEditId] = useState(0);
    let { id } = useParams();

    const { data, isLoading, isError }= useGetOrgByIdQuery( editId );
    const dataCompany: IOrgTypeView = data?.data;
    console.log("ORG ID ", data)

    useEffect(()=> {
        if ( id ) {
            const orgId: number = parseInt(id as string);
            setEditId(orgId);
        }
    },[
        id
    ])

  return (
   <BodyContainerComponent>
        {
            isLoading && <LoadingComponent isLoading={isLoading} />
        }   
        <Typography variant="h5" gutterBottom>
                    <BackIcon onClick={()=>navigate(-1)} />  { dataCompany?.companyName}
        </Typography>
    </BodyContainerComponent>
  );
}

export default OwnerCustomerDetailsComponent;
