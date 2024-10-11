import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';

function DataAnalyst() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    // Aquí llamaría a tu modelo para obtener la clasificación ODS y probabilidad
    setResult({
      ods: 'ODS 3: Salud y bienestar',
      probability: '85%',
      metricas: 'no olvidar'
    });
  };

  return (
    <Container>
      <Grid container spacing={2} alignItems="center">
        {/* Columna para el texto */}
        <Grid item xs={8}>
          <Typography variant="h5" gutterBottom>
            Analista de Datos:
          </Typography>
        </Grid>
        {/* Columna para la imagen */}
        <Grid item xs={4}>
          <img 
            src="/images/dataAnalysis.jpg" 
            alt="Analista de Datos" 
            style={{ width: '80%', height: 'auto' }} 
          />
        </Grid>
      </Grid>

      <TextField
        fullWidth
        label="Ingresa el texto a analizar"
        variant="outlined"
        margin="normal"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAnalyze}>
        Analizar
      </Button>

      {result && (
        <div>
          <Typography variant="h6" marginTop={2}>
            Resultado:
          </Typography>
          <Typography>Clasificación: {result.ods}</Typography>
          <Typography>Probabilidad: {result.probability}</Typography>
          <Typography>metricas: {result.metricas}</Typography>
        </div>
      )}
    </Container>
  );
}

export default DataAnalyst;