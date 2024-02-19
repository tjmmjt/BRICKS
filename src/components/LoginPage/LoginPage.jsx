import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { Container, Grid } from '@mui/material';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <Grid container  
        mt={5}
        spacing={0}
        direction="column"
        alignItems="center"
        sx={{ minHeight: '100vh' }}
      >
        <Grid item>
          <img src="public/BRICKS_no_background.png" alt="" height={400}/>
        </Grid>
        <Grid item xs={3}>
          <LoginForm />
        </Grid>
      </Grid>

    </div>
  );
}

export default LoginPage;
