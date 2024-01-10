import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import './style.css';

const LoginPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card className="bg-orange">
        <Card.Body>
          <Card.Title className="text-center mb-4">Login</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3 btn-login">
              Login
            </Button>
          </Form>
          <div className="text-center mt-3">
            <a href="#forgotPassword" className="forgot-password">Esqueceu a sua senha?</a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginPage;
