import React from 'react';
import { FaCode, FaMobileAlt, FaPalette, FaPlug, FaServer, FaTools } from 'react-icons/fa'; 
import GuilhermeImage from '../assets/Guilherme.png'; 
import CV from '../assets/curriculo.pdf'; 

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Seção Hero */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Olá, meu nome é</h1>
          <h2 style={styles.heroName}>Guilherme Libanio</h2>
          <p style={styles.heroDescription}>
            Desenvolvedor apaixonado por criar projetos incríveis.
          </p>
          <button
            style={styles.heroButton}
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            SAIBA MAIS
          </button>
        </div>
      </section>

      {/* Seção Quem Sou Eu */}
      <section id="about" style={styles.about}>
        <h3 style={styles.sectionTitle}>Quem Sou Eu</h3>
        <div style={styles.aboutContent}>
          <img
            src={GuilhermeImage}
            alt="Guilherme Libanio"
            style={styles.profileImage}
          />
          <div>
            <p style={styles.aboutText}>
              Meu nome é Guilherme Libanio. Sou um desenvolvedor apaixonado por
              aprender e aprimorar minhas habilidades. Atualmente, estou cursando
              Análise e Desenvolvimento de Sistemas na FACENS e tenho experiência
              em diversas linguagens e tecnologias.
            </p>
            <h4 style={styles.skillsTitle}>Minhas Habilidades:</h4>
            <div style={styles.skillsGrid}>
              {[ // Mapeando habilidades
                { skill: 'Python', stars: '★★★★☆' },
                { skill: 'MySQL', stars: '★★★★☆' },
                { skill: 'PHP', stars: '★★★☆☆' },
                { skill: 'C#', stars: '★★★★☆' },
                { skill: 'Node.js', stars: '★★★★☆' },
                { skill: 'React.js', stars: '★★★★☆' },
                { skill: 'Angular', stars: '★★★☆☆' },
                { skill: 'Git', stars: '★★★★☆' },
                { skill: 'GitHub', stars: '★★★★☆' },
                { skill: 'Metodologia KANBAN', stars: '★★★★☆' },
              ].map((item, index) => (
                <div key={index} style={styles.skillItem}>
                  <strong>{item.skill}:</strong> {item.stars}
                </div>
              ))}
            </div>
            <a href={CV} download="Curriculo_Guilherme_Libanio.pdf" style={styles.downloadButton}>
              BAIXAR CURRÍCULO
            </a>
          </div>
        </div>
      </section>

      {/* Seção O Que Eu Posso Fazer */}
      <section style={styles.services}>
        <h3 style={styles.sectionTitle}>O Que Eu Posso Fazer</h3>
        <div style={styles.servicesGrid}>
          {[ // Serviços oferecidos
            {
              title: 'Desenvolvimento Web',
              icon: <FaCode size={40} color="#ff7f50" />,
              description: 'Criação de websites dinâmicos, interativos e otimizados.',
            },
            {
              title: 'Design Responsivo',
              icon: <FaPalette size={40} color="#ff7f50" />,
              description: 'Ajuste de interfaces para garantir uma ótima experiência em qualquer dispositivo.',
            },
            {
              title: 'Desenvolvimento Mobile',
              icon: <FaMobileAlt size={40} color="#ff7f50" />,
              description: 'Aplicativos funcionais e intuitivos para Android e iOS.',
            },
            {
              title: 'Integração com APIs',
              icon: <FaPlug size={40} color="#ff7f50" />,
              description: 'Integração com APIs externas para ampliar funcionalidades.',
            },
            {
              title: 'Soluções Backend',
              icon: <FaServer size={40} color="#ff7f50" />,
              description: 'Desenvolvimento de servidores robustos e escaláveis.',
            },
            {
              title: 'Manutenção de Sistemas',
              icon: <FaTools size={40} color="#ff7f50" />,
              description: 'Diagnóstico e otimização de sistemas já existentes.',
            },
          ].map((service, index) => (
            <div key={index} style={styles.serviceCard}>
              {service.icon}
              <h4 style={styles.serviceTitle}>{service.title}</h4>
              <p style={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#222',
    color: '#fff',
    lineHeight: '1.6',
  },
  hero: {
    textAlign: 'center',
    padding: '100px 20px',
    backgroundColor: '#333',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '24px',
    color: '#aaa',
  },
  heroName: {
    fontSize: '48px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  heroDescription: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  heroButton: {
    padding: '10px 20px',
    backgroundColor: '#ff7f50',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  about: {
    padding: '50px 20px',
    backgroundColor: '#444',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '32px',
    marginBottom: '30px',
  },
  aboutContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  profileImage: {
    width: '250px',
    borderRadius: '50%',
  },
  aboutText: {
    maxWidth: '600px',
    fontSize: '16px',
    lineHeight: '1.8',
  },
  skillsTitle: {
    fontSize: '20px',
    marginTop: '20px',
    marginBottom: '10px',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '10px',
  },
  skillItem: {
    backgroundColor: '#555',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
  },
  downloadButton: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#ff7f50',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: '20px',
  },
  services: {
    padding: '50px 20px',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  serviceCard: {
    padding: '20px',
    backgroundColor: '#555',
    borderRadius: '10px',
    textAlign: 'center',
  },
  serviceTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '10px',
  },
  serviceDescription: {
    fontSize: '14px',
  },
};

export default Home;
