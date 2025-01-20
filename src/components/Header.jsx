import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <HamburgerButton onClick={toggleMenu} className="hamburger">
        <Line />
        <Line />
        <Line />
      </HamburgerButton>

      <NavMenu isMenuOpen={isMenuOpen} className="nav-menu">
        <StyledLink to="/" onClick={() => setIsMenuOpen(false)}>
          Início
        </StyledLink>
        <StyledLink to="/about" onClick={() => setIsMenuOpen(false)}>
          Sobre
        </StyledLink>
        <StyledLink to="/projects" onClick={() => setIsMenuOpen(false)}>
          Projetos
        </StyledLink>
        <StyledLink to="/contact" onClick={() => setIsMenuOpen(false)}>
          Contato
        </StyledLink>
      </NavMenu>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  @media (min-width: 768px) {
    justify-content: center;
  }
`;

const HamburgerButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 1100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 30px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Line = styled.div`
  background-color: #fff;
  height: 3px;
  width: 100%;
  border-radius: 2px;
  transition: all 0.3s ease;
`;

const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  background-color: #333;
  padding: 20px;
  z-index: 1000;
  transform: ${({ isMenuOpen }) => (isMenuOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static;
    height: auto;
    width: auto;
    background-color: transparent;
    transform: none;
    justify-content: space-around;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  margin-bottom: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #ddd;
  }

  @media (min-width: 768px) {
    margin: 0 15px;
  }
`;

export default Header;