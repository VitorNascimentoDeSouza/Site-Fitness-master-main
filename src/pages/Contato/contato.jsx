import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './style.css';

const Contato = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      
          <Card className="p-4 contato" style={{ backgroundColor: 'black', color: 'white' }}>
            <Card.Body>
              <Card.Title className="text-center mb-4">Entre em Contato</Card.Title>
              <Form>
                <Form.Group controlId="formNomeCompleto">
                  <Form.Label>Nome Completo</Form.Label>
                  <Form.Control type="text" placeholder="Digite seu nome completo" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Digite seu email" />
                </Form.Group>

                <Form.Group controlId="formTelefone">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control type="tel" placeholder="Digite seu telefone" />
                </Form.Group>

                <Form.Group controlId="formMensagem">
                  <Form.Label>Mensagem</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Digite sua mensagem" />
                </Form.Group>

                <Button variant="warning" type="submit" className="w-100 mt-3">
                  Enviar
                </Button>
              </Form>
            </Card.Body>
          </Card>
    </Container>
  );
};

export default Contato;
