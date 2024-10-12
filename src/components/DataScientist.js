import React, { useState } from 'react';
import { Button, Typography, Container, Grid, CircularProgress, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function DataScientist() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleRetrain = async (method) => {
    if (!file) {
      alert('Por favor, selecciona un archivo Excel antes de reentrenar.');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`http://localhost:8000/retrain_${method}`, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error:', error);
      setResult({ error: error.message || 'Ocurrió un error al reentrenar el modelo.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Grid container spacing={2} alignItems="center" style={{ marginBottom: '20px' }}>
        <Grid item xs={8}>
          <Typography variant="h5" gutterBottom>
            Científico de Datos
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <img 
            src="/images/dataScientist.jpg" 
            alt="Científico de Datos" 
            style={{ width: '100%', height: 'auto' }} 
          />
        </Grid>
      </Grid>

      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileChange}
        style={{ marginTop: '20px', marginBottom: '20px' }}
      />

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Método Principal de Reentrenamiento
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => handleRetrain('concatenate')}
          disabled={loading}
          fullWidth
        >
          Reentrenar (Concatenar)
        </Button>
      </Paper>

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Métodos Alternativos Implementados ADICIONALES
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button 
              variant="outlined" 
              color="secondary" 
              onClick={() => handleRetrain('replace')}
              disabled={loading}
              fullWidth
            >
              Reentrenar (Reemplazar)
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button 
              variant="outlined" 
              color="info" 
              onClick={() => handleRetrain('weighted')}
              disabled={loading}
              fullWidth
            >
              Reentrenar (Ponderado)
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Button 
        variant="outlined" 
        color="secondary" 
        onClick={() => navigate('/')}
        fullWidth
        style={{ marginBottom: '20px' }}
      >
        Regresar al Home
      </Button>

      {loading && <CircularProgress style={{ marginTop: '20px' }} />}

      {file && (
        <Typography variant="subtitle1" marginTop={2}>
          Archivo seleccionado: {file.name}
        </Typography>
      )}

      {result && (
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
          <Typography variant="h6" gutterBottom>
            Resultado del reentrenamiento:
          </Typography>
          {result.error ? (
            <Typography color="error">{result.error}</Typography>
          ) : (
            <Typography>{result.message}</Typography>
          )}
        </Paper>
      )}
    </Container>
  );
}

export default DataScientist;