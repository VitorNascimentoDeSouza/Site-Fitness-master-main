import React from 'react';
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import noticias from '../arraynoticias';
import { Link} from 'react-router-dom';



const noticiasCarrossel = noticias.slice(0, 3); // Apenas as 3 primeiras notícias para o carrossel
const noticiasCards = noticias.slice(); // As demais notícias para os cards

const Noticias = () => {
  return (
    <div className="container">
      {/* Seu código existente... */}
      <h1>Notícias Fitness</h1>
      
      <h2>Últimas notícias</h2>
      <Carousel>
        {noticiasCarrossel.map((noticia) => (
          <Carousel.Item key={noticia.id}>
            <img
              className="d-block w-100 carousel-image"
              src={noticia.imagem}
              alt={noticia.titulo}
            />
            <Carousel.Caption>
              <h3>{noticia.titulo}</h3>
              <p>{noticia.descricao}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      
      <h2>Todas as notícias</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {noticiasCards.map((noticia) => (
          <Col key={noticia.id} xs={12} sm={6} lg={4}>
            <Card className="h-100">
              <Card.Img variant="top" src={noticia.imagem} alt={noticia.titulo} className="card-img" />
              <Card.Body>
                <Card.Title>{noticia.titulo}</Card.Title>
                <Card.Text>{noticia.descricao}</Card.Text>
                <div className="text-center">
                <Link to={`/noticia/${noticia.id}`} className="btn btn-light">
            Ver Notícia
          </Link>
          </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>




  );
};

export default Noticias;
