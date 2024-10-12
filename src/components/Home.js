import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Grid } from '@mui/material';

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <Typography variant="h4" gutterBottom>
            Bienvenido, seleccione su rol
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Button variant="contained" onClick={() => navigate('/analyst')}>
                Analista de Datos
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={() => navigate('/scientist')}>
                Científico de Datos
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <img 
            src="/images/imgHome.png" 
            alt="Seleccionar Rol" 
            style={{ width: '100%', height: 'auto' }} 
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;