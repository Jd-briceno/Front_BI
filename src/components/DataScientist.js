import React, { useState } from 'react';
import { Button, Typography, Container, Grid, CircularProgress } from '@mui/material';
import * as XLSX from 'xlsx';

function DataScientist() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleRetrain = async () => {
    if (!file) {
      alert('Por favor, selecciona un archivo Excel antes de reentrenar.');
      return;
    }

    setLoading(true);
    try {
      const data = await readExcel(file);
      const response = await fetch('http://localhost:8000/retrain', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setResult(result);
    } catch (error) {
      console.error('Error:', error);
      setResult({ error: error.message || 'Ocurrió un error al reentrenar el modelo.' });
    } finally {
      setLoading(false);
    }
  };

  const readExcel = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        
        const texts = json.map(row => ({ Textos_espanol: row.Textos_espanol }));
        const labels = json.map(row => row.sdg);
        
        resolve({ texts, labels });
      };
      reader.onerror = (error) => reject(error);
      reader.readAsArrayBuffer(file);
    });
  };

  return (
    <Container>
      <Grid container spacing={2} alignItems="center">
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

      <Button 
        variant="contained" 
        color="secondary" 
        onClick={handleRetrain}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : 'Reentrenar Modelo'}
      </Button>

      {file && (
        <Typography variant="subtitle1" marginTop={2}>
          Archivo seleccionado: {file.name}
        </Typography>
      )}

      {result && (
        <div>
          <Typography variant="h6" marginTop={2}>
            Resultado del reentrenamiento:
          </Typography>
          {result.error ? (
            <Typography color="error">{result.error}</Typography>
          ) : (
            <>
              <Typography>Mensaje: {result.message}</Typography>
              <Typography>F1 Score: {result.metrics.f1_score.toFixed(4)}</Typography>
              <Typography>Precision: {result.metrics.precision.toFixed(4)}</Typography>
              <Typography>Recall: {result.metrics.recall.toFixed(4)}</Typography>
            </>
          )}
        </div>
      )}
    </Container>
  );
}

export default DataScientist;