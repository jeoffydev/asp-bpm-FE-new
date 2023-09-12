import React, { useState} from 'react'; 
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import { selectUserAuth } from '../../../store/selectors';
import { cookiesOrgAuth_bpm  } from '../../../auth/authHelper';
import SignOut from '../../../auth/SignOut';
import { selectOrganizationDetails } from './../../../store/selectors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { stringAvatar, themeColours } from '../../../utils/Helper';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { SideBarCloseComponent } from './SidebarCloseComponent';

const GridSidebar = styled('div')(() => ({
    backgroundColor: themeColours.lightGrey,
    padding: '1rem',
    borderTopRightRadius: '1.3rem',
    borderBottomRightRadius: '1.3rem',
    border: `1px solid ${themeColours.black}`,
    minHeight: '100vh',
    height: 'auto'
}));

interface IProps {
    handleClose: (num: number)=> void
}

function SidebarOrgComponent( props: IProps) {
    const { handleClose }= props;
    const navigate = useNavigate();
    const [logout, setLogout] = useState(false);
    const userDetails = useSelector(selectUserAuth);
    const orgDetails = useSelector(selectOrganizationDetails);

    SignOut({
      isSignOut: logout,
      cookiesAuth: cookiesOrgAuth_bpm,
      urlRedirect: '/login'
   }); 
     
  return (
   <GridSidebar>
        <Grid container spacing={1}>
            <Grid item  xs={10} md={10}>
                <Stack direction="row" spacing={2}>
                    <Avatar {...stringAvatar(userDetails?.fullName)} />
                </Stack>
            </Grid>
            <Grid item xs={2} md={2}>
                <SideBarCloseComponent size={12} handleClose={handleClose} />
            </Grid>
        </Grid>

        <Grid container spacing={1} marginTop={1}>
            <Grid item  xs={12} md={12}>
                Organization: {orgDetails?.companyName} <br />
                <span onClick={()=>setLogout(true)}>Logout</span><br />
            </Grid>
        </Grid>
     
       
   </GridSidebar>
  );
}

export default SidebarOrgComponent;
