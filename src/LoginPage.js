import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Form style={{ width: '300px' }}>
        <h3 className="text-center mb-4">Giriş Yap</h3>
        <Form.Group className="mb-3">
          <Form.Label>Kullanıcı Adı</Form.Label>
          <div className="input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <Form.Control type="text" placeholder="Kullanıcı Adı" />
          </div>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Şifre</Form.Label>
          <div className="input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <Form.Control type="password" placeholder="Şifre" />
          </div>
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Giriş Yap
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
