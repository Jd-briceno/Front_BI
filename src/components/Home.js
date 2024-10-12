import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Grid, Paper } from '@mui/material';

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', marginBottom: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Bienvenido a la Aplicación de Clasificación ODS
        </Typography>
        <Typography variant="body1" paragraph>
          Esta aplicación está diseñada para clasificar textos según los Objetivos de Desarrollo Sostenible (ODS) de las Naciones Unidas. Utilizamos técnicas avanzadas de aprendizaje automático para analizar y categorizar textos, ayudando a identificar su relación con los ODS 3, 4 y 5.
        </Typography>
        <Typography variant="body1" paragraph>
          Nuestro objetivo es apoyar a organizaciones y analistas en la identificación rápida y precisa de temas relacionados con salud y bienestar (ODS 3), educación de calidad (ODS 4), e igualdad de género (ODS 5) en diversos textos y documentos.
        </Typography>
      </Paper>
      
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <Typography variant="h5" gutterBottom>
            Seleccione su rol
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