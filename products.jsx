import React from 'react';
import './products.css';
import shoe1 from '../assets/p/shoe1.jpg';
import wim1 from '../assets/p/wim1.jpg';
import wim2 from '../assets/p/wim2.jpg';
import product2 from '../assets/product2.jpg';
import product6 from '../assets/product6.jpg';
import chain from '../assets/p/chain.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';
import product5 from '../assets/product5.jpg';
import product1 from '../assets/product1.jpg';
import product7 from '../assets/product7.jpg';
import product8 from '../assets/product8.jpg';
import a from '../assets/a.jpg';
import b from '../assets/b.jpg';
import c from '../assets/c.jpg';
import d from '../assets/d.jpg';
import f from '../assets/f.jpg';
import g from '../assets/g.jpg';

function Products() {
  const products = [
    { id: 1, name: 'Ladies Wear 1', img: wim1, price: '$25' },
    { id: 2, name: 'Ladies Wear 2', img: wim2, price: '$30' },
    { id: 3, name: 'Shoe', img: shoe1, price: '$45' },
    { id: 4, name: 'Product 2', img: product2, price: '$40' },
    { id: 5, name: 'Product 6', img: product6, price: '$50' },
    { id: 6, name: 'Neck Chain', img: chain, price: '$35' },
    { id: 7, name: 'Product 3', img: product3, price: '$55' },
    { id: 8, name: 'Product 4', img: product4, price: '$60' },
    { id: 9, name: 'Product 5', img: product5, price: '$70' },
    { id: 10, name: 'Product 1', img: product1, price: '$80' },
    { id: 11, name: 'Product 7', img: product7, price: '$90' },
    { id: 12, name: 'Product 8', img: product8, price: '$100' },
    { id: 13, name: 'Special Item', img: a, price: '$70' },
    { id: 14, name: 'Special Item', img: b, price: '$75' },
    { id: 15, name: 'Special Item', img: c, price: '$80' },
    { id: 16, name: 'Special Item', img: d, price: '$85' },
    { id: 18, name: 'Special Item', img: f, price: '$95' },
    {id : 19, name: 'Special Item', img: g, price: '$95' },
  ];

  return (
    <div className="products-page">
      <h2 className="title">OUR PRODUCTS</h2>

      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.img} alt={p.name} className="product-img" />
            <h3>{p.name}</h3>
            {/* <p className="price">{p.price}</p> */}
            <button className="buy-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
