import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, CircularProgress } from '@mui/material';

function DataAnalyst() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ texts: [{ Textos_espanol: text }] }),
      });
      const data = await response.json();
      setResult({
        ods: `ODS ${data[0].prediction}`,
        probability: `${(data[0].probability * 100).toFixed(2)}%`,
      });
    } catch (error) {
      console.error('Error:', error);
      setResult({ error: 'Ocurrió un error al analizar el texto.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <Typography variant="h5" gutterBottom>
            Analista de Datos
          </Typography>
        </Grid>
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
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleAnalyze}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : 'Analizar'}
      </Button>

      {result && (
        <div>
          <Typography variant="h6" marginTop={2}>
            Resultado:
          </Typography>
          {result.error ? (
            <Typography color="error">{result.error}</Typography>
          ) : (
            <>
              <Typography>Clasificación: {result.ods}</Typography>
              <Typography>Probabilidad: {result.probability}</Typography>
            </>
          )}
        </div>
      )}
    </Container>
  );
}

export default DataAnalyst;