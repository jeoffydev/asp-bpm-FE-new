import React from 'react';
import BodyContainerComponent from '../global/BodyContainerComponent';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {  CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { IOrgTypeView, useGetOrgListQuery } from '../services/owner/organizationSliceApi';
import { selectUserToken } from '../store/selectors';
import LoadingComponent from '../global/LoadingComponent';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import IconButton  from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from "react-router-dom";
import { ownerUrl } from '../utils/Helper';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import { colours  } from '../utils/Helper';

const ButtonFab = styled(Fab)({ 
    backgroundColor: colours.primaryBlue,
    color: colours.white,
  });  

const OwnerCustomerComponent = () => {

    const navigate = useNavigate();
    const getToken = useSelector(selectUserToken);   

    const checkToken = getToken ? true : false;
    const { data, isLoading, isError } =  useGetOrgListQuery( { checkToken }, { refetchOnMountOrArgChange: true });
    console.log("DATA ORGS ", data)


    return (
               <BodyContainerComponent>
                    {
                        isLoading && <LoadingComponent isLoading={isLoading} />
                    } 
                     <Grid container spacing={2} columns={{ xs: 6, md: 12 }}>
                        <Grid item   xs={6}>
                            <Typography variant="h5" gutterBottom>
                                Organizations
                            </Typography>
                        </Grid>
                        <Grid item   xs={6} textAlign={"right"}>
                            <ButtonFab onClick={()=>{}} color='info'  aria-label="add" variant="extended">
                                <AddIcon /> Add Organization
                            </ButtonFab>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} columns={{ xs: 6, md: 12 }}>

                            {
                                data?.success && data?.data.map((org: IOrgTypeView)=> {

                                    return (
                                        <Grid item key={org.id}   xs={3}>
                                            <Card  sx={{ maxWidth: 300 }}>
                                                <CardActionArea onClick={()=>navigate(`${ownerUrl}/customers/${org.id}`)}>
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h6" component="div">
                                                            {org.companyName}
                                                        </Typography>
                                                    
                                                        {org.businessDetails &&  <Typography variant="body2" color="text.secondary"> {org.businessDetails} </Typography>}
                                                        {org.contactPerson &&  <Typography variant="body2" color="text.secondary"> Contact: {org.contactPerson} </Typography>}
                                                        {org.contactEmail &&  <Typography variant="body2" color="text.secondary"> E: {org.contactEmail} </Typography>}
                                                        {org.mobileNumber &&  <Typography variant="body2" color="text.secondary"> M: {org.mobileNumber} </Typography>}
                                                        {org.phoneNumber &&  <Typography variant="body2" color="text.secondary"> P: {org.phoneNumber} </Typography>}
                                                        {org.website &&  <Typography variant="body2" color="text.secondary"> W: {org.website} </Typography>}
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <IconButton aria-label="Status">
                                                        {org.active ? <CheckCircleIcon color="success" /> : <IndeterminateCheckBoxIcon color="disabled" /> }
                                                    </IconButton>
                                                    
                                                    <IconButton aria-label="Edit">
                                                        <EditIcon color="primary" />
                                                    </IconButton>
                                                    <IconButton aria-label="Delete">
                                                        <DeleteForeverIcon color="error" />
                                                    </IconButton>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    )

                                })
                            }
                        
                    </Grid>
               </BodyContainerComponent>
    )
}

export default OwnerCustomerComponent;