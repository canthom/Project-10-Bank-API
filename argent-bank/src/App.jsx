import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './components/styles/Global';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
