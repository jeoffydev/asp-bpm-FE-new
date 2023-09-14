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
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { SideBarCloseComponent } from './SidebarCloseComponent';
import Popover from '@mui/material/Popover';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import { useIntl } from 'react-intl';
import * as msg from '../../../utils/messages'; 

const GridSidebar = styled('div')(() => ({
    backgroundColor: themeColours.lightGrey,
    padding: '1rem',
    borderTopRightRadius: '1.3rem',
    borderBottomRightRadius: '1.3rem',
    border: `1px solid ${themeColours.black}`,
    minHeight: '100vh',
    height: 'auto'
}));

const AvatarButton = styled('span')(() => ({
    cursor: 'pointer'
}));

const PopoverBox = styled(Popover)(() => ({
    '& .MuiPopover-paper': {
        padding: '1.2rem',
        borderRadius: '1.3rem', 
        border: `1px solid ${themeColours.black}`,
        fontSize: '1.3rem'
    },
    '& button': {
        width: '100%'
    }  
}));

interface IProps {
    handleClose: (num: number)=> void
}

function SidebarOrgComponent( props: IProps) {
    const { handleClose }= props;
    const intl = useIntl();
    const navigate = useNavigate();
    const [logout, setLogout] = useState(false);
    const userDetails = useSelector(selectUserAuth);
    const orgDetails = useSelector(selectOrganizationDetails);

     const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);


    SignOut({
      isSignOut: logout,
      cookiesAuth: cookiesOrgAuth_bpm,
      urlRedirect: '/login'
   }); 

   const handleOpenAccount  = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

   const handleCloseDialog = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
     
  return (
   <GridSidebar>
        <Grid container spacing={1}>
            <Grid item  xs={10} md={10}>
                <Stack direction="row" spacing={2} >
                    <AvatarButton onClick={handleOpenAccount} data-testid="avatar-account" >
                        <Avatar {...stringAvatar(userDetails?.fullName)} />
                    </AvatarButton>
                </Stack>
                <PopoverBox
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleCloseDialog}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                >
                    <Button color="inherit" onClick={() => navigate('/edit-account')} >  {intl.formatMessage(msg.loginMessage.editAccount)}</Button>
                     <Button color="inherit" onClick={() => setLogout(true)} ><LogoutIcon /> {intl.formatMessage(msg.loginMessage.logout)}</Button>
                </PopoverBox>
            </Grid>
            <Grid item xs={2} md={2}>
                <SideBarCloseComponent size={12} handleClose={handleClose} />
            </Grid>
        </Grid>

        <Grid container spacing={1} marginTop={1}>
            <Grid item  xs={12} md={12}>
               
            </Grid>
        </Grid>
     
       
   </GridSidebar>
  );
}

export default SidebarOrgComponent;
