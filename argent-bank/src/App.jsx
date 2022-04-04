import React from 'react';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './components/styles/Global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
    </BrowserRouter>
  );
}

export default App;
