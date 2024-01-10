import { Routes, Route } from 'react-router-dom';
import YourShopComponent from './pages/Loja/Loja';
import ShoppingCart from './pages/Carrinholoja/Carrinholoja';
import ProductPage from './pages/Produtopagina/Produtopagina';
import Home from './pages/Paginaprincipal/Home';
import LoginPage from './pages/Login/login';
import Cadastro from './pages/Cadastro/cadastro';
import Contato from './pages/Contato/contato';
import Sobrenos from './pages/Sobrenos/sobrenos';
import Receitas from './pages/Receitas/receitas';
import Noticias from './pages/Noticias/noticias';
import Cronograma from './pages/Cronograma/Cronograma';



export default function MyRoutes() {
    return (
    <Routes>
    <Route path="/" element={<YourShopComponent />} />
    <Route path="/loja" element={<YourShopComponent />} />
    <Route path="/carrinho" element={<ShoppingCart />} />
    <Route path="/produtopagina" element={<ProductPage />} />
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/cadastro" element={<Cadastro />} />
    <Route path="/contato" element={<Contato />} />
    <Route path="/sobrenos" element={<Sobrenos />} />
    <Route path="/receitas" element={<Receitas />} />
    <Route path="/noticias" element={<Noticias />} />
    <Route path="/cronograma" element={<Cronograma />} />
    </Routes>
    );
    }