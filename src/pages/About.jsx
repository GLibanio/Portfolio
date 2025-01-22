import React, { useState, useEffect } from 'react';
import GuilhermeImage from '../assets/Guilherme.png';

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Verifica a largura da tela e ajusta o estado
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Sobre Mim</h1>
      <div style={isMobile ? mobileContentStyle : desktopContentStyle}>
        <img 
          src={GuilhermeImage} 
          alt="Guilherme Libanio" 
          style={isMobile ? mobileImageStyle : desktopImageStyle} 
        />
        <p style={textStyle}>
          Olá, meu nome é Guilherme e sou um desenvolvedor apaixonado por aprender e aprimorar minhas habilidades.
          <br /><br />
          Sou um profissional em crescimento na área de Tecnologia da Informação, atualmente cursando 
          <strong> Análise e Desenvolvimento de Sistemas pela FACENS</strong>. Minha jornada profissional inclui 
          experiências diversas, como o estágio voluntário na <strong>Liquid Galaxy</strong>, onde desenvolvi 
          um projeto utilizando Flutter para captura de fotos e manipulação de geolocalização. 
          <br /><br />
          Além disso, trabalhei na <strong>Digital Play</strong> como Suporte de TI, onde demonstrei habilidades 
          técnicas essenciais para resolver questões relacionadas ao WiFi. Com minha formação acadêmica sólida 
          e experiência prática, estou preparado para enfrentar desafios na indústria de TI. 
          <br /><br />
          Tenho habilidades em linguagens de programação como <strong>C#, HTML, CSS, JS, Java, SQL, PHP</strong> e 
          <strong> Python</strong>, além de realizações notáveis no desenvolvimento de jogos, como 
          <strong> "Thievery"</strong> e <strong>"Rogue Survivalist"</strong>.
        </p>
      </div>
    </div>
  );
};

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

const desktopContentStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '20px',
  maxWidth: '90%',
  margin: '0 auto',
};

const mobileContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '90%',
  margin: '0 auto',
};

const desktopImageStyle = {
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  marginBottom: '20px',
  border: '4px solid #222',
};

const mobileImageStyle = {
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  marginBottom: '20px',
  border: '4px solid #222',
};

const textStyle = {
  fontSize: '16px',
  lineHeight: '1.6',
  textAlign: 'justify',
  color: "#fff",
  padding: '0 10px',
  maxWidth: '600px',
};

export default About;