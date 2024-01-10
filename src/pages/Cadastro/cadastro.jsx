import React from 'react';
import { Form, Card, Col, Row } from 'react-bootstrap';
import './style.css';


const Cadastro = () => {
  return (


    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <Card className="bg-orange">
        <Card.Body>
          <h2 className="text-center mb-4">Cadastro</h2>
          <Form>
            <Form.Group controlId="formNomeCompleto">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control type="text" placeholder="Digite seu nome completo" />
            </Form.Group>

            <Form.Group controlId="formGenero">
              <Form.Label>Gênero</Form.Label>
              <div>
                <Form.Check inline type="radio" label="Masculino" name="genero" id="masculino" />
                <Form.Check inline type="radio" label="Feminino" name="genero" id="feminino" />
              </div>
            </Form.Group>

            <Row>
              <Col>
                <Form.Group controlId="formEstado">
                  <Form.Label>Estado</Form.Label>
                  <Form.Control as="select" defaultValue="">
                    <option>Selecione...</option>
                    {/* Opções de estado aqui */}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formCidade">
                  <Form.Label>Cidade</Form.Label>
                  <Form.Control as="select" defaultValue="">
                    <option>Selecione...</option>
                    {/* Opções de cidade aqui */}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="formDataNascimento">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Digite seu email" />
            </Form.Group>

            <Form.Group controlId="formSenha">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Digite sua senha" />
            </Form.Group>

            <Form.Group controlId="formConfirmarSenha">
              <Form.Label>Confirmar Senha</Form.Label>
              <Form.Control type="password" placeholder="Confirme sua senha" />
            </Form.Group>
            <br></br>
            <div className="text-center">
              <button className="btn btn-primary btn-block btn-cadastro " type="submit" link='Login'>
                Cadastrar
              </button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cadastro;
