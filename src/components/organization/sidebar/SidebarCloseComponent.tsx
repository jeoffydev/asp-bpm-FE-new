import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

interface IProps {
    handleClose: (num: number)=> void,
    size: number
}
export const SideBarCloseComponent = (props: IProps) => {
    const { handleClose, size } = props;
    return (
        <IconButton
                    edge="start"
                    sx={{ mr: 2 }}
                    color="inherit"
                    aria-label="menu"
                    onClick={()=>handleClose(size)}
                    >
                    <MenuIcon />
        </IconButton>
    )
}