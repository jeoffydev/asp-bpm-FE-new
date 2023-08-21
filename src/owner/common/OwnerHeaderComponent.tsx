import React, { useState} from 'react'; 
import { useNavigate } from "react-router-dom";
import {  useDispatch, useSelector } from 'react-redux'
import { addAuthenticationUserToken, emptyToken } from '../../services/user/userJwtTokenApi';
import { addAuthenticationUser, emptyUserAuthState } from '../../services/user/userSliceApi';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import LogoutIcon from '@mui/icons-material/Logout';
import { styled } from '@mui/material/styles'; 
import { colours, ownerUrl } from '../../utils/Helper';
import Collapse from '@mui/material/Collapse';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { selectUserAuth } from '../../store/selectors';
import { useCookies } from 'react-cookie';
import { cookiesAuth_bpm  } from '../../auth/authHelper';

const BoxWrapperMenu = styled(Box)({ 
    backgroundColor: colours.primaryOrange
  });

  const AppBarMenu = styled(AppBar)({ 
    backgroundColor: colours.primaryOrange,
    boxShadow: 'none'
  });  

  const ListItemButtonWrapper = styled(ListItemButton)({ 
        borderBottom: `1px solid ${colours.lightGrey}`,
  }); 
  
  const SpanName = styled('span')({ 
    fontSize: '0.8rem'
  }); 

function OwnerHeaderComponent() {
   
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector(selectUserAuth);
    const [, , removeCookie] = useCookies([cookiesAuth_bpm]);

    const [state, setState] = useState({
        left: false,
      });

 

    const signOutHandler = () => {
        dispatch(
          addAuthenticationUserToken(
              emptyToken
          )
        )
        dispatch(
          addAuthenticationUser(
            emptyUserAuthState
          )
        )
        sessionStorage.clear();
        removeCookie(cookiesAuth_bpm, { path: '/' });
        navigate('/owner');
      }
      type Anchor = 'left';

      const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setState({ ...state, [anchor]: open });
        };


  const handleClickMenu = (anchor: Anchor, url: string) => {
    setState({ ...state, [anchor]: false });
    navigate(url);
  }      
      
  const listMenu = (
        <>
        <Box
            sx={{ width:  250 }}
            role="presentation"
        >
            <List
                sx={{ width: '100%',  maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                >
                <ListItemButtonWrapper onClick={()=>handleClickMenu("left", `${ownerUrl}/owners`)}>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Providers" />
                </ListItemButtonWrapper>
                <ListItemButtonWrapper onClick={()=>handleClickMenu("left", `${ownerUrl}/customers`)}>
                    <ListItemIcon>
                        <BusinessIcon />
                    </ListItemIcon>
                    <ListItemText primary="Organizations" />
                </ListItemButtonWrapper>
                <Collapse in={true} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                          <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Users" />
                    </ListItemButton>
                  </List>
                </Collapse>
            </List>
        </Box>    
    </>
  );     

  return (
   <>
   <BoxWrapperMenu sx={{ flexGrow: 1 }}>
      <AppBarMenu position="static">
        <Toolbar>
        {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer(anchor, true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {listMenu}
                    </Drawer>
                </React.Fragment>
            ))}
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BMS
          </Typography>
            

          <SpanName>Welcome, {auth?.fullName}</SpanName>
          <Button color="inherit" onClick={() => signOutHandler()} ><LogoutIcon /></Button>
        </Toolbar>
      </AppBarMenu>
    </BoxWrapperMenu>
   </>
  );
}

export default OwnerHeaderComponent;
