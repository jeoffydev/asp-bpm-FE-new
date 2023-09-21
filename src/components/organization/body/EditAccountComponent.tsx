import  { useState } from 'react';
import HeaderSectionComponent from '../header/HeaderSectionComponent';
import AddIcon from '@mui/icons-material/Add';
import { useIntl } from 'react-intl';
import * as msg from '../../../utils/messages'; 
import BodyPortalComponent from './common/BodyPortalComponent';
import { useNavigate } from "react-router-dom";
import { portalUrl, themeColours } from '../../../utils/Helper';
import { Grid  } from '@mui/material';
import { styled } from '@mui/material/styles'; 
import { useSelector } from 'react-redux'
import { selectUserAuth } from '../../../store/selectors';
import FaceIcon from '@mui/icons-material/Face';
import EmailIcon from '@mui/icons-material/Email';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ButtonComponent from './common/ButtonComponent';
import EditIcon from '@mui/icons-material/Edit';
import LockIcon from '@mui/icons-material/Lock';
import EditFullnameComponent from './common/edit-account/EditFullnameComponent';
import EditPasswordComponent from './common/edit-account/EditPasswordComponent';

const ListUl = styled('ul')(() => ({
    margin: '0',
    padding: '0',
    marginBottom: '1rem'
}));
const List = styled('li')(() => ({
    display: 'flex',
    flexDirection: 'row',
    padding: '0.5rem 0.5rem 0.5rem 0',
    fontSize: '0.95rem',
    '& svg': {
        color: themeColours.yellow,
        marginRight: '1rem',
    }
}));

export const SpaceDivider = styled('div')(() => ({
    display: 'block',
    width: '100%',
    marginBottom: '1rem'
}));

const EditAccountComponent = ()  => {
    const intl = useIntl();
    const navigate = useNavigate();
    const userDetails = useSelector(selectUserAuth);
    const [editDetails, setEditDetails]=useState(true);

    const handleClick = () => {
        navigate(`${portalUrl}/add-property`);
    }
    

    const handleEdit = () => {
        setEditDetails(n => !n);
    }
    return (
         <>
            <HeaderSectionComponent message={intl.formatMessage(msg.orgPortal.addProperty)} showButton={true} handleClick={handleClick}>
                <AddIcon />
            </HeaderSectionComponent>

            <BodyPortalComponent pageTitle={intl.formatMessage(msg.orgPortal.editAccount)}>
                    <Grid  container spacing={0}>
                                <Grid item xs={12} md={6}>
                                    <ListUl>
                                        <List>
                                            <FaceIcon /> { userDetails?.fullName}
                                        </List>
                                        <List>
                                            <EmailIcon /> { userDetails?.email}
                                        </List>
                                        <List>
                                            <AdminPanelSettingsIcon /> { userDetails?.roleName}
                                        </List>
                                    </ListUl>
                                    <ButtonComponent handleClick={handleEdit} disabled={editDetails}>
                                        <EditIcon /> {intl.formatMessage(msg.orgPortal.editDetails)}
                                    </ButtonComponent>
                                    <ButtonComponent handleClick={handleEdit} disabled={!editDetails}>
                                        <LockIcon /> {intl.formatMessage(msg.orgPortal.editPassword)}
                                    </ButtonComponent>
                                    <SpaceDivider />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    {
                                        editDetails && (
                                            <>
                                              <EditFullnameComponent />
                                            </>    
                                        )
                                    }
                                    {
                                        !editDetails && (
                                            <>
                                              <EditPasswordComponent />
                                            </>    
                                        )
                                    }
                                </Grid>
                    </Grid>  
            </BodyPortalComponent>
            
         </>               
    )
}

export default EditAccountComponent;