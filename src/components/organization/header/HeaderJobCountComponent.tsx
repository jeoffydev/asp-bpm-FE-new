import  {  FC } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { themeColours } from '../../../utils/Helper';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import Badge from '@mui/material/Badge';


export const ActiveJobButton = styled(Button)(() => ({
   border: `1px solid ${themeColours.black}`,
    borderRadius: '5px',
    padding: '0.2rem 1rem',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    ':hover': {
        backgroundColor: 'transparent',
    },
    '@media only screen and (max-width: 600px)': {
        padding: '0.2rem 0.4rem',
        minWidth: '0'
    },

}));

const JobIcon  = styled(HomeRepairServiceIcon)(() => ({
    color: themeColours.yellow,
    width:'2rem',
    height: 'auto',
    '@media only screen and (max-width: 600px)': {
        width:'1.5rem',
    },
}));

const BadgeIcon  = styled(Badge)(() => ({
    'span':{
        backgroundColor: themeColours.blue,
    }
   
}));



type Props = { 
    count?: number;
    handleClick: ()=>void
}

const HeaderJobCountComponent: FC<Props> = (props)  => {
    const {  handleClick, count } = props;
    return (
        
                            <ActiveJobButton data-testid="test-header-activejob" type='button' variant="contained" onClick={handleClick}> 
                                <BadgeIcon badgeContent={count} >
                                    <JobIcon />  
                                </BadgeIcon>
                            </ActiveJobButton>
    )
}

export default HeaderJobCountComponent;