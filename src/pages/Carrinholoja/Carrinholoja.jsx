import React, { useEffect, useState } from 'react';
import './style.css';

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setProducts(cart);
  }, []);

  const removeProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
  };


  return (
    <main className='tudodecarrinho'>
      <h1>Carrinho de Compras</h1>
      <div className="container">
        <hr />
        <ul className="list-group mb-3">
          {products.map((product, index) => (
            <li className="list-group-item py-3 product-item" key={index}>
              <h4><a href="#" className="product-name text-danger">{product.name}</a></h4>
              <div className="product-info">
                
                <div className="product-image">
                  <img src={product.image} className="img-thumbnail" alt={product.name} />
                </div>
                <div className="product-details">
                  <div className="quantity-section">
                    <button type="button" className="btn btn-outline-dark btn-sm">
                      <i className="fa-solid fa-up-long"></i>
                    </button>
                    <input
                type="text"
                className="form-control text-center border-dark input-quantity"
                value={product.quantity}
                readOnly
              />
                    <button type="button" className="btn btn-outline-dark btn-sm">
                      <i className="fa-solid fa-down-long"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger border-dark btn-sm btn-remove delete"
                      onClick={() => removeProduct(index)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                  <div className="text-right">
                    <span className="text-dark">Valor Total: R${product.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
          <li className="list-group-item py-3">
            <div className="text-right">
              <h4 className="text-dark mb-3">Valor total: R${products.price}</h4>
              <a href="/loja" className="btn btn-dark btn-lg">Continuar Comprando</a>
              <button className="btn btn-success btn-lg">Fechar Compra</button>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default ShoppingCart;
