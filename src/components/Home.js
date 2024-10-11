import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Grid } from '@mui/material';

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Grid container spacing={2} alignItems="center">
        {/* Columna para el texto y los botones */}
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
        {/* Columna para la imagen */}
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