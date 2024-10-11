import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import DataAnalyst from './components/DataAnalyst';
import DataScientist from './components/DataScientist';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyst" element={<DataAnalyst />} />
        <Route path="/scientist" element={<DataScientist />} />
      </Routes>
    </Router>
  );
}

export default App;