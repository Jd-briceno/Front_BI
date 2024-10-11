import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';

function DataScientist() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);

  const handleRetrain = () => {
    // Aquí iría la lógica para reentrenar el modelo
    alert('Modelo reentrenado con éxito.');
  };

  return (
    <Container>
      <Grid container spacing={2} alignItems="center">
        {/* Columna para el texto */}
        <Grid item xs={8}>
          <Typography variant="h5" gutterBottom>
            Científico de Datos: Reentrenar el modelo
          </Typography>
        </Grid>
        {/* Columna para la imagen */}
        <Grid item xs={4}>
          <img 
            src="/images/dataScientist.jpg" 
            alt="Científico de Datos" 
            style={{ width: '100%', height: 'auto' }} 
          />
        </Grid>
      </Grid>

      <TextField
        fullWidth
        label="Ingresa el texto para entrenar"
        variant="outlined"
        margin="normal"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button variant="contained" color="secondary" onClick={handleRetrain}>
        Reentrenar Modelo
      </Button>
    </Container>
  );
}

export default DataScientist;