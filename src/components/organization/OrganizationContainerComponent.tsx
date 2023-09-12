import  { ReactNode, FC, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import SidebarOrgComponent from "./sidebar/SidebarOrgComponent";
import { SideBarCloseComponent } from './sidebar/SidebarCloseComponent';
import { themeColours } from '../../utils/Helper';


const GridSidebar = styled(Grid)(() => ({
    
}));

const GridBody = styled(Grid)(() => ({
    minHeight: '100vh',
    height: 'auto',
    backgroundColor: themeColours.white
}));

const BodyWrapper  = styled('div')(() => ({
    padding: '1.3rem'
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
                            <SideBarCloseComponent data-testid="sidebar-menu-body" data-cy="sidebar-menu-body" handleClose={handleClose} size={nine} />
                        )
                    }
                    {children}
                </BodyWrapper>
            </GridBody>
        </Grid>
    )
}

export default OrganizationContainerComponent;