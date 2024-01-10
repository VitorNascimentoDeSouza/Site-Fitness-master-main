import './style.css';
import React, { useState } from 'react';
import { Navbar, Nav, Container, Row, Col, Card, InputGroup, FormControl, Button, Dropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'; // Adicionando a importação do componente Form
import ControlledCarousel from '../../components/Carrosselloja/carrosselloja';




// Dados fictícios de produtos
const productsData = [
  // ... (seus dados de produtos aqui)
  { id: 1, title: 'Pula Corda', category: 'Acessórios', price: 19.99, imageUrl: 'https://m.media-amazon.com/images/I/51BgwbQx7tL._AC_SX679_.jpg' },
  { id: 2, title: 'Camisa Dry', category: 'Roupas', price: 49.99, imageUrl: 'https://images-americanas.b2w.io/produtos/7214519625/imagens/kit-9-camisetas-masculina-dry-fit-basica-lisa-protecao-solar-uv-termica-camisa-blusa-treino-academia-tshirt-praia-bike/7214519705_2_large.jpg' },
  { id: 3, title: 'Garrafa 1L', category: 'Acessórios', price: 19.99, imageUrl: 'https://a-static.mlcdn.com.br/450x450/garrafas-squeeze-1-litro-top-util/shoplincommerce/gar1lvd/660b61bcee1f90e1710c68f9f3084bdf.jpeg' },
  { id: 4, title: 'Garrafa 2L', category: 'Acessórios', price: 19.99, imageUrl: 'https://cdn.awsli.com.br/600x1000/0/239/produto/229396616/1-pjld9badcq.jpg' },
  { id: 5, title: 'Smartwatch', category: 'Eletrônicos', price: 19.99, imageUrl: 'https://cdn.awsli.com.br/600x450/2299/2299421/produto/199680094/tmp21e2edb8574c44648312f82b2026b8ed-aa09aba5e7.jpg' },
  { id: 6, title: 'Creatina', category: 'Suplementos', price: 89.99, imageUrl: 'https://www.evolvesuplementos.com.br/storage/images/cache/creatina-monohidratada-1-1687962029-892-ccc7994d.webp' },
  { id: 7, title: 'Calça Legging', category: 'Roupas', price: 49.99, imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ_lDKbv1lWioQut7uLRefscNSasXNtxyXCryTrFbkaD3yHBLZ3wKQGfA7VTeCyLsxPl59s8vK4U6XLZzjdZDAH2zS2TtTDa7LXLX7bx9pVG3tVwIum6v17&usqp=CAE' },
  { id: 8, title: 'Luvas', category: 'Acessórios', price: 19.99, imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQidtjypM_j6OgSlCqqxloU0x5AQdCGpjJI91Xt69bNphHFTGZMQW-S1rQlQJC9oXokZHDAt4e02KN1qPRKYxC_KGv-RV-AM7Q_ksbv5cLCXOKqHfupuop6BQ&usqp=CAE' },
  { id: 9, title: 'Monitor de Frequência Cardiaca', category: 'Eletrônicos', price: 19.99, imageUrl: 'https://www.wkshop.com.br/loja/img_ampli/81plVr8CPWL._SL1500_[1].jpg' },
  { id: 10, title: 'Whey Protein', category: 'Suplementos', price: 109.99, imageUrl: 'https://m.media-amazon.com/images/I/61+-qLbs+ZL._AC_UF1000,1000_QL80_.jpg' },
  { id: 11, title: 'Top Fitness', category: 'Roupas', price: 49.99, imageUrl: 'https://m.media-amazon.com/images/I/61FPtvTAwuL._AC_SX569_.jpg' },
  { id: 12, title: 'Bermuda Masculina', category: 'Roupas', price: 49.99, imageUrl: 'https://imgcentauro-a.akamaihd.net/768x768/98392502A3.jpg' },
  { id: 13, title: 'Fone de ouvido sem fio', category: 'Eletrônicos', price: 19.99, imageUrl: 'https://cdn.awsli.com.br/600x1000/1711/1711962/produto/2301810780160a6aac6.jpg' },
  // ... adicione mais produtos com diferentes categorias
];



const YourShopComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedTitles, setSelectedTitles] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState([]);



  const categories = ['Todos', ...new Set(productsData.map((product) => product.category))];
  const titletodos = [...new Set(productsData.map((product) => product.title))];

  // Função para filtrar dinamicamente os títulos dos produtos pela categoria selecionada
  const getProductTitlesByCategory = (category) => {
    const titles = category && category !== 'Todos'
      ? productsData.filter((product) => product.category === category).map((product) => product.title)
      : productsData.map((product) => product.title);
    return titles;
  };

  // Obtém os títulos dos produtos com base na categoria selecionada
  const titlesByCategory = getProductTitlesByCategory(selectedCategory);


  const handleCategorySelect = (category) => {
    setSelectedCategory(category === 'Todos' ? null : category);
  };

  const handleTitleSelect = (title) => {
    if (title === 'Todos') {
      setSelectedTitles([]);
    } else {
      const isSelected = selectedTitles.includes(title);
      let newSelectedTitles = [...selectedTitles];

      if (isSelected) {
        newSelectedTitles = newSelectedTitles.filter((selectedTitle) => selectedTitle !== title);
      } else {
        newSelectedTitles.push(title);
      }

      setSelectedTitles(newSelectedTitles);
    }
  };


  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
  };

  const handleMinPriceChange = (event) => {
    const price = event.target.value;
    setMinPrice(price);
  };

  const handleMaxPriceChange = (event) => {
    const price = event.target.value;
    setMaxPrice(price);
  };

  const filterProducts = () => {
    let filteredProducts = selectedCategory
      ? productsData.filter((product) => product.category === selectedCategory)
      : productsData;

    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (minPrice !== '' && maxPrice !== '') {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= parseFloat(minPrice) && product.price <= parseFloat(maxPrice)
      );
    }

    if (selectedTitles.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedTitles.includes(product.title)
      );
    }

    return filteredProducts;
  };

  const [sortOrder, setSortOrder] = useState(null);

  const handleSortOrder = (order) => {
    setSortOrder(order);
  };

  const sortProducts = (products) => {
    let sortedProducts = [...products];
    if (sortOrder === 'lowest') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'highest') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'az') {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === 'za') {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    }
    return sortedProducts;
  };

  const filteredProducts = filterProducts();
  const sortedProducts = sortProducts(filteredProducts);
  const noResults = filteredProducts.length === 0 && searchTerm !== '';



  return (
    <div>
      <ControlledCarousel />
      <Navbar expand="lg" className="navbar-categorias">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {categories.map((category, index) => (
                <Nav.Link
                  key={index}
                  onClick={() => handleCategorySelect(category)}
                  active={selectedCategory === category || (category === 'Todos' && selectedCategory === null)}
                >
                  {category}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="searchfilt d-flex justify-content-center align-items-center mb-3 mt-3">
        <InputGroup className=" tamanhoinput">
          <FormControl
            placeholder="Buscar na loja..."
            aria-label="Buscar na loja"
            aria-describedby="buscar"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Button variant="primary" id="buscar">
            Buscar
          </Button>
        </InputGroup>
        <Dropdown className='filtro'>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            <i class="fa-solid fa-filter"></i> Filtro
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <div className="px-3 py-2">
              <h6>Produtos</h6>
              {titlesByCategory.map((title, index) => (
                <Form.Check
                  key={index}
                  label={title}
                  type="checkbox"
                  id={`title-${index}`}
                  checked={selectedTitles.includes(title)}
                  onChange={() => handleTitleSelect(title)}
                />
              ))}
            </div>
            <div className="px-3 py-2">
              <h6>Preço</h6>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Mínimo"
                  aria-label="Mínimo"
                  aria-describedby="preco-min"
                  type="number"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                />
                <InputGroup.Text>-</InputGroup.Text>
                <FormControl
                  placeholder="Máximo"
                  aria-label="Máximo"
                  aria-describedby="preco-max"
                  type="number"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                />
              </InputGroup>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </Container>



      <Container className="sort-dropdown">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="sort-dropdown">
            Ordenar por
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleSortOrder('lowest')}>Menor Preço</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortOrder('highest')}>Maior Preço</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortOrder('az')}>A a Z</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortOrder('za')}>Z a A</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>

      <br></br>



      <Container>
        <Row className="products">
          {filteredProducts.length === 0 ? (
            <Col className="text-center mt-4">
              <i className="fa-solid fa-face-frown" style={{ fontSize: '4em' }}></i>
              <h3>Produto não encontrado</h3>
            </Col>
          ) : (
            sortedProducts.map((product) => (
              <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Card className="mb-3 custom-card card-product">
                  <Card.Img variant="top" src={product.imageUrl} alt={product.title} />
                  <Card.Body className='conteudocard'>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>R$ {product.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>


    </div>
  );
};

export default YourShopComponent;
