
import { ReactNode, FC } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const BodyHeightGrid = styled(Grid)({ 
    height: 'auto',
    minHeight: '100vh',
    padding: '1rem',
  });  

type IProps = {
    children: ReactNode,
}
const BodyContainerComponent: FC<IProps> = ({ children }) => {
    
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
                <BodyHeightGrid item xs={12}>
                    {children}
                </BodyHeightGrid>
            </Grid>
        </Box>
        </>
    )
}

export default BodyContainerComponent;