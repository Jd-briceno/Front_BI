import React, { useState } from 'react';
import { Button, Typography, Container, Grid } from '@mui/material';

function DataScientist() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleRetrain = () => {
    // Aquí iría la lógica para reentrenar el modelo con el archivo CSV
    if (file) {
      alert(`Modelo reentrenado con el archivo: ${file.name}`);
    } else {
      alert('Por favor, sube un archivo CSV antes de reentrenar el modelo.');
    }
  };

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile && uploadedFile.type === "text/csv") {
      setFile(uploadedFile);
    } else {
      alert('Por favor, sube un archivo CSV válido.');
      setFile(null);
    }
  };

  return (
    <Container>
      <Grid container spacing={2} alignItems="center">
        {/* Columna para el texto */}
        <Grid item xs={8}>
          <Typography variant="h5" gutterBottom>
            Científico de Datos
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

      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        style={{ marginTop: '20px', marginBottom: '20px' }}
      />

      <Button variant="contained" color="secondary" onClick={handleRetrain}>
        Reentrenar Modelo
      </Button>

      {file && (
        <Typography variant="subtitle1" marginTop={2}>
          Archivo seleccionado: {file.name}
        </Typography>
      )}
    </Container>
  );
}

export default DataScientist;