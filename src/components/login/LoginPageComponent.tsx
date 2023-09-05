import React from 'react'; 
import ThemePageComponent from '../ThemePageComponent';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import BoxComponent from '../common/BoxComponent';
import LoginTabsComponent from './LoginTabsComponent';

function LoginPageComponent() {
  return (
   <>
    <ThemePageComponent>
      <Container>
          <Grid container spacing={2}>
              <Grid item xs={1} md={3}>
                  &nbsp;
              </Grid>
              <Grid item xs={10} md={6}>
                 <BoxComponent>
                    <LoginTabsComponent />
                 </BoxComponent>
              </Grid>
              <Grid item xs={1} md={3}>
                  &nbsp;
              </Grid>
          </Grid>
      </Container> 
    </ThemePageComponent>
   </>
  );
}

export default LoginPageComponent;
