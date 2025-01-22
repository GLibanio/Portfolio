import React from 'react';

const Contact = () => (
  <div style={pageStyle}>
    <h1 style={headingStyle}>Entre em Contato</h1>
    <p style={textStyle}>
      Estou sempre aberto a oportunidades, colaborações ou simplesmente para trocar ideias. Entre em contato comigo
      através das plataformas abaixo:
    </p>
    <div style={contactListStyle}>
      <a 
        href="https://www.linkedin.com/in/guilherme-libanio-095421232/" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={linkStyle}
      >
        <img 
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
          alt="LinkedIn" 
          style={iconStyle} 
        />
        LinkedIn
      </a>
      <a href="mailto:guilhermelibanio1@gmail.com" style={linkStyle}>
        <img 
          src="https://cdn-icons-png.flaticon.com/512/732/732200.png" 
          alt="Email" 
          style={iconStyle} 
        />
        guilhermelibanio1@gmail.com
      </a>
      <a href="tel:+5515996784936" style={linkStyle}>
        <img 
          src="https://cdn-icons-png.flaticon.com/512/455/455705.png" 
          alt="Telefone" 
          style={iconStyle} 
        />
        +55 (15) 99678-4936
      </a>
      <a 
        href="https://github.com/GLibanio" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={linkStyle}
      >
        <img 
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
          alt="GitHub" 
          style={iconStyle} 
        />
        GitHub
      </a>
    </div>
  </div>
);

const pageStyle = {
  padding: '20px',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#222',
  minHeight: '100vh',
};

const headingStyle = {
  fontSize: '32px',
  marginBottom: '20px',
  color: "#fff",
};

const textStyle = {
  fontSize: '18px',
  lineHeight: '1.6',
  color: "#fff",
  marginBottom: '30px',
};

const contactListStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
};

const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  textDecoration: 'none',
  color: '#333',
  fontSize: '18px',
  padding: '10px 15px',
  borderRadius: '8px',
  backgroundColor: '#fff',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s, background-color 0.3s',
};

linkStyle[':hover'] = {
  transform: 'scale(1.05)',
  backgroundColor: '#ddd',
};

const iconStyle = {
  width: '30px',
  height: '30px',
};

export default Contact;
