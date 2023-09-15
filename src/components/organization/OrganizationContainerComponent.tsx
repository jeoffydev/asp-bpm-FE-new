import  { ReactNode, FC, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import SidebarOrgComponent from "./sidebar/SidebarOrgComponent";
import { SideBarCloseComponent } from './sidebar/SidebarCloseComponent';
import { themeColours } from '../../utils/Helper';
import Button from '@mui/material/Button';
import FooterComponent from '../footer/FooterComponent';

const GridSidebar = styled(Grid)(() => ({
    
}));

const GridBody = styled(Grid)(() => ({
    minHeight: '100vh',
    height: 'auto',
    backgroundColor: themeColours.white
}));

const BodyWrapper  = styled('div')(() => ({
    padding: '0.5rem',
    position: 'relative'
}));

export const HeaderButton = styled(Button)(() => ({
    fontSize: '1.5rem',
    borderRadius: '5px',
    boxShadow: "none",
    textTransform: 'uppercase',
    padding: '0.2rem 2rem',
    fontWeight: '600'
   }));

const FloatingMenuBar = styled('span')(() => ({
    position: 'absolute',
    top: '0.5rem',
    left: '1.5rem'
}));

type Props = { 
    children?: ReactNode
}

const OrganizationContainerComponent: FC<Props> = (props)  => {
    const { children } = props;
    const nine = 9;
    const getTemplateSidebar = JSON.parse(localStorage.getItem('template') as string);

    const [localStore, setLocalStore] = useState({
        sideBar: parseInt(getTemplateSidebar?.sideBar) ??  nine
    })

    const handleClose = (num: number) => {
        setLocalStore({
            sideBar: num
        }) 
        localStorage.setItem('template', JSON.stringify({
            sideBar: num
        }));
    }
    return (
        <Grid container spacing={1}>
            {
                localStore.sideBar === nine && (
                    <GridSidebar data-testid="sidebar-dashboard" data-cy="sidebar-dashboard" item  xs={12} md={3}>
                        <SidebarOrgComponent data-testid="sidebar-menu-side"  data-cy="sidebar-menu-side" handleClose={handleClose} />
                    </GridSidebar>
                )
            }
            <GridBody item xs={12} md={localStore.sideBar}>
                <BodyWrapper>
                    
                            {
                                localStore.sideBar !== nine && (
                                    <FloatingMenuBar>
                                        <SideBarCloseComponent data-testid="sidebar-menu-body" data-cy="sidebar-menu-body" handleClose={handleClose} size={nine} />
                                    </FloatingMenuBar>
                                )
                            }
                            {children}
                    
                </BodyWrapper>
                <FooterComponent />
            </GridBody>
        </Grid>
    )
}

export default OrganizationContainerComponent;