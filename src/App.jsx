import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      {/* Adiciona os estilos globais */}
      <GlobalStyle />
      <Router basename="/Portfolio">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Página inicial */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
