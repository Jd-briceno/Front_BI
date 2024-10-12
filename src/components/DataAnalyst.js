import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, CircularProgress, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function DataAnalyst() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
        probability: data[0].probability,
      });
    } catch (error) {
      console.error('Error:', error);
      setResult({ error: 'Ocurrió un error al analizar el texto.' });
    } finally {
      setLoading(false);
    }
  };

  const getRecommendation = (probability) => {
    if (probability > 0.75) {
      return "Alta confianza en la predicción. Se recomienda considerar esta clasificación para la toma de decisiones.";
    } else if (probability > 0.5) {
      return "Confianza moderada. Se sugiere revisar el contexto adicional antes de tomar decisiones basadas en esta clasificación.";
    } else {
      return "Baja confianza en la predicción. Se recomienda un análisis más detallado o considerar reclasificar el texto.";
    }
  };

  return (
    <Container>
      <Grid container spacing={2} alignItems="center" style={{ marginBottom: '20px' }}>
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
        multiline
        rows={4}
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleAnalyze}
        disabled={loading}
        style={{ marginRight: '10px' }}
      >
        {loading ? <CircularProgress size={24} /> : 'Analizar'}
      </Button>
      <Button 
        variant="outlined" 
        color="secondary" 
        onClick={() => navigate('/')}
      >
        Regresar al Home
      </Button>

      {result && (
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
          <Typography variant="h6" gutterBottom>
            Resultado:
          </Typography>
          {result.error ? (
            <Typography color="error">{result.error}</Typography>
          ) : (
            <>
              <Typography>Clasificación: {result.ods}</Typography>
              <Typography>Probabilidad: {(result.probability * 100).toFixed(2)}%</Typography>
              <Typography variant="body2" style={{ marginTop: '10px' }}>
                Recomendación: {getRecommendation(result.probability)}
              </Typography>
            </>
          )}
        </Paper>
      )}
    </Container>
  );
}

export default DataAnalyst;