import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col md={6} lg={3}>
            <p>Redes Sociais: {/* Adicione ícones ou links para redes sociais aqui */}</p>
          </Col>
          <Col md={6} lg={3}>
            <p>Telefone: (00) 12345-6789</p>
          </Col>
          <Col md={6} lg={3}>
            <p>Email: exemplo@email.com</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>@Todos os direitos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;