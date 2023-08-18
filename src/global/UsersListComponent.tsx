

import * as React from 'react';
import { styled } from '@mui/material/styles';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { IOwnerTypeView } from '../services/owner/ownerSliceApi';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { colours } from '../utils/Helper';




const IconsBox = styled('span')({ 
    float: 'right',
    padding: '0 1rem',
    '& span': {
        display: 'inline-block',
        padding: '0 0.4rem'
    },
    '@media only screen and (max-width: 600px)': {
        float: 'left',
        padding: '0.4rem 0',
    },
});  

const ListItemSpan = styled('span')({ 
    '& li:hover': {
        backgroundColor: `${colours.lightestBlue}`,
        borderRadius: '0.2rem'
    }
});  

type IProps = {
    users: IOwnerTypeView[]
}
const UsersListComponent = (props: IProps) => {

    const { users } = props;

    const listMapping = () => users.map((u: IOwnerTypeView) => {

        return (
            <ListItemSpan key={u.id}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <AccountCircleIcon color='inherit'/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={u.fullName}
                        secondary={
                            <React.Fragment>
                                <>
                                {u.email} | Status: {u.active ? <CheckCircleIcon color="success"/> : <DoDisturbOnIcon />}
                                    { u.email !== 'jeoffy_hipolito@yahoo.com' && (
                                        <>
                                        <IconsBox> 
                                            <span> <EditIcon color="info"/> </span> <span> <DeleteIcon color="error"  /> </span>
                                        </IconsBox>     
                                        </> 
                                    )}
                                </>
                            </React.Fragment>
                        }
                        />
                </ListItem>
                <Divider variant="inset" component="li" />
            </ListItemSpan>
        )
    })

    return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {listMapping()}
    </List>
    )
}

export default UsersListComponent;