import React from "react";
import styled from "styled-components";

// Dados dos projetos (em português)
const projects = [
  {
    title: "Chatbot",
    details: "Um chatbot inteligente que interage com os usuários e fornece suporte automatizado.",
  },
  {
    title: "Agendamento Online",
    details: "Sistema de agendamento para diversos serviços, com interface intuitiva.",
  },
  {
    title: "Ajuda Universitária",
    details: "Plataforma focada em suporte emocional e orientação para alunos universitários.",
  },
  {
    title: "Rogue Survivalist",
    details: "Jogo de sobrevivência e estratégia lançado na Steam, criado com paixão.",
  },
];

// Estilos com styled-components
const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #222;
  color: #fff;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 250px;
  height: 200px;
  perspective: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 200px;
    height: 180px;
  }
`;

const CardInner = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  position: relative;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardFront = styled(CardFace)`
  background-color: #444;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CardBack = styled(CardFace)`
  background-color: #ff7f50;
  color: #fff;
  transform: rotateY(180deg);

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ProjectDetails = styled.p`
  font-size: 16px;
  padding: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;

const Projects = () => {
  return (
    <Container>
      <Title>Meus Projetos</Title>
      <Grid>
        {projects.map((project, index) => (
          <Card key={index}>
            <CardInner>
              <CardFront>
                <ProjectTitle>{project.title}</ProjectTitle>
              </CardFront>
              <CardBack>
                <ProjectDetails>{project.details}</ProjectDetails>
              </CardBack>
            </CardInner>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
