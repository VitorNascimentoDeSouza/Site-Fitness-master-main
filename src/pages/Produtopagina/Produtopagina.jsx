import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o arquivo CSS do Bootstrap
import './style.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';




const ImageCarousel = () => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const [reviews, setReviews] = useState([
    {
      name: 'Marcos',
      date: '20/12/2023',
      stars: 5,
      title: 'Top',
      description: 'Melhor pré-treino!!',
    },
    {
      name: 'Beatriz',
      date: '26/12/2023',
      stars: 4,
      title: 'Top',
      description: 'Melhor pré-treino!!',
    },
    // Adicione mais avaliações conforme necessário
  ]);

  const [selectedSortOption, setSelectedSortOption] = useState(''); // Estado para controlar a opção selecionada de ordenação

  // Função para ordenar as avaliações
  const sortReviews = (option) => {
    let sortedReviews = [...reviews];

    if (option === 'Mais recentes') {
      sortedReviews.sort((b, a) => new Date(b.date.split('/').reverse().join('/')) - new Date(a.date.split('/').reverse().join('/')));
    } else if (option === 'Positivas') {
      sortedReviews.sort((a, b) => b.stars - a.stars);
    } else if (option === 'Negativas') {
      sortedReviews.sort((a, b) => a.stars - b.stars);
    }

    setReviews(sortedReviews);
    setSelectedSortOption(option);
  };

  const addToCart = (quantity, price) => {
    const product = {
      name: 'Creatina',
      quantity: quantity,
      unitPrice: price, // Defina o preço unitário do produto
      price: price * quantity,
      image: 'https://www.evolvesuplementos.com.br/storage/images/cache/creatina-monohidratada-1-1687962029-892-ccc7994d.webp'
    };
  
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  
    window.location.href = '/carrinho';
  };
  

    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        draggable: true,
      };
    
    
      return (
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='carrossel'>
                <Slider className='slider' {...settings}>
                  {/* Slides do carrossel */}
                  <div>
              <img
              className="carousel-image"
                src="https://www.evolvesuplementos.com.br/storage/images/cache/creatina-monohidratada-1-1687962029-892-ccc7994d.webp"
                alt="First slide"
               
              />
            </div>
            <div>
              <img
              className="carousel-image"
                src="https://ichef.bbci.co.uk/news/640/cpsprodpb/3299/live/8cee7b40-727a-11ee-89a4-cff52752f75a.jpg"
                alt="Second slide"
               
              />
            </div>
            <div>
              <img
              className="carousel-image"
                src="https://blog.probiotica.com.br/wp-content/uploads/2022/11/PosTreino.jpg"
                alt="Third slide"
               
              />
            </div>
                  {/*...*/}
                </Slider>
              </div>
            </div>
        
            <div className='col-lg-6'>
              <div className='carrossel2'>
                {/* Conteúdo do produto */}
                <h1>Creatina</h1>
            <h2>R$ 99,99</h2>
            <i class="fa-regular fa-star estrelas"></i> <i class="fa-regular fa-star estrelas"></i> <i class="fa-regular fa-star estrelas"></i> <i class="fa-regular fa-star estrelas"></i> <i class="fa-regular fa-star "></i>
            <p>Café, muito café. Saboroso e com precisamente 100mg de cafeína. E você ainda irá sentir uma pitada de gelo. Isso mesmo, gelo. 

Um refresco para quando o clima está quente, em todos os sentidos. Esse é nosso gel de prova para quem gosta de ligar o turbo já que além da cafeína ainda vem incluso no pacote um mix de taurina e eletrólitos.

NÃO CONTÉM GLÚTEN. Ou qualquer outro conteúdo desnecessário para sua performance.

Mais informações abaixo</p>
<input type="number" class="form-control mb-2" id="quantidade" name="quantidade" min="1" placeholder='Quantidade' onChange={(e) => setQuantity(parseInt(e.target.value))}></input>
<button type="button"  class="btn btn-light form-control mb-2" onClick={() => addToCart(quantity, 99.99)}>Adicionar ao Carrinho</button>
<button type="button" class="btn btn-primary form-control mb-2">Comprar</button>
                {/*...*/}
              </div>
            </div>
          </div>
          <br></br>
<hr></hr>
          <div className='row'>
        <div className='col-lg-12'>
          {/* Div de Descrição do Produto */}
          <div className='descricao-produto'>
            {/* Título e informações sobre o produto */}
            <div className='descricao-item'>
              <h2>Informações sobre o produto</h2>
              {/* Div para explicação sobre o produto */}
              <div className='descricao-subitem'>
                <h4>Explicação sobre o produto</h4>
                <p>Café, muito café. Saboroso e com precisamente 100mg de cafeína. E você ainda irá sentir uma pitada de gelo. Isso mesmo, gelo.
                   Um refresco para quando o clima está quente, em todos os sentidos. Esse é nosso gel de prova para quem gosta de ligar o turbo já que além da cafeína
                    ainda vem incluso no pacote um mix de taurina e eletrólitos. NÃO CONTÉM GLÚTEN. Ou qualquer outro conteúdo desnecessário para sua performance.
                     Mais informações abaixo</p>
              </div>
              <hr />

              {/* Div para como funciona */}
              <div className='descricao-subitem'>
                <h4>Como funciona</h4>
                <p>Informações sobre como o produto funciona.</p>
              </div>
              <hr />

              {/* Div para como utilizar */}
              <div className='descricao-subitem'>
                <h4>Como utilizar</h4>
                <p>Instruções sobre como utilizar o produto.</p>
              </div>
              <hr />

              {/* Div para informação nutricional */}
              <div className='descricao-subitem'>
                <h4>Informação nutricional</h4>
                <p>Detalhes sobre a informação nutricional do produto.</p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>

          <br></br>
          <hr></hr>

        <div className='notaproduto'>

        <div className='notaproduto2'>
        <div><h1>4.7/5</h1></div>
        <div><h2>Nota Do Produto</h2></div>
        <div><i class="fa-regular fa-star estrelas"></i> <i class="fa-regular fa-star estrelas"></i> <i class="fa-regular fa-star estrelas"></i> <i class="fa-regular fa-star estrelas"></i> <i class="fa-regular fa-star"></i></div>
        <div>Baseado em 124 Avaliações</div>
        </div>

        <div className='porcentagem'>
        96% dos clientes recomendam este produto
        </div>

        </div>


<br></br>
<div className='inicioavaliacoes'>
        <h1>Avaliações Dos Clientes</h1>
        <Form.Select
          aria-label='Default select example'
          className='select'
          value={selectedSortOption}
          onChange={(e) => sortReviews(e.target.value)}
        >
          <option value=''>Ordenar Por</option>
          <option value='Mais recentes'>Mais recentes</option>
          <option value='Positivas'>Positivas</option>
          <option value='Negativas'>Negativas</option>
        </Form.Select>
      </div>

      <hr />

      <div className='avaliacoes'>
        {reviews.map((review, index) => (
          <div className='avaliacao' key={index}>
            <div>
              {review.name}
              <div>{review.date}</div>
            </div>
            <div>
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`fa-regular fa-star estrelas ${
                    i < review.stars ? 'filled' : ''
                  }`}
                ></i>
              ))}
              <h3>{review.title}</h3>
              <p>{review.description}</p>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
        
      );
      
    
};



export default ImageCarousel;